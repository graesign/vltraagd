const router = require('express-promise-router')();
const mongojs = require('mongojs');
// const db = mongojs('mean-tasks', ['tasks']);
const db = mongojs('mean-tasks', ['users']);

// // GET All tasks
// router.get('/tasks', (req, res, next) => {
//     db.tasks.find((err, tasks) => {
//         if (err) return next(err);
//         res.json(tasks);
//     });
// });

// // Single Task
// router.get('/tasks/:id', (req, res, next) => {
//     db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
//         if (err) return next(err);
//         res.json(task);
//     });
// });

// Add a Task
// router.post('/users', (req, res, next) => {

const request = require('request');


router.post('/addContact.php', function (req, res, next) {
    const somethingID = req.body.something;
    console.log('TEST send_something ')
    Something.findById(somethingID, function(err, something) {
        if (err) {
            res.status(404).json({
                title: 'Something not found',
                error: {message: 'Something went wrong'}
            });
        }
        console.log(something);
        if (something) {
            res.status(200).json({
                message: 'Something successfully sent',
                something: something
            });
        }
    })
} );
//
//
// export.send_something = function (req, res, next) {
//     const somethingID = req.body.something;
//     console.log('TEST send_something ')
//     Something.findById(somethingID, function(err, something) {
//         if (err) {
//             res.status(404).json({
//                 title: 'Something not found',
//                 error: {message: 'Something went wrong'}
//             });
//         }
//         console.log(something);
//         if (something) {
//             res.status(200).json({
//                 message: 'Something successfully sent',
//                 something: something
//             });
//         }
//     })
// };


// router.post('/addContact.php', (req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//     res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//
//     res.send('cors problem fixed:)');
//     console.log('Add user')
//
//     // const task = req.body;
//     //
//     // res.send(200)
//
//
//     // if(!task.title || !(task.isDone + '')) {
//     //     res.status(400).json({
//     //         'error': 'Bad Data'
//     //     });
//     // } else {
//     //     db.tasks.save(task, (err, task) => {
//     //         if (err) return next(err);
//     //         res.json(task);
//     //     });
//     // }
//
// });

// // Delete task
// router.delete('/tasks/:id', (req, res, next) => {
//     db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
//         if(err){ res.send(err); }
//         res.json(task);
//     });
// })

// // Update Task
// router.put('/tasks/:id', (req, res, next) => {
//     const task = req.body;
//     let updateTask = {};
//
//     if(task.isDone) {
//         updateTask.isDone = task.isDone;
//     }
//     if(task.title) {
//         updateTask.title = task.title;
//     }
//     if(!updateTask) {
//         res.status(400);
//         res.json({'error': 'bad request'});
//     } else {
//         db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, {}, (err, task) => {
//             if (err) return next(err);
//             res.json(task);
//         });
//     }
// });


module.exports = router;
import {Component, OnInit} from '@angular/core';

import {TaskService} from '../../services/task.service';
import {UserService} from "../../services/user.service";
import {Task} from '../../Task';
import{HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {User} from "../../User";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService, UserService]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  user: User[];
  title: string;

  constructor(private taskService: TaskService,
              private userService: UserService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }

  ngOnInit() {
  }

  addUser() {
    //
    const newUser: User = {
      api_group: '80776',
      api_secret: '9f19r3NmPOey1s9uqCkTYjuBwaxSFNJFSBEauin9WryOKx810jKOt4gP5DxBh760yB0SJdSwvga5D9Wtjx8CsehoIFQPDMG1ewKOAsaVybR2aEmk2lMkpUzYpfETSaKWwlAXEBJ3CrVDV8ONjqYzbnnrtRabRLYeWp2qQBjjS5NE3rhcI6BJkP0Dw1EeCtjoIbFpDPym',
      forename: 'Graeham',
      surname: 'Blank Tester',
      telephone: '1234567890',
      email: 'graeham@gravitee.nl',
      zipcode: '1234AA',
      street: 'damsreet 1',
      city: ' amsterdam'
    };
    console.log(newUser)

    this.userService.addUser(newUser)
    // this.userService.addUser()
      .subscribe(user => {
        console.log(user)
      })

  }

  addTask(event) {
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      })
  }

  deleteTask(id) {
    const response = confirm('are you sure to delete it?');
    if (response) {
      const tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe(data => {
          console.log(data.n);
          if (data.n == 1) {
            for (let i = 0; i < tasks.length; i++) {
              if (tasks[i]._id == id) {
                tasks.splice(i, 1);
              }
            }
          }
        })
    }
  }

  updateStatus(task: Task) {
    var newTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskService.updateTask(newTask)
      .subscribe(res => {
        task.isDone = !task.isDone;
      })
  }



}

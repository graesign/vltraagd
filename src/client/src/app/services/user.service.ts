import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

import {User} from '../User';
// import {Observable} from "rxjs/Observable";
import {Observable} from 'rxjs/Rx';


let params = new HttpParams();
params = params.set('api_group', '80776');
params = params.set('api_secret', '9f19r3NmPOey1s9uqCkTYjuBwaxSFNJFSBEauin9WryOKx810jKOt4gP5DxBh760yB0SJdSwvga5D9Wtjx8CsehoIFQPDMG1ewKOAsaVybR2aEmk2lMkpUzYpfETSaKWwlAXEBJ3CrVDV8ONjqYzbnnrtRabRLYeWp2qQBjjS5NE3rhcI6BJkP0Dw1EeCtjoIbFpDPym');

params = params.set('forename', 'grahe');
params = params.set('surname', 'test');
params = params.set('email', 'grae@asdf.nl');

params = params.set('telephone', '0123456789');
params = params.set('zipcode', '0123AA');
params = params.set('city', 'asdf');
// params = params.set('street', this.personalDetails.address);


console.log('param data?');


@Injectable()
export class UserService {
  domainTL: string = 'https://app.teamleader.eu/api';

  constructor(private http: HttpClient) {
  }

  /*
   * TeamLeader
  */


  addUser123(newUser: User) {
    console.log('Sending data to TL ???');
    // const dateformatter = moment(this.personalDetails.dateOfBirth).format('DD-MM-YYYY');


    let params = new HttpParams();
    params = params.set('api_group', '');
    params = params.set('api_secret', '');
    params = params.set('forename', 'testerA');
    params = params.set('surname', 'testerA');
    params = params.set('email', 'testerA@user.nl');

    // params = params.set('telephone', this.personalDetails.phoneNumber);
    // params = params.set('zipcode', this.personalDetails.postalCode);
    // params = params.set('city', this.personalDetails.city);
    // // params = params.set('street', this.personalDetails.address);
    //
    // params = params.set('gender', this.personalDetails.gender);
    // params = params.set('dob', dateformatter);

    console.log('param data?');
    console.log(params);


    return this.http.post(
      'https://app.teamleader.eu/api/' + 'addContact.php',
      params
    ).subscribe(data => {
        console.log('New contact added');


      }, (err: HttpErrorResponse) => {
        console.log('Error...');
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }


  addUser(newUser: User) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    //   return this.http.post(`${this.domainTL}/addContact.php`, params, {headers: headers})
    //     .map((response: Response) => response.json())
    //     .catch((error: Response) => {
    //       this.error.handleError(error.json());
    //       return Observable.throw(error.json());
    //     });
    //     // .map(res => res);
    // }
    // addUser(newUser: User) {
    return this.http.post(`${this.domainTL}/addContact.php`, params, { headers : headers ,observe: 'response'})

    // .map(res => res);
    // .map((response: Response) => response.json())
    //     .catch((err) => {
    //
    //       // Do messaging and error handling here
    //       return Observable.throw(err)
    //     });
    //
    //     // .catch((error: Response) => {
    //     //   this.error.handleError(error.json());
    //     //   return Observable.throw(error.json());
    //     // });
    // }

      // .subscribe(resp => {
      //   // Here, resp is of type HttpResponse<MyJsonData>.
      //   // You can inspect its headers:
      //   console.log(resp.headers.get('X-Custom-Header'));
      //   // And access the body directly, which is typed as MyJsonData as requested.
      //   // console.log(resp.body.someField);
      // });


  }
}

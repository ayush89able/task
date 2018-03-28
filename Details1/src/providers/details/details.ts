import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailsProvider {
  private details:[
    {fname:string},
    {lname:string},
    {ename:string},
    {pname:number}
  ][]=[];

  constructor(public http: HttpClient) {
    console.log('Hello DetailsProvider Provider');
  }

  addData(detail:[
    {fname:string},
    {lname:string},
    {ename:string},
    {pname:number}])
  {
this.details.push(detail);
  }
  getDetails()
  {
    return this.details.slice();
  }

}

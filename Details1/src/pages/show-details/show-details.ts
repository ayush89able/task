import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailsProvider} from "../../providers/details/details";



/**
 * Generated class for the ShowDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-details',
  templateUrl: 'show-details.html',
})
export class ShowDetailsPage {
  details:[
    {fname:string},
    {lname:string},
    {ename:string},
    {pname:number}
  ][]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private detailsProvider:DetailsProvider) {
  }

  ionViewWillEnter() {
    this.details= this.detailsProvider.getDetails();
  }

  /*  <ion-item *ngFor="let detail of details"> FIRST NAME = {{ detail.fname }}</ion-item>
    <ion-item *ngFor="let detail of details">LAST NAME = {{ detail.lname }}</ion-item>
    <ion-item *ngFor="let detail of details"> EMAIL= {{ detail.ename }}</ion-item>
    <ion-item *ngFor="let detail of details"> PHONENO = {{detail.pname}} </ion-item>
   */

}

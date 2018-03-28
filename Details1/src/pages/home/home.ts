import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';
import { ShowDetailsPage } from '../show-details/show-details';
import { DetailsProvider } from '../../providers/details/details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private detailsProvider: DetailsProvider,
    private alertController:AlertController) { }
 gotoShowDetailsPage(value:[{fname:string},{lname:string},{ename:string},{pname:number}])
 {
    this.detailsProvider.addData(value);
    this.navCtrl.push(ShowDetailsPage);
    let addTodoAlert= this.alertController.create({
      title:"ALERT",
      message:"DATA IS SUBMITED",
      buttons: [
        {
            text:"OK"
        }
      ]
    });
    addTodoAlert.present();
  
 }}
 
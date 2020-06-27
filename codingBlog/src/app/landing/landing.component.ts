import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public router: Router){

  }

  ngOnInit() {
 
  }

  openSlideMenu(){
  document.getElementById('menu').style.width = "250px";
  document.getElementById('content').style.marginLeft = "250px";

}
closeSlideMenu(){
  document.getElementById('menu').style.width = "0px";
  document.getElementById('content').style.marginLeft = "0px";

}

onLogin() {
console.log("that is where you redirect to the login page")
}
onSignUp() {
  console.log("this is where you continue on signup page")
}
}

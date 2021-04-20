import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  homePage: HomePage;
  constructor(private route:Router) { }

  LoginOTP(){
    this.route.navigate(['/home']);

  }
  ngOnInit() {
  }

}

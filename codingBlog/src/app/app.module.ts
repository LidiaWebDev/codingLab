import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RootComponent } from './root/root.component';

import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './service/auth-guard.service';
import { CommonService } from './service/common.service';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BackgroundImageDirective } from './background-image.directive';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    RegisterComponent,
    AddPostComponent,
    HomeComponent,
    ShowPostComponent,
    LandingComponent,
    BackgroundImageDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ModalModule.forRoot(),
  ],

  providers: [UserService, AuthGuardService, CommonService],
  bootstrap: [RootComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/Pages/register/register.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormInputComponent } from './components/Forms/form-input/form-input.component';
import { LoginComponent } from './components/Pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    RegisterComponent,
    AuthFormComponent,
    FormInputComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

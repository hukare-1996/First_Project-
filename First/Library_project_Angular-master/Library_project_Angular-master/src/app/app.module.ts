import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { MemberComponentComponent } from './member-component/member-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { DataService } from './data.service';
import { UpdateComponent } from './update/update.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponentComponent,
    MemberComponentComponent,
    SearchComponent,
    CreateComponent,
    UpdateComponent,
    HelpComponent,
    ContactUsComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

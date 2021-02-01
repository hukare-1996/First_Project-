
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateComponent } from './create/create.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberComponentComponent } from './member-component/member-component.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: '', component: HomeComponent },
{ path: 'admin', component: AdminComponentComponent },
{ path: 'member', component: MemberComponentComponent },
{ path: 'search', component: SearchComponent },
{ path: 'create', component: CreateComponent },
{ path: 'update', component: UpdateComponent },
{ path: 'help', component: HelpComponent },
{ path: 'contactUs', component: ContactUsComponent },
{ path: 'mem', component: MemberDetailsComponent },
];
// , { path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

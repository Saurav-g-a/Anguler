import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust path as needed
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GenericComponent } from './generic/generic.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: GenericComponent },
  { path: 'manage', component: ManageAccountComponent },
  { path: 'compare', component: CompareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure routing
  exports: [RouterModule] // Export RouterModule so it can be used elsewhere
})
export class AppRoutingModule { }

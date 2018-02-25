import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { WebNinjasComponent } from './components/web-ninjas/web-ninjas.component';
import { PythonNinjasComponent } from './components/python-ninjas/python-ninjas.component';
import { WebNinjaDetailsComponent } from './components/web-ninja-details/web-ninja-details.component';
import { AddWebNinjaComponent } from './components/add-web-ninja/add-web-ninja.component';

const routes: Routes = [
  {path: 'staff', component: DashboardComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client/add-client', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'webninjas', component: WebNinjasComponent},
  {path: 'webninjas/add-web-ninja', component: AddWebNinjaComponent},
  {path: 'webninja/:id', component: WebNinjaDetailsComponent},
  {path: 'pythonninjas', component: PythonNinjasComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

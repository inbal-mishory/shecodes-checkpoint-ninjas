import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SearchPipe } from './filter.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClientService } from './services/client.service';
import { WebNinjaService } from './services/web-ninja.service';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { WebNinjasComponent } from './components/web-ninjas/web-ninjas.component';
import { PythonNinjasComponent } from './components/python-ninjas/python-ninjas.component';
import { WebNinjaDetailsComponent } from './components/web-ninja-details/web-ninja-details.component';
import { AddWebNinjaComponent } from './components/add-web-ninja/add-web-ninja.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    HomeComponent,
    WebNinjasComponent,
    PythonNinjasComponent,
    WebNinjaDetailsComponent,
    AddWebNinjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ClientService, WebNinjaService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

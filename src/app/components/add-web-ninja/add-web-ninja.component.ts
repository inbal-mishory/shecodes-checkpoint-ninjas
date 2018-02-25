import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { WebNinjaService } from '../../services/web-ninja.service';
import { Router } from '@angular/router';
import { WebNinja } from '../../models/WebNinja';

@Component({
  selector: 'app-add-web-ninja',
  templateUrl: './add-web-ninja.component.html',
  styleUrls: ['./add-web-ninja.component.css']
})
export class AddWebNinjaComponent implements OnInit {
  webNinja: WebNinja = {
    firstName: '',
    lastName: '',
    email: '',
    joinDate: '',
    myPic: ''
  }

  @ViewChild('webNinjaForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private webNinjaService: WebNinjaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value: WebNinja, valid: boolean}){
    if(!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      })
    } else {
      // Add new client
      this.webNinjaService.newWebNinja(value);
      // Show message
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/'])
    }
  }
}

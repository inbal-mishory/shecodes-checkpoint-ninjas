import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    joinDate: '',
    webImage: ''
  }

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value: Client, valid: boolean}){
    if(!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      })
    } else {
      // Add new client
      this.clientService.newClient(value);
      // Show message
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/'])
    }
  }

}

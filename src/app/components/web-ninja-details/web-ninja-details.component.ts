import { Component, OnInit } from '@angular/core';
import { WebNinjaService } from '../../services/web-ninja.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { WebNinja } from '../../models/WebNinja';


@Component({
  selector: 'app-web-ninja-details',
  templateUrl: './web-ninja-details.component.html',
  styleUrls: ['./web-ninja-details.component.css']
})
export class WebNinjaDetailsComponent implements OnInit {
  id: string;
  webNinja: WebNinja;

  constructor(
    private webNinjaService: WebNinjaService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get webNinja
    this.webNinjaService.getWebNinja(this.id).subscribe(webNinja => {
      this.webNinja = webNinja;
    });
  }

}

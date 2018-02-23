import { Component, OnInit } from '@angular/core';
import { WebNinjaService } from '../../services/web-ninja.service';

import { WebNinja } from '../../models/WebNinja';

@Component({
  selector: 'app-web-ninjas',
  templateUrl: './web-ninjas.component.html',
  styleUrls: ['./web-ninjas.component.css']
})
export class WebNinjasComponent implements OnInit {
  webNinjas: WebNinja[];

  constructor(private webNinjaService: WebNinjaService) { }

  ngOnInit() {
    this.webNinjaService.getNinjas().subscribe(webNinjas => {
      this.webNinjas = webNinjas;
    });
  }

}

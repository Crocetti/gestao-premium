import { Component, OnInit } from '@angular/core';
import { faCoffee, faAddressCard, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'gpremium-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {
    phone = faPhone;
    address = faAddressCard;
    mail = faMailBulk;
    whatsapp = faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {AuthenticationService, SiteInfo} from "../../services/authentication-service.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  siteInfo: SiteInfo = {
    title: '',
    description: '',
    tipTitle: '',
    tipDescription: '',
    headerImage: '',
    instagramLink: '',
    whatsappLink: '',
    facebookLink: '',
    telNumber: ''
  };

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {

  }

}

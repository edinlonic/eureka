import { Component } from '@angular/core';
import { Globals } from '../app/globals';
import { RouterModule, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eureka';
  router: Router;
  home = '';
  whatIs = '';
  whoAreWe = '';
  contact = "";
  facebookLink = "";
  headerTitle = "";
  services = "";

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".bio-link, .contact-redirect").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
      });
    });
  }
  constructor(private globals: Globals, private _router: Router) {
    this.home = 'Početna';
    this.whatIs = 'Šta je TA?';
    this.whoAreWe = 'Ko smo mi?';
    this.contact = "Kontakt";
    this.facebookLink = "Posjeti nas na fejsu";
    this.services = "Usluge savjetovališta"
    this.headerTitle = "Savjetovanje i psihoterapija ''EUREKA''";
    this.router = _router;
  }

  switchToBalkan() {
    this.globals.setLanguage('balkan');
    this.home = 'Početna';
    this.whatIs = 'Šta je TA?';
    this.whoAreWe = 'Ko smo mi?';
    this.contact = "Kontakt";
    this.services = "Usluge savjetovališta"
    this.facebookLink = "Posjeti nas na fejsu";
    this.headerTitle = "Savjetovanje i psihoterapija ''EUREKA''";
    this.router.navigateByUrl("");
  }
  switchToEnglish() {
    this.globals.setLanguage('english');
    this.home = 'Home';
    this.whatIs = 'What is TA?';
    this.whoAreWe = 'Who are we?';
    this.contact = "Contact";
    this.services = "Usluge savjetovališta"
    this.facebookLink = "Visit us on facebook";
    this.headerTitle = "Counseling and psychotherapy ''EUREKA''";
    this.router.navigateByUrl("");
  }
}

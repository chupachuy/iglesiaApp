import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryPage implements OnInit {

  pageData: any;

  urlHistory = "https://iglesiaeliasista.org.mx/wp-json/wp/v2/pages/";
  

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {

    // this.httpClient.get<any>(`${this.urlHistory}621`) AUDIOS
    this.httpClient.get<any>(`${this.urlHistory}46`).subscribe(data => {
      // Aquí puedes manejar los datos de la página 46 de WordPress, si es necesario
      this.pageData = data;
      console.log(this.pageData);
    });
  }

  openPage(id: any){
    this.router.navigate([this.urlHistory, id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  usuario = [];

  constructor(private _http: HttpClient) {

  }

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((datos: any[]) => this.usuario = datos);
  }
/*
  Cuando se pueden hacer modificaciones desde el Hijo, no hace falta la Funcion desde el Padre
  borrarUser(id: number) {
    this.usuario = this.usuario.filter(usuario => usuario.id != id);
  }
*/
}

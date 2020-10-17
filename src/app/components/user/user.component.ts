import { Component, EventEmitter, Host, Input, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

  @Input('data') user: any;
  //Para trabajar con Output
  //@Output() borrar = new EventEmitter<number>();

  constructor(
    @Host() private _app: AppComponent
  ) { }

  borrarUser(id: number){
    //Para trabajar con Output
    //this.borrar.emit(id);
    this._app.usuario = this._app.usuario.filter(usuario => usuario.id != id);
  }
}

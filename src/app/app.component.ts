import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number

  constructor( private store: Store<AppState> ) {

      // this.store.subscribe( state => {
      //   console.log(state)
      //   this.contador = state.contador
      // })

      this.store.select('contador')
          .subscribe( contador => this.contador = contador)
  }

  aumentar() {

      this.store.dispatch( actions.aumentar() )
  }

  disminuir() {
    this.store.dispatch( actions.disminuir() )
  }

}

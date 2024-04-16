import { Component} from '@angular/core';
import { ComponenteVerMais } from './ver-mais.component';
import { NovoTopicoComponent } from './novo-topico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  mostrarNovoTopico: boolean = false;

  verMaisComponent = new ComponenteVerMais();

  toggleFormulario(){
    this.mostrarNovoTopico = !this.mostrarNovoTopico;
  }
  
}

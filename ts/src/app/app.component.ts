import { Component} from '@angular/core';
import { ComponenteVerMais } from '../app/ver-mais/ver-mais.component';
import { CriarTopicoComponent } from './criar-topico/criar-topico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  verMaisComponent: ComponenteVerMais = new ComponenteVerMais();
  
  mostrarNovoTopico: boolean = false;

  toggleFormulario() {
    this.mostrarNovoTopico = !this.mostrarNovoTopico;

    if (this.mostrarNovoTopico) {
      const elemento = document.querySelector('.remover-conteudo');
      if (elemento) {
        elemento.remove();
      }
    }
  } 

  

  
}

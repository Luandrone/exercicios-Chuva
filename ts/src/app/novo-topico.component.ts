import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-novo-topico',
  template: `
    <div *ngIf="mostrarNovoTopico">
      <h4>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</h4>
      <form>
        <div>
          <label for="assunto">Assunto</label>
          <input type="text" id="assunto" placeholder="Defina um tópico sucinto para notificar os autores...">
        </div>
        <div>
          <label for="conteudo">Conteúdo</label>
          <textarea id="conteudo" placeholder="Escreva sua dúvida ou sugestão aqui..."></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class NovoTopicoComponent {
  @Output() formularioToggled = new EventEmitter<boolean>();
  mostrarNovoTopico: boolean = false;

  toggleFormulario() {
    console.log('Funcionou')
    console.log('Valor anterior de mostrarNovoTopico:', this.mostrarNovoTopico);
    this.mostrarNovoTopico = !this.mostrarNovoTopico;
    console.log('Novo valor de mostrarNovoTopico:', this.mostrarNovoTopico);
    this.formularioToggled.emit(this.mostrarNovoTopico);
  }
}
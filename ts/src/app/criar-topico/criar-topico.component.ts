import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-criar-topico',
  templateUrl: './criar-topico.component.html',
  styleUrls: ['./criar-topico.component.scss']
})
export class CriarTopicoComponent implements OnInit {
  @Input() mostrarNovoTopico: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  conteudoRemovido: boolean = true;


  toggleFormulario() {
    console.log('toggleFormulario() chamado');
    this.mostrarNovoTopico = !this.mostrarNovoTopico;

  if (this.mostrarNovoTopico) {
    const elemento = document.querySelector('.remover-conteudo');
    if (elemento) {
      elemento.remove();
      this.conteudoRemovido = false;
    }
  }
} 
  enviarMensagem(event: Event) {
    const novoConteudo = document.querySelector('.remover-conteudo-enviar');
    if (novoConteudo) {
      novoConteudo.innerHTML = 
      `
        <div id="novo-conteudo">
            <h2>Seu tópico foi enviado com sucesso! :D</h2>
            <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
            <div id="novo-conteudo-descubra">
              <a href="link">Descubra outros trabalhos!</a>
              <div>
                <span class="barra-lateral"></span>
                <button id="botao-novo-topico" type="button">criar novo tópico</button>
                <span class="barra-lateral"></span>
              </div>
            </div>
        </div>
        <div class="novo-topico">
              <h3>Assunto da pergunta aparece aqui</h3>
              <p class="novo-topico-nome">Carlos Henrique Santos</p>
              <p class="comments-container">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>    
        </div>
        <div class="feedback">
            <img src="../assets/checked.png" alt="icone de checked">
            <h2>Aguardando feedback dos autores</h2>
            <a href="#">Editar tópico</a>
        
        </div>
      `;
    }

    event.preventDefault();
}
}


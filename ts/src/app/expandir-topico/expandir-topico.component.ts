import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-expandir-topico',
  templateUrl: './expandir-topico.component.html',
  styleUrls: ['./expandir-topico.component.scss']
})
export class ExpandirTopicoComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() expandido: boolean = false;

}

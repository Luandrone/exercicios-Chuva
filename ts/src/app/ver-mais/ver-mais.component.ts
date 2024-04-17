import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-mais',
  templateUrl: './ver-mais.component.html',
  styleUrls: ['./ver-mais.component.scss']
})
export class VerMaisComponent implements OnInit {

  verMaisComponent: ComponenteVerMais = new ComponenteVerMais();

  constructor() { }

  ngOnInit(): void {
    this.verMaisComponent = new ComponenteVerMais();
  }

}

export class ComponenteVerMais{
  isExpanded: boolean = false;
  longText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum arcu non ligula ultricies consequat. Nam tristique, turpis ac posuere molestie, eros ligula consequat magna, eu vestibulum lacus ex a dolor. Integer consequat luctus eros, nec convallis libero. Ut vel sollicitudin nunc. Mauris nec justo nec velit vestibulum tempor. Nulla facilisi. Donec maximus, nisi id viverra facilisis, dui est dignissim quam, sed accumsan leo metus nec est. Sed fringilla tempor dolor, vel fringilla lacus cursus sit amet. Quisque eu magna vitae neque malesuada facilisis a id metus. Integer ultricies hendrerit nisi, at posuere velit mollis sed. Integer fermentum lorem ut lorem tincidunt, ac egestas magna volutpat. Vivamus ultrices, nulla ut pellentesque hendrerit, arcu mi cursus elit, vel tristique mi lorem vitae odio. Suspendisse fringilla orci nec sem elementum, nec tempus ex pulvinar. Phasellus vestibulum tincidunt massa, in fermentum erat fermentum ut. Curabitur eu dolor ut quam ullamcorper elementum.";
  
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}


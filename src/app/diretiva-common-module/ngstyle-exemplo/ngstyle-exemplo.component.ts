import { Component } from '@angular/core';

@Component({
  selector: 'ngstyle-exemplo',
  templateUrl: 'ngstyle-exemplo.component.html',
  styleUrls: [ 'ngstyle-exemplo.component.css' ]
})
export class NgStyleExemploComponent {

  cor: string = 'brown';

  borderStyle = '1px solid black';

  alertStyles = {
    'color': 'yellow',
    'font-weight': 'bold',
    'borderBottom': this.borderStyle
  };


}

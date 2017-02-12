import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-component',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  dataCriacao: Date = new Date(1988, 3, 15);
  mensagem: string = 'Aguarde o curso de IONIC, em breve, fique ligado no YouTube '
  youtube: string = 'https://goo.gl/h50OpD';


  constructor() { }

  ngOnInit() {
  }

}

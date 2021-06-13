import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-control-erro',
  templateUrl: './app-control-erro.component.html',
  styleUrls: ['./app-control-erro.component.css']
})
export class AppControlErroComponent implements OnInit {

  @Input() mostrarErro: any;
  @Input() mostrarErroEmail: any;

  constructor() { }

  ngOnInit(): void {
  }

}

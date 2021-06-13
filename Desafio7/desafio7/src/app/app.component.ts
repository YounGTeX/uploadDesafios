import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio7';

  public toggle: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
   if(event.target.innerWidth > 600){
      this.toggle = false;
   }
  }

}




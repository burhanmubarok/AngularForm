import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  message = '';

  onClickMe() {
    if (this.message == '') {
      this.message = 'You are a good coder';
    }
    else{
      this.message = 'sure, you are a good coder';
    }
  }

  values = '';
  onKey(event: any){
    this.values += event.target.value + ' | '; 
  }

  titleValue = '';
  onKeyUp(val: string){
    this.titleValue = val;
  }

  heroes = ['Saras 008', 'Panji Manusia Milenium', 'Pitung', 'Kian santang', 'Maja Pahit'];

  addHero(newHero: string){
    if(newHero){
      this.heroes.push(newHero);
    }
  }
}

import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  img = 'https://www.phonedo32.ru/wp-content/uploads/2017/04/Google_-G-_Logo.svg_.png'

  inputValue = ''

  title = ''

  constructor() {
    setTimeout( () => {
      this.img = 'https://yt3.ggpht.com/a/AATXAJxbA17CO-Rxgi4a5DzJ1VatgTDlcEVn1XVmYhJJ=s900-c-k-c0xffffffff-no-rj-mo'
    }, 5000)
  }

  onInput(event?: any) {
    console.log('Event', event)
    this.inputvalue = event.target.value
  }
}


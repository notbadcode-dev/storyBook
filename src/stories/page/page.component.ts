import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'storybook-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export default class PageComponent {
  user: User | null = null;

  doLogout() {
    this.user = null;
  }

  doLogin() {
    this.user = { name: 'Jane Doe' };
  }

  doCreateAccount() {
    this.user = { name: 'Jane Doe' };
  }
}

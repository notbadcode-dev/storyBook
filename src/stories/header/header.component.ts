import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SizeType } from 'src/core/enums/size.enum';
import { VariantType } from 'src/core/enums/variant.enum';
import { User } from '../User';

@Component({
  selector: 'storybook-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();

  variantTypes = VariantType;
  sizeTypes = SizeType;
}

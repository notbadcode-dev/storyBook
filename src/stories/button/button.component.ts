import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SizeType, SizeTypes } from 'src/core/enums/size.enum';
import { VariantType, VariantTypes } from 'src/core/enums/variant.enum';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  variant: VariantTypes = VariantType.primary;

  /**
   * What color to use
   */
  @Input()
  color?: string;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * What background color to use
   */
  @Input()
  borderRadius?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: SizeType = SizeType.medium;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  sizeTypes = SizeType;

  public get classes(): string[] {
    const mode =
      this.variant === VariantType.primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';

    return [
      'storybook-button',
      `storybook-button--${this.size.toString()}`,
      mode,
    ];
  }
}

import { Component, Input } from '@angular/core';

type TVariant = 'blue' | 'white';
type TType = 'button' | 'submit';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  variant: TVariant = 'white';

  @Input()
  type: TType = 'button';
}

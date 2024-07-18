import { Component, Input } from '@angular/core';

type TVariant = 'blue' | 'white';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  variant: TVariant = 'white';
}

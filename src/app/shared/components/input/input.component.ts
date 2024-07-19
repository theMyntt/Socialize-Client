import { Component, Input, signal } from '@angular/core';
import { TokenUtil } from '../../utils/token.util';

type TInput = 'text' | 'password';
type TVariant = 'primary' | 'secondary';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  id = signal('');

  @Input()
  label: string = '';

  @Input()
  type: TInput = 'text';

  @Input()
  variant: TVariant = 'secondary';

  @Input()
  placeholder: string = '';

  constructor(private readonly token: TokenUtil) {
    this.id.set(token.generate());
  }
}

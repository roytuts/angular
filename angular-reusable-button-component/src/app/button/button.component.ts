import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() label: string = 'Button';
  @Input() buttonType: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';

  @Output() onClick = new EventEmitter<MouseEvent>();

  onClickButton(event: MouseEvent): void {
    this.onClick.emit(event);
  }

}

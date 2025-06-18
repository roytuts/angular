import { Component, Input } from '@angular/core';
//import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

	@Input() childMessage: string = '';
	
	/*@Output() newItemEvent = new EventEmitter<string>();
	
	addNewItem(value: string) {
		this.newItemEvent.emit(value);
	}*/

}

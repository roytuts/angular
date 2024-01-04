import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {

	@Input() user: User = { name: '', email: '', pwd:'' };
	
	constructor(private userService: UserService, private location: Location) { }

	ngOnInit() {
	}
	
	save(): void {
		this.userService.addUser(this.user).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}

}

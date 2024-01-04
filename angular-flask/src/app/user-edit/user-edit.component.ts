import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
	
	@Input() user: User = { id: 0, name: '', email: '', pwd:'' };

	constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) { }

	ngOnInit() {
		this.getUser();
	}
	
	getUser(): void {
		const id = + Number(this.route.snapshot.paramMap.get('id'));
		this.userService.getUser(id).subscribe(user => this.user = user);
	}
	
	save(): void {		
		this.userService.updateUser(this.user).subscribe(success=> {this.goBack();});
	}

	goBack(): void {
		this.location.back();
	}

}

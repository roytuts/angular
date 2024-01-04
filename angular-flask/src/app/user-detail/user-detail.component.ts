import { Component, OnInit } from '@angular/core';

import { Location, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
	
	user?: User;

	constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) { }
	
	ngOnInit() {
		this.getUser();
	}
	
	getUser(): void {
		const id = + Number(this.route.snapshot.paramMap.get('id'));
		this.userService.getUser(id).subscribe(user => this.user = user);
	}

	goBack(): void {
		this.location.back();
	}

}

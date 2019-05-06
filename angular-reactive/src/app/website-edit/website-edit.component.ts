import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Website } from '../website';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

	@Input() website: Website;

	constructor(private route: ActivatedRoute, private websiteService: WebsiteService, private location: Location) { }

	ngOnInit() {
		this.getWebsite();
	}
	
	getWebsite(): void {
		const id = + this.route.snapshot.paramMap.get('id');
		this.websiteService.getWebsite(id).subscribe(website => this.website = website);
	}
	
	save(): void {		
		this.websiteService.updateWebsite(this.website).subscribe(success=> {this.goBack();});
	}

	goBack(): void {
		this.location.back();
	}

}

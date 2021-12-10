import { Component, OnInit } from '@angular/core';
 
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Website } from '../website.model';
import { WebsiteService } from '../website.service';
 
@Component({
  selector: 'app-website-detail',
  templateUrl: './website-detail.component.html',
  styleUrls: ['./website-detail.component.css']
})
export class WebsiteDetailComponent implements OnInit {
 
  website: Website = {id: '', url: '', title: ''};
 
  constructor(private route: ActivatedRoute, private websiteService: WebsiteService, private location: Location) { }
 
  ngOnInit() {
	 this.getWebsite();
  }
 
  getWebsite(): void {
	 const id = this.route.snapshot.paramMap.get('id') || '';
	 this.websiteService.getWebsite(id).subscribe(website => {
				   this.website = website;
	 });
  }
 
  goBack(): void {
	 this.location.back();
  }
 
}

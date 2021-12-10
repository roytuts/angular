import { Component, OnInit, Input } from '@angular/core';
 
import { Location } from '@angular/common';
import { Website } from '../website.model';
import { WebsiteService } from '../website.service';
 
@Component({
  selector: 'app-website-add',
  templateUrl: './website-add.component.html',
  styleUrls: ['./website-add.component.css']
})
export class WebsiteAddComponent implements OnInit {
 
  @Input() website: Website = { url: '', title: '' };
 
  constructor(private websiteService: WebsiteService, private location: Location) { }
 
  ngOnInit() {
  }
 
  save(): void {
	 this.websiteService.addWebsite(this.website).subscribe(() => this.goBack());
  }
 
  goBack(): void {
	 this.location.back();
  }
 
}

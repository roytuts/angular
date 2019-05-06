import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Website } from '../website';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

	websites: Website[] = [];

	constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { }

	ngOnInit() {
		this.getWebsites();
	}

	getWebsites(): void {
		this.websiteService.getWebsites().subscribe(websites => this.websites = websites);
	}
  
	delete(website: Website): void {
		this.websiteService.deleteWebsite(website).subscribe(success=> {this.getWebsites();});		
	}

}

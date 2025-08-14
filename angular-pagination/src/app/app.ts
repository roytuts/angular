import { Component, signal, OnInit } from '@angular/core';

import { TutorialService } from './tutorial-service';
import { Tutorial } from './tutorial';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular Pagination');
  
  tutorials: Tutorial[] = [];
  currentPage: number = 0;
  totalPages: number = 0;  
  itemsPerPage: number = 10;
  totalItems: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getPaginatedTutorials(this.currentPage, this.itemsPerPage).subscribe(
      (data) => {
        this.tutorials = data.content;
		this.totalPages = data.totalPages;
		this.currentPage = data.pageable.pageNumber;
        this.totalItems = data.totalItems;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToPage(page: number): void {
	this.currentPage = page;
	this.retrieveTutorials();
	/*const pageNumber = page;
    if (pageNumber && pageNumber >= 1 && pageNumber <= this.totalPages && pageNumber !== this.currentPage) {
      this.currentPage = pageNumber;
      this.retrieveTutorials();
    }*/
  }

  nextPage(): void {
	if (this.currentPage < this.totalPages - 1) {
	  this.currentPage++;
	  this.retrieveTutorials();
	}
  }

  previousPage(): void {
	if (this.currentPage > 0) {
	  this.currentPage--;
	  this.retrieveTutorials();
	}
  }
  
  changePageSize(size: number): void {
    this.itemsPerPage = size;
    this.currentPage = 0;
    this.retrieveTutorials();
  }
  
  onPageChange(page: number): void {
    this.currentPage = page;
    this.retrieveTutorials();
  }
  
  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index);
  }
  
  getVisiblePages(): number[] {
    const delta = 2; // Number of pages to show on each side of current page
    
    let start = Math.max(1, this.currentPage - delta);
    let end = Math.min(this.totalPages, this.currentPage + delta);
    
    // Ensure we always show at least 5 pages if available
    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(this.totalPages, start + 4);
      } else if (end === this.totalPages) {
        start = Math.max(1, end - 4);
      }
    }
    
    const pages = [];
    for (let i = start - 1; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }
  
}

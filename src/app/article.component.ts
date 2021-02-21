import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ArticleService } from './article.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;    

    constructor(private articleService: ArticleService) {}
    
    displayedColumns: string[] = ['id', 'title', 'category', 'writer'];
    dataSource = new MatTableDataSource(this.articleService.getAllArticles());
  
    ngOnInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }    
}
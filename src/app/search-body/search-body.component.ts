import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css']
})
export class SearchBodyComponent implements OnInit {
  results: any = [];
  term: any;
  search: any;
  pageNum: number = 1;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  onSubmit(type: string, search: any) {
    this.term = type;
    this.search = search;
    this.pageNum = 1;
    this.results = [];
    this.fetchCall();
  }

  fetchCall() {
    this.swapiService.getPeople(this.term, this.search, this.pageNum).subscribe(
      data => {
        //console.log(data);
        let dataResult: any = data;
        this.results = this.results.concat(dataResult.results);
        console.log(this.results);
        if (dataResult.results.length >= 10) {
          this.pageNum = this.pageNum + 1;
          this.fetchCall();
        }
        //console.log(this.pageNum);
      }
    )
  }

}

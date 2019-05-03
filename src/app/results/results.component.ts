import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public results;
  public terms;

  constructor() { }

  ngOnInit() {
  }

  @Input() set result(result: any) {
    this.results = result;
  }
  @Input() set term(term: any){
    this.terms = term;
  } 
  get result(): any{
    return this.results;
  }
  get term(): any{
    return this.terms;
  }
}

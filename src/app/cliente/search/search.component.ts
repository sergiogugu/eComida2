import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  estabelecimentos: string[] = [
    'Bobs',
    'Kikos',
    'K-Skina',
    'Bizzoka',
    'Maluco Beleza'
  ]

  constructor() { }

  ngOnInit() {
  }

}

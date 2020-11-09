import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {List} from '../list';


@Component({
  selector: 'app-new-clothes',
  templateUrl: './new-clothes.component.html',
  styleUrls: ['./new-clothes.component.css']
})
export class NewClothesComponent implements OnInit {

  list: List = new List();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(): void{
    console.log(this.list);
    this.router.navigateByUrl('new-clothes');
  }

}

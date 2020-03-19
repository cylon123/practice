import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @ViewChild('dropdown',{static : false}) dropDownRef;
  showList = false;
  constructor() { }

  ngOnInit() {
  }

  onClickManageRecipe(){
    this.showList = !this.showList;
    if(this.showList){
      this.dropDownRef.nativeElement.classList.add('show');
    }
    else{
      this.dropDownRef.nativeElement.classList.remove('show');
    }
  }
}

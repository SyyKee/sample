import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.scss']
})
export class AutoSearchComponent {
 
@Input() iconListLeft = false;
@Input() iconListRight = false;
@Input() disabled = false;
@Input() deviderLocation: number;

@Input() itemsLeftIcon ="fa fa-search icon options-icon";
@Input() itemsRightIcon ="fa fa-close icon options-icon";

show:boolean =false;
cross:boolean =false;
border:boolean =false;
term:any;
items =["option1","option2","aption3","test1","bill","hey"]
capturedText: string = '';
selectedItemIndex: number | null = null;

captureText(item: string,index: number): void {
  this.capturedText = item;
  if (this.selectedItemIndex === index) {
    this.selectedItemIndex = null; // Deselect the item
} else {
    this.selectedItemIndex = index; // Select a new item
}
  //add method into your options
}


onFocus(){
  this.show = !this.show;
  this.cross = !this.cross;
  this.border = !this.border;
}

close(){
  this.show = false;
  this.cross = false;
  this.border = false;
}

clearForm(form: NgForm): void {
  form.resetForm();
  this.show = false;
  this.cross = false;
  this.border = false;
}

rightIcon(){
  //do something
}


}
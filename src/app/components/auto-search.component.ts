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

show:boolean =false;
term:any;
items =["option1","option2","aption3","test1","bill","hey"]
capturedText: string = '';

captureText(item: string): void {
  this.capturedText = item;
  //add method into your options
}


onFocus(){
  this.show = !this.show;
}

close(){
  this.show = false;
}

clearForm(form: NgForm): void {
  form.resetForm();
  this.show = false;
}

rightIcon(){
  //do something
}


}
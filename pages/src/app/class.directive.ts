import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]' 
})
export class ClassDirective {
  constructor(private element: ElementRef) { // ElementRef is a direct reference to the list item in app.component.html in this case
    //this.element.nativeElement.style.backgroundColor = 'orange';
  }

  //Method of intercepting a property assignment
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remeove(key);
      }

    }
  }

}


/* Communicate from parent to child component...

//Parent component template
<app-card [title]=" 'Snowy Mountain' "></app-card>

//Child component class
import { Input } from 'angular'

class ChildComponent {
  //Use input 'decorator'
  @Input() title: string;
}

*/
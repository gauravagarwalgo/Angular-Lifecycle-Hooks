import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() value:string="Gaurav";

  constructor(){
    console.log("Constructor called");
    console.log(this.value);
  }

  //to use ngOnInit and ngOnChanges, we need to implement(line 8). Even if we don't, it will work but implementing is a good practice.
  ngOnChanges(change:SimpleChanges)  // this is only one which accepts parameter
  {
    console.log("ngOnChanges called");
    console.log(change);
  }

  ngOnInit()
  {
    console.log("ngOnInit called");
    console.log(this.value);
  }

  ngDoCheck()
  {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit()
  {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked()
  {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked()
  {
    console.log("ngAfterViewChecked Called");
  }

  ngOnDestroy()
  {
    console.log("ngOnDestroy Called");
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHook';
  inputText:string='';
  destroy:boolean=true;
  OnSubmit(inputEle:HTMLInputElement)
  {
    this.inputText=inputEle.value;
  }

  DestroyComponent()
  {
    this.destroy=false;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-userform',
      templateUrl: './userform.component.html',
      styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
      UserName :string = '';
      Inactive :boolean = true;
      constructor() { }

      ngOnInit() {
      }
      onClickReset(){
            this.UserName = '';
            this.Inactive = true;
      }
      onChangeCheckLength(){
            this.UserName.length > 0? this.Inactive = false: this.Inactive = true;
      }
}

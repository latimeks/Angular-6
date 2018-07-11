// A component is just a typescript class that is used in angular
// All components need a component decorator this can be done manually or with ng generate component foo or ng gc foo
import {Component} from '@angular/core'
@Component({
  selector:'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
      id = 10;
      name: string = "Games"
      state: string = "Running"
      getServerStatus(){
            return this.state
      }
}

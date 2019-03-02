two way binding using FormsModule
Import FormsModule
1. import { FormsModule } from '@angular/forms';
2. @NgModule({
    imports:[
    FormsModule
    ]
    })
eg. html)   <input type="text" class ="form-control" [(ngModel)]="serverName">
eg. ts)     serverName='Testserver';

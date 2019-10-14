import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() CancelRegister = new EventEmitter();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authservice.register(this.model).subscribe(() => {
      console.log('Registrastion Successfull');
      this.model = {};

    }, error => {
      console.log('Error occured during registration');

    });

  }

  cancel() {
    console.log('cancelled');
    this.CancelRegister.emit(false);

  }

}

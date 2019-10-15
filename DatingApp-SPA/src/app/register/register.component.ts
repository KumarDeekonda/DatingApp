import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() CancelRegister = new EventEmitter();

  constructor(
    private authservice: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.authservice.register(this.model).subscribe(
      () => {
        this.alertify.success('Registrastion Successfull');
        this.model = {};
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  cancel() {
    this.alertify.message('cancelled');
    this.CancelRegister.emit(false);
  }
}

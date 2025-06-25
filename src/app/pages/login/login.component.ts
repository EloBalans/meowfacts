import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "../../services/auth/auth.service";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _auth = inject(AuthService);
  private _router = inject(Router);

  public name = new FormControl('', Validators.required);

  public login(){
    if (this.name.valid && this.name.value) {
      this._auth.login(this.name.value);
      this._router.navigate(['/']).then();
    } else {
      console.error('Form invalid!');
    }
  }
}

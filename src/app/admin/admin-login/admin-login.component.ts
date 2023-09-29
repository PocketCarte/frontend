import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from '../shared/services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  public form: FormGroup;

  constructor (private fb: FormBuilder, private adminLoginService: AdminLoginService, private router: Router) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  public onLogin(): void {
    if(this.form.valid){
      this.adminLoginService.login(this.email.value, this.password.value).then((response) => {
        localStorage.setItem("adminToken", response.accessToken);
        this.router.navigate(['/admin/dashboard']);
      }).catch((e) => {
        alert(e.error.msg);
      });
    }
  }

  public get email() {
    return this.form.get('email') as FormControl;
  }

  public get password() {
    return this.form.get('password') as FormControl;
  }

}

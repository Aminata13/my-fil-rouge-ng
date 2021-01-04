import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private authSrv: AuthenticationService, private router:Router) { }

  ngOnInit(): void {}

  onSubmit() {
    let credentials = this.loginForm.value;

    if (credentials.username && credentials.password) {
      this.authSrv.login(credentials)
          .subscribe(
              () => {
                let decodedToken: any = jwt_decode(localStorage.getItem("token")!);
                this.redirectByRole(decodedToken.roles[0])
              }
          );
    }
  }

  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_ADMIN':
        this.router.navigateByUrl('/dashboard');
        break;
      case 'ROLE_FORMATEUR':
        this.router.navigateByUrl('/dashboard');
        break;
      case 'ROLE_CM':
        this.router.navigateByUrl('/dashboard');
        break;
      case 'ROLE_APPRENANT':
        this.router.navigateByUrl('/dashboard');
        break;

      default:
        this.router.navigateByUrl('');
        break;
    }
  }
}

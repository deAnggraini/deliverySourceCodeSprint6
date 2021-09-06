import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  defaultAuth = {
    username: '',
    password: '',
    remember: false,
  };
  loginForm: FormGroup;
  hasError: boolean;
  hasErrorMessage: string;
  hasAttempt: number = 0;
  hasAttemptMessage: string = '';
  returnUrl: string;
  isLoading$: Observable<boolean>;
  revealPass: boolean = false;
  typePass = 'password';

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isLoading$ = this.authService.isLoading$;

    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [
        this.defaultAuth.username,
        Validators.compose([
          Validators.required,
          // Validators.pattern("^[a-zA-Z0-9]$")
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          // Validators.minLength(6),
          // Validators.maxLength(100),
          // Validators.pattern("^[a-zA-Z0-9]$"),
        ]),
      ],
      remember: [this.defaultAuth.remember]
    });
  }

  submit() {
    this.hasError = false;
    const loginSubscr = this.authService
      .login(this.f.username.value, this.f.password.value, this.f.remember.value)
      // .pipe(first())
      .subscribe(
        (user: UserModel) => {
          if (user) {
            this.router.navigate([this.returnUrl], { replaceUrl: true });
          } else {
            this.hasError = true;
          }
        },
        error => {
          const err = JSON.parse(error.message);
          const { message, failCount, alert } = err;
          this.hasError = true;
          this.hasErrorMessage = message;
          this.hasAttemptMessage = alert;
          this.hasAttempt = failCount || 1;
        },
      );
    this.unsubscribe.push(loginSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  showPassword() {
    if (this.typePass === "password") {
      this.typePass = "text";
      this.revealPass = true;
    } else {
      this.typePass = "password";
      this.revealPass = false;
    }
  }
}

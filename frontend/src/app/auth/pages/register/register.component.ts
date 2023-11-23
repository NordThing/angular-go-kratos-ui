import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form$: Observable<any>; // TODO: Types for registration form

    constructor(
        private route: ActivatedRoute,
        private auth: AuthService,
    ) {
        document.title = "Register";
    }

    ngOnInit(): void {
        this.form$ = this.auth.getRegistrationFlow()
    }
}

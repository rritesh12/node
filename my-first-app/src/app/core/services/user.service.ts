import { Injectable } from "@angular/core";
import { JwtService } from "./jwt.service";
import { ApiService } from ".";
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from "../models";

@Injectable()
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable();

    private isAuthenticatedSubject = new ReplaySubject<Boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private jwtService: JwtService,
        private apiService: ApiService
    ) { }

    populate() {

        if (this.jwtService.getToken()) {
            this.apiService.get('/user').subscribe(
                data => this.setAuth(data.user),
                err => this.purgeAuth()
            )
        }

    }


    setAuth(user: User) {

        this.jwtService.saveToken(user.token);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);


    }

    purgeAuth() {

        this.jwtService.destoryToken();
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);

    }

}
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators/catchError';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }

    private formatErrors(error: any) {
        return new ErrorObservable(error);
    }


    get(path: String, params: HttpParams = new HttpParams()): Observable<any> {

        return this.http.get(
            `${environment.api_url}${path}`, { params }
        ).pipe(catchError(this.formatErrors));

    }

    post(path: String, body: Object = {}): Observable<any> {

        return this.http.post(
            `${environment.api_url}${path}`, body
        ).pipe(catchError(this.formatErrors));
    }

    put(path: String, body: Object = {}): Observable<any> {

        return this.http.put(
            `${environment.api_url}${path}`, body
        ).pipe(
            
            catchError(this.formatErrors));
    }

    delete(path: String): Observable<any> {
        return this.http.delete(
            `${environment.api_url}${path}`
        ).pipe(catchError(this.formatErrors));
    }


}
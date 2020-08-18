import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Patient } from './Patient';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'  })
};

const apiUrl = 'http://127.0.0.1';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation ='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of (result as T);
    };
  }

  getPatients(): Observable<Patient[]> {
    const url = `${apiUrl}/patients`;
    return this.http.get<Patient[]>(url)
          .pipe(
            tap(cases => console.log('fetched cases')),
            catchError(this.handleError('getPatients', []))
          );
  }
}

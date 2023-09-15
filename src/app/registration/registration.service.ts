import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_URL: String = 'http://localhost:8080/api/users';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  // Une fonction pour récupérer des données depuis l'API en fonction de l'email
  // getDonneesById(email: string): Observable<any> {
  //   const params = { email: email };
  //   return this.http.get(USER_URL + '/{id}', { params: params });
  // }

  //une fonction pour envoyer des données à l'API
  // enregistrerDonnees(data: any): Observable<any> {
  //   return this.http.post(USER_URL, data);
  // }

  register(user: any): Observable<any> {
    // const params = { email: email };
    return this.http.post(
      'http://localhost:8080/api/users/register',
      {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        address: user.address,
        postalCode: user.postalCode,
        city: user.city,
        phoneNumber: user.phoneNumber,
      },
      httpOptions
    );
  }
}

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

  register(user: any): Observable<any> {
    this.getAll().subscribe(
      (data) => console.table(data),
      (err) => console.log(err)
    );

    return this.http.post(
      'http://localhost:8080/api/users/register',
      {
        idUser: 0,
        username: 'lili4@gmail.com',
        password: 'lili1234',
        firstName: 'lili',
        lastName: 'joe',
        city: 'rouen',
        postalCode: '76000',
        address: 'rue albert dupuis',
        phoneNumber: '0755998866',
      },
      httpOptions
    );
  }
  getAll() {
    return this.http.get('http://localhost:8080/api/users/all', httpOptions);
  }
  getUserById(id: number): Observable<any> {
    const url = `${USER_URL}/${id}`;
    return this.http.get(url, httpOptions);
  }
  // Méthode pour supprimer un utilisateur par ID
  deleteUserById(id: number): Observable<any> {
    const url = `${USER_URL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // Méthode pour mettre à jour un utilisateur par ID
  updateUserById(id: number, user: any): Observable<any> {
    const url = `${USER_URL}/${id}`;
    return this.http.put(url, user, httpOptions);
  }
}

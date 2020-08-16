import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  myAppUrl = 'https://localhost:44304/';
  myApiUrl = 'api/CreditCards/';
  list: CreditCard[];
  private updateForm = new BehaviorSubject<CreditCard>({} as any);

  constructor(private http: HttpClient) { }

  cardSave(card: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(this.myAppUrl + this.myApiUrl, card);
  }

  getCards() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(data => { 
      this.list = data as CreditCard[];
    })
  }

  cardDelete(id: number): Observable<CreditCard> {
    return this.http.delete<CreditCard>(this.myAppUrl + this.myApiUrl + id);
  }

  update(card) {
    this.updateForm.next(card)
  }

  getCard$(): Observable<CreditCard> {
    return this.updateForm.asObservable();
  }

  cardUpdate(id: number, card: CreditCard): Observable<CreditCard> {
    return this.http.put<CreditCard>(this.myAppUrl + this.myApiUrl + id, card);
  }
}

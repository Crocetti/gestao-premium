import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@gestao-premium/api-interfaces';

@Component({
  selector: 'gestao-premium-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}

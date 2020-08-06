import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


class data {
  testid: number;
  testText: string;
  testDescription: string;
  testEmail: string;
  testFirst: string;
  testLast: string;
  testAvatar: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<data[]>;

  constructor(private db: AngularFireDatabase, private router: Router, private client: HttpClient) {

    this.items = db.list('/').valueChanges() as Observable<data[]>;
   
  }

  ngOnInit(): void {

  }


  cacheExamples() {
    this.router.navigate(['/', 'cache-examples']);
  }
}

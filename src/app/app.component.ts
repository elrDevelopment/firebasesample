import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'firebase';

  items: Observable<data[]>;
  constructor(private db: AngularFireDatabase) {

    this.items = db.list('/').valueChanges() as Observable<data[]>;
  }

  ngOnInit(): void {

  }


}

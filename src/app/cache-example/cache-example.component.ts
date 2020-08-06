import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-cache-example',
  templateUrl: './cache-example.component.html',
  styleUrls: ['./cache-example.component.scss']
})
export class CacheExampleComponent implements OnInit {

  constructor(private client: HttpClient, private db: DatabaseService) {
    this.db.createObjectStore(['users']);
  }

  userProfileData: any;
  modalShow1: boolean;
  modalShow2: boolean;
  modalShow3: boolean

  ngOnInit(): void {
      this.modalShow1 = false;
      this.modalShow2 = false
      this.modalShow3 = false
  }

  showModal(numb: number) {
    switch(numb) {
      case 1:
        this.modalShow1 = true;
        break;
      case 2:
        this.modalShow2 = true;
        break;
      case 3:
        this.modalShow3 = true;
        break;
    }
  }
  hideModal(numb: number) {
    switch(numb) {
      case 1:
        this.modalShow1 = false;
        break;
      case 2:
        this.modalShow2 = false;
        break;
      case 3:
        this.modalShow3 = false;
        break;
    }
  }

  getUserProfileDataLazyCache() {
    //check memory for storage
    if(this.userProfileData) {
      this.userProfileData.first_name = 'I Am';
      this.userProfileData.last_name = 'Grut';
      this.showModal(1);

    } else {
      //if no mem cache exists then go get the data
      this.client.get('https://my.api.mockaroo.com/userprofiledata.json?key=8dfcfd50').toPromise().then(
        response => {
          this.userProfileData = response;
          this.showModal(1);
        }
      )
    }

  }

  async localIndexedDb() {
    let user: any;
    await this.db.getValue('users', 1).then(
        value => user = value
    );

    if(user !== undefined) {
      user.first_name = 'Loki';
      user.last_name = 'Is King';
      this.userProfileData = user;
      this.showModal(3);

    } else {
      //if no mem cache exists then go get the data
      this.client.get('https://my.api.mockaroo.com/userprofiledata.json?key=8dfcfd50').toPromise().then(
        response => {
          this.userProfileData = response;
          this.db.putValue('users', response).then(
            (value) => console.log('put complete')
          );
          this.showModal(3);
        }
      )
    }
  }
  localCacheData() {
    this.userProfileData = undefined;
    if(localStorage.getItem('userProfile')) {
      this.userProfileData = JSON.parse(localStorage.getItem('userProfile'));
      this.userProfileData.first_name = 'Thor';
      this.userProfileData.last_name = 'Ragnorock';
      this.showModal(2);

    } else {
      //if no mem cache exists then go get the data
      this.client.get('https://my.api.mockaroo.com/userprofiledata.json?key=8dfcfd50').toPromise().then(
        response => {
          localStorage.setItem('userProfile',JSON.stringify(response))
          this.userProfileData = response;
          this.showModal(2);
        }
      )
    }
  }
  testData() {
    var d = [
      {
        "title": "apples",
        "count": [12000, 20000],
        "description": {"text": "...", "sensitive": false}
      },
      {
        "title": "oranges",
        "count": [17500, null],
        "description": {"text": "...", "sensitive": false}
      }
    ];
    return d
  }
}

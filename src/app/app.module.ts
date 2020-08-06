import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { CacheExampleComponent } from './cache-example/cache-example.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    CacheExampleComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

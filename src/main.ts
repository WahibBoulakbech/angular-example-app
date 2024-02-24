import { importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { AppComponent } from './app/app.component';
import { commerceReducer } from './app/store/commerce.reducer';
import { CommerceEffects } from './app/store/commerce.effects';

//platformBrowserDynamic()
//  .bootstrapModule(AppModule)
//  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ commerce: commerceReducer }),
    provideEffects([CommerceEffects]),
    importProvidersFrom(BrowserAnimationsModule, BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));

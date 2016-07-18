import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { Http, HTTP_PROVIDERS } from '@angular/http';
// import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
])
.catch(err => console.error(err));

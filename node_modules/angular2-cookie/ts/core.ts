/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.2
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */
import {provide} from '@angular/core';

import {BaseCookieOptions, CookieOptions} from './services';

export * from './services';

export const ANGULAR2_COOKIE_PROVIDERS: any[] =
    [provide(CookieOptions, {useClass: BaseCookieOptions})];

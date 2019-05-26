import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxColorModule } from './app/app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(NgxColorModule)
  .catch(err => console.error(err));


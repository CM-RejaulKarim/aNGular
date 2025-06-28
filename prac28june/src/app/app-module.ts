import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ViewAllMember } from './view-all-member/view-all-member';
import { Addmember } from './addmember/addmember';
import { Updatemember } from './updatemember/updatemember';

@NgModule({
  declarations: [
    App,
    ViewAllMember,
    Addmember,
    Updatemember
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }

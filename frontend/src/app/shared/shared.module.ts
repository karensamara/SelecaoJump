import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { ImageApiService } from './services/image-api.service';
// import { ProcessApiService } from './services/process-api.service';
import { ProcessSharingService } from './services/process-sharing.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, MatIconModule, MatToolbarModule, AppRoutingModule],
  providers: [ProcessSharingService],
  bootstrap: [],
  exports: [HeaderComponent],
})
export class SharedModule {}

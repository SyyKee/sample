import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoSearchComponent } from './components/auto-search.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { ClickedOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoSearchComponent,
    FilterPipe,
    ClickedOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

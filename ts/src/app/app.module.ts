import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CriarTopicoComponent } from './criar-topico/criar-topico.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarTopicoComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

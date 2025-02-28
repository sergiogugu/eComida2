import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { ClienteModule } from './cliente/cliente.module';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';
import { LandingComponent } from './landing/landing.component';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AdministrativoModule,
    ClienteModule,
    SharedModule,
    EstabelecimentoModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

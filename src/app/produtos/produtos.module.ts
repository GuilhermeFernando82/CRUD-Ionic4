import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProdutosPageRoutingModule } from './produtos-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsPage } from './produtos.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [FormsPage]
})
export class ProdutosPageModule {}

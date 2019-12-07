import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FunctionsService } from '../functions.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class FormsPage {
  private todo : FormGroup;
  constructor( private formBuilder: FormBuilder, private functions : FunctionsService) {
    this.todo = this.formBuilder.group({
      nome: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  logForm(){
  
      let usuario = { nome : this.todo.value.nome, desc : this.todo.value.description};
      this.functions.post(usuario).then(()=>{
        console.log('Inserido com sucesso');
      }).catch(()=>{
        console.log("Falha");
      });
    }
  
  
  }



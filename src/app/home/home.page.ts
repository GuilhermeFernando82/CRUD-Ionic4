import { Component } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any;
  
  constructor(private alertController: AlertController ,private functions : FunctionsService, public navCtrl: NavController) {
    
  }

  goCadastra(){

  }
  async presentAlert() {
    this.functions.getProducts().then(async (response)=>{
      //this.products = JSON.stringify(this.products);
       this.products = response;
       const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: JSON.stringify(this.products),
        buttons: ['OK']
      });
  
      await alert.present();
    }
     

   ).catch((response)=>{
     console.log('Deu erro');
   });
    
  
  }
  async alertmessage() {
      //this.products = JSON.stringify(this.products);
        const alert = await this.alertController.create({
        header: 'Deletar Produto',
        subHeader: 'Deletar produto',
        message: 'Deletado',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    async alerfalha() {
      //this.products = JSON.stringify(this.products);
        const alert = await this.alertController.create({
        header: 'Falha',
        subHeader: 'Falha',
        message: 'Falha ao deletar',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  async deletaAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
        
          id: 'id',
          placeholder: 'Informe o id do produto'
        },
       
    
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Deletar',
          handler: () => {
            let id = (document.getElementById('id') as HTMLInputElement).value;
            this.functions.deletar(parseInt(id))
    .then(()=>{return this.alertmessage()})
    .catch(()=>{return this.alerfalha()});
            
          }
        }
      ]
    });


    await alert.present();
  }
  
  
  async updateAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name3-id',
          placeholder: 'nome'
        },
        {
          name: 'name1',
          type: 'text',
          id: 'id',
          placeholder: 'id do produto'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          
          placeholder: 'Descrição'
        },
     
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            let nome = (document.getElementById('name3-id') as HTMLInputElement).value;
            let desc = (document.getElementById('name2-id') as HTMLInputElement).value;
            let id = (document.getElementById('id') as HTMLInputElement).value;
            let usuario = {nome: nome, desc: desc};
            this.functions.atualizar(usuario, parseInt(id)).then(()=>{
            console.log('ok');
    }).catch(()=>{
      console.log('Falha');
    });
          }
        }
      ]
    });

    await alert.present();
  }
  
  cadastra(){
    let usuario = {id: 40, adm_id: 3, nome:'Fogão', descrition: 'Branco', picture: 'teste/dZ04gDjFUKqwK5H2R0pWhcBSR0wuCvCGuX24rpmv.png'};
    this.functions.post(usuario).then(()=>{
      console.log('Inserido com sucesso');
    }).catch(()=>{
      console.log('Ops');
    });
  }
}

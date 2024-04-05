import { Component, OnInit, ViewChild } from '@angular/core';
import { DadosService } from '../service';
import { IonModal } from '@ionic/angular';
import { PotentialCustomer, ServiceCatalogOutput } from 'src/apiclient';

@Component({
  selector: 'app-tabCadastro',
  templateUrl: 'tabCadastro.page.html',
  styleUrls: ['tabCadastro.page.scss']
})

export class tabCadastroPage {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  isModalOpen = false;
  nomeContato = '';
  emailContato = '';
  servicoSelecionado!: ServiceCatalogOutput;
  services: Array<ServiceCatalogOutput> = [];


  constructor(private dadosService: DadosService) { }

  ngOnInit() {

    this.dadosService.getServiceCatalogServiceCatalogGet(
      1,
      10,
    ).then((data: any) => {
      console.log('API called successfully. Returned data: ' + data);
      this.services = data;
    }).catch((error: any) => console.error(error));
  }

  getServices(): Array<ServiceCatalogOutput> {
    return JSON.parse(localStorage.getItem('services')!) as Array<ServiceCatalogOutput>;
  }

  requestBudget(service: ServiceCatalogOutput) {
    this.servicoSelecionado = service;
    this.setOpen(true);
    // alert(service.name);
  }

  cancel() {
    this.setOpen(false);
    // this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if ([this.nomeContato, this.emailContato].indexOf('') > -1) {
      alert('Você precisa informar seu nome e seu email!');
    }
    else {
      const potentialCustomer = new PotentialCustomer();
      potentialCustomer.id = 0;
      potentialCustomer.name = this.nomeContato;
      potentialCustomer.email = this.emailContato;
      potentialCustomer.message = `Olá! Gostaria de um orçamento para o serviço ${this.servicoSelecionado.name}.`;
      potentialCustomer.serviceId = this.servicoSelecionado.id;
      this.dadosService.postContactCustomerContactPost(potentialCustomer).then((data) => {
        this.setOpen(false);
        this.nomeContato = '';
        this.emailContato = '';
      });
    }
    // this.modal.dismiss(this.nomeContato, 'confirm');
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  onWillDismiss(event: Event) {
    this.setOpen(false);
  }

}









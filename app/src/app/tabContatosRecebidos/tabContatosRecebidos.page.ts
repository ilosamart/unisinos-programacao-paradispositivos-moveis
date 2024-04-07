import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { PotentialCustomer, ServiceCatalogOutput } from 'src/apiclient';
import { DadosService } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabContatosRecebidos',
  templateUrl: 'tabContatosRecebidos.page.html',
  styleUrls: ['tabContatosRecebidos.page.scss']
})
export class tabContatosRecebidosPage {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  isModalOpen = true;
  nomeContato = '';
  emailContato = '';

  potentialCustomers: Array<PotentialCustomer> = [];


  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.dadosService.getCustomerContactCustomerContactGet(
      1,
      10,
    ).then((data: any) => {
      console.log('API called successfully. Returned data: ' + data);
      this.potentialCustomers = data;
      localStorage.setItem('potentialCustomers', JSON.stringify(this.potentialCustomers));
    }).catch((error: any) => console.error(error));
  }

  getPotentialCustomers(): Array<PotentialCustomer> {
    return JSON.parse(localStorage.getItem('potentialCustomers')!) as Array<PotentialCustomer>;
  }

}

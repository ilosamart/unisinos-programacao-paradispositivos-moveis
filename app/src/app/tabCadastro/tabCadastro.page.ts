import { Component, OnInit, input } from '@angular/core';
import { DadosService } from '../service';
import { ServiceCatalogOutput } from 'src/apiclient';

@Component({
  selector: 'app-tabCadastro',
  templateUrl: 'tabCadastro.page.html',
  styleUrls: ['tabCadastro.page.scss']
})

export class tabCadastroPage implements OnInit {
  services: Array<ServiceCatalogOutput> =[];

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.dadosService.getServiceCatalogServiceCatalogGet(
      1,
      10,
    ).then((data: any) => {
      console.log('API called successfully. Returned data: ' + data);
      this.services = data;
    }).catch((error: any) => console.error(error));
  };


}









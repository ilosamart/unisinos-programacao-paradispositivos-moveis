
import { Injectable } from '@angular/core';
import { Configuration, ServerConfiguration, createConfiguration } from 'src/apiclient';
import { environment } from 'src/environments/environment';
import { PromiseDefaultApi } from 'src/apiclient/types/PromiseAPI';


@Injectable({
  providedIn: 'root'
})
export class DadosService extends PromiseDefaultApi {
  constructor() {
    const config: Configuration = createConfiguration({
      baseServer: new ServerConfiguration<{}>(environment.apiURL, {}),
    });
    super(config)
  }
}

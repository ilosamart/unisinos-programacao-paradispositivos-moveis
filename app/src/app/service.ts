
import { Injectable } from '@angular/core';
import { DefaultApiRequestFactory } from '../apiclient/apis/DefaultApi';
import { Configuration, ServerConfiguration, createConfiguration } from 'src/apiclient';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DadosService extends DefaultApiRequestFactory {
  constructor() {
    const config: Configuration = createConfiguration({
      baseServer: new ServerConfiguration<{}>(environment.apiURL, {}),
    });
    super(config)
  }
}

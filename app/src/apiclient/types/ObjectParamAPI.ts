import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { HTTPValidationError } from '../models/HTTPValidationError';
import { PotentialCustomer } from '../models/PotentialCustomer';
import { ServiceCatalogInput } from '../models/ServiceCatalogInput';
import { ServiceCatalogOutput } from '../models/ServiceCatalogOutput';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Value } from '../models/Value';
import { When } from '../models/When';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetCustomerContactCustomerContactGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetCustomerContactCustomerContactGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetCustomerContactCustomerContactGet
     */
    rowsPerPage?: number
}

export interface DefaultApiGetServiceCatalogServiceCatalogGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetServiceCatalogServiceCatalogGet
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetServiceCatalogServiceCatalogGet
     */
    rowsPerPage?: number
}

export interface DefaultApiPostContactCustomerContactPostRequest {
    /**
     * 
     * @type PotentialCustomer
     * @memberof DefaultApipostContactCustomerContactPost
     */
    potentialCustomer: PotentialCustomer
}

export interface DefaultApiPostServiceCatalogServiceCatalogPostRequest {
    /**
     * 
     * @type ServiceCatalogInput
     * @memberof DefaultApipostServiceCatalogServiceCatalogPost
     */
    serviceCatalogInput: ServiceCatalogInput
}

export interface DefaultApiReadRootGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Customer Contact
     * @param param the request object
     */
    public getCustomerContactCustomerContactGetWithHttpInfo(param: DefaultApiGetCustomerContactCustomerContactGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PotentialCustomer>>> {
        return this.api.getCustomerContactCustomerContactGetWithHttpInfo(param.page, param.rowsPerPage,  options).toPromise();
    }

    /**
     * Get Customer Contact
     * @param param the request object
     */
    public getCustomerContactCustomerContactGet(param: DefaultApiGetCustomerContactCustomerContactGetRequest = {}, options?: Configuration): Promise<Array<PotentialCustomer>> {
        return this.api.getCustomerContactCustomerContactGet(param.page, param.rowsPerPage,  options).toPromise();
    }

    /**
     * Get Service Catalog
     * @param param the request object
     */
    public getServiceCatalogServiceCatalogGetWithHttpInfo(param: DefaultApiGetServiceCatalogServiceCatalogGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ServiceCatalogOutput>>> {
        return this.api.getServiceCatalogServiceCatalogGetWithHttpInfo(param.page, param.rowsPerPage,  options).toPromise();
    }

    /**
     * Get Service Catalog
     * @param param the request object
     */
    public getServiceCatalogServiceCatalogGet(param: DefaultApiGetServiceCatalogServiceCatalogGetRequest = {}, options?: Configuration): Promise<Array<ServiceCatalogOutput>> {
        return this.api.getServiceCatalogServiceCatalogGet(param.page, param.rowsPerPage,  options).toPromise();
    }

    /**
     * Post Contact
     * @param param the request object
     */
    public postContactCustomerContactPostWithHttpInfo(param: DefaultApiPostContactCustomerContactPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postContactCustomerContactPostWithHttpInfo(param.potentialCustomer,  options).toPromise();
    }

    /**
     * Post Contact
     * @param param the request object
     */
    public postContactCustomerContactPost(param: DefaultApiPostContactCustomerContactPostRequest, options?: Configuration): Promise<void> {
        return this.api.postContactCustomerContactPost(param.potentialCustomer,  options).toPromise();
    }

    /**
     * Post Service Catalog
     * @param param the request object
     */
    public postServiceCatalogServiceCatalogPostWithHttpInfo(param: DefaultApiPostServiceCatalogServiceCatalogPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postServiceCatalogServiceCatalogPostWithHttpInfo(param.serviceCatalogInput,  options).toPromise();
    }

    /**
     * Post Service Catalog
     * @param param the request object
     */
    public postServiceCatalogServiceCatalogPost(param: DefaultApiPostServiceCatalogServiceCatalogPostRequest, options?: Configuration): Promise<void> {
        return this.api.postServiceCatalogServiceCatalogPost(param.serviceCatalogInput,  options).toPromise();
    }

    /**
     * Read Root
     * @param param the request object
     */
    public readRootGetWithHttpInfo(param: DefaultApiReadRootGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.readRootGetWithHttpInfo( options).toPromise();
    }

    /**
     * Read Root
     * @param param the request object
     */
    public readRootGet(param: DefaultApiReadRootGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.readRootGet( options).toPromise();
    }

}

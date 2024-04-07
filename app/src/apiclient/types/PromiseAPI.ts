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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Customer Contact
     * @param page 
     * @param rowsPerPage 
     */
    public getCustomerContactCustomerContactGetWithHttpInfo(page?: number, rowsPerPage?: number, _options?: Configuration): Promise<HttpInfo<Array<PotentialCustomer>>> {
        const result = this.api.getCustomerContactCustomerContactGetWithHttpInfo(page, rowsPerPage, _options);
        return result.toPromise();
    }

    /**
     * Get Customer Contact
     * @param page 
     * @param rowsPerPage 
     */
    public getCustomerContactCustomerContactGet(page?: number, rowsPerPage?: number, _options?: Configuration): Promise<Array<PotentialCustomer>> {
        const result = this.api.getCustomerContactCustomerContactGet(page, rowsPerPage, _options);
        return result.toPromise();
    }

    /**
     * Get Service Catalog
     * @param page 
     * @param rowsPerPage 
     */
    public getServiceCatalogServiceCatalogGetWithHttpInfo(page?: number, rowsPerPage?: number, _options?: Configuration): Promise<HttpInfo<Array<ServiceCatalogOutput>>> {
        const result = this.api.getServiceCatalogServiceCatalogGetWithHttpInfo(page, rowsPerPage, _options);
        return result.toPromise();
    }

    /**
     * Get Service Catalog
     * @param page 
     * @param rowsPerPage 
     */
    public getServiceCatalogServiceCatalogGet(page?: number, rowsPerPage?: number, _options?: Configuration): Promise<Array<ServiceCatalogOutput>> {
        const result = this.api.getServiceCatalogServiceCatalogGet(page, rowsPerPage, _options);
        return result.toPromise();
    }

    /**
     * Post Contact
     * @param potentialCustomer 
     */
    public postContactCustomerContactPostWithHttpInfo(potentialCustomer: PotentialCustomer, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postContactCustomerContactPostWithHttpInfo(potentialCustomer, _options);
        return result.toPromise();
    }

    /**
     * Post Contact
     * @param potentialCustomer 
     */
    public postContactCustomerContactPost(potentialCustomer: PotentialCustomer, _options?: Configuration): Promise<void> {
        const result = this.api.postContactCustomerContactPost(potentialCustomer, _options);
        return result.toPromise();
    }

    /**
     * Post Service Catalog
     * @param serviceCatalogInput 
     */
    public postServiceCatalogServiceCatalogPostWithHttpInfo(serviceCatalogInput: ServiceCatalogInput, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.postServiceCatalogServiceCatalogPostWithHttpInfo(serviceCatalogInput, _options);
        return result.toPromise();
    }

    /**
     * Post Service Catalog
     * @param serviceCatalogInput 
     */
    public postServiceCatalogServiceCatalogPost(serviceCatalogInput: ServiceCatalogInput, _options?: Configuration): Promise<void> {
        const result = this.api.postServiceCatalogServiceCatalogPost(serviceCatalogInput, _options);
        return result.toPromise();
    }

    /**
     * Read Root
     */
    public readRootGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.readRootGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Read Root
     */
    public readRootGet(_options?: Configuration): Promise<any> {
        const result = this.api.readRootGet(_options);
        return result.toPromise();
    }


}




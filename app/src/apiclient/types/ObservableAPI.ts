import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { PotentialCustomer } from '../models/PotentialCustomer';
import { ServiceCatalogInput } from '../models/ServiceCatalogInput';
import { ServiceCatalogOutput } from '../models/ServiceCatalogOutput';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { Value } from '../models/Value';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Get Service Catalog
     * @param page 
     * @param rowsPerPage 
     */
    public getServiceCatalogServiceCatalogGetWithHttpInfo(page?: number, rowsPerPage?: number, _options?: Configuration): Observable<HttpInfo<Array<ServiceCatalogOutput>>> {
        const requestContextPromise = this.requestFactory.getServiceCatalogServiceCatalogGet(page, rowsPerPage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServiceCatalogServiceCatalogGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Service Catalog
     * @param page 
     * @param rowsPerPage 
     */
    public getServiceCatalogServiceCatalogGet(page?: number, rowsPerPage?: number, _options?: Configuration): Observable<Array<ServiceCatalogOutput>> {
        return this.getServiceCatalogServiceCatalogGetWithHttpInfo(page, rowsPerPage, _options).pipe(map((apiResponse: HttpInfo<Array<ServiceCatalogOutput>>) => apiResponse.data));
    }

    /**
     * Post Contact
     * @param potentialCustomer 
     */
    public postContactCustomerContactPostWithHttpInfo(potentialCustomer: PotentialCustomer, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postContactCustomerContactPost(potentialCustomer, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postContactCustomerContactPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Post Contact
     * @param potentialCustomer 
     */
    public postContactCustomerContactPost(potentialCustomer: PotentialCustomer, _options?: Configuration): Observable<void> {
        return this.postContactCustomerContactPostWithHttpInfo(potentialCustomer, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Post Service Catalog
     * @param serviceCatalogInput 
     */
    public postServiceCatalogServiceCatalogPostWithHttpInfo(serviceCatalogInput: ServiceCatalogInput, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.postServiceCatalogServiceCatalogPost(serviceCatalogInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postServiceCatalogServiceCatalogPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Post Service Catalog
     * @param serviceCatalogInput 
     */
    public postServiceCatalogServiceCatalogPost(serviceCatalogInput: ServiceCatalogInput, _options?: Configuration): Observable<void> {
        return this.postServiceCatalogServiceCatalogPostWithHttpInfo(serviceCatalogInput, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Read Root
     */
    public readRootGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.readRootGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readRootGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read Root
     */
    public readRootGet(_options?: Configuration): Observable<any> {
        return this.readRootGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

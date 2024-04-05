# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceCatalogServiceCatalogGet**](DefaultApi.md#getServiceCatalogServiceCatalogGet) | **GET** /service-catalog | Get Service Catalog
[**postContactCustomerContactPost**](DefaultApi.md#postContactCustomerContactPost) | **POST** /customer-contact | Post Contact
[**postServiceCatalogServiceCatalogPost**](DefaultApi.md#postServiceCatalogServiceCatalogPost) | **POST** /service-catalog | Post Service Catalog
[**readRootGet**](DefaultApi.md#readRootGet) | **GET** / | Read Root


# **getServiceCatalogServiceCatalogGet**
> Array<ServiceCatalogOutput> getServiceCatalogServiceCatalogGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetServiceCatalogServiceCatalogGetRequest = {
  // number (optional)
  page: 1,
  // number (optional)
  rowsPerPage: 10,
};

apiInstance.getServiceCatalogServiceCatalogGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to 1
 **rowsPerPage** | [**number**] |  | (optional) defaults to 10


### Return type

**Array<ServiceCatalogOutput>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postContactCustomerContactPost**
> void postContactCustomerContactPost(potentialCustomer)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostContactCustomerContactPostRequest = {
  // PotentialCustomer
  potentialCustomer: null,
};

apiInstance.postContactCustomerContactPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **potentialCustomer** | **PotentialCustomer**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postServiceCatalogServiceCatalogPost**
> void postServiceCatalogServiceCatalogPost(serviceCatalogInput)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostServiceCatalogServiceCatalogPostRequest = {
  // ServiceCatalogInput
  serviceCatalogInput: null,
};

apiInstance.postServiceCatalogServiceCatalogPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceCatalogInput** | **ServiceCatalogInput**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readRootGet**
> any readRootGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.readRootGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



import type { ApiEndpoints } from '../news-api/endpoints/endpoints';
import type { RequiredRequestOptions } from '../news-api/endpoints/endpoints';
import type { EverythingEndpointRequest } from '../news-api/endpoints/everything/request-params';
import type { SourceEndpointRequest } from '../news-api/endpoints/sources/request-params';
import type { GenericCallback } from './controller-global-types';

type RequestOptions = EverythingEndpointRequest | SourceEndpointRequest;

type RequestData = {
    endpoint: ApiEndpoints;
    options?: RequestOptions;
};

type UrlOptions = RequiredRequestOptions & RequestOptions;

interface ILoader {
    baseLink: string;
    options: RequiredRequestOptions;

    getResp: <T>({}: RequestData, callback: GenericCallback<T>) => void;

    errorHandler: (res: Response) => Response;

    makeUrl: (options: RequestOptions, endpoint: ApiEndpoints) => string;

    load: <T>(method: string, endpoint: ApiEndpoints, callback: GenericCallback<T>, options: RequestOptions) => void;
}

export type { ILoader, RequestOptions, RequestData, UrlOptions };

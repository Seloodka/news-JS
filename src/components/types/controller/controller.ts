import type { EverythingEndpointResponse } from '../news-api/endpoints/everything/response';
import type { SourceEndpointResponse } from '../news-api/endpoints/sources/response';
import type { GenericCallback } from './controller-global-types';

interface IAppController {
    getSources: (callback: GenericCallback<SourceEndpointResponse>) => void;
    getNews: (e: Event, callback: GenericCallback<EverythingEndpointResponse>) => void;
}

export type { IAppController };

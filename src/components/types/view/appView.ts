import type { EverythingEndpointResponse } from '../news-api/endpoints/everything/response';
import type { SourceEndpointResponse } from '../news-api/endpoints/sources/response';
import type { INews } from './news';
import type { ISources } from './sources';

interface IAppView {
    news: INews;
    sources: ISources;

    drawNews: (data: EverythingEndpointResponse) => void;
    drawSources: (data: SourceEndpointResponse) => void;
}

export type { IAppView };

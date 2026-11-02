import type { EverythingEndpointResponse } from '../types/news-api/endpoints/everything/response';
import type { SourceEndpointResponse } from '../types/news-api/endpoints/sources/response';
import type { IAppView } from '../types/view/appView';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements IAppView {
    news: News;
    sources: Sources;

    public constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: EverythingEndpointResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourceEndpointResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

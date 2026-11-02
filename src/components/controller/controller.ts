import type { IAppController } from '../types/controller/controller';
import type { GenericCallback } from '../types/controller/controller-global-types';
import { ApiEndpoints } from '../types/news-api/endpoints/endpoints';
import type { EverythingEndpointResponse } from '../types/news-api/endpoints/everything/response';
import type { SourceEndpointResponse } from '../types/news-api/endpoints/sources/response';
import AppLoader from './appLoader';

class AppController extends AppLoader implements IAppController {
    public getSources(callback: GenericCallback<SourceEndpointResponse>): void {
        super.getResp(
            {
                endpoint: ApiEndpoints.SOURCES,
            },
            callback
        );
    }

    public getNews(e: Event, callback: GenericCallback<EverythingEndpointResponse>): void {
        let target = e.target! as HTMLElement;
        const newsContainer = e.currentTarget! as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id')!;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: ApiEndpoints.EVERYTHING,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode! as HTMLElement;
        }
    }
}

export default AppController;

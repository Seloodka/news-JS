import AppController from '../controller/controller';
import type { IApp } from '../types/app/app';
import type { EverythingEndpointResponse } from '../types/news-api/endpoints/everything/response';
import type { SourceEndpointResponse } from '../types/news-api/endpoints/sources/response';
import { AppView } from '../view/appView';

class App implements IApp {
    controller: AppController;
    view: AppView;

    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        document
            .querySelector<HTMLDivElement>('.sources')!
            .addEventListener('click', (e: PointerEvent) =>
                this.controller.getNews(e, (data: Readonly<EverythingEndpointResponse>) => this.view.drawNews(data))
            );
        this.controller.getSources((data: Readonly<SourceEndpointResponse>) => this.view.drawSources(data));
    }
}

export default App;

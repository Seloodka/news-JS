import type AppController from '../../controller/controller';
import type AppView from '../../view/appView';

interface IApp {
    controller: AppController;
    view: AppView;

    start: () => void;
}

export type { IApp };

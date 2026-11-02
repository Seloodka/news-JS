import type { GenericCallback } from '../types/controller/controller-global-types';
import type { ILoader, RequestOptions, RequestData, UrlOptions } from '../types/controller/loader';
import type { ApiEndpoints, RequiredRequestOptions } from '../types/news-api/endpoints/endpoints';

class Loader implements ILoader {
    public baseLink: string;
    public options: RequiredRequestOptions;

    public constructor(baseLink: string, options: RequiredRequestOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: RequestData,
        callback: GenericCallback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: RequestOptions, endpoint: ApiEndpoints): string {
        const urlOptions: UrlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load<T>(
        method: string,
        endpoint: ApiEndpoints,
        callback: GenericCallback<T>,
        options: RequestOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<T> => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;

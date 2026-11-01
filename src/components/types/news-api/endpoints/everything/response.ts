import type { Source } from '../sources/response';

type ArticleSource = Pick<Source, 'id' | 'name'>;

interface Article {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface EverythingEndpointResponse {
    status: 'ok';
    totalResults: number;
    articles: Article[];
}

export type { EverythingEndpointResponse, Article };

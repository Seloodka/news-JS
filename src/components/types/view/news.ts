import type { Article } from '../news-api/endpoints/everything/response';

interface INews {
    draw: (data: Article[]) => void;
}

export type { INews };

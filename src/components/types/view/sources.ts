import type { Source } from '../news-api/endpoints/sources/response';

interface ISources {
    draw: (data: Source[]) => void;
}

export type { ISources };

type ArticleSortOrders = 'relevancy' | 'popularity' | 'publishedAt';

interface EverythingEndpointRequest {
    [key: string]: string | number;

    q?: string;
    searchIn?: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: string;
    sortBy?: ArticleSortOrders;
    pageSize?: number;
    page?: number;
}

export type { EverythingEndpointRequest };

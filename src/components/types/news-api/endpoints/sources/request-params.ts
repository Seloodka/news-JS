type SourceCategories = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';

interface SourceEndpointRequest {
    [key: string]: string;

    category?: SourceCategories;
    language?: string;
    country?: string;
}

export type { SourceEndpointRequest };

interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface SourceEndpointResponse {
    status: 'ok';
    sources: Source[];
}

export type { Source, SourceEndpointResponse };

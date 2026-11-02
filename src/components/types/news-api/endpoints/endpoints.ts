enum ApiEndpoints {
    EVERYTHING = 'everything',
    SOURCES = 'sources',
}

interface RequiredRequestOptions {
    apiKey: string;
}

export { ApiEndpoints };
export type { RequiredRequestOptions };

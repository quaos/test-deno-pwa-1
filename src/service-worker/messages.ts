export interface HelloMessage {
    messageType: "hello";
    from: string;
}

export interface CacheUpdatedMessage {
    messageType: "cacheUpdated";
    request: Request;
    response: Response;
}

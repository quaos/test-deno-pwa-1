declare global {
    var clients: Clients;
    
    function postMessage(message: any): any;

    interface ServiceWorkerMessageEvent {
        data: any;
    }
}

export {};

import { Injectable } from "@angular/core";
import { QueueingSubject } from 'queueing-subject'
import websocketConnect from 'rxjs-websockets'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class WebSocketService {

    public messages: Observable<{value: number}[]>
 
    constructor() {
        const input = new QueueingSubject<string>()
        const { messages } = websocketConnect('ws://localhost:8999', input)
        this.messages = messages.pipe(
            map(x => JSON.parse(x))
        );
    }


}
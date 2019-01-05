import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { TransactionFactory } from './utility/transaction.factory';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const transactionFactory = new TransactionFactory(3);

wss.on('connection', (ws: WebSocket) => {
    setInterval(() => {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify(transactionFactory.state));
        }
    }, 3000);
});


//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().toString()}`);
});
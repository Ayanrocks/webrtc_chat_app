import * as express from 'express';
import { createServer, Server } from 'http'; //new

export class ChatServer {
    public static readonly PORT: number = 5000;
    private app: express.Application;
    private port: string | number;
    private server: Server; // new

    constructor() {
        this.createApp()
        this.config()
        this.createServer(); // new
        this.listen()

    }

    private createApp(): void {
        this.app = express();
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private listen(): void {
        // new
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }

    // new
    private createServer(): void {
        this.server = createServer(this.app);
    }

    public getApp(): express.Application {
        return this.app;
    }
}
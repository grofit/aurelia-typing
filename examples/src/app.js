export class App
{
    constructor() {
        this.logs = [];
    }

    typingStarted = () => {
        this.logs.push("- Started typing @ " + new Date());
    }

    typingStopped = () =>  {
        this.logs.push("- Stopped typing @ " + new Date());
    }
}
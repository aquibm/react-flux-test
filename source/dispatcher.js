export class Dispatcher {
    constructor() {
        this.lastID = 0;
        this.callbacks = {};
    }

    register(callback) {
        const id = 'CID_' + this.lastID++;
        this.callbacks[id] = callback;
        return id;
    }

    dispatch(action) {
        for (var id in this.callbacks) {
            this.callbacks[id](action);
        }
    }

    waitFor(ids) {
        // TODO
    }
}

export class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type) {
        if(this.events[type]) {
            this.events[type].forEach((listener) => {
                listener();
            });
        }
    }

    removeListener(type, listener) {
        if(this.events[type]) {
            this.events[type].splice(this.events[type].indexOf(listener), 1);
        }
    }
}

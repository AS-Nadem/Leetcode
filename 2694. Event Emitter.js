class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * Subscribe to an event
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object} An object with an `unsubscribe` method
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        const callbacks = this.events.get(eventName);
        callbacks.push(callback);

        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        };
    }

    /**
     * Emit an event
     * @param {string} eventName
     * @param {Array} args
     * @return {Array} The results of all callback invocations
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }
        const callbacks = this.events.get(eventName);
        return callbacks.map(callback => callback(...args));
    }
}

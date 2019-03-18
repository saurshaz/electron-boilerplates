

module.exports = (ipcRenderer) => {
    return {
        io: {
            emit: (eventName, data) => {
                console.log(`sending event ${eventName}`)
                ipcRenderer.send(eventName, data);
            },
            register: (eventName, handler) => {
                console.log(`registering ${eventName}`)
                ipcRenderer.on(eventName, handler);
            }
        }
    };
};
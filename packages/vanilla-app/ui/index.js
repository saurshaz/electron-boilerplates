const { io } = require('main-js');

function showUpdateNotification() {
  console.log('[app] Update Available');

  // eslint-disable-next-line no-new
  new window.Notification('App Update Ready', {
    body: 'Relaunch the app for it to take effect',
    silent: true,
    sticky: true,
  });
}

module.exports.frontendCustomLogic = () => {
    console.log(`**** VANILLA APP :: renderer process *****`);
    io.register('a-event', (event, data) => {
      console.log(' **** VANILLA APP :: a-event handler (main thread) ****')
    });
    io.emit('a-event');
}
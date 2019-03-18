// const { io } = require('main-js');
// import 'fs';
import * as React from 'react';
import {render} from 'react-dom';
import { FriendsList } from "./ui/app";
// import './css/index.css';

(async function() {
    render(<FriendsList/>, document.getElementById('container'));
})();

function showUpdateNotification() {
  console.log('[app] Update Available');

  // eslint-disable-next-line no-new
  // new window.Notification('App Update Ready', {
  //   body: 'Relaunch the app for it to take effect',
  //   silent: true,
  //   sticky: true,
  // });
}

// module.exports.frontendCustomLogic = () => {
//     console.log(`**** REACT APP :: renderer process *****`);
//     io.register('a-event', (event, data) => {
//       console.log(' **** REACT APP :: a-event handler (main thread) ****')
//     });
//     io.emit('a-event');
// }
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log(`process.env.app_type is ${process.env.app_type}`);
// const { frontendCustomLogic } = require(`${process.env.app_type}-app`);
// frontendCustomLogic();
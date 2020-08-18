'use strict';

const bleacon = require('bleacon');

bleacon.startScanning();
bleacon.on("discover", bleacon => {
  if (bleacon.uuid !== 'e1b85f6d5245434c89a247af2ecf6929') {
    return;
  }
  console.log(bleacon);
});

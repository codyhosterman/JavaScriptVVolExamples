const crypto = require('crypto');
var readlineSync = require('readline-sync');
var arrayID = readlineSync.question('Please enter a FlashArray ID: ');
var hash = crypto.createHash('md5').update(arrayID).digest('byte');
var hashA = crypto.createHash('md5').update(hash).digest('byte');
hashA[6] = hashA[6] & 0x0f 
hashA[6] = hashA[6] | 0x30 
hashA[8] = hashA[8] & 0x3f 
hashA[8] = hashA[8] | 0x80
var scID = toHexString(hashA);
console.log("vvol:" + scID.substring(0,16) + "-" + scID.substring(16,32)); 

function toHexString(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
  }
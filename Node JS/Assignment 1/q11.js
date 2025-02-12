const os = require('os');
console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Home directory: ${os.homedir()}`);
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`Total memory: ${totalMemory} bytes`);
console.log(`Free memory: ${freeMemory} bytes`);
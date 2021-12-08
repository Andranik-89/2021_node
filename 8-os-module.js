const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

console.log(`system uptime: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    releease: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
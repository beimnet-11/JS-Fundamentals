const { argv } = require('node:process');

console.log(argv[5])

if (argv[2]) {
    console.log(argv[2])
} else {
    console.log('No arguments')
}
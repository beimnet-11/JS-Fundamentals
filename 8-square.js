const { argv } = require('node:process');

let base = Number(argv[2])

if (isNaN(base)) {
    console.log('Missing size')
} else {
    for (let i=0; i < base; i++) {
        for (let j=0; j < base; j++) {
            process.stdout.write('X')
        }
        console.log('')
    }
}
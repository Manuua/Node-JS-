const {EventEmitter} = require('events')

const ev = new EventEmitter()


ev.on('saySomething', (message) => {
    console.log('Eu vi você')
})

ev.emit('saySomething', "Mani")
/*
 * Serve content over a socket
 */

module.exports = function (socket) {
    
    console.log('user connected');
    
    socket.on('test', function(value) {
        
        console.log('Got test: ', value);
        
        //send test to everyone except sender
        socket.broadcast.emit('test', value);
    })
};
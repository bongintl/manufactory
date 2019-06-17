var JSMpeg = require('./lib/jsmpeg/index');

var player = new JSMpeg.Player( 'ws://' + location.hostname + ':8082', {} );

document.body.appendChild( player.renderer.canvas );

console.log( player );


// var api = require('./api');

// api("").then( r => console.log( r ) );
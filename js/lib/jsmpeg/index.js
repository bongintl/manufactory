var JSMpeg = require('./jsmpeg');

require('./video-element')( JSMpeg );
require('./player')( JSMpeg );
require('./buffer')( JSMpeg );
require('./ajax')( JSMpeg );
require('./ajax-progressive')( JSMpeg );
require('./websocket')( JSMpeg );
require('./ts')( JSMpeg );
require('./decoder')( JSMpeg );
require('./mpeg1')( JSMpeg );
require('./mp2')( JSMpeg );
require('./webgl')( JSMpeg );
require('./canvas2d')( JSMpeg );
require('./webaudio')( JSMpeg );

module.exports = JSMpeg;
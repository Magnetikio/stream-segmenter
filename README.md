# stream-segmenter

Stream wrapper that outputs segments of the specified length (or less)

```
var segmenter = require( 'stream-segmenter' )

var someStream = XYZ

someStream.segmenter( file, { chunkSize: 256000 }, function( id, segment ) {
})

 ```

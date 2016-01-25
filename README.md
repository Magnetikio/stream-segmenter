# stream-segmenter

Stream wrapper that outputs segments of the specified length (or less)

## Usage

```
var segmenter = require( 'stream-segmenter' )

var someStream = XYZ

someStream.segmenter( file, { chunkSize: 256000 }, function( id, segment ) {
})

 ```
The original purpose was to take audio/video data and generate MPEGTS segments (through ffmpeg or a custom coder/decoder function).

## Installation

```% npm install --save stream-segmenter```

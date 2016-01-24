function Segmenter( input, options, segmentReady, finishCallback ) {
  var stream = input.createReadStream(),
      index = 0

  var segment, segmentBytes, totalBytes = 0, segmentId = 0

  stream.on( 'data', function( chunk ) {

    if( segmentBytes >= options.chunkSize || segment == null ) {

      if( segment ) {
        segmentReady( segmentId, segment )
      }

      segment = new Buffer([])
      segmentBytes = 0
      segmentId++
    }

    if( segmentBytes < options.chunkSize ) {
      segment = Buffer.concat( [ segment, chunk ] )
      segmentBytes += chunk.length
      totalBytes += chunk.length
    }

    if( totalBytes == input.length ) {
      segmentReady( segmentId, segment )
      finishCallback()
    }

    index++
  })

}

module.exports = Segmenter

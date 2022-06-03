const knop = document.querySelector('.toevoegen')

knop.addEventListener('click', event => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(mediaStream => {
      document.querySelector('video').srcObject = mediaStream

      const track = mediaStream.getVideoTracks()[0]
      imageCapture = new ImageCapture(track)
    })
    .catch(error => ChromeSamples.log(error))
})

document.querySelector('#getUserMediaButton').addEventListener('click', knop)

/* https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API */

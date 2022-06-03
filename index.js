const knop = document.querySelector('.toevoegen')

knop.addEventListener('click', event => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(mediaStream => {
      document.querySelector('video').srcObject = mediaStream

      const track = mediaStream.getVideoTracks()[0]
    })
    /* https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API */
})

document.querySelector('.toevoegen').addEventListener('click', knop)

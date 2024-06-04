import { useFullscreenVideo } from '../../src/index'

const neverGonnaGiveYouUp = 'https://ia801509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4'

export default function App() {
  const { refs, request, exit } = useFullscreenVideo({
    onChange: console.debug,
    onError: console.error
  })

  return (
    <main>
      <div ref={refs.setContainer}>
        <Video ref={refs.setVideo} src={neverGonnaGiveYouUp} />
        <button onClick={exit}>
          Exit fullscreen
        </button>
      </div>

      <button onClick={request}>
        Request fullscreen
      </button>
    </main>
  )
}

const Video = React.forwardRef(VideoImpl)
function VideoImpl({ src }, ref) {
  return (
    <video
      muted
      autoPlay
      playsInline
      {...{ ref, src }}
    />
  )
}

import { useFullscreenVideo } from '../../src/index'

export function Video({ url }) {
  const { refs, request, exit } = useFullscreenVideo({
    options: { useVideoElement: true },
    onChange: console.debug,
    onError: console.error
  })

  return (
    <main>
      <div ref={refs.setContainer}>
        <VideoWrapper ref={refs.setVideo} src={url} />
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

const VideoWrapper = React.forwardRef(VideoImpl)
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

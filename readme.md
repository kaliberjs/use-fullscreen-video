# useFullscreenVideo
Simplified cross-browser fullscreen video behavior.

## Motivation
This React hook simplifies the process of managing fullscreen video playback across different browsers, handling the complexities of vendor-specific APIs for you. It also handles the fallback scenario, in case the browser (e.g. `iOS Safari`) does not support setting a `HTMLDivElement` to fullscreen (but does allow `HTMLVideoElement` to do so).

## Installation
```bash
yarn add @kaliber/use-fullscreen-video
```

## Usage
```jsx
import { useFullscreenVideo } from '@kaliber/use-fullscreen-video'

function Component() {
  const { refs, request, exit } = useFullscreenVideo({
    onChange: console.debug,
    onError: console.error
  })

  return (
    <main>
      <div ref={refs.setContainer}>
        <video ref={refs.setVideo} src={neverGonnaGiveYouUp} />
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
```

## Third party players
Implementations between third party players may vary. 
Make sure you have access to the internal `video` element for the broadest cross-browser support.

#### using `ReactPlayer`
```jsx
import { useFullscreenVideo } from '@kaliber/use-fullscreen-video'
import ReactPlayer from 'react-player'

function Component() {
  const videoRef = React.useRef(null)
  const { refs, request, exit } = useFullscreenVideo({
    onChange: console.debug,
    onError: console.error
  })

  return (
    <main>
      <div ref={refs.setContainer}>
        <ReactPlayer 
          ref={videoRef} 
          // Make sure you add a `src` that uses ReactPlayer's `FilePlayer`:
          src={neverGonnaGiveYouUp} 
          onReady={() => {
            // Video ref is only available when video is ready:
            const videoPlayerElement = videoRef.current.getInternalPlayer()
            refs.setVideo(videoPlayerElement)
          }}
        />
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
```

### Hook Options
The `useFullscreenVideo` hook accepts an options object:

* **onChange(event):** A callback function that is triggered whenever the fullscreen state changes. The `isFullscreen` argument will be an `Event`.
* **onError(error):** A callback function invoked if an error occurs during fullscreen transitions. The `error` argument will contain the error details.

### Returned Values

The hook returns an object containing the following:

#### Values
* **refs:** An object with `setContainer` and `setVideo` setters for assigning references to the container element and video element, respectively.
* **element:** The DOM element that is currently in fullscreen mode (if any).
* **isFullscreen:** A boolean value indicating whether the video is in fullscreen mode.
* **isEnabled:** A boolean value indicating whether fullscreen functionality is supported by the browser.
#### Methods
* **`request(options)`:** Initiates a fullscreen request on either the designated container or the video element itself, depending on browser implementation. The `options` argument allows for potential browser-specific configuration.
* **`exit()`:** Exits the fullscreen mode.

---
 
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBxajhkc2g1Y3dpaGY1ZWZ5NzAwdnV3eXJpY3pxaWVhMHRodmYyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pThMAKS4BOtz8d2/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.

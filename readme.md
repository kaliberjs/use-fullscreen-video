# BEFORE YOU PUBLISH
- Read [Libraries van Kaliber](https://docs.google.com/document/d/1FrJi-xWtKkbocyMVK5A5_hupjl5E4gD4rDvATDlxWyc/edit#heading=h.bb3md3gyf493).
- Make sure your example works.
- Make sure your package.json is correct. Have you change the library title?
- Update the bin/postInstall script. It should refer to your library.
- Update the `<title>` tag in `index.html.js`.
- Remove 'BEFORE YOU PUBLISH' and 'PUBLISHING' from this document.

# PUBLISHING
- Make sure you are added to the kaliber organization on NPM
- run `yarn publish`
- Enter a correct version, we adhere to semantic versioning (semver)
- run `git push`
- run `git push --tags`
- Send everybody an email to introduce them to your library!

# Library title
Short description.

## Motivation
Optionally add a bit of text describing why this library exists.

## Installation

```
yarn add @kaliber/use-fullscreen-video
```

## Usage
```jsx
import { useFullscreenElement } from '@kaliber/use-fullscreen-video'

function Component() {
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
```
 
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBxajhkc2g1Y3dpaGY1ZWZ5NzAwdnV3eXJpY3pxaWVhMHRodmYyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pThMAKS4BOtz8d2/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.

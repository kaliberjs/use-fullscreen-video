import Video from './Video.universal'

const neverGonnaGiveYouUp = 'https://ia801509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4'

export default function App() {
  return (
    <main>
      <Video url={neverGonnaGiveYouUp} />
    </main>
  )
}

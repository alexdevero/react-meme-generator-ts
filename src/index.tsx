// Import React, react-dom & dom-to-image-more
import * as React from 'react'
import { render } from 'react-dom'
import domtoimage from 'dom-to-image-more'

// Import components
import Content from './components/content'
import Form from './components/form'
import Result from './components/result'

// Import styles
import './styles/styles.css'

// App component
function App() {
  // Create refs
  let contentContainerRef = React.useRef<HTMLElement | null>(null)
  let resultContainerRef = React.useRef<HTMLElement | null>(null)

  // Create useState hooks
  const [images, setImages] = React.useState([])
  const [activeImage, setActiveImage] = React.useState('')
  const [textTop, setTextTop] = React.useState('')
  const [textBottom, setTextBottom] = React.useState('')
  const [isMemeGenerated, setIsMemeGenerated] = React.useState(false)

  // Fetch images from https://api.imgflip.com/get_memes
  async function fetchImage() {
    const imgData = await fetch('https://api.imgflip.com/get_memes').then(res => res.json()).catch(err => console.error(err))
    const { memes } = await imgData.data

    await setImages(memes)
    await setActiveImage(memes[0].url)
  }

  // Handle input elements
  function handleInputChange(event) {
    if (event.target.name === 'text-top') {
      setTextTop(event.target.value)
    } else {
      setTextBottom(event.target.value)
    }
  }

  // Choose random images from images fetched from api.imgflip.com
  function handleImageChange() {
    const image = images[Math.floor(Math.random() * images.length)]

    setActiveImage(image.url)
  }

  // Handle image upload via file input
  function handleImageInputChange(event) {
    setActiveImage(window.URL.createObjectURL(event.target.files[0]))
  }

  // Handle meme generation
  function handleMemeGeneration() {
    // Remove any existing images
    if (resultContainerRef.current.childNodes.length > 0) {
      resultContainerRef.current.removeChild(resultContainerRef.current.childNodes[0])
    }

    // Generate meme image from the content of 'content' div
    domtoimage.toPng(contentContainerRef.current).then((dataUrl) => {
      // Create new image
      const img = new Image()

      // Use url of the generated image as src
      img.src = dataUrl

      // Append new image to DOM
      resultContainerRef.current.appendChild(img)

      // Update state for isMemeGenerated
      setIsMemeGenerated(true)
    })
  }

  // Handle resetting the meme generator/removing existing pictures
  function handleMemeReset() {
    resultContainerRef.current.removeChild(resultContainerRef.current.childNodes[0])

    setIsMemeGenerated(false)
  }

  // Fetch images from https://api.imgflip.com/get_memes when app mounts
  // and when app re-renders (change of image, image reset/removal)
  React.useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className="App">
      {/* Add Form component */}
      <Form
        textTop={textTop}
        textBottom={textBottom}
        handleImageInputChange={handleImageInputChange}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleMemeGeneration={handleMemeGeneration}
        handleMemeReset={handleMemeReset}
        isMemeGenerated={isMemeGenerated}
      />

      {/* Add Content component */}
      <Content
        activeImage={activeImage}
        contentContainerRef={contentContainerRef}
        textBottom={textBottom}
        textTop={textTop}
      />

      {/* Add Result component */}
      <Result resultContainerRef={resultContainerRef} />
    </div>
  )
}

// Render the App in the DOM
const rootElement = document.getElementById('root')
render(<App />, rootElement)

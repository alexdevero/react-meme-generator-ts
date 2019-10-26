import * as React from 'react'

interface ContentInterface {
  activeImage: string;
  contentContainerRef: React.RefObject<any>;
  textBottom: string;
  textTop: string;
}

const Content = (props: ContentInterface) => {
  return (
    <>
      <div className="content" ref={props.contentContainerRef}>
        <img src={props.activeImage} alt="Meme" />
        <h1>{props.textTop}</h1>
        <h2>{props.textBottom}</h2>
      </div>
    </>
  )
}

export default Content

// Import React
import * as React from 'react'

// Interface for Form Component
interface FormInterface {
  isMemeGenerated: boolean;
  textBottom: string;
  textTop: string;
  handleImageChange: () => void;
  handleImageInputChange: (event: React.ChangeEvent) => void;
  handleInputChange: (event: React.ChangeEvent) => void;
  handleMemeGeneration: () => void;
  handleMemeReset: () => void;
}

// Form component
const Form = (props: FormInterface) => {
  return (
    <div className="form">
      <div className="form__inputs">
        {/* Input for the text at the top */}
        <input
          name="text-top"
          placeholder="Text top"
          type="text"
          value={props.textTop}
          onChange={props.handleInputChange}
        />

        {/* Input for the text at the bottom */}
        <input
          name="text-bottom"
          placeholder="Text bottom"
          type="text"
          value={props.textBottom}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="form__btns">
        {/* Button to load random image from api.imgflip.com */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.handleImageChange}
        >
          Change image
        </button>

        {/* 'Button' to load image from disk */}
        <label
          className="btn btn-primary"
          htmlFor="fileInput"
        >
          Load image
          <input id="fileInput" name="fileInput" type="file" accept=".jpg, .jpeg, .png" onChange={props.handleImageInputChange} hidden />
        </label>

        {/* Button to generate png image of the meme */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.handleMemeGeneration}
        >
          Generate meme
        </button>

        {/* Button to remove the meme image from the DOM */}
        {props.isMemeGenerated && <button
          className="btn btn-danger"
          type="button"
          onClick={props.handleMemeReset}
        >
          Reset
        </button>}
      </div>
    </div>
  )
}

export default Form

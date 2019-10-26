import * as React from 'react'

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

const Form = (props: FormInterface) => {
  return (
    <div className="form">
      <div className="form__inputs">
        <input
          name="text-top"
          placeholder="Text top"
          type="text"
          value={props.textTop}
          onChange={props.handleInputChange}
        />
        <input
          name="text-bottom"
          placeholder="Text bottom"
          type="text"
          value={props.textBottom}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="form__btns">
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.handleImageChange}
        >
          Change image
        </button>

        <label
          className="btn btn-primary"
          htmlFor="fileInput"
        >
          Load image
          <input id="fileInput" name="fileInput" type="file" accept=".jpg, .jpeg, .png" onChange={props.handleImageInputChange} hidden />
        </label>

        <button
          className="btn btn-primary"
          type="button"
          onClick={props.handleMemeGeneration}
        >
          Generate meme
        </button>

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

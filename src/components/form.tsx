import * as React from 'react'

interface FormInterface {
  isMemeGenerated: boolean;
  textBottom: string;
  textTop: string;
  handleImageChange: () => void;
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
          className="btn-primary"
          type="button"
          onClick={props.handleImageChange}
        >
          Change image
        </button>

        <button
          className="btn-primary"
          type="button"
          onClick={props.handleMemeGeneration}
        >
          Generate meme
        </button>

        {props.isMemeGenerated && <button
          className="btn-danger"
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

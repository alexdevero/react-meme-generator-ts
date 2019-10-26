import * as React from 'react'

interface ResultInterface {
  resultContainerRef: React.RefObject<any>;
}

const Result = (props: ResultInterface) => {
  return (
    <div ref={props.resultContainerRef} className="result"></div>
  )
}

export default Result

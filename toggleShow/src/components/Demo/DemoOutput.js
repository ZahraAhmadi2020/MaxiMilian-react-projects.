import React,{memo} from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = (props) => {
  return (
    // <p>{props.show ? 'Hello zahra' : ''}</p>
    <MyParagraph>{props.show ? 'Hello zahra' : ''}</MyParagraph>
  )
}

export default memo(DemoOutput)

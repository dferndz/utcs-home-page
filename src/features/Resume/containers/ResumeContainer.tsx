import React from 'react'
import {Container} from 'react-bootstrap'

import PDFViewer from '../components/PDFViewer'

const ResumeContainer = () => {
  return (
    <Container className="mt-4">
      <PDFViewer/>
    </Container>
  )
}

export default ResumeContainer;
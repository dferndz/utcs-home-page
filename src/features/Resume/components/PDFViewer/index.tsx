import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Document, Page, pdfjs} from 'react-pdf'
import resume_pdf from '../../../../assets/Daniel_Fernandez_UTAustin_2020.pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer = () => {

  return (
  <div>
    <Row className="justify-content-end">
      <Col md={3}>
        <a className="btn btn-secondary" href={resume_pdf}>Download Resume</a>
      </Col>
    </Row>
    <Document file={resume_pdf}>
      <Page scale={1.8} pageNumber={1} />
    </Document>
  </div>
  )
}

export default Viewer;
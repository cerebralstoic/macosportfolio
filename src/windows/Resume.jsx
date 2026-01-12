import React, { useState } from 'react';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import { Download } from 'lucide-react';
import { pdfjs, Document, Page } from 'react-pdf';
import useWindowStore from '#store/window';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const Resume = () => {
  const { windows } = useWindowStore();
  const isMaximized = windows.resume.isMaximized;

  const [numPages, setNumPages] = useState(0);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a href="files/resume.pdf" download title="Download Resume">
          <Download className="icon" />
        </a>
      </div>

      <div className="resume-scroll">
        <Document
          file="files/resume.pdf"
           externalLinkTarget="_blank"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`resume-page-${index}`}
              pageNumber={index + 1}
              scale={isMaximized ? 1.3 : 1}
              renderTextLayer={false}        
              renderAnnotationLayer={true} 
            />
          ))}
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, 'resume');
export default ResumeWindow;

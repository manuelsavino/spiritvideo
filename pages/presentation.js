import { useState } from 'react';
import Head from 'next/head';
import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Head>
        <title>Spirit Flight Attendant Orientation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        className='flex flex-col justify-items-center items-center'
        id='ResumeContainer'
      >
        <Document
          className={'PDFDocument'}
          file='/spiritFlightAttendantOrientation.pdf'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className={'PDFPage'}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderInteractiveForms={true}
          />
        </Document>

        <div className='w-full flex items-center mt-3 justify-center '>
          <p className='pr-4'>Page {pageNumber}</p>
          <button
            disabled={pageNumber === 1}
            className='bg-blue-600 border border-transparent rounded-md py-2 px-2 text-base font-medium text-white hover:bg-blue-700 sm:w-auto'
            onClick={() => setPageNumber(pageNumber === 1 ? 1 : pageNumber - 1)}
          >
            Previous
          </button>
          <button
            disabled={pageNumber === 37}
            className='bg-blue-600 border border-transparent rounded-md py-2 px-2 text-base font-medium text-white hover:bg-blue-700 sm:w-auto'
            onClick={() =>
              setPageNumber(pageNumber === 37 ? 37 : pageNumber + 1)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

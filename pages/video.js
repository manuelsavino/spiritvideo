import { useState } from 'react';
import Head from 'next/head';
import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { SizeMe } from 'react-sizeme';

export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(2);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8'>
        <Document file='/spiritFA.pdf' onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className='flex'>
          <button
            onClick={() => setPageNumber(pageNumber === 1 ? 1 : pageNumber - 1)}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setPageNumber(pageNumber === 37 ? 37 : pageNumber + 1)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

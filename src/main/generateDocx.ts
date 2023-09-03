import fs from 'fs';

import path from 'path';

const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

export default function generateDocx(pathDocx: any, userData: any) {
  const content = fs.readFileSync(path.resolve(__dirname, pathDocx), 'binary');
  // eslint-disable-next-line prefer-template
  console.log('aqui generateDocx: ' + userData);
  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Load the docx file as binary content

  // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
  doc.render(userData);

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: 'DEFLATE',
  });

  fs.writeFileSync(path.resolve(__dirname, 'test-template-output.docx'), buf);
}

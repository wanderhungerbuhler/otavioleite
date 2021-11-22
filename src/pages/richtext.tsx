import React, { useState } from 'react';

import parse from 'html-react-parser';

import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Carregando...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

export default function RichText() {
  const [value, setValue] = useState('');

  if (value) {
    localStorage.setItem('@richtext', JSON.stringify(value));
  }

  console.log(parse(value))

  return (
    <div style={{ width: '780px', margin: '0 auto', height: '500px' }}>
      <QuillNoSSRWrapper modules={modules} value={value} onChange={(e) => setValue(e)} formats={formats} theme="snow" />
    </div>
  )
}

import React from 'react'
import { useState,useRef } from 'react'

const FileUpload = () => {
    const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div>
        fafaf
        <input type='file' style={{display:'none'}} />
        <button className='w-5/12 h-6/12 text-lg font-semibold flex flex-col items-center justify-center gap-10 text-blue-300 bg-white cursor-pointer '>
            <span className='material-symbols-outlined icon'>upload</span>upload file
        </button>
    </div>
  )
}

export default FileUpload
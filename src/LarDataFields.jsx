import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import LoadingIcon from './common/LoadingIcon.jsx'

const url = 'https://raw.githubusercontent.com/cfpb/hmda-documentation/master/markdown/LAR_data_fields.md'

const LarDataFields = () => {
  const [data, setData] = useState(null)

  useEffect(function (){
    fetch(url).then(res => {
      res.text().then(setData)
    })
  }, [])

  useEffect(function (){
    if(!data) return
    const { hash } = window.location
    if(hash) {
      setTimeout(() => {
        const stripped = hash.replace(/[#_]/g, '')
        const id = stripped + stripped
        const element = document.getElementById(id)
        console.log(element)
        if (element) setTimeout(()=>element.scrollIntoView(), 0)
      }, 0)
    }
  })

  return (
    <div className="Markdown-Wrapper">
    {data
      ? <Markdown>{data}</Markdown>
      : <LoadingIcon/>
    }
    </div>
  )
}

export default LarDataFields

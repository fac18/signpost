import React from 'react'
import { ReactComponent as MagnifyingGlass } from '../BufferPage/asset/magnifying-glass.svg'
import './BufferPage.css'

const BufferPage = () => {
  return (
    <div className="buffer">
      <MagnifyingGlass />
      <p>Finding community contributions...</p>
    </div>
  )
}

export default BufferPage

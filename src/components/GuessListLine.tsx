import React from 'react'

interface GuessListLineProps {
  item: number;
  fixed: number;
  loose: number;
}

const GuessListLine = (line: GuessListLineProps) => {
  return (
    <div className='row'>
      <div className='col-6'>{ line.item }</div>
      <div className='col-3'>{ line.fixed }</div>
      <div className='col-3'>{ line.loose }</div>
    </div>
  )
}

export default GuessListLine
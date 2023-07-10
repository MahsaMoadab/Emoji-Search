import React from 'react'

export default function CartView({ data, handleModalDetails }) {
  const setData = data ? data.map((emoji, index) => {
    return (
      <div key={index} className="card_view_item" onClick={()=> handleModalDetails(emoji)}>
        <span className='emoji'>{emoji.character}</span>
        <span className='name'>{emoji.unicodeName}</span>
      </div>)
  }) : null;
  return (
    <div className='card_view'>
      {setData}
    </div>
  )
}

import React from 'react';

function Card(props){
  return (
    <div className="List-cards">
      <div className="Card">
        <button type="button" onClick={() => props.onClickDelete(props.id)}>delete</button>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>  
  )
}

export default Card;
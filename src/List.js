import React from 'react';
import Card from './Card.js';


function List(props){
  return(
    <section className="List" >
      <header className="List-header">
        <h2>{props.header}</h2>
        <button type="button"
        onClick={() => props.onClickAdd(props.id)}>Add New Card</button>
      </header>
      { props.cardIds.map ( (card, i) => {
        return(
          <Card 
          title={card.title}
          content={card.content}
          key={i}
          id={card.id}
          onClickDelete={props.onClickDelete}></Card>
        )
      })
      }
    </section>
  )
}

List.defaultProps = {
  onClickAdd: () => {},
}

export default List;
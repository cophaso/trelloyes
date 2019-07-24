import React from 'react';
import Card from './Card.js';


function List(props){
  return(
    <section className="List" >
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      { props.cardIds.map ( (card, i) => {
        return(
        <Card title={card.title}
        content={card.content}
        key={i}></Card>
        )
      })
      }
    </section>
  )
}

export default List;
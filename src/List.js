import React from 'react';
import Card from './Card.js';
import STORE from './store.js';

function List(props){
  return(
    <section className="List" >
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      { props.cardIds.map ( (cardId, i) => {
        return(
        <Card title={STORE.allCards[cardId].title}
        content={STORE.allCards[cardId].content}
        key={i}></Card>
        )
      })
      }
    </section>
  )
}

export default List;
import React from 'react'
import Card from '../card/Card';
import './cardList.css'
export default function CardList(props) {
    return (
      <div className="card-list">
       {
           props.monsters.map(monster =>{
               return(
                   <Card monster = {monster}/>
               )
           })
       }
      </div>
    );
}

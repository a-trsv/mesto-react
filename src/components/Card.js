import React from 'react'

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <article className="element">
            <button aria-label="Удалить карточку" type="button" className="element__delete-button" />
            <img onClick={handleClick} className="element__image" src={props.card.link} alt={`Крупным планом: ${props.card.name}`} />
            <div className="element__place">
            <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-area">
                    <button aria-label="Оцените фотографию!" type="button" className="element__like-button" />
                    <span className="element__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card
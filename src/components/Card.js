import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__delete-button ${isOwn ? '' : 'element__delete-button_type_hidden'}`
    )
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id)
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
    )

    function handleClick() {
        props.onCardClick(props.card)
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <article className="element">
            <button onClick={handleDeleteClick} aria-label="Удалить карточку" type="button" className={cardDeleteButtonClassName} />
            <img onClick={handleClick} className="element__image" src={props.card.link} alt={`Крупным планом: ${props.card.name}`} />
            <div className="element__place">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-area">
                    <button onClick={handleLikeClick} aria-label="Оцените фотографию!" type="button"
                        className={cardLikeButtonClassName} />
                    <span className="element__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card
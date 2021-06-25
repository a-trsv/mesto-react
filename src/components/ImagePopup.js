import React from 'react'

function ImagePopup(props) {
    return (
        <div className={`popup ${props.card && 'popup_active'}`}>
            <div className="popup__container popup__container_type_photo">
                <img className="popup__image" src={`${props.card.link}`} alt={`Крупным планом ${props.card.name}`} />
                <h2 className="popup__title popup__title_type_photo">{props.card.name}</h2>
                <button onClick={props.onClose}
                    aria-label="Закрыть окно просмотра" type="button"
                    className="popup__close-button popup__close-button_type_photo" />
            </div>
        </div>
    )
}

export default ImagePopup
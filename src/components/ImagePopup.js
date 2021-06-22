import React from 'react';

function ImagePopup() {
    return(
        <div className="popup popup_type_photo">
            <div className="popup__container popup__container_type_photo">
                <img className="popup__image" src="#" alt="#" />
                <h2 className="popup__title popup__title_type_photo" />
                <button aria-label="Закрыть окно просмотра" type="button" 
                className="popup__close-button popup__close-button_type_photo" />
            </div>
        </div>
    )
}

export default ImagePopup;
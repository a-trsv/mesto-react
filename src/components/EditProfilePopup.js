import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    function handleChangeName(evt) {
        setName(evt.target.value)
    }

    function handleChangeJob(evt) {
        setDescription(evt.target.value)
    }

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            saveButton="Сохранить"
        >
            <input
                type="text" id="inputName" name="inputName"
                placeholder="Введите Ваше имя"
                className="form__input form__input_type_name"
                minLength={2} maxLength={40} required
                onChange={handleChangeName}
            />
            <span className="form__error" id="inputName-error" />
            <input type="text" id="inputJob" name="inputJob"
                placeholder="Чем занимаетесь?"
                className="form__input form__input_type_job"
                minLength={2} maxLength={200} required
                onChange={handleChangeJob} />
            <span className="form__error" id="inputJob-error" />
        </PopupWithForm>

        // <div className={`popup ${props.isOpen && 'popup_active'}`}>
        //     <div className="popup__container">
        //         <h2 className="popup__title">{props.title}</h2>
        //         <form name={props.name} className={`form form_type_${props.name}`} noValidate>
        //             {props.children}
        //             <button type="submit" className="form__save-button">{props.saveButton}</button>
        //         </form>
        //         <button onClick={props.onClose} aria-label="Отменить изменения" type="button"
        //             className={`popup__close-button popup__close-button_type_${props.name}`} />
        //     </div>
        // </div>
    )
}

export default EditProfilePopup;

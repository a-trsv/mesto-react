import React from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from './EditProfilePopup'
import ImagePopup from './ImagePopup'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {

    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})
    const [currentUser, setCurrentUser] = React.useState('')

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData)
            })
            // Если сервер не ответил, выводим ошибку в консоль
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleUpdateUser(userData) {
        api.patchUserInfo(userData)
            .then((userData) => {
                setCurrentUser(userData)
                // console.log(userData)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
        setImagePopupOpen(true)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setImagePopupOpen(false)
        setSelectedCard({})
    }

    return (
        <div className="page__content">
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onUpdateUser={handleUpdateUser}
                    onClose={closeAllPopups}
                />
                {/* <PopupWithForm
                    name="edit"
                    title="Редактировать профиль"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    children={
                        <>
                            <input type="text" id="inputName" name="inputName"
                                placeholder="Введите Ваше имя" className="form__input form__input_type_name"
                                minLength={2} maxLength={40} required />
                            <span className="form__error" id="inputName-error" />
                            <input type="text" id="inputJob" name="inputJob"
                                placeholder="Чем занимаетесь?" className="form__input form__input_type_job"
                                minLength={2} maxLength={200} required />
                            <span className="form__error" id="inputJob-error" />
                        </>
                    }
                    saveButton="Сохранить"
                /> */}

                <PopupWithForm
                    name="add"
                    title="Новое место"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    children={
                        <>
                            <input type="text" id="inputAddTitle" name="inputAddTitle"
                                placeholder="Название" className="form__input form__input_type_addTitle"
                                minLength={2} maxLength={30} required />
                            <span className="form__error" id="inputAddTitle-error" />
                            <input type="url" id="inputURL" name="inputURL"
                                placeholder="Ссылка на картинку" className="form__input form__input_type_addURL" required />
                            <span className="form__error" id="inputURL-error" />
                        </>
                    }
                    saveButton="Сохранить"
                />

                <PopupWithForm
                    name="delete"
                    title="Вы уверены?"
                    onClose={closeAllPopups}
                    children={
                        <>
                        </>
                    }
                    saveButton="Да"
                />

                <PopupWithForm
                    name="avatar"
                    title="Обновить аватар"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    children={
                        <>
                            <input type="url" id="inputAvatar" name="inputAvatar"
                                placeholder="Ссылка на картинку" className="form__input form__input_type_addAvatar" required />
                            <span className="form__error" id="inputAvatar-error" />
                        </>
                    }
                    saveButton="Сохранить"
                />

                <ImagePopup
                    card={selectedCard}
                    isOpen={isImagePopupOpen}
                    onClose={closeAllPopups}
                />
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App

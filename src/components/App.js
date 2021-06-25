import React from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState('')


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
  }

  function closeAllPopups() {
  setEditAvatarPopupOpen(false)
  setEditProfilePopupOpen(false)
  setAddPlacePopupOpen(false)
  setSelectedCard('')
}



  return (
      <div className="page__content">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      
      {/*popup для изменения имени и деятельности - edit
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form name="editProfileForm" className="form form_type_edit" noValidate>
          <input type="text" id="inputName" name="inputName" placeholder="Введите Ваше имя" className="form__input form__input_type_name" minLength={2} maxLength={40} required />
          <span className="form__error" id="inputName-error" />
          <input type="text" id="inputJob" name="inputJob" placeholder="Чем занимаетесь?" className="form__input form__input_type_job" minLength={2} maxLength={200} required />
          <span className="form__error" id="inputJob-error" />
          <button type="submit" className="form__save-button">Сохранить</button>
        </form>
        <button aria-label="Отменить изменения" type="button" className="popup__close-button popup__close-button_type_edit" />
      </div>
    </div>*/}
    <PopupWithForm
        name = "edit"
        title = "Редактировать профиль"
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        children = {
          <>
            <input type="text" id="inputName" name="inputName" placeholder="Введите Ваше имя" className="form__input form__input_type_name" minLength={2} maxLength={40} required />
            <span className="form__error" id="inputName-error" />
            <input type="text" id="inputJob" name="inputJob" placeholder="Чем занимаетесь?" className="form__input form__input_type_job" minLength={2} maxLength={200} required />
            <span className="form__error" id="inputJob-error" />
          </>
        }
        saveButton="Сохранить"
      />
    {/*popup для добавления карточки - add
    <div className="popup popup_type_add">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form name="addForm" className="form form_type_add" noValidate>
          <input type="text" id="inputAddTitle" name="inputAddTitle" placeholder="Название" className="form__input form__input_type_addTitle" minLength={2} maxLength={30} required />
          <span className="form__error" id="inputAddTitle-error" />
          <input type="url" id="inputURL" name="inputURL" placeholder="Ссылка на картинку" className="form__input form__input_type_addURL" required />
          <span className="form__error" id="inputURL-error" />
          <button type="submit" className="form__save-button">Сохранить</button>
        </form>
        <button aria-label="Отменить изменения" type="button" className="popup__close-button popup__close-button_type_add" />
      </div>
    </div>*/}
    <PopupWithForm
        name = "add"
        title = "Новое место"
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        children = {
          <>
            <input type="text" id="inputAddTitle" name="inputAddTitle" placeholder="Название" className="form__input form__input_type_addTitle" minLength={2} maxLength={30} required />
            <span className="form__error" id="inputAddTitle-error" />
            <input type="url" id="inputURL" name="inputURL" placeholder="Ссылка на картинку" className="form__input form__input_type_addURL" required />
            <span className="form__error" id="inputURL-error" />
          </>
        }
        saveButton="Сохранить"
      />
    {/*popup подтверждения удаления карточки - delete
    <div className="popup popup_type_delete">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="confirmDelete" className="form form_type_delete" noValidate>
          <button type="submit" className="form__save-button">Да</button>
        </form>
        <button aria-label="Отменить удаление" type="button" className="popup__close-button popup__close-button_type_edit" />
      </div>
    </div>*/}
    <PopupWithForm
        name = "delete"
        title = "Вы уверены?"
        onClose = {closeAllPopups}
        children = {
          <>
          </>
        }
        saveButton="Да"
      />


    {/*popup для обновления фотографии профиля - avatar
    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="addAvatarForm" className="form form_type_avatar" noValidate>
          <input type="url" id="inputAvatar" name="inputAvatar" placeholder="Ссылка на картинку" className="form__input form__input_type_addAvatar" required />
          <span className="form__error" id="inputAvatar-error" />
          <button type="submit" className="form__save-button">Сохранить</button>
        </form>
        <button aria-label="Отменить изменения" type="button" className="popup__close-button popup__close-button_type_add" />
      </div>
    </div>*/}

    <PopupWithForm
        name = "avatar"
        title = "Обновить аватар"
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        children = {
          <>
            <input type="url" id="inputAvatar" name="inputAvatar" placeholder="Ссылка на картинку" className="form__input form__input_type_addAvatar" required />
            <span className="form__error" id="inputAvatar-error" />
          </>
        }
        saveButton="Сохранить"
      />
    
    <ImagePopup 
    card={selectedCard}
    onClose = {closeAllPopups}
    />

    {/*шаблон для добавления карточек*/}
    <template className="cardsTemplate" />
    </div>
  );
}

export default App;

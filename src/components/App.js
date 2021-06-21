import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      
      {/*popup для изменения имени и деятельности*/}
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
    </div>
    {/*popup для добавления карточки*/}
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
    </div>
    {/*popup для отображения полной картинки*/}
    <div className="popup popup_type_photo">
      <div className="popup__container popup__container_type_photo">
        <img className="popup__image" src="#" alt="#" />
        <h2 className="popup__title popup__title_type_photo" />
        <button aria-label="Закрыть окно просмотра" type="button" className="popup__close-button popup__close-button_type_photo" />
      </div>
    </div>
    {/*popup подтверждения удаления карточки*/}
    <div className="popup popup_type_delete">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="confirmDelete" className="form form_type_delete" noValidate>
          <button type="submit" className="form__save-button">Да</button>
        </form>
        <button aria-label="Отменить удаление" type="button" className="popup__close-button popup__close-button_type_edit" />
      </div>
    </div>
    {/*popup для обновления фотографии профиля*/}
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
    </div>
    {/*шаблон для добавления карточек*/}
    <template className="cardsTemplate" />
    </div>
    </div>
  );
}

export default App;

import React from 'react'
import api from '../utils/api.js'

function Main(props) {

  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()


  React.useEffect(() => {
    api.getUserInfo()
      .then((apiData) => {
        const apiUserData = apiData;
        setUserName(apiUserData.name);
        setUserDescription(apiUserData.about);
        setUserAvatar(apiUserData.avatar)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [userName, userDescription, userAvatar])

    return (
    <main>
        <section className="profile">
          <div className="profile__container">
            <div className="profile__photo-section">
              <img className="profile__avatar" alt="Аватар" src={userAvatar} onClick={props.onEditAvatar} />
              <button 
                className="profile__icon" 
                type="button" 
                aria-label="Загрузка своего фото"
                >

              </button>
            </div>
            <div className="profile__info">
              <div className="profile__zone">
                <h1 className="profile__title">{userName}</h1>
                <button 
                  aria-label="Измените данные" 
                  type="button" 
                  className="profile__edit-button"
                  onClick={props.onEditProfile} >
                </button>
              </div>
              <p className="profile__caption">{userDescription}</p>
            </div>
          </div>
          <button 
            aria-label="Добавьте свою карточку!" 
            type="button" 
            className="profile__add-button"
            onClick={props.onAddPlace} >
          </button>
        </section>
        <section className="elements"></section>
      </main>
    )
}

export default Main;
import React from 'react'
import api from '../utils/api'
import Card from './Card'

function Main(props) {

  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])


  React.useEffect(() => {
      Promise.all([api.getUserInfo(), api.getCards()])
      .then (apiData => {
       //console.log(apiData)
        const apiUserData = apiData[0] // Инфо по пользователю
        // Загрузка имени и деятельности с сервера
        setUserName(apiUserData.name)
        setUserDescription(apiUserData.about)
        setUserAvatar(apiUserData.avatar)
        setCards(apiData[1])
       })
       // Если сервер не ответил, выводим ошибку в консоль
       .catch((err) => {
         console.log(err)
       })
    }, [])


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
        <section className="elements">
          {cards.map(card =>
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              />
            )}
        </section>
      </main>
    )
}

export default Main;
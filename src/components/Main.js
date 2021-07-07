import React from 'react'
import api from '../utils/api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {

    //   const [userName, setUserName] = React.useState('')
    //   const [userDescription, setUserDescription] = React.useState('')
    //   const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c !== card))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    //   React.useEffect(() => {
    //     Promise.all([api.getUserInfo(), api.getCards()])
    //       .then(([userData, cardsData]) => {
    //         setUserName(userData.name)
    //         setUserDescription(userData.about)
    //         setUserAvatar(userData.avatar)
    //         setCards(cardsData)
    //       })
    //       // Если сервер не ответил, выводим ошибку в консоль
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //   }, [])

    React.useEffect(() => {
        api.getCards()
            .then((apiData) => {
                setCards(apiData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__photo-section">
                        <img className="profile__avatar" alt="Аватар" src={currentUser.avatar} onClick={props.onEditAvatar} />
                        <button
                            className="profile__icon"
                            type="button"
                            aria-label="Загрузка своего фото"
                        >
                        </button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__zone">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button
                                aria-label="Измените данные"
                                type="button"
                                className="profile__edit-button"
                                onClick={props.onEditProfile} >
                            </button>
                        </div>
                        <p className="profile__caption">{currentUser.about}</p>
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
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                )}
            </section>
        </main>
    )
}

export default Main
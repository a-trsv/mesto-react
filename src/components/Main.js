function Main() {
    return (
    <main>
        <section className="profile">
          <div className="profile__container">
            <div className="profile__photo-section">
              <img className="profile__avatar" src="#" alt="Аватар"/>
              <button className="profile__icon" type="button" aria-label="Загрузка своего фото"></button>
            </div>
            <div className="profile__info">
              <div className="profile__zone">
                <h1 className="profile__title">Жак</h1>
                <button aria-label="Измените данные" type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__caption">Пиджак</p>
            </div>
          </div>
          <button aria-label="Добавьте свою карточку!" type="button" className="profile__add-button"></button>
        </section>
        <section className="elements"></section>
      </main>
    )
}

export default Main;
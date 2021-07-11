import './Popup.css';

function Popup({authIsOpen, closeAuth}) {

  function handleOnSubmit(evt) {
    evt.preventDefault();
    closeAuth();
  }

  return (
    <div className={`popup ${!authIsOpen && 'popup_hidden'}`}>
      <div className="auth">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" onSubmit={handleOnSubmit}>
          <input className="auth__input auth__input_type_login" placeholder="Логин"/>
          <input className="auth__input auth__input_type_password" placeholder="Пароль"/>
          <button className="auth__submit">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Popup;
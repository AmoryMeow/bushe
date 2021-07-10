import './Header.css';
import imgSignin from '../../images/signin.png';

function Header({callsCount}) {
    return(

        <header className="header">
            <div className="header__main">
                <h1 className="header__title">Звонки / </h1>
                <h2 className="header__subtitle"> Аналитика</h2>
            </div>
            <div className="header__stastic">
                <p className="header__count">Статистика звонков: {callsCount}</p>
            </div>
            <div className="header__signin">
                <img src={imgSignin} className="header__signin-img" alt="вход"/>
                <p className="header__signin-text">Вход</p>
            </div>
        </header>

    );
}

export default Header;
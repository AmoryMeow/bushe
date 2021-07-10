import './Header.css';

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
        </header>

    );
}

export default Header;
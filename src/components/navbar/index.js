import './style.css';

const NavBar = () => {

    let list = document.querySelectorAll(".navitem");
    function setActiveClass () {
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => 
    item.addEventListener('mouseover', setActiveClass))

  return (
    <>
        <nav className="navi">
            <div className='navContainer'>
                <div className="d-flex nave">
                    <ul>
                        <li className="navitem active">
                            <a href="#">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="text">Home</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="#">
                            <span className="icon">
                                <ion-icon name="play-circle-outline"></ion-icon>
                            </span>
                            <span className="text">Play</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="#">
                            <span className="icon">
                                <ion-icon name="search-outline"></ion-icon>
                            </span>
                            <span className="text">Search</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="#">
                            <span className="icon">
                                <ion-icon name="desktop-outline"></ion-icon>
                            </span>
                            <span className="text">Lobby</span>
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="#">
                            <span className="icon">
                                <ion-icon name="cog-outline"></ion-icon>
                            </span>
                            <span className="text">Config</span>
                            </a>
                        </li>
                        <div class='indicator'></div>
                    </ul>
                </div>
            </div>
        </nav>
        
    </>   
  );
}

export default NavBar;

import './Header.css'
import chefLogo from '../images/chef.png'

function Header() {
    return(
        <header className="header">
            <img src={chefLogo} alt="Chef Logo" />
            <h1>Chef Recipes</h1>
        </header>
    )
}

export default Header
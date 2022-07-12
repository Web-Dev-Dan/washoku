
import './Navbar.css';
import Logo from '../../reusable/Logo/Logo';

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-inner inner">
                <button>
                    <Logo />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
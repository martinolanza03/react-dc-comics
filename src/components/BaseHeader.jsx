import Logo from './BaseLogo.jsx';
import Menu from './Menu.jsx'

export default function Header() {
    return (
        <header >
            <div className="container">
                <Logo />
                <Menu />
            </div>

        </header>
    );
}
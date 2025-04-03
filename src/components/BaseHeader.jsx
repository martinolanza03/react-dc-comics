import Logo from './BaseLogo.jsx';
import Menu from './Menu.jsx'

export default function Header() {
    return (
        <header >
            <div class="container">
                <Logo />
                <Menu />
            </div>

        </header>
    );
}
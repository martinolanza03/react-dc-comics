import Logo from './BaseLogo.jsx';
import Menu from './Menu.jsx'

export default function Header({ content }) {

    return (
        <header >
            <div className="container">
                <Logo />
                <Menu content={content} />
            </div>

        </header>
    );
}
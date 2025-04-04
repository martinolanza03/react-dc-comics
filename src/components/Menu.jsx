import LinkMenu from './LinkMenu.jsx'


export default function Menu({ content }) {


    return (
        <ul className="menu">
            <LinkMenu title={content[0].title} link={content[0].link} />
            <LinkMenu title={content[1].title} link={content[1].link} />
            <LinkMenu title={content[2].title} link={content[2].link} />
            <LinkMenu title={content[3].title} link={content[3].link} />
            <LinkMenu title={content[4].title} link={content[4].link} />
        </ul>
    );
}
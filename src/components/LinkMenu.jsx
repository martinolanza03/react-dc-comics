export default function LinkMenu(props) {
    return (
        <li><a href={props.link}>{props.title}</a></li>
    );
}
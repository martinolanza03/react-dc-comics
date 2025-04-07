import Comics from '../assets/comics.js';

export default function Content() {
    return (
        <div className='content'>
            <ul className='comics'>
                {Comics.map(comic => {
                    return comic.thumb !== undefined ? <li>
                        <img src={comic.thumb} alt={comic.tilte} />
                        <p>{comic.series}</p>
                    </li> : '';
                })}
            </ul >
        </div >
    );
}
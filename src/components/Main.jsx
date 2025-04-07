import Content from './Content.jsx';

export default function Main() {
    return (<main>
        <img src="../img/jumbotron.jpg" alt="Jumbotron" className='jumbotron' />

        <div className='container'>
            <button className='current-series-btn'>Current Series</button>
            <Content />
        </div>

    </main>);
}
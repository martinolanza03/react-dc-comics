import Content from './Content.jsx';

export default function Main() {
    return (<main>
        <img src="../img/jumbotron.jpg" alt="Jumbotron" className='jumbotron' />

        <div className='container'>
            <div className='series'>
                <button className='current-series-btn'>Current Series</button>
                <Content />
                <button className='load-more-btn'>Load More</button>
            </div>
        </div>

    </main>);
}
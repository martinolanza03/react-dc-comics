import Header from './components/BaseHeader.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import BuyNews from './components/BuyNews.jsx';





function App() {
  const contentMenu = [
    {
      title: 'Characters',
      link: '#'
    },
    {
      title: 'Comics',
      link: '#'
    },
    {
      title: 'Movies',
      link: '#'
    },
    {
      title: 'TV',
      link: '#'
    },
    {
      title: 'Games',
      link: '#'
    },

  ]

  return (
    <>
      <Header content={contentMenu} />
      <Main />
      <BuyNews />
      <Footer />
    </>
  )
}

export default App
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import './Home.css'

function Home () {
    return(
        <div className='home'>
            <Header/>
            <div id = 'with-hash-top'></div>
            <Body />
            <Footer />
        </div>
    )
}

export default Home
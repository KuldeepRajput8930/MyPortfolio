import './Home.css'
import introbannerImg from '/images/intro-banner.png'

function Home() {
    return (
        <div className='home'>
            <div className="intro">
                <h3 className='intro-firstheading'>Hello there, my name is</h3>
                <div className='name'>Kuldeep<h3>Rajput</h3></div>
                <h3 className='title'>Web designer & developer</h3>
            </div>
            <div className="intro-banner"><img src={introbannerImg} alt="" /></div>
        </div>
    )
}

export default Home

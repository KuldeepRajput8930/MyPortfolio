import './ServicesSection.css'
import seoImg from '/images/SEO.png'
import devImg from '/images/development.png'
import designImg from '/images/design.png'

function ServicesSection() {
    return (
        <div className='serviceFrame'>
            <div className="items">
                <div className="top">
                    <div className="item1">
                        <h2>My Awesome<span>Services</span></h2>
                        <p>These are 3 of my main services I offer, with years of experience on each of them!</p>
                        <button>DISCOVER ALL</button>
                    </div>
                    <div className="item2">
                        <img src={devImg} alt="" />
                        <h2>Development</h2>
                        <p>Transforming concepts into fully functional, responsive websites.</p>
                    </div>

                </div>
                <div className="bottom">
                    <div className="item3">
                        <img src={designImg} alt="" />
                        <h2>Design</h2>
                        <p>Crafting visually captivating and user-centric UI & UX designs that breathe life into digital spaces</p>
                    </div>
                    <div className="item4">
                        <img src={seoImg} alt="" />
                        <h2>SEO</h2>
                        <p>Elevating online visibility through strategic SEO techniques.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection

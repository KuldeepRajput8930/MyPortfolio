import './UIServicesSection.css'
import webUiImg from '/images/webui.png'

const UIServices = () => {

    return (
        <div className='container'>
            <div className="title">
                <h1>My Best UI Services</h1>
                <p>
                    From creating captivating website UIs and implementing eye-catching
                    animations to ensuring seamless responsiveness and optimizing for
                    search engines, I specialize in every aspect of crafting user-centric
                    digital experiences.
                </p>
            </div>
            <div className="items">
                <div className="item">
                    <img src={webUiImg} alt="" />
                    <h3>Website UI</h3>
                    <p>
                        Crafting intuitive and engaging user interfaces that guide seamless
                        digital journeys.
                    </p>
                </div>

                <div className="item">
                    <img src="https://cdn-icons-png.flaticon.com/512/5978/5978228.png" alt="" />
                    <h3>Redesign UI</h3>
                    <p>
                        Breathing new life into digital spaces through strategic and
                        impactful redesigns.
                    </p>
                </div>
                <div className="item">
                    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png" alt="" />
                    <h3>Responsive UI</h3>
                    <p>
                        Ensuring flawless functionality and aesthetics across devices with
                        responsive design.
                    </p>
                </div>
                <div className="item">
                    <img src="https://cdn-icons-png.flaticon.com/512/2920/2920329.png" alt="" />
                    <h3>Mobile UI</h3>
                    <p>
                        Elevating user experiences through sleek and intuitive mobile
                        interfaces.
                    </p>
                </div>
                <div className="item">
                    <img src="https://cdn-icons-png.flaticon.com/512/4053/4053022.png" alt="" />
                    <h3>Web App UI</h3>
                    <p>
                        Designing immersive and efficient user interfaces for dynamic web
                        applications.
                    </p>
                </div>
                <div className="item">
                    <img src="https://cdn-icons-png.flaticon.com/512/1454/1454776.png" alt="" />
                    <h3>Animations</h3>
                    <p>
                        Infusing websites with captivating animations that enhance
                        interactivity and engagement.
                    </p>
                </div>
            </div>
        </div >
    )
};
export default UIServices;

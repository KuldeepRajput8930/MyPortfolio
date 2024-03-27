import './SkillsSection.css'
import rightSignImg from '/images/rightSign.svg'
import skillImg from '/images/skill.png'

function SkillsSection() {
    return (
        <div className='skillFrame'>
            <img src={skillImg} alt="" />
            <div className="skill-container">
                <h2>My Programming Skills</h2>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">React.js</h3>
                    <span className="range">
                        <div className="fill fill1"></div>
                    </span>
                    <h3>97%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">HTML & CSS</h3>
                    <span className="range">
                        <div className="fill fill2"></div>
                    </span>
                    <h3>99%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">Node.js</h3>
                    <span className="range">
                        <div className="fill fill3"></div>
                    </span>
                    <h3>85%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">JavaScript</h3>
                    <span className="range">
                        <div className="fill fill4"></div>
                    </span>
                    <h3>94%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">Bootstrap*</h3>
                    <span className="range">
                        <div className="fill fill5"></div>
                    </span>
                    <h3>95%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">Tailwind CSS*</h3>
                    <span className="range">
                        <div className="fill fill6"></div>
                    </span>
                    <h3>83%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">MySQL</h3>
                    <span className="range">
                        <div className="fill fill7"></div>
                    </span>
                    <h3>92%</h3>
                </div>
                <div className="skill">
                    <img className='rightSign' src={rightSignImg} alt="" />
                    <h3 className = "skill-name">Python</h3>
                    <span className="range">
                        <div className="fill fill8"></div>
                    </span>
                    <h3>80%</h3>
                </div>
                <div className='cv-btn'><a href="">Download CV</a></div>
            </div>
        </div>
    )
}

export default SkillsSection

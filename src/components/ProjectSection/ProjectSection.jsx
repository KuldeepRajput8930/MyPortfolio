import './ProjectSection.css'
import project3Img from '/images/project1.png'
import project2Img from '/images/project2.png'
import project1Img from '/images/project3.png'

function ProjectSection() {
    return (
        <div className='projectFrame'>
            <div className="title">
                <h1>Recent Projects</h1>
                <p>Exploring a Selection of My Diverse Creations</p>
            </div>
            <div className="projects">
                <div className="project">
                    <img src={project1Img} alt="" />
                    <h3>ASites Agency</h3>
                    <p>ASites Agency is my own angecy. It a service-based agency where we help small and medimum businesses grow online through Websites, Social Media, Marketing, Content Creation, Branding, etc.</p>
                </div>
                <div className="project">
                    <img src={project2Img} alt="" />
                    <h3>A site agency</h3>
                    <p>ASites Agency is my own angecy. It a service-based agency where we help small and medimum businesses grow online through Websites, Social Media, Marketing, Content Creation, Branding, etc.</p>
                </div>
                <div className="project">
                    <img src={project3Img} alt="" />
                    <h3>A site agency</h3>
                    <p>ASites Agency is my own angecy. It a service-based agency where we help small and medimum businesses grow online through Websites, Social Media, Marketing, Content Creation, Branding, etc.</p>
                </div>
            </div>
            <a href="/"><h4>See All ...</h4></a>
        </div>
    )
}

export default ProjectSection

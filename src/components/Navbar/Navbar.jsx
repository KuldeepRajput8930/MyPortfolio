import './Navbar.css'
import moonImg from '/images/bxs-moon.svg'
import sunImg from '/images/bxs-sun.svg'
import logoImg from '/images/logo.png'
import menuIconImg from '/images/menu-icon.svg'
import closeBtn from '/images/closeBtn.svg'
import { useEffect, useState } from 'react'

function Navbar() {
    const [menuIcon, setMenuIcon] = useState(menuIconImg);

    // ------------------Sidebar visiblity handle----------------------

    const sidebarHandle = function () {
        let sidebar = document.getElementsByClassName('sidebar')[0];
        if (sidebar.classList.contains('sidebarVisible')) {
            sidebar.classList.remove('sidebarVisible')
            setMenuIcon(menuIconImg)
        }
        else {
            sidebar.classList.add('sidebarVisible')
            setMenuIcon(closeBtn)
        }
    }

    // ------------------Active link handle----------------------

    const handleClick = function () {

        let link = document.querySelectorAll('.link');
        Array.from(link).forEach((element) => {
            element.addEventListener('click', (e) => {
                for (let i = 0; i < link.length; i++) {
                    link[i].classList.remove('active')
                }
                e.target.classList.add('active')
            })

        })
    }
    useEffect(() => {
        handleClick()
    }, []);
    return (
        <>
            {/*-----------------------Navabr------------------------- */}
            <nav className="navbar">
                <img className="logo" src={logoImg} alt="" />
                <div className="links-container">
                    <li className='nav-links'><a className="link link1 active">Home</a></li>
                    <li className='nav-links'><a className="link link2" >Services</a></li>
                    <li className='nav-links'><a className="link link3" >Projects</a></li>
                    <li className='nav-links'><a className="link link4" >About Me</a></li>
                    <li className='nav-links'><a className="link link5" >Contact Me</a></li>
                    <li className="nav-links mode"><img src={moonImg} alt="" /></li>
                </div>
            </nav>

            {/*-----------------------Menu-Button------------------------- */}

            <div className="nav-links menu-button"><img onClick={sidebarHandle} src={menuIcon} alt="" /></div>

            {/*-----------------------Sidebar------------------------- */}

            <div className="sidebar sidebarHide">
                <li className='sidebar-links'><a className="link link1 active">Home</a></li>
                <li className='sidebar-links'><a className="link link2" >Services</a></li>
                <li className='sidebar-links'><a className="link link3" >Projects</a></li>
                <li className='sidebar-links'><a className="link link4" >About Me</a></li>
                <li className='sidebar-links'><a className="link link5" >Contact Me</a></li>
                <li className="sidebar-links mode"><img src={moonImg} alt="" /></li>
            </div>
        </>

    )
}

export default Navbar

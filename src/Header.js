import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import projectlogo2 from './projectlogo2.png'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

function Header () {

    const [menu, setMenu] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='header'>    
            <Link to='/'><img src={projectlogo2} alt='' className='projectlogo_header' /></Link>
            <ul className='header_nav'>
              <Link to='/project' style={{textDecoration:'none'}}><li className='header_nav_list dropdown'>Projects</li></Link>
              <Link to='/about' style={{textDecoration:'none'}}><li className='header_nav_list'>About</li></Link>
              <li className='header_nav_list' onClick={() => window.location = 'mailto:johnharry238@gmail.com?subject=Get in touch'}>Contact</li>
            </ul>
            <FiMenu className='home_menu' onClick={() => {setMenu(true)}}/>
            <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
                <AiOutlineClose className='home_sidebar_close' onClick={() => {setMenu(false)}}/>
                <ul className='home_sidebar_navbar'>
                    <li className='home_sidebar_link' onClick={() => navigate ('/project')}>Project</li>
                    <li className='home_sidebar_link' onClick={() => navigate ('/about')}>About</li>
                    <li className='home_sidebar_link' onClick={() => window.location = 'mailto:johnharry238@gmail.com?subject=Get in touch'}>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
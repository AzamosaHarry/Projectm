import projectlogo from './projectlogo.png'
import { SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl'
import { HashLink } from "react-router-hash-link";
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer () {
    return (
        <div className='footer'>
            <Link to='/'><img src={projectlogo} alt='' className='projectlogo_header' /></Link>
            <div className='footer_div'>
                <div>
                    <Link to='https://twitter.com/ProjectM___'><SlSocialTwitter className='footer_icon one' /></Link>
                    <SlSocialLinkedin className='footer_icon two'/> 
                    <SlSocialInstagram className='footer_icon three'/> 
                </div>
                <HashLink
                to='/#with-hash-top'
                className='footer_to_top'
                >BACK TO TOP</HashLink>
                <p>BE BETTER</p>
            </div>
        </div>
    )
}

export default Footer
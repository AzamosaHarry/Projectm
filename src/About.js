import { Parallax } from 'react-scroll-parallax'
import './About.css'
import Footer from './Footer'
import Header from './Header'

function About () {
    return (
        <div className='about'>
            <Header />
            <div className='about_body'>
                <div className='about_body_head'>
                    <Parallax speed={-20}>
                        <h1>About</h1>
                    </Parallax>
                </div>
                <div className='about_body_main'>       
                    <Parallax speed={-10}>
                        <p>A privately-run group, PROJECT M strives to ensure the long-term development of each of its Projects in keeping with their identity, their heritage and their expertise. Our model, which is based on a long-term vision, values the heritage of our Projects and stimulates creativity and excellence. It is the driving force for the Group’s success and the guarantee of its future. We at PROJECT M and our Projects are proud to invest resources and skills back into the community. The initiatives we sponsor yield tangible, long-lasting benefits for society as a whole. At PROJECT, performance is underpinned by the leadership of our managers, whose vision and ability to inspire their teams enable the entire organization to achieve ambitious objectives. PROJECT M has made sustainable development a strategic priority since its founding.
                        </p>
                    </Parallax>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
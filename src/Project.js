import { Parallax } from 'react-scroll-parallax'
import lines from './lines.png'
import lines2 from './lines2.png'
import Footer from './Footer'
import Header from './Header'
import './Project.css'

function Project () {
    return (
        <div>
            <Header />
                <div className='project_body'>
                    <div className='project_body_head'>
                        <img src={lines} alt='' className='lines'/>
                        <Parallax 
                            scale={[1, 0.25]}
                            rotate={[50, -180]}
                            speed={-30}
                            easing="easeInQuad">
                            <img src={lines2} alt='' className='lines2'/>
                        </Parallax>
                        <Parallax speed={-25}>
                            <h1>Projects</h1>
                            <h1>2023</h1>
                        </Parallax>
                    </div>
                    <div className='project_body_main'>
                        <Parallax speed={-10}>
                            <h3>PROJECT M is home to distinguished Projects or brands rooted in three different sectors. True to tradition, each of our brands builds on a specialty legacy while keeping an unwavering focus on the exquisite caliber of its products.</h3>
                        </Parallax>
                        <Parallax speed={10}>
                            <h1>FOUR</h1>
                        </Parallax>
                        <Parallax speed={-15}>
                            <h1>RENT</h1>
                        </Parallax>
                        <Parallax speed={10}>
                            <h1>MARKETPLACE</h1>
                        </Parallax>
                        <Parallax speed={-15}>
                            <h1>SOUND</h1>
                        </Parallax>
                        <Parallax speed={10}>
                            <h1>PAYSMALL</h1>
                        </Parallax>
                        <Parallax speed={10}>
                            <p>In PROJECT M, good is never enough. Simply <span style={{color:'#DAFF35'}}>BE BETTER</span></p>
                        </Parallax>
                    </div>
                </div>
            <Footer />
        </div>
    ) 
}

export default Project
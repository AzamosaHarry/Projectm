import { useEffect, useRef, React, useState } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { SlArrowDown } from 'react-icons/sl'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import './Body.css'

function Body () {

    const containerRef1 = useRef(null)
    const containerRef2 = useRef(null)
    const containerRef3 = useRef(null)

    const [isVisible1, setIsVisible1] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const [isVisible3, setIsVisible3] = useState(false)
    const [isVisible3b, setIsVisible3b] = useState(false)

    const [loaded1, setLoaded1] = useState(false)
    const [loaded2, setLoaded2] = useState(false)
    const [loaded3, setLoaded3] = useState(false)
    const [loaded3b, setLoaded3b] = useState(false)

    const callbackFunction1 = (entries) => {
        const [ entry ] = entries
        setIsVisible1(entry.isIntersecting)
        if (isVisible1 == true) {
            setLoaded1(true)
        }
    }
    const options1 = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    const callbackFunction2 = (entries) => {
        const [ entry ] = entries
        setIsVisible2(entry.isIntersecting)
        if (isVisible2 == true) {
            setLoaded2(true)
        }
    }
    const options2 = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    
    const callbackFunction3 = (entries) => {
        const [ entry ] = entries
        setIsVisible3(entry.isIntersecting)
        if (isVisible3 == true) {
            setLoaded3(true)
        }
    }
    const options3 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }
    const callbackFunction3b = (entries) => {
        const [ entry ] = entries
        setIsVisible3b(entry.isIntersecting)
        if (isVisible3b == true) {
            setLoaded3b(true)
        }
    }
    const options3b = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    useEffect(() => {
        const observer1 = new IntersectionObserver(callbackFunction1, options1)
        if (containerRef1.current) observer1.observe (containerRef1.current)
      return () => {
        if (containerRef1.current) observer1.unobserve(containerRef1.current)
      }
    }, [containerRef1, options1])

    useEffect(() => {
        const observer2 = new IntersectionObserver(callbackFunction2, options2)
        if (containerRef2.current) observer2.observe (containerRef2.current)
      return () => {
        if (containerRef2.current) observer2.unobserve(containerRef2.current)
      }
    }, [containerRef2, options2])

    useEffect(() => {
        const observer3 = new IntersectionObserver(callbackFunction3, options3)
        if (containerRef3.current) observer3.observe (containerRef3.current)
      return () => {
        if (containerRef3.current) observer3.unobserve(containerRef3.current)
      }
    }, [containerRef3, options3])

    useEffect(() => {
        const observer3b = new IntersectionObserver(callbackFunction3b, options3b)
        if (containerRef3.current) observer3b.observe (containerRef3.current)
      return () => {
        if (containerRef3.current) observer3b.unobserve(containerRef3.current)
      }
    }, [containerRef3, options3b])

    return (
        <div className='body'>

            <div className='section_one_arrow'>
                <SlArrowDown className='arrow_one'/>
                <SlArrowDown className='arrow_two'/>
                <SlArrowDown className='arrow_three'/>
            </div>

            <section ref={containerRef1} className={isVisible1? 'section_one visible':'section_one' }>
                <h1>PROJECT <span className='section_one_m'>M</span></h1>
                <p>be better</p>
            </section>
            <section ref={containerRef2} className={isVisible2? 'section_two visible':'section_two' }>
                <div className='section_two_div1'>
                    <div className={isVisible1? 'section_two_block':'section_two_block visible' }>
                        <h1>We are centered</h1>
                        <h1>and deeply connected</h1>
                        <h1>to the <div className='bg_span'><div className={isVisible2? 'section_two_div1_span' : isVisible3? 'section_two_div1_span one' : isVisible3b? 'section_two_div1_span two' : 'section_two_div1_span two'}><h1>PEOPLE</h1><h1>PRODUCT</h1><h1>PARTNERS</h1></div></div></h1>
                    </div>
                </div>
                <div className='section_two_div2'>
                    <Parallax speed={-10}>
                        <img src={img1} alt='' className='img1' />
                    </Parallax>
                    <Parallax speed={2} style={{display:'flex', justifyContent:'center'}}>
                        <p>Joining PROJECT M means becoming part of a community of people and brands, working together torwards a future that is more sustainable, creative and inclusive.</p>
                    </Parallax>
                </div>
            </section>
            <section ref={containerRef3} className={isVisible3? 'section_three visible':'section_three' }>
                <div className='section_three_div1'>
                    <div className='section_three_div1_div1'>

                    </div>
                    <div className='section_three_div1_div2'>
                        <Parallax speed={-5}>
                            <img src={img2} alt='' className='img3' />
                        </Parallax>
                        <p>PROJECT M corps through her subsidiaries provide wide variety of products tailored particulary for you</p>
                    </div>
                </div>
                <div className='section_three_div2'>
                    <div className='section_three_div2_div1'>

                    </div>
                    <div className='section_three_div2_div2'>
                        <img src={img3} alt='' className='img4' />
                        <Parallax speed={5} style={{display:'flex', justifyContent:'center'}}>
                            <p>We partner with brands that put end users first</p>
                        </Parallax>
                    </div>
                </div>
            </section>


            <div className='circle_nav'>
             <div className={isVisible1? 'circle_nav_div visible' :'circle_nav_div'} >
                
             </div>
             <div className={isVisible2? 'circle_nav_div visible' :'circle_nav_div'}>
                
             </div>
             <div className={isVisible3? 'circle_nav_div visible' :'circle_nav_div'}>
                
             </div>
             <div className={isVisible3b? 'circle_nav_div visible' :'circle_nav_div'}>
                
             </div>
           </div>
        </div>
    )
}

export default Body
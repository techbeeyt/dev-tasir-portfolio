import React, { useState, useEffect } from 'react';
import './Home.css'
import imageA from '../images/my-bg.png';
import imageB from '../images/my-bg2.png';
import Button from './Button';
import MotivationCard from './home/MotivationCard';

const Home = () => {
    const [widthDefault, setwidthDefault] = useState('width-40');
    const [btnSize, setBtnSize] = useState('btn btn-large');
    const [screenWidth,setScreeenWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (screenWidth <= 960) {
            setwidthDefault('');
            setBtnSize('btn btn-medium');
        }
        else {
            setwidthDefault('width-40');
            setBtnSize('btn btn-large');
        }
    },[screenWidth])

    window.addEventListener('resize', () => {
        setScreeenWidth(window.innerWidth)
    })
    return (
        <>
            <div className='hero_section'>
                <h1 style={{marginBottom: "40px"}}>HELLO, I AM <span className="nameColor">MONTASIR MAHMUD</span></h1>
                <div className="info-container">
                    <img className={`home-img  ${widthDefault}`} src={imageA} alt="Dev TAsir"/>
                    <div className={widthDefault}>
                        <h2>
                            Full Stack Web Developer
                        </h2>
                        <p>I am passionate web developer . I have done more than 20 projects succesfully . Clients who worked with me are really so much satisfied .  Client's satisfiction is my main priority . I provide unlimited revision so that client can get their desired output . </p>
                    </div>
                </div>
                <div className="info-container flex-reverse">
                    <img src={imageB} alt="Dev TAsir" className={`home-img  ${widthDefault}`}/>
                    <div className={widthDefault}>
                        <h2>
                            Compatible with MERN Stack
                        </h2>
                        <p>MERN stack is hot cake in recent times . It is popular among the web developers as well as clients . Superb performance easy to handle is the main feature of MERN stack websites . </p>
                    </div>
                </div>

                <div className="center">
                    <Button text="Hire Me Now" path='/hire' btnStyle={btnSize}></Button>
                </div>
            </div>

            <div className="hero_section_2">
                <div className="center flex-colum">
                    <h1><span className='text-gradiant'>L</span>earn Web Developing</h1>
                    <h3 className='nameColor' style={{marginTop: '-10px'}}>Learn from best teacher .</h3>
                </div>
                
                <div className="info-container">
                    <i class="fas fa-layer-group text-gradiant large-icon"></i>
                    <div className="width-40">
                        <h2>
                            Why should you choose our course ?
                        </h2>
                        <p>I am passionate web developer . I have done more than 20 projects succesfully . Clients who worked with me are really so much satisfied .  Client's satisfiction is my main priority . I provide unlimited revision so that client can get their desired output . </p>
                    </div>
                </div>

                <div className="center flex-colum">
                    <h1><span className='text-gradiant'>W</span>hat will we cover ?</h1>
                </div>
                <div className="margin-10">
                    <div className="info-container flex-reverse bg-fade">
                        <i class="fab fa-html5 text-gradiant large-icon"></i>
                        <div className=" width-40">
                            <h2>
                                HTML5
                            </h2>
                            <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last[3] major HTML version that is a World Wide Web Consortium (W3C) recommendation. </p>
                        </div>
                    </div>
                    <div className="info-container flex-reverse">
                        <i class="fab fa-css3-alt text-gradiant large-icon"></i>
                        <div className=" width-40">
                            <h2>
                                CSS3
                            </h2>
                            <p>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.</p>
                        </div>
                    </div>
                    <div className="info-container flex-reverse bg-fade">
                        <i class="fab fa-react text-gradiant large-icon"></i>
                        <div className=" width-40">
                            <h2>
                                React.js
                            </h2>
                            <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.</p>
                        </div>
                    </div>
                    <div className="info-container flex-reverse">
                        <i class="fab fa-node text-gradiant large-icon"></i>
                        <div className=" width-40">
                            <h2>
                                Node.js
                            </h2>
                            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. </p>
                        </div>
                    </div>


                    <div className="center flex-colum btn-container" style={{marginTop: '20px'}}>
                        <Button text='Buy Course' path='/course' btnStyle={btnSize}></Button>
                    </div>
                </div>
            </div>

            <div className="hero_section_3">
                <div className="center flex-colum">
                    <h1><span className='text-gradiant'>M</span>y Motivation</h1>
                    <h3 className='nameColor' style={{ marginTop: '-10px' }}>Some reviews from my happy clients .</h3>
                </div>
                <div className="motivation-cards-container">
                    <MotivationCard image='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' name=' Amir Ali' quote={`Best seller I've worked with . `}/>
                    <MotivationCard image='https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Jamil Hasan' quote={` Good seller , Works properly  . Exactly what I wanted . `} isActive='motivation-card-active'/>
                    <MotivationCard image='https://images.pexels.com/photos/1076605/pexels-photo-1076605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Herok Koli' quote={` Awesome man . Great seller . Want to work again . `}/>
                </div>
            </div>
        </>
    );
};

export default Home;
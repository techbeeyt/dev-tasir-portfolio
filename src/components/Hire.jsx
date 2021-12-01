import React from 'react';
import './Hire.css';
import Options from './hire/Options';
import Button from './Button';
import { Route, Routes } from 'react-router';
import Contract from './Contract';


const Hire = () => {
    return (
        <>
        <div className="hire-me">
            <h1><span className='text-gradiant'>W</span>ant to hire me ?</h1>
            <p>Generally, I work on market places . So you can hire me on market places easily . But if you want to make any contract outside of marketplace you can make contract here .</p>
            
            <div className="bg-fade" style={{marginTop: '40px',padding:'15px 0px'}}>
                    <h2><span className='text-gradiant'>W</span>hy I'm Perfect Web Developer ?</h2>
                <ul>
                    <li>I have practical knowledge on web development</li>
                    <li>Completed 20+ projects with client's satisfiction</li>
                    <li>Lifetime support</li>
                </ul>
            </div>

            <Options />
            <h2 style={{color:'#ffc400'}}>Or,</h2>
            <div className='center' style={{height:'40px'}}>
                    <Button btnStyle='btn btn-medium' path='/contract' text='Make a contract here'></Button>
                    <Routes>
                        <Route path='/contract' element={<Contract />} />
                    </Routes>
            </div>
        </div>
        </>
    );
};

export default Hire;
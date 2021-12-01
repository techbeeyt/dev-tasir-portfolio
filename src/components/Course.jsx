import React, { useState, useEffect } from 'react';
import './Course.css'
import CourseCard from './course/CourseCard';
import CartInfo from './course/CartInfo';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [cartProducts, setCartProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/techbeeyt/data/main/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            });
    },[])

    const addToCart = (product) => {
        const newCart = [...cartProducts, product];
        setCartProduct(newCart);
    }
    return (
        <div className="course-container">
            <h1><span className="text-gradiant">B</span>uy Course</h1>
            <h2>Select Courses</h2>
            <div className="course-list-container">
                <div className='courses'>
                    {
                        courses.map((item) => <CourseCard product={item} addToCart={addToCart}></CourseCard>)
                    }
                </div>
                <CartInfo cart={cartProducts}/>
            </div>
        </div>
    );
};

export default Course;
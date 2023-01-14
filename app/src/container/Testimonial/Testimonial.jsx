import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';


import { AppWrap, MotionWrap } from '../../wrapper';
import { useGetBrandsQuery, useGetTestimonialsQuery } from '../../redux';
import { images } from "../../constants";
import "./Testimonial.scss";


const dataBrands = [
    { imgUrl: images.skype, name: 'skype' },
    { imgUrl: images.bolt, name: 'bolt' },
    { imgUrl: images.spotify, name: 'spotify' },
];

const Testimonial = () => {

    const testimonialReps = useGetTestimonialsQuery();
    const brandReps = useGetBrandsQuery();

    const [testimonials, setTistimonials] = useState([]);
    const [curentIndex, setCurentIndex] = useState(0);

    const handleClick = (index) => {
        setCurentIndex(index);    
    }

    useEffect( () => {
        if (testimonialReps.data) setTistimonials(testimonialReps.data);
    }, [testimonialReps.data]);   

    const curTest = testimonials[curentIndex];

    return (
        <>
            {testimonials.length && (
                <>
                    <div className='app__testimonial-item app__flex'>
                        <img src={curTest.imgUrl} alt="testimonial" />
                        <div className='app__testimonial-content'>
                            <p className='p-text'>{curTest.text}</p>
                            <div>
                                <h4 className='bold-text'>{curTest.name}</h4>
                                <h5 className='p-text'>{curTest.company}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='app__testimonial-btns app__flex'>
                        <div
                            className='app__flex'
                            onClick={ () => handleClick(curentIndex === 0 ? testimonials.length - 1 : curentIndex - 1) }
                        >
                            <HiChevronLeft />
                        </div>
                        <div
                            className='app__flex'
                            onClick={ () => handleClick(curentIndex === testimonials.length - 1 ? 0 : curentIndex + 1) }
                        >
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
            <div className='app__testimonial-brands app__flex'>
                {brandReps.data && brandReps.data.map( brand =>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand.id}
                    >
                        <img src={brand.imgUrl} alt={brand.name} />
                    </motion.div>
                )}    
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Testimonial, "app__testimonial"),
    "testimonials",
    "app__primarybg"
);
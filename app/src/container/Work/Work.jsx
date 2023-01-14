import React, { useState, useEffect } from 'react';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { useGetAllPortfolioItemsQuery, useGetAllTegItemsQuery } from '../../redux';
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Work.scss";

const Work = () => {

    const portfolioResp = useGetAllPortfolioItemsQuery();
    const tegResp = useGetAllTegItemsQuery();

    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setfilterWork] = useState([]);
   
    useEffect(() => {
        const workData = portfolioResp.data; 
        if (workData) setWorks(workData);
        if (workData) setfilterWork(workData);    
    }, [portfolioResp.data]);

    const handleWorkFilter = item => {
        setActiveFilter(item.name);
        setAnimateCard([ { y: 100, opacity: 0 } ]);

        setTimeout( () => {
            setAnimateCard([ { y: 0, opacity: 1 } ])
            
            if (item.name === 'All') {
                setfilterWork(works);
            } else {
                setfilterWork( works.filter( work => {
                    const fiterTag = work.tags.find(el => el.name === item.name);
                    return fiterTag ? true : false;
                } ) );
            }
        }, 500);
    }

    return (
        <>
            <h2 className='head-text'>
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className='app__work-filter'>
                {tegResp.data && tegResp.data.map( tag =>
                    <div
                        key={tag.id}
                        onClick = { () => handleWorkFilter(tag) }
                        className={`app__work-filter-item app__flex p-text ${activeFilter === tag.name ? 'item-active' : ''}`}
                    >
                        {tag.name}
                    </div>
                )}
            </div>  
            <motion.div
                animate={animateCard} 
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"   
            >
                {filterWork.map( work =>
                    <div
                        key={work.id} 
                        className='app__work-item app__flex'
                    >
                        <div className='app__work-img app__flex'>
                            <img src={work.imgUrl} alt={work.title} />
                            <motion.div
                                whileHover={{ opacity: [0 , 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={work.projectLink} target="_blank" rel='norefer'>
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1 , 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"    
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={work.codeLink} target="_blank" rel='norefer'>
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1 , 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"    
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className='app__work-content app__flex'>
                            <h4 className='bold-text'>{work.title}</h4>
                            <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
                        
                            <div className='app__work-tag app__flex'>
                                <p className='p-text'>{work.tags[0].name}</p>
                            </div>
                        </div>
                    </div>
                )}    
            </motion.div>  
        </>
    );
}

export default AppWrap(
    MotionWrap(Work, "app__works"),
    "work",
    "app__primarybg"
);
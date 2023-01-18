import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useGetAllExpItemsQuery, useGetAllSkillItemsQuery } from '../../redux';
import { AppWrap, MotionWrap } from '../../wrapper';
import ExpDescription from '../../components/ExpDescription';
import "./Skills.scss";


const Skills = () => {

    const skillsResp = useGetAllSkillItemsQuery();
    const expResp = useGetAllExpItemsQuery();

    const [workID, setWorkID] = useState("");

    const clickHandler = (e) => {
        setWorkID(e.currentTarget.id);
    }

    return (
        <>
            <h2 className='head-text'>Skills & Experiense</h2>
            <div className='app__skills-container'>

                <motion.div className='app__skills-list'>
                    {skillsResp.data && skillsResp.data.map( skill =>
                        <motion.div
                            whileInView = {{ opacity: 1 }}
                            whileHover = {{ scale: 1.2 }}
                            transition  = {{ duration: 0.5, type: 'tween' }}
                           className="app__skills-item app__flex"
                           key={skill.id}
                        >
                            <div
                                className='app__flex'
                                style={{ background: skill.bgColor }}>
                                    <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className='p-text'>{skill.name}</p>
                        </motion.div>
                    )}
                </motion.div>

                <motion.div className='app__skills-exp'>
                    {expResp.data && expResp.data.map( period =>
                        <motion.div
                            className='app__skills-exp-item'
                            key={period.id}
                        >
                            <div className='app__skills-exp-year'>
                                <p className='bold-text'>
                                    {period.year}
                                </p>
                            </div>

                            <motion.div
                                className="app__skills-exp-works"
                            >
                                { period.works.map( work =>
                                    <div key={work.id} >

                                        <motion.div
                                            whileInView={{ opacity: [0, 1]}}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            onClick={clickHandler}
                                            id={work.id}
                                        >
                                            <h4 className='bold-text'>{work.name}</h4>
                                            <p className='p-text'>{work.company}</p>
                                        </motion.div>

                                    </div>
                                )}
                            </motion.div>

                        </motion.div>
                    )}
                </motion.div>

                <div className="app__skills-desc">
                    { workID && <ExpDescription workID={workID} />}
                </div>

            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
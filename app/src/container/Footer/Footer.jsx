import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Formik } from "formik";
import * as yup from "yup";

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import ErrorMessage from '../../components/ErrorMessage';
import { useGetContactsQuery, useSendEmailMutation } from '../../redux';
import "./Footer.scss";

const Footer = () => {

    const [isFormSubmitted, setisFormSubmitted] = useState(false);
    const [sendEmail, {isLoading, status}] = useSendEmailMutation();
    const { data } = useGetContactsQuery();

    const handleFormSubmit = async (values) => {
        await sendEmail(values).unwrap();
        setisFormSubmitted(true);
    }

    const checkoutSchema = yup.object().shape({
        name: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        message: yup.string().required("required"),
    });
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };

    return (
        <>
            <h2 className='head-text'>Take a coffe & chat with me</h2>
            <div className='app__footer-cards'>
                <motion.div
                    whileInView = {{ opacity: 1 }}
                    whileHover = {{ scale: 1.2 }}
                    transition  = {{ duration: 0.5, type: 'tween' }}
                    className='app__footer-card'
                >
                    <img src={images.email} alt="email" />
                    <a href={`mailto:${data && data.email}`} className='p-text'>{data && data.email}</a>
                </motion.div>

                <motion.div
                    whileInView = {{ opacity: 1 }}
                    whileHover = {{ scale: 1.2 }}
                    transition  = {{ duration: 0.5, type: 'tween' }}
                    className='app__footer-card'
                >
                    <img src={images.mobile} alt="mobile" />
                    <a href={`tel: ${data && data.phone}`} className='p-text'>{data && data.phone}</a>
                </motion.div>

            </div>

            {!isFormSubmitted ?

                <div className='app__footer-form app__flex'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={checkoutSchema}
                        onSubmit={handleFormSubmit}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        className='p-text'
                                        placeholder='Your Name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </div>
                                {errors.name && touched.name && errors.name &&
                                    <ErrorMessage
                                        message={'Introduce yourself, please'}
                                        className='app__footer-form__error'
                                    />
                                }

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        className='p-text'
                                        placeholder='Your Email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />

                                </div>
                                {errors.email && touched.email && errors.email &&
                                    <ErrorMessage
                                            message={'Bad email'}
                                            className='app__footer-form__error'
                                        />
                                }

                                <div>
                                    <textarea
                                        type='text'
                                        name='message'
                                        className='p-text'
                                        placeholder='Your Message'
                                        value={values.message}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.message && touched.message && errors.message &&
                                    <ErrorMessage
                                            message={'Please, write something good!'}
                                            className='app__footer-form__error'
                                        />
                                }

                                <button type="submit" disabled={isSubmitting || isLoading}>
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            :
                <div>
                    <h3 className='head-text'>
                        Thank you for getting in touch
                    </h3>
                </div>
            }

            {/* <div className='app__footer-form app__flex'>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                >
                    {({
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    }) => (
                    <form onSubmit={handleSubmit}>

                            <>
                                <div className='app__flex'>
                                    <input
                                        className='p-text'
                                        type='text'
                                        placeholder="Your Name"
                                        name="name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='app__flex'>
                                    <input
                                        className='p-text'
                                        type='text'
                                        placeholder="Your Email"
                                        name="email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className='p-text'
                                        placeholder='Your Message'
                                        name='message'
                                        value={values.message}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='p-text'
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </>

                            :

                            <div>
                                <h3 className='head-text'>
                                    Thank you for getting in touch
                                </h3>
                            </div>
                        }
                    </form>
                    )}

                </Formik>
            </div> */}
        </>
    );
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);

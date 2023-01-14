import React from 'react';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://t.me/DmitriyPlotitsyn">
                    <BsTelegram />
                </a>
            </div>
            <div>
                <a href="https://wa.me/79602350974">
                    <BsWhatsapp />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;

import React from 'react';
import "./Partner.css"

const PartnerIMG = ({imagePath}) => {
    return (
        <div className="partners__partner">
            <img src={imagePath} alt=""></img>
        </div>
    );
};

export default PartnerIMG;

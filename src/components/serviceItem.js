import React from 'react';

const ServiceItem = (props) => {
    return (
        <div className="service">
            <div className="service-text">
                <h3 className="service-name">{props.serviceData.name}</h3>
                <p className="service-desc">{props.serviceData.description}</p>
            </div>
            <div className="service-image" style={{backgroundImage:`url(${props.serviceData.image.url})`, backgroundSize:"cover"}}></div>
        </div>
    );
}

export default ServiceItem;

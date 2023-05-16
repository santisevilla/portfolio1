import React from 'react';

const BotonDescargar = ({ url, filename }) => {
    return (
        <a href={url} target='_blank'>
            CV
        </a>
    );
};

export default BotonDescargar;
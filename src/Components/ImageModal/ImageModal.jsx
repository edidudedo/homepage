import React from 'react'
import './ImageModal.css'
const ImageModal = ({ src, onClose }) => {
    if (!src) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => onClose} >
                <img src={src}  />
            </div>
        </div>
    );
};

export default ImageModal
import './Footer.css';
import React from 'react';

export default function Footer(props) {
    return (
        <footer className="footer">
            <span>
                Desenvolvido com <i className='fa fa-heart text-danger'></i> por
                <strong> <span className='text-danger'>J</span>osé <span className='text-danger'>N</span>eto</strong>
            </span>
        </footer>
    );
}
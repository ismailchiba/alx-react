import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export function Footer() {
    return (
    <div className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
    </div>
);
};
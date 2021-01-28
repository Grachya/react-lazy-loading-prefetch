import React from 'react';
import './Popup.css';
import _ from 'lodash';
import moment from 'moment';

function Popup (props) {
    return(
        <div className="popup">
            <div className="popupContent">
                <div className="popupClose" onClick={() => {props.closePopup()}}>X</div>
                <span>{_.join(['Время', 'сейчас:', `${moment().format('HH:mm')}`], ' ')}</span>
            </div>
        </div>
    )
}

export default Popup;
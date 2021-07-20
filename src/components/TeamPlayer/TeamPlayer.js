import React from 'react';
import './TeamPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Teamplayer({ player, removeTeamplayer }) {
    const { name, imgUrl, role, country, salary } = player;
    return (
        <div className="Teamplayer">
            <div className="player-info">
                <img
                    src={imgUrl}
                    alt={name}
                    className="rounded-circle"
                />
                <h5>{name}</h5>
            </div>

            <div className="bg-dark text-white d-flex justify-content-between align-items-center p-2">
                <div>
                    <h6 className="mb-0">{country}</h6>
                    <p className="mb-0"><small>{role}</small></p>
                </div>
                <h4>${salary}</h4>
                <button className="btn btn-danger" onClick={() => removeTeamplayer(player)}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    )
}

export default Teamplayer;

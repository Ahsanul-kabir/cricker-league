import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = ({ player,addPlayer }) => {
    const { name, imgUrl, role, country, salary, ranking, march } = player

    return (
        <div className='Player'>
            <div className="player-info">
                <img src={imgUrl} alt={name} className='rounded-circle' />
                <h5>{name}</h5>
            </div>

            <div className="bg-dark text-white d-flex justify-content-between align-items-center p-2">
                <div className="player-short-details">
                    <h6 className="mb-0">{country}</h6>
                    <p className="mb-0"><small>{role}</small></p>
                </div>
                <h4>${salary}</h4>
            </div>

            <div className="p-2 d-flex align-items-center justify-content-between">
                <div>
                    <p className="mb-0">T20 Ranking: <b>{ranking}</b></p>
                    {/* <p className="mb-0">Match Played: <b>{match}</b></p> */}
                </div>
                <button className="btn btn-success" onClick={() => addPlayer(player)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );
};

export default Player;
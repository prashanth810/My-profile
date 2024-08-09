import React from 'react';
import './Portpolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
const Progreaabar = ({ progress, first, secondcss, fourth, reactnative, wordpress, color }) => {

    const styleobject = {
        width: `${progress}%`,
        backgroundColor: color || 'lightblue',
        height: '30px',
        borderRadius: '20px',
    }
    const stylefirst = {
        width: `${first}%`,
        backgroundColor: color || 'lightblue',
        height: '30px',
        borderRadius: '20px',
    }
    const stylesecond = {
        width: `${secondcss}%`,
        backgroundColor: color || 'lightblue',
        height: '30px',
        borderRadius: '20px',
    }
    const stylefourth = {
        width: `${secondcss}%`,
        backgroundColor: color || 'lightblue',
        height: '30px',
        borderRadius: '20px',
    }
    const stylereactnative = {
        width: `${reactnative}%`,
        backgroundColor: color || 'lightblue',
        height: '30px',
        borderRadius: '20px',
    }
    const stylewordpress = {
        width: `${wordpress}%`,
        backgroundColor: color || 'lightblue',
        height: '30px',
        borderRadius: '20px',
    }
    return (
        <div className='container'>
            <div className='row progress_bar_row'>
                <div className='col-md-6'>
                    <div className='main_progress'>
                        <FontAwesomeIcon icon={faHtml5} style={{ color: "orange", fontSize: '20px' }} /> <label>  Html </label>
                        <div className='containers containers_bar'>
                            <div className='progress-bar'>
                                <div style={stylefirst}>
                                    {`${first}%`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_progress'>
                        <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#9898f2", fontSize: '20px' }} /> <label>  css </label>
                        <div className='containers containers_bar'>
                            <div className='progress-bar'>
                                <div style={stylesecond}>
                                    {`${secondcss}%`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_progress'>
                        <FontAwesomeIcon icon={faJs} style={{ color: "#FFD43B", fontSize: '20px' }} /> <label>  Javscript</label>
                        <div className='containers containers_bar'>
                            <div className='progress-bar'>
                                <div style={styleobject}>
                                    {`${progress}%`}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-md-6'>

                    <div className='main_progress'>
                        <FontAwesomeIcon icon={faReact} style={{ color: "#63E6BE", fontSize: '20px' }} /> <label>  Recat js </label>
                        <div className='containers containers_bar'>
                            <div className='progress-bar'>
                                <div style={stylefourth}>
                                    {`${fourth}%`}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main_progress'>
                        <FontAwesomeIcon icon={faReact} style={{ color: "#63E6BE", fontSize: '20px' }} /> <label>  Recat Native </label>
                        <div className='containers containers_bar'>
                            <div className='progress-bar'>
                                <div style={stylereactnative}>
                                    {`${reactnative}%`}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main_progress'>
                        <FontAwesomeIcon icon={faWordpress} style={{ fontSize: '20px' }} /> <label> Wordpress  </label>
                        <div className='containers containers_bar'>
                            <div className='progress-bar'>
                                <div style={stylewordpress}>
                                    {`${wordpress}%`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progreaabar


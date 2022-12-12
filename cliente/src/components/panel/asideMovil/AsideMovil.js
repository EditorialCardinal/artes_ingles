import React from 'react';
import LogoEditorialIcon from '../../../images/logo_icono.svg';
import LogoEstudiante from '../../../images/logo_estudiante.png';
import { Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';


import './AsideMovil.scss';

const AsideMovil = () => {
  return (
    <div className='menu-lateral-movil'>
        <div className='logo'>
            <img src={LogoEditorialIcon} />
        </div>
        <div className='logo-estudiante'>
            <img src={LogoEstudiante} />
            <p>Arturo Camargo</p>
        </div>
        <div className='content-enlaces'>
            <span className='lista-enlaces'>
                <Link to={"/evaluacion"} className='link'>
                    <HomeOutlined className='iconLink' />
                    <span className='nav-text'>Evaluaciones</span>
                </Link>
            </span>				
        </div>
        <div className='content-enlaces'>
            <span className='lista-enlaces'>
                <Link to={"/evaluacion"} className='link'>
                    <HomeOutlined className='iconLink' />
                    <span className='nav-text'>Evaluaciones</span>
                </Link>
            </span>				
        </div>
        <div className='content-enlaces'>
            <span className='lista-enlaces'>
                <Link to={"/evaluacion"} className='link'>
                    <HomeOutlined className='iconLink' />
                    <span className='nav-text'>Evaluaciones</span>
                </Link>
            </span>				
        </div>
        <div className='content-enlaces'>
            <span className='lista-enlaces'>
                <Link to={"/evaluacion"} className='link'>
                    <HomeOutlined className='iconLink' />
                    <span className='nav-text'>Evaluaciones</span>
                </Link>
            </span>				
        </div>
    </div>
  )
}

export default AsideMovil
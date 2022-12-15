import React, {useContext, useState} from 'react';
import LogoEditorial from '../../../images/logo_cardinal.svg';
import LogoEditorialIcon from '../../../images/logo_icono.svg';
import LogoEstudiante from '../../../images/logo_estudiante.png';
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import {cambioIcon, ulrActual} from '../../../helpers/helpers';
import comprensionContext from '../../../context/auth/comprensionContext';

import './Aside.scss';

const listOptions = [
	{ classLink: "link", route: "/panelEstudiante", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Videos" },
	{ classLink: "link", route: "/enlaces", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Link" },
    { classLink: "link", route: "/actividades", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Activities" },
    { classLink: "link", route: "/interactivo", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Interactive"},
	{ classLink: "link", route: "/complementos", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Additional"},
	{ classLink: "link", route: "/evaluaciones", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Evaluations"},
	{ classLink: "link", route: "/calificaciones", classIcon:"iconLink", classSpan:"nav-text", textSpan:"Ratings"}
]


const Aside = () => {
	const usuario = JSON.parse(sessionStorage.getItem('cliente'));
	const stateComprension = useContext(comprensionContext);
	const {iconMenu} = stateComprension;

	const location = useLocation();
	const numeroIndex = ulrActual(location.pathname);

	const [activeLink, setActiveLink] = useState(numeroIndex);

    const renderList = () => {		
        return listOptions.map((option, index) => {
            return(				
                <div
                    key={index}
                    onClick={() => setActiveLink(index)}
                    id={index}
                    className={activeLink === index ? "active" : "lista-enlaces"}
                >
                    <Link  to={option.route} className={option.classLink}>
						{
							cambioIcon(option.route, option.classIcon)
						}
                        <span className={option.classSpan}>{option.textSpan}</span>
                    </Link>
                </div>
            )
        });
    }

	return (
		<div className={(iconMenu) ? 'menu-lateral-movil' : 'menu-lateral'}>
			<div className='logo'>
				{
					(iconMenu) ? <img src={LogoEditorialIcon} alt='logo'/> : <img src={LogoEditorial} alt='logo' />
				}				
			</div>
			<div className='logo-estudiante'>
				<img src={LogoEstudiante} alt='logo'/>
				{ 
					(usuario) ? <p>{usuario.nombres}</p> : null
				}				
			</div>
			<div className='content-enlaces'>
				{renderList()}				
			</div>
		</div>
	)
}

export default Aside
import jwtDecode from 'jwt-decode';
import {
    FORMULARIO_ALERTA,
    OCULTAR_ALERTA,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    TOKEN_ERROR,
    TOKEN_EXITOSO,
    CHANGE_MENU,
    DATOS_PARA_TEST,
    OBTENER_EVALUACIONES,
    CERRAR_SESION,
    GUARDAR_NOTA,
    MOSTRAR_NOTAS,
    OBTENER_PRUEBA

} from '../../types';

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_ALERTA:
            return {
                alerta: true,
                mensajeErrorForm: action.payload                
            }
        
        case OCULTAR_ALERTA:
            return {
                alerta: false,             
            }

        case REGISTRO_EXITOSO:
            return{
                ...state,
                alerta: true,
                mensajeErrorForm: action.payload,
                registrado: true 
            }
        
        case REGISTRO_ERROR:
            return{
                // ...state,
                alerta: true,
                mensajeErrorForm: action.payload,
            }

        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return{
                alerta: true,
                mensajeErrorForm: action.payload,
                cargando: false
            }            

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.accessToken);
            return {
                // ...state,
                alert: false,
                mensajeErrorForm: null,
                autenticado: true,
                
            }
        case TOKEN_ERROR:
            localStorage.removeItem('token');
            sessionStorage.removeItem('cliente');
            sessionStorage.removeItem('datosParaTest');
            localStorage.removeItem('evaluaciones');
            return {
                usuario: null,
                cargando: false,                
            }
        case TOKEN_EXITOSO:      
        sessionStorage.setItem('cliente', JSON.stringify(action.payload))      
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
                enviado: false
            }
        case CHANGE_MENU:
            return{
                iconMenu: action.payload,                
            }
        case DATOS_PARA_TEST:
            sessionStorage.setItem('datosParaTest', JSON.stringify(action.payload))
            return{
                informacionTest: action.payload
            }
        case OBTENER_EVALUACIONES:
            localStorage.setItem('evaluaciones', JSON.stringify(action.payload));
            return{
                evaluaciones: action.payload,                
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            sessionStorage.removeItem('cliente');
            sessionStorage.removeItem('datosParaTest');
            localStorage.removeItem('evaluaciones');
            return{
                ...state,
                token: null,
                usuario: null,
                autenticado: false,
            }
        case GUARDAR_NOTA:
            return{
                enviado: true,
            }
        case MOSTRAR_NOTAS:
            sessionStorage.setItem('calificaciones', JSON.stringify(action.payload))
            return{
                calificaciones: true
            }
            case OBTENER_PRUEBA:
                localStorage.setItem('prueba', JSON.stringify(action.payload));
                return{
                    evaluaciones: action.payload,                
                }
        default:
            return state;
    }
}
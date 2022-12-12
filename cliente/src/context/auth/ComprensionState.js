import React, {useReducer} from 'react';
import comprensionContext from './comprensionContext';
import comprensionReducer from './compresionReducer';
import {
    FORMULARIO_ALERTA,
    OCULTAR_ALERTA,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    TOKEN_EXITOSO,
    TOKEN_ERROR,
    CHANGE_MENU,
    DATOS_PARA_TEST,
    OBTENER_EVALUACIONES,
    CERRAR_SESION,
    GUARDAR_NOTA,
    MOSTRAR_NOTAS,
    OBTENER_PRUEBA
} from '../../types';

import { clienteAxios } from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const ComprensionState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        alerta: false,
        mensajeErrorForm: null,
		mensaje: null,
        usuario: null, 
        autenticado: false,
        registrado: false,
        iconMenu: false,
        timetest: 80,
        informacionTest: null,
        evaluaciones: [],
        cargaData: true,
        enviado: false,
        calificaciones: false        
    }
    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(comprensionReducer, initialState);

    //Serie de funciones para modificar el State

    //Modifica el state de alerta
    const formularioAlerta = (msg, cssload) => {
        const alert = {
            msg,
            cssload
        }
        dispatch({
            type: FORMULARIO_ALERTA,
            payload: alert          
        });

        // Después de 3 segundos limpiar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 3000);
    }

    //Agregar usuario
    const registrarUsuario = async datos => {
        
		try {
            const respuesta = await clienteAxios.post('addUser', datos);

            const alert = {
				msg: respuesta.data.msg,
				cssload: 'success'
			} 
			dispatch({
				type: REGISTRO_EXITOSO,
				payload: alert
			});
            setTimeout(() => {
                dispatch({
                    type: OCULTAR_ALERTA
                })
            }, 3000);

            window.location.href = '/';
            
		} catch (error) {
			const alert = {
				msg: error.response.data.msg,
				cssload: 'error'
			}
			dispatch({
				type: REGISTRO_ERROR,
				payload: alert
			});
            setTimeout(() => {
                dispatch({
                    type: OCULTAR_ALERTA
                })
            }, 2000);            
		}
	}

    //Validar el token del usuario 
    const usuarioAutenticado = async() => {
        const token = localStorage.getItem('token');        
        if(token){
            tokenAuth(token);
        }       
        try {
            const respuesta = await clienteAxios.get('/auth');
            dispatch({
                type: TOKEN_EXITOSO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            dispatch({
                type: TOKEN_ERROR
            })
        }
    }

    //Cuando el usuario Inicia Sesion
    const loginUsuario = async (data) => {
        obtenerEvaluaciones();
        obtenerPrueba();        
        setTimeout(async () => {
            try {
                const respuesta = await clienteAxios.post('/login', data);  
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: respuesta.data,                
                });                
                setTimeout(() => {
                    usuarioAutenticado();
                    consultarCalificacion();
                }, 400)
            } catch (error) {
                const alert = {
                    msg: error.response.data.msg,
                    cssload: 'error'
                }
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alert
                })
                setTimeout(() => {
                    dispatch({
                        type: OCULTAR_ALERTA
                    })
                }, 3000);
            }
        }, 500);
                
	}

    //Cambiar el icono del menu en el header.js
    const cambioIconMenu = (menu) => {
        dispatch({
            type: CHANGE_MENU,
            payload: menu
        });
        // window.location.reload()
    }

    //Guarda los datos del test que se va a realizar
    const guardaInfotest =(tipologia, bloque) =>{
        const informacion = {
            tipologia, bloque
        }
        dispatch({
            type: DATOS_PARA_TEST,
            payload: informacion
        })
    }

    //Obtener la evaluaciones de la comprension
    const obtenerEvaluaciones = async () => {
        try {
            const eva = await clienteAxios.get('/evaluaciones');
           
            dispatch({
                type: OBTENER_EVALUACIONES,
                payload: eva.data
            })                      
        } catch (error) {
            console.log(error);
        }
    }

    //Obtener la prueba saber de la comprension
    const obtenerPrueba = async () => {
        try {
            const prueba = await clienteAxios.get('/prueba');
            dispatch({
                type: OBTENER_PRUEBA,
                payload: prueba.data
            })                      
        } catch (error) {
            console.log(error);
        }
    }

    const cerrarSesion = async() => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    //Guardar las calificaciones de la evaluacion en la DB
    const guardarCalificacion = async(data) =>{ 
        try {
            const respuesta = await clienteAxios.post('/calificaciones', data);
            dispatch({
                type: GUARDAR_NOTA
            })            
        } catch (error) {
            console.log(error.response);
        }   
    }

    const consultarCalificacion = async () => {
        try {
            const resultado = await clienteAxios.get('/calificaciones');
            dispatch({
                type: MOSTRAR_NOTAS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <comprensionContext.Provider
            value={{
                alerta: state.alerta,
                mensajeErrorForm: state.mensajeErrorForm,
                autenticado: state.autenticado,
                usuario: state.usuario,
                token: state.token,
                registrado: state.registrado,
                iconMenu: state.iconMenu,
                informacionTest: state.informacionTest,
                evaluaciones: state.evaluaciones,
                cargaData: state.cargaData,
                enviado: state.enviado,
                calificaciones: state.calificaciones,
                formularioAlerta,  
                registrarUsuario,
                loginUsuario,
                cambioIconMenu,
                guardaInfotest,
                obtenerEvaluaciones,
                usuarioAutenticado,
                cerrarSesion,
                guardarCalificacion,
                consultarCalificacion,
                obtenerPrueba              
            }}
        >{props.children}
        </comprensionContext.Provider>
    )
}

export default ComprensionState;
import React, { useCallback, useEffect, useState } from 'react';
import { db, auth } from '../../firebase/firebase';
import { useForm } from './../../hooks/useForm';
import { useHistory, Redirect } from 'react-router';

const LoginPage = () => {
    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })
    const history=useHistory()
    const [userfirebase, setUserfirebase] = useState(false)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserfirebase(user)
            } else {
                setUserfirebase(false)
            }
        });
        
    }, []);

    const [error, setError] = useState({
        is: false,
        message: ''
    })
    const { email, password } = values;
    const { is, message } = error;
    const handleLogin = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            setError({
                ...error,
                is: true,
                message: 'Ingrese Correo'
            })
            reset()
            return
        }
        if (!password.trim()) {
            setError({
                ...error,
                is: true,
                message: 'Ingrese Password'
            })
            reset()
            return
        }

        setError({
            ...error,
            is: false,
            message: ''
        })
        login();
    }
    const login = useCallback(

        async () => {

            try {
                const res = await auth.signInWithEmailAndPassword(email, password);
                history.push('/dashboard')
                console.log(res.user);
            } catch (error) {
                setError({
                    ...error,
                    is: true,
                    message: error.message
                })
                return
            }
        },
        [email, password],
    )
    return userfirebase === false ?  ( 
        <div>

            <form className="login__form" onSubmit={handleLogin}>
                {
                    is && (
                        <div className="login__message">
                            <p>{message}</p>
                        </div>
                    )
                }
                <h3>Ingresar credenciales</h3>
                <input autoComplete="off" placeholder="Ingrese Email" className="login__input" type="email" name="email" value={email} onChange={handleInputChange} />
                <input placeholder="Ingrese Contraseña" className="login__input" type="password" name="password" value={password} onChange={handleInputChange} />
                <button className="btningresar">Ingresar</button>

            </form>
        </div>
    ) : <Redirect to="/dashboard" />
}

export default LoginPage;

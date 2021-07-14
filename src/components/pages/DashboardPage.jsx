import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/firebase';
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { useData } from '../../hooks/useData';

const DashboardPage = () => {
    const [etiquetas2, setEtiquetas2] = useState([]);
    const [alert, setAlert] = useState({
        tipo:'',
        message:''
    });
    const {tipo,message}=alert;
    const [values, handleInputChange, reset] = useForm({
        img: '',
        type: '',
        description: '',
        url_project: '',
        url_repo: ''
    });

    const { img, type, description, url_project, url_repo } = values;

    const history = useHistory()
    const [user, setUser] = useState(null);
    const [userfirebase, setUserfirebase] = useState(false)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserfirebase(user)
            } else {
                setUserfirebase(null)
            }
        });
    }, []);
    useEffect(() => {

        if (auth.currentUser) {
            setUser(auth.currentUser)
        } else {
            history.push('/login')
        }
    }, [])




    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login')
        }).catch((error) => {
            // An error happened.
        });
    }
    const handleCheck = e => {
        if (e.target.checked) {
            if (!etiquetas2.includes(e.target.value)) {
                setEtiquetas2([...etiquetas2, e.target.value])
            }
        }else{
            if (etiquetas2.includes(e.target.value)) {
                const et=etiquetas2.filter(etiqueta=>etiqueta!==e.target.value)
                setEtiquetas2([...et]);
            }
        }

    }
    const handleSave=(e)=>{
        e.preventDefault();
 
       db.collection("projects").add({
        ...values,
        etiquetas:etiquetas2
    })
        .then((docRef) => {
            setAlert({
                ...alert,
                tipo:'success',
                message:'Proyecto registrado'
            })
            setTimeout(() => {
                setAlert({
                    tipo:'',
                    message:''
                })
            }, 3000);
        })
        .catch((error) => {
            setAlert({
                ...alert,
                tipo:'error',
                message:'Ocurrio un error'
            })
        });
    }

    const {portfolios}=useData([]);
    return (
        <div>
            <h2 className="dashboard__title">{userfirebase.email}</h2>
            {
                userfirebase && <div className="pointer logout" onClick={handleLogout}>Cerrar sesion</div>
            }
            <div className="portfolios">
                <div className="portfolios__actions">
                    <div className={`alert_${tipo}`}>
                        <p>{message}</p>
                    </div>
                    <form className="login__form" onSubmit={handleSave}>
                        <h3>Ingrese Proyecto</h3>
                        <input autoComplete="off" placeholder="Ingrese url imagen" className="login__input" type="text" name="img" value={img} onChange={handleInputChange} />

                        <input autoComplete="off" placeholder="trabajo o personal" className="login__input" type="text" name="type" value={type} onChange={handleInputChange} />

                        <input autoComplete="off" placeholder="Titulo descriptivo" className="login__input" type="text" name="description" value={description} onChange={handleInputChange} />

                        <input autoComplete="off" placeholder="URL del proyecto" className="login__input" type="text" name="url_project" value={url_project} onChange={handleInputChange} />

                        <input autoComplete="off" placeholder="URL del repositorio" className="login__input" type="text" name="url_repo" value={url_repo} onChange={handleInputChange} />
                        <div className="etiquetas">
                            <label>js</label>
                            <input value="js" type="checkbox" onChange={handleCheck} />

                            <label >css</label>
                            <input value="css" type="checkbox" onChange={handleCheck} />

                            <label >bootstrap</label>
                            <input value="bootstrap" type="checkbox" onChange={handleCheck} />

                            <label >jquery</label>
                            <input value="jquery" type="checkbox" onChange={handleCheck} />

                            <label >vue</label>
                            <input value="vue" type="checkbox" onChange={handleCheck} />

                            <label >react</label>
                            <input value="react" type="checkbox" onChange={handleCheck} />

                            <label >laravel</label>
                            <input value="laravel" type="checkbox" onChange={handleCheck} />

                            <label >vuetify</label>
                            <input value="vuetify" type="checkbox" onChange={handleCheck} />

                            <label >tailwind</label>
                            <input value="tailwind" type="checkbox" onChange={handleCheck} />
                        </div>
                        <button className="btningresar">Registrar Proyecto</button>
                    </form>
                </div>
                <div className="portfolios__register">
                    {
                        portfolios.map(portfolio=>(
                            <li>{portfolio.description}</li>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default DashboardPage;

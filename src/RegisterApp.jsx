import { useState } from "react";


export const RegisterApp = ({ title = 'Crear Cuenta', subtitle = 'Registrate en la plataforma' }) => {

    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const [ showPassword, setShowPassword ] = useState(false);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const tooglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del registro', {
            nombre, email, password
        });
        alert(`Registro Existoso ${nombre} `)

        setNombre('')
        setEmail('')
        setPassword('')
        
    }

    return (
        <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            fontFamily: 'sans-serif'
        }}>
            <h2>{ title }</h2>
            <p style={{ color: 'gray', marginBottom: '25px' }}>
                { subtitle }
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="nombre"> Nombre Completo </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        placeholder="Escribe tu nombre aqui..."
                        required
                        onChange={handleNombreChange}
                        style={inputStyle}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="">Correo Electronico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="usario@gmail.com"
                        required
                        title="Por favor, utiliza una cuenta de gmail valida"
                        style={inputStyle}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label htmlFor="password">Contraseña</label>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <input
                            type={showPassword ? 'text': 'password'}
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="*********"
                            required
                            style={{ ...inputStyle, width: '100%', paddingRight: '100px' }}
                        />
                        <button type="button" style={toogleBtnStyle} onClick={tooglePasswordVisibility} >
                            {
                                showPassword ? 'Ocultar': 'Ver'
                            }
                        </button>
                    </div>
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold',  }} >
                    Registrarse
                </button>

            </form>
        </div>
    )
}


const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '10px'
}

const toogleBtnStyle = {
    position: 'absolute', 
    right: '5px', 
    top: '5px', 
    bottom: '5px', 
    background: 'transparent', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    color: 'green'
}

import React,{useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function  Connexion ()  {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/api/login', { username, password });
          setMessage(response.data.message);
        } catch (error) {
          setMessage('Échec de la connexion');
        }
    };
    
    return (
        <div className='auth-container d-flex justify-content-center'>
            <div className='auth-comp border w-50 w-md-75 w-lg-50 rounded p-4 p-sm-3' >
                <h1 className='d-flex justify-content-center'>Page de Connexion</h1>
                <form className='mb-3' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Courriel</label>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                   <div>
                    <label>Mot de passe</label>
                    <input
                        class="form-control"
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                   </div>
                   <br/>
                    <div>
                        <button className="btn btn-success"
                            type="submit">
                            Se connecter
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Connexion;
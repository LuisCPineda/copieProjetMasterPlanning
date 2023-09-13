import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    faCircleCheck,faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListeTache = () => {
    
    //status de liste
    const [toDo,setToDo] = useState([
        {id:1,titre:"Premier Tâche", status:false},
        {id:2,titre:"Deuxième Tâche", status:false}
    ]);
    
    //temp status
    const [nouvelleTache,setNouvelleTache]=useState('');
    const [updateDonnee,setUpdateDonnee]=useState('');

    //ajouter tâche

    const ajouterTache = () => {
        if(nouvelleTache){
            let num = toDo.length +1;
            let entree = {id:num,titre:nouvelleTache, status:false}
            setToDo([...toDo,entree]);
            setNouvelleTache('');
        }
    }

    //supprimer tâche
    const supprimerTache = (id) => {
        let nouvelleListesTaches = toDo.filter(tache =>tache.id !==id)
        setToDo(nouvelleListesTaches);
    }

    //marquer tâche comme complété
    const marquerTache = (id) => {

    }

    //annuler mise à jour tâche 
    const annulerUpdateTache = () => {

    }

    //changer tâche 
    const changerTache = (id) => {
        const nouvelleListeTaches = [...toDo];

        const tacheIndex = nouvelleListeTaches.findIndex((tache) => tache.id === id);

        if (tacheIndex !== -1) {

            nouvelleListeTaches[tacheIndex].titre = window.prompt("Enter the new task name:", nouvelleListeTaches[tacheIndex].titre);;

            setToDo(nouvelleListeTaches);
        }
    }
    //update tâche 
    const updateTache = (e) => {

    }

    return (
        <div className='container App'>
            <br/>
            <h2>Master-Planning</h2>
            <br/>

            <div className='row'>
                <div className='col'>
                    <input 
                        value={nouvelleTache}
                        onChange={(e)=>setNouvelleTache(e.target.value)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className='col-auto'>
                    <button
                    onClick={ajouterTache}
                    className='btn btn-lg btn-success'>
                        Ajouter tâche
                    </button>
                </div>
            </div>
            <br/>

            {toDo && toDo.length ? '' :'Pas de tâches...'}

            {toDo && toDo
            .sort((a,b)=>a.id > b.id ? 1:-1)
            .map((tache,index)=>{
                return(
                    <React.Fragment key={tache.id}>
                        <div className='col taskBg'>
                            <div className={tache.status ? 'done':' '}>
                                <span className='tacheNumber'>{index+1}</span>
                                <span className='texteTache'>{tache.titre}</span>
                            </div>
                            <div className='iconsWrap'>
                                <span>
                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faPen}
                                    onClick={()=>changerTache(tache.id)}/>
                                    
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faTrashCan}
                                    onClick={()=>supprimerTache(tache.id)}/>
                                </span>
                            </div>
                        </div>
                       
                    </React.Fragment>
                )
            })}
        </div>
    );
};

export default ListeTache;
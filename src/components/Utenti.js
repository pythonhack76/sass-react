import React, {useState, useEffect} from 'react';
import "./utenti.css"
import logo1 from "../imgs/logo1.png"

function Utenti() {

    function Esempio() {
        //dichiaro un valore
        const [contatore, setContatore] = useState(0);
        const [nome, setNome] = useState();
        

        return (
            <>
            <div className="contatore">
                <p>Hai clicca {contatore} volte</p>
                <button onClick={() => setContatore(contatore + 1)}>Clicca qui</button>
            </div>
            <div className="utenti">
                <p>Tu sei {setNome}</p>
            </div>
            </>
        )
    }

    function Counter({initialCount}) {
        const [count, setCount] = useState(initialCount);
        return (
            <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </>
        );
    }
    
    function StatusContatore(props){
        const [contatore, setContatore] = useState(0);
        useEffect(() => {
            document.title = 'Hai cliccato $(contatore) volte';
        });
    }
   
    return (
        <div className="welcome">
            <img src={logo1} className="welcome-logo" alt="logo" />
        
            <h1>Benvenuto</h1>
            <h2>{Esempio()}</h2>
        </div>
    )
}

export default Utenti;

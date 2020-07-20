import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [count10, setCount10] = useState(0);
    const [rand, setRand] = useState(0);

    const add = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
    const add10 = () => {
        setCount10(count10 + 10);
    }
    const minus10 = () => {
        setCount10(count10 - 10);
    }
    const ran = () => {
        setRand(Math.floor(Math.random() * 11));
    }
    const minusrand = () => {
        setRand(Math.floor(Math.random() * 11));
    }
    return (
        <div className="App">
            <h3>
                <button onClick={add} className="btn btn-outline-primary">Add +1</button>
                {count}
                <button onClick={minus} className="btn btn-outline-primary">Delete -1</button>
                <br/>
                <button onClick={add10} className="btn btn-outline-primary">Add +10</button>
                {count10}
                <button onClick={minus10} className="btn btn-outline-primary">Delete -10</button>
                <br/>
                <button onClick={ran} className="btn btn-outline-primary">Random from 1 to 10</button>
                {rand}
                <button onClick={minusrand} className="btn btn-outline-primary">Random from 1 to 10</button>
            </h3>
        </div>
    );
}

export default App;

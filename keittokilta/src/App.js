import Anecdote from "./components/Anecdote"
import logo from "./img/logo.png";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <header className="Title">
                Länsi-uudenmaan Keittokilta
            </header>
            
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Anecdote/>
        </div>
    );
}

export default App;

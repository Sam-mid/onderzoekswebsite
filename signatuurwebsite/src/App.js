import React from 'react';
import './index.css';
import Header from './components/Header';
import Timeline from './components/Timeline';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Timeline />
            </main>
        </div>
    );
}

export default App;



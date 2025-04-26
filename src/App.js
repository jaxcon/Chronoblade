import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './components/Store/Store';
import { PlayerProvider } from './context/PlayerContext';
import CharacterPicker from './components/CharacterPicker/CharacterPicker'
import AppWrapper from './AppWrapper';
import GameHub from './components/GameHub/GameHub';
import Battle from './components/Battle/Battle';

function App() {

    return (
        <PlayerProvider>
            <Router>
                <AppWrapper>
                    <Routes>
                        <Route path="/" element={<GameHub />} />
                        <Route path="/battle" element={<Battle />} />
                        <Route path="/shop" element={<Store />} />
                        <Route path="/champs" element={<CharacterPicker />} />
                    </Routes>
                </AppWrapper>
            </Router>
        </PlayerProvider>
    );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import { PlayerProvider } from './context/PlayerContext';
import CharacterPicker from './components/CharacterPicker'
import AppWrapper from './AppWrapper';
import GameHub from './components/GameHub';
import Battle from './components/Battle';
import WebApp from '@twa-dev/sdk';

WebApp.ready();
WebApp.expand();
WebApp.MainButton.hide();
WebApp.setHeaderColor("bg_color");

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
                        <Route path="*" element={<GameHub />} />
                    </Routes>
                </AppWrapper>
            </Router>
        </PlayerProvider>


    );
}

export default App;

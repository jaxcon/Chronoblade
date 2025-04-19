import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BattleScreen from './navigation/BattleScreen';
import ShopScreen from './navigation/ShopScreen';
import { PlayerProvider } from './context/PlayerContext';
import CharacterPicker from './components/CharacterPicker/CharacterPicker'
import AppWrapper from './AppWrapper';
import GameHub from './components/GameHub/GameHub';

function App() {

    return (
        <PlayerProvider>
            <Router>
                <AppWrapper>
                    <Routes>
                        <Route path="/" element={<GameHub />} />
                        <Route path="/battle" element={<BattleScreen />} />
                        <Route path="/shop" element={<ShopScreen />} />
                        <Route path="/champs" element={<CharacterPicker />} />
                    </Routes>
                </AppWrapper>
            </Router>
        </PlayerProvider>
    );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './navigation/MainScreen';
import BattleScreen from './navigation/BattleScreen';
import ShopScreen from './navigation/ShopScreen';
import { PlayerProvider } from './context/PlayerContext';
import CharacterPicker from './components/WelcomeModal/CharacterPicker'
import AppWrapper from './AppWrapper';

function App() {

    return (
        <PlayerProvider>
            <Router>
                <AppWrapper>
                    <Routes>
                        <Route path="/" element={<MainScreen />} />
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

import SettingsModal from '../SettingsModal';
import { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { SettingsButton, HeaderWrapper } from './styles';
import { FiSettings } from 'react-icons/fi';
import ChampionIcon from './ChampionIcon';

function Header() {
    const [showSettings, setShowSettings] = useState(false);
    const { username, champion, xp } = usePlayer();

    return (
        <HeaderWrapper>
            <ChampionIcon username={username} champion={champion} exp={xp} />
            <SettingsButton onClick={() => setShowSettings(true)}>
                <FiSettings size={24} color="#fff" />
            </SettingsButton>

            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </HeaderWrapper>
    );
}

export default Header;
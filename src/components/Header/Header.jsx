import { HeaderWrapper } from './Header.styled';
import SettingsModal from '../SettingsModal/SettingsModal';
import { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import {
    InfoBlock,
    Label,
    Icon,
    SettingsButton
} from './Header.styled';
import { FiSettings } from 'react-icons/fi';
import ChampionIcon from './ChampionIcon';

function Header() {
    const [showSettings, setShowSettings] = useState(false);
    const { username, champion, xp } = usePlayer();

    return (
        <HeaderWrapper>
            <div style={{ display: 'flex', gap: '12px' }}>
                <InfoBlock>
                    <Icon viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </Icon>
                    <Label>{username}</Label>
                </InfoBlock>

                <ChampionIcon name={champion} exp={xp} />

            </div>
            <SettingsButton onClick={() => setShowSettings(true)}>
                <FiSettings size={24} color="#fff" />
            </SettingsButton>

            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </HeaderWrapper>
    );
}

export default Header;
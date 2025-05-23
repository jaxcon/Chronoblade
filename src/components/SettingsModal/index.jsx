import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import {
    Overlay,
    Modal,
    Title,
    FlagsWrapper,
    FlagButton,
    VolumeSlider,
    CloseButton
} from './styles';
import { usePlayer } from '../../context/PlayerContext';

function SettingsModal({ onClose }) {
    const { volume, updateVolume, updateLang} = usePlayer();
    const { t: getString } = useTranslation();

    return (
        <Overlay onClick={onClose}>
            <Modal onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    ×
                </CloseButton>
                <Title>
                    {getString('settings')}
                </Title>

                <h4>{getString('language')}</h4>
                <FlagsWrapper>
                    <FlagButton
                        onClick={async () => updateLang('ru')}
                        selected={i18n.language === "ru"}
                    >
                        RU
                    </FlagButton>
                    <FlagButton
                        onClick={async () => updateLang('en')}
                        selected={i18n.language === "en"}
                    >
                        EN
                    </FlagButton>
                </FlagsWrapper>

                <h4>{getString('volume')}</h4>
                <VolumeSlider
                    type="range"
                    min="0"
                    max="100"
                    value={volume * 100}
                    onChange={async e  => await updateVolume(Number(e.target.value / 100))}
                />
            </Modal>
        </Overlay>
    );
}

export default SettingsModal;
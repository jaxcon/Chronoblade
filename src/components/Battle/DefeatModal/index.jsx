import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ModalStats,
    ModalButton,
    StatItem,
    StatIcon,
    ButtonGroup,
    DefeatIcon
} from "./styles";
import { useTranslation } from "react-i18next";

const STAT_ITEMS = [
    { icon: "⚔️", key: "killOverAll", valueKey: "unitKills" },
    { icon: "💰", key: "goldOverAll", valueKey: "gold" },
    { icon: "🌟", key: "xpOverAll", valueKey: "xp" }
];

function DefeatModal({ onRetry, onExit, gameResult }) {
    const { t: getString } = useTranslation();

    const renderStatItem = ({ icon, key, valueKey }) => (
        <StatItem key={key}>
            <StatIcon>{icon}</StatIcon>
            {getString(key)} {gameResult[valueKey]}
        </StatItem>
    );

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>
                    {getString('youLose')}
                </ModalTitle>
                <DefeatIcon>💀</DefeatIcon>
                <ModalStats>
                    {STAT_ITEMS.map(renderStatItem)}
                </ModalStats>
                <ButtonGroup>
                    <ModalButton onClick={onRetry}>
                        {getString('tryAgain')}
                    </ModalButton>
                    <ModalButton onClick={onExit}>
                        {getString('toMenu')}
                    </ModalButton>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
}

export default DefeatModal;
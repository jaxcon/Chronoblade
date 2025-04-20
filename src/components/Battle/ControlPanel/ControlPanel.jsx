import { ActionPanel, ActionButton, } from './controlPanel.styled';
import { useTranslation } from 'react-i18next';

const ControlPanel = ({ selectedAction, setSelectedAction }) => {
    const { t: getString } = useTranslation();

    return (
        <ActionPanel>
            <ActionButton selected={selectedAction === "attack"} onClick={() => setSelectedAction("attack")}>
                <img src="assets/icons/attackIcon.png" alt="attack" />
                {getString('attackAction')}
            </ActionButton>

            <ActionButton selected={selectedAction === "skill"} onClick={() => setSelectedAction("skill")}>
                <img src="assets/icons/skillIcon.png" alt="skill" />
                {getString('skill')}
            </ActionButton>

            <ActionButton selected={selectedAction === "item"} onClick={() => setSelectedAction("item")}>
                <img src="assets/icons/itemIcon.png" alt="item" />
                {getString('item')}
            </ActionButton>
        </ActionPanel>
    )
};

export default ControlPanel;
import { useState } from 'react';
import { ActionPanel, ActionButton, } from './styles';
import { useTranslation } from 'react-i18next';
import { SkillModal } from './SkillModal';

const ControlPanel = ({ selectedAction, setSelectedAction, championClass, xp }) => {
    const [skillModalOpen, setSkillModalOpen] = useState(false);
    const { t: getString } = useTranslation();

    return (
        <ActionPanel>
            <ActionButton selected={selectedAction === "attack"} onClick={() => setSelectedAction("attack")}>
                <img src="assets/icons/attackIcon.png" alt="attack" />
                {getString('attackAction')}
            </ActionButton>

            <ActionButton  selected={selectedAction.includes('skill')} onClick={() => {
                    setSelectedAction("pause");
                    setTimeout( () => setSkillModalOpen(true), 500)
            }}>
                <img src="assets/icons/skillIcon.png" alt="skill" />
                {getString('skill')}
            </ActionButton>

            <ActionButton selected={selectedAction === "item"} onClick={() => setSelectedAction("item")}>
                <img src="assets/icons/itemIcon.png" alt="item" />
                {getString('item')}
            </ActionButton>
            <SkillModal
                open={skillModalOpen}
                onClose={() => setSkillModalOpen(false)}
                championClass={championClass}
                xp={xp}
                setSelectedAction={setSelectedAction}
            />
        </ActionPanel>
    )
};

export default ControlPanel;
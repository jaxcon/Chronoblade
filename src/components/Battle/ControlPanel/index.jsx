import { useState } from 'react';
import { ActionPanel, ActionButton, } from './styles';
import { useTranslation } from 'react-i18next';
import { SkillModal } from './SkillModal';
import { ItemModal } from './ItemModal';

const ControlPanel = ({ selectedAction, setSelectedAction, champId, xp, cooldowns, usableItems}) => {
    const [skillModalOpen, setSkillModalOpen] = useState(false);
    const [itemModalOpen, setItemModalOpen] = useState(false);
    const { t: getString } = useTranslation();

    return (
        <ActionPanel>
            <ActionButton selected={selectedAction === "attack"} onClick={() => setSelectedAction("attack")}>
                <img src="assets/icons/attackIcon.png" alt="attack" />
                {getString('attackAction')}
            </ActionButton>

            <ActionButton selected={selectedAction.includes('skill')} onClick={() => {
                setSelectedAction("pause");
                setTimeout(() => setSkillModalOpen(true), 500);
            }}>
                <img src="assets/icons/skillIcon.png" alt="skill" />
                {getString('skill')}
            </ActionButton>

            <ActionButton disabled={usableItems?.length === 0} selected={selectedAction === "item"} onClick={() => {
                setSelectedAction("pause");
                setTimeout(() => setItemModalOpen(true), 500);
            }}>
                <img src="assets/icons/itemsBox.png" alt="item" />
                {getString('item')}
            </ActionButton>
            <SkillModal
                open={skillModalOpen}
                onClose={() => setSkillModalOpen(false)}
                championClass={champId}
                xp={xp}
                setSelectedAction={setSelectedAction}
                cooldowns={cooldowns}
            />
            <ItemModal
                open={itemModalOpen}
                onClose={() => setItemModalOpen(false)}
                items={usableItems}
                setSelectedAction={setSelectedAction}
            />
        </ActionPanel>
    )
};

export default ControlPanel;
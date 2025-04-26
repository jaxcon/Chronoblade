import { createPortal } from 'react-dom';
import { getSkills } from '../../championDataHandle';
import {
    Overlay,
    Modal,
    Title,
    SkillButton,
    CancelButton
} from './styles';

export const SkillModal = ({ open, onClose, onSelect, championClass, xp }) => {
    if (!open) return null;

    return createPortal(
        <Overlay onClick={onClose}>
            <Modal onClick={e => e.stopPropagation()}>
                <Title>Выберите навык</Title>
                <div className="flex flex-col gap-2">
                    {getSkills(xp, championClass).map(skill => (
                        <SkillButton key={skill} onClick={() => onSelect(skill)}>
                            {skill}
                        </SkillButton>
                    ))}
                </div>
                <CancelButton onClick={onClose}>Отмена</CancelButton>
            </Modal>
        </Overlay>,
        document.body
    );
};
import { useCallback } from 'react';
import { getSkills } from '../../championDataHandle';
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    SkillsList,
    SkillItem,
    SkillButton,
    SkillName,
    SkillDescription,
    CancelButton
} from './styles';
import { useTranslation } from 'react-i18next';

export const SkillModal = ({ open, onClose, setSelectedAction, championClass, xp }) => {
    const { t: getString } = useTranslation();

    const handleSkillSelect = useCallback((skill) => {
        setSelectedAction('skill ' + skill);
        onClose();
    }, [setSelectedAction, onClose]);

    const handleCancel = useCallback(() => {
        setSelectedAction('attack');
        onClose();
    }, [setSelectedAction, onClose]);

    if (!open) return null;

    const skills = getSkills(xp, championClass);
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>
                    {getString('selectSkill')}
                </ModalTitle>
                <SkillsList>
                    {skills.map((skill) => (
                        <SkillItem key={skill}>
                            <SkillButton onClick={() => handleSkillSelect(skill)}>
                                <SkillName>
                                    {skill}
                                </SkillName>
                                <SkillDescription>
                                    {getString(skill + 'Desc')}
                                </SkillDescription>
                            </SkillButton>
                        </SkillItem>
                    ))}
                </SkillsList>
                <CancelButton onClick={handleCancel}>
                    {getString('cancel')}
                </CancelButton>
            </ModalContent>
        </ModalOverlay>
    );
};

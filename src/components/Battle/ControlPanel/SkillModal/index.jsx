import { useCallback } from 'react';
import { getSkills } from '../../../../utils/championDataHandle';
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

export const SkillModal = ({ open, onClose, setSelectedAction, championClass, xp, cooldowns }) => {
    const { t: getString } = useTranslation();

    const handleSkillSelect = useCallback((skill) => {
        setSelectedAction('skill ' + skill);
        onClose();
    }, [setSelectedAction, onClose]);

    const handleCancel = useCallback(() => {
        setSelectedAction('attack');
        onClose();
    }, [setSelectedAction, onClose]);

    const getCooldownRounds = (skill) => {
        if (!cooldowns?.length) return null;
        const cooldown = cooldowns.find(c => c.skill === skill);
        return cooldown ? cooldown.rounds : null;
    };

    if (!open) return null;

    const skills = getSkills(xp, championClass);
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>
                    {getString('selectSkill')}
                </ModalTitle>
                <SkillsList>
                    {skills.map((skill) => {
                        const cooldownOfCurrent = getCooldownRounds(skill);
                        const isCooldowned = cooldownOfCurrent > 0;

                        return (
                            <SkillItem key={skill}>
                                <SkillButton disabled={isCooldowned} onClick={() => handleSkillSelect(skill)}>
                                    <SkillName>
                                        {getString(skill)}
                                    </SkillName>
                                    <SkillDescription>
                                        {isCooldowned
                                            ? getString('cooldowned1') + cooldownOfCurrent + getString('cooldowned2') 
                                            : getString(skill + 'Desc')}
                                    </SkillDescription>

                                </SkillButton>
                            </SkillItem>
                        )
                    })}
                </SkillsList>
                <CancelButton onClick={handleCancel}>
                    {getString('cancel')}
                </CancelButton>
            </ModalContent>
        </ModalOverlay>
    );
};

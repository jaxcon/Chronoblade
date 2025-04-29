import { useEffect, useState } from "react";
import {
    ActionContainer,
    ActionIcon,
    DamageText,
    ActionContent,
    ShieldText,
    KillAvatar,
    KillOverlay
} from './styles';

const ActionEffect = ({ damage, type, avatar, shield }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <ActionContainer>
            <ActionContent>
                {type === 'kill' && (
                    <>
                        <KillAvatar src={avatar} alt="Killed enemy" />
                        <KillOverlay src="assets/icons/basicAttack.png" alt="Attack" />
                    </>
                )}
                {type === 'shield' && (
                    <>
                        <ActionIcon src="assets/icons/shield.png" alt="Shield" />
                        <ShieldText>
                            {shield}
                        </ShieldText>
                    </>
                )}
                {!type && (
                    <>
                        <ActionIcon src="assets/icons/basicAttack.png" alt="Attack" />
                        <DamageText>
                            {damage}
                        </DamageText>
                    </>
                )}
            </ActionContent>
        </ActionContainer>
    );
};

export default ActionEffect;
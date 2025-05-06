import { useEffect, useState } from "react";
import {
    ActionContainer,
    ActionIcon,
    DamageText,
    ActionContent,
    ShieldText,
    KillAvatar,
    KillOverlay,
    HealEffect
} from './styles';

const ActionEffect = ({ value, type, avatar, isCritical = false }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <ActionContainer>
            <ActionContent>

                {type === 'titan' && (
                    <>
                        <ActionIcon src="assets/icons/berserk.png" alt="Berserk" />
                    </>
                )}
                {type === 'adrenaline' && (
                    <>
                        <ActionIcon src="assets/icons/berserk.png" alt="Berserk" />
                    </>
                )}


                {type === 'stunned' && (
                    <>
                        <ActionIcon src="assets/icons/shocked.png" alt="Stunned" />
                    </>
                )}


                {type === 'harvest' && (
                    <>
                        <ActionIcon src="assets/icons/bleed.png" alt="Harvest" />
                    </>
                )}
                {type === '' && (
                    <>
                        <ActionIcon src="assets/icons/vulnerability.png" alt="Vulnerability" />
                    </>
                )}



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
                            {value}
                        </ShieldText>
                    </>
                )}
                {type === 'berserk' && (
                    <>
                        <ActionIcon src="assets/icons/berserk.png" alt="Berserk" />
                    </>
                )}
                {type === 'heal' && (
                    <>
                        <HealEffect>❤️ {value}</HealEffect>
                    </>
                )}
                {!type && (
                    <>
                        <ActionIcon src={"assets/icons/" + (isCritical ? "criticalAttack.png" : "basicAttack.png")} alt="Attack" />
                        <DamageText>
                            {value}
                        </DamageText>
                    </>
                )}
            </ActionContent>
        </ActionContainer>
    );
};

export default ActionEffect;
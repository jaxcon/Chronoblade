import { TurnsRow, AvatarsWrapper, Avatar, Separator } from './styles';
import { useMemo } from 'react';

const TurnHistory = ({ turns }) => {
    const { queue = [], turnOrder = 0} = turns;

    const renderUpcomingTurns = useMemo(() => {
        if (!queue?.length) return null;
    
        const totalToShow = 5;
        const upcomingTurns = [];
    
        for (let i = 0; i < totalToShow; i++) {
            const unitIndex = (turnOrder + i) % queue.length;
            const unit = queue[unitIndex];
    
            upcomingTurns.push(
                <Avatar
                    key={`${unit.id}-${i}`}
                    src={unit.avatar}
                    alt={unit.id}
                />
            );
    
            if ((unitIndex + 1) % queue.length === 0 && i < totalToShow - 1) {
                upcomingTurns.push(
                    <Separator key={`divider-${i}`}/>
                );
            }
        }
    
        return upcomingTurns;
    },[queue, turnOrder]);

    return (
        <TurnsRow>
            <AvatarsWrapper>
                {renderUpcomingTurns}
            </AvatarsWrapper>
        </TurnsRow>
    )
};

export default TurnHistory;
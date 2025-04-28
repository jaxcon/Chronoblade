import { useEffect, useState } from 'react';
import {
    BirdContainer,
    BirdBody,
    Wing,
    Body,
    Head,
    Tail,
    Eye,
    Beak
} from './styles';
import { playSoundByName } from '../../../utils/soundManager';
import { usePlayer } from '../../../context/PlayerContext';


const Bird = ({ size, top, left, duration, delay }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const { volume } = usePlayer();
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShow(true)
        }, delay * 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [delay])

    const handleClick = () => {
        setIsClicked(true);
        playSoundByName('disappearance', volume);
        setTimeout(() => setIsShow(false), 500);
    };

    if (isClicked) return;
    if (!isShow) return;

    return (
        <BirdContainer $size={size} $top={top} $left={left} $duration={duration} $isClicked={isClicked} onClick={handleClick}>
            <BirdBody>
                <Wing />
                <Body />
                <Head />
                <Tail />
                <Eye />
                <Beak />
            </BirdBody>
        </BirdContainer>
    );
};

export default Bird;
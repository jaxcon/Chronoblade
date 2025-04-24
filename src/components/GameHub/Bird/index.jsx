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

const Bird = ({ size, top, left, duration }) => {

    return (
        <BirdContainer $size={size} $top={top} $left={left} $duration={duration}>
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
import { memo } from 'react';
import { SmokeSVG } from './styles';

const Smoke = () => (
    <SmokeSVG viewBox="0 0 100 200">
        <circle className="smoke" cx="50" cy="150" r="12" />
        <circle className="smoke" cx="55" cy="140" r="10" style={{ animationDelay: '1s' }} />
        <circle className="smoke" cx="45" cy="130" r="8" style={{ animationDelay: '2s' }} />
    </SmokeSVG>
);

export default memo(Smoke);
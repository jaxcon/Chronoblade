import { InfoBlock, Icon, Label } from './Header.styled';
import { getLvl } from '../Battle/championDataHandle';
import { icons } from './championClassIcons';


function ChampionIcon({ name, exp }) {

    return (
        <InfoBlock>
            <Icon viewBox="0 0 24 24">
                {icons[name]}
            </Icon>
            <Label>{getLvl(exp)}</Label>
        </InfoBlock>
    );
}

export default ChampionIcon;
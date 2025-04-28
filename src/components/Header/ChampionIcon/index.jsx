import { InfoBlock, Icon, Label } from './styles';
import { getLvl } from '../../../utils/championDataHandle';

const championIcons = {
    draygar: 'assets/icons/draygar.svg',
    jormungad: 'assets/icons/jormungad.svg',
    danitsa: 'assets/icons/danitsa.svg'
};
const getIconSource = (champion) => championIcons[champion];

function ChampionIcon({ username, champion, exp }) {

    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            <InfoBlock>
                <Icon src='assets/icons/player.svg' alt='player' />
                <Label>
                    {username}
                </Label>
            </InfoBlock>

            <InfoBlock>
                <Icon src={getIconSource(champion)} alt={champion} />
                <Label>
                    {getLvl(exp)}
                </Label>
            </InfoBlock>
        </div>
    );
}

export default ChampionIcon;
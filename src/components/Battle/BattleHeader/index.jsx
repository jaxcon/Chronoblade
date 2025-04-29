import { memo } from "react";
import {
    BattleNumber,
    BattleHeaderWrapper,
} from "./styles";

const BattleHeader = ({ battleNumber }) => {
    return (
        <BattleHeaderWrapper>
            <BattleNumber>
                <img src='assets/icons/sharp.svg' alt='battle number' />
                {battleNumber}
            </BattleNumber>
        </BattleHeaderWrapper>

    );
};

export default memo(BattleHeader);
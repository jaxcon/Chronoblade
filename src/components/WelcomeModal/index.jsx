import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    ModalBackground,
    ModalContent,
    Title,
    Subtitle,
    InputNickname,
    ConfirmButton,
} from "./styles";
import { usePlayer } from '../../context/PlayerContext';
import { useTranslation } from 'react-i18next';

function WelcomeModal() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const { updateUsername } = usePlayer();
    const { t: getString } = useTranslation();
    const navigate = useNavigate();

    const validateName = (value) => {
        if (value.trim().length < 3) return "Минимум 3 символа";
        if (value.trim().length > 20) return "Максимум 20 символов";
        return "";
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setName(value);
        setError(validateName(value));
    };

    const handleConfirm = () => {
        const trimmed = name.trim();
        const validationError = validateName(trimmed);
        if (validationError) {
            setError(validationError);
            return;
        }
        updateUsername(trimmed);
        navigate('champs')
    };

    return (
        <ModalBackground>
            <ModalContent>
                <Title>{getString('welcome')}</Title>
                <Subtitle>{getString('inputName')}</Subtitle>
                <InputNickname
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder={getString('nickPlaceholder')}
                    maxLength={20}
                />
                <ConfirmButton onClick={handleConfirm} disabled={!!error || name.trim() === ""}>{getString('confirm')}</ConfirmButton>
            </ModalContent>
        </ModalBackground>
    );
}

export default WelcomeModal;
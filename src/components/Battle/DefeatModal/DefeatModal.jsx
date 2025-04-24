import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ModalStats,
    ModalButton
} from "./styles";

function DefeatModal({ kills, gold, onRetry, onExit }) {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>Ты проиграл</ModalTitle>
                <ModalStats>
                    <p>Убито врагов: {kills}</p>
                    <p>Заработано золота: {gold}</p>
                </ModalStats>
                <div>
                    <ModalButton onClick={onRetry}>Попробовать снова</ModalButton>
                    <ModalButton onClick={onExit}>В меню</ModalButton>
                </div>
            </ModalContent>
        </ModalOverlay>
    );
}

export default DefeatModal;
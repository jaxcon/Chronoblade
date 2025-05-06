import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    ItemsList,
    Item,
    ItemButton,
    ItemIcon,
    ItemInfo,
    ItemName,
    ItemDescription,
    CancelButton
} from './styles';



export const ItemModal = ({ open, onClose, items, setSelectedAction }) => {
    const { t: getString } = useTranslation();

    const handleSelect = (itemId) => {
        setSelectedAction('item ' + itemId);
        onClose();
    };

    const handleCancel = useCallback(() => {
        setSelectedAction('attack');
        onClose();
    }, [setSelectedAction, onClose]);

    if (!open || !items?.length) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>
                    {getString('selectItem')}
                </ModalTitle>
                <ItemsList>
                    {items?.map((item, index) => (
                        <Item key={item.id +index}>
                            <ItemButton onClick={() => handleSelect(item.id)}>
                                <ItemIcon>{item.emoji}</ItemIcon>
                                <ItemInfo>
                                    <ItemName>{getString(item.id)}</ItemName>
                                    <ItemDescription>
                                        {getString(item.id + 'Desc')}
                                    </ItemDescription>
                                </ItemInfo>
                            </ItemButton>
                        </Item>
                    ))}
                </ItemsList>
                <CancelButton onClick={handleCancel}>
                    {getString('cancel')}
                </CancelButton>
            </ModalContent>
        </ModalOverlay>
    );
};

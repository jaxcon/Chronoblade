import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';

function TavernScreen() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
        </>
    )
}

export default TavernScreen;
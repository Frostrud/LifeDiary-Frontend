import Middiv from "./components/Middiv";
import { useLocation } from 'react-router-dom';

const Collection = () => {
    const location = useLocation();
    const userID = location.state?.userID;

    

    const handleButton = () => {
        console.log(userID);
    };

    return (
        <Middiv>
            <div>
                <button onClick={handleButton}>
                    +
                </button>
                <div className="collectionDiv">
                    <div>
                        Element 1
                    </div>
            </div>
            </div>
            
            
        </Middiv>
    );
}

export default Collection;
import Middiv from "./components/Middiv";
import { useParams, useNavigate } from 'react-router-dom';

const CollectionsPage = () => {
    const {email} = useParams();
    const navigator = useNavigate();
    

    const newCollection = () => {
        console.log(email)
    }

    return (
        <Middiv>
            <div>
                <div>
                    Collection 1
                </div>
                <button onClick={newCollection}>
                +
                </button>
                <div>
                    Collection 2
                </div>
            </div>
        </Middiv>
    );
}
 
export default CollectionsPage;
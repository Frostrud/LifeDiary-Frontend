import { useEffect, useState } from "react";
import Middiv from "./components/Middiv";
import { useLocation} from 'react-router-dom';
import useEndpoint from "./hooks/useEndpoint";

const CollectionsPage = () => {
    const location = useLocation();
    //TODO change it to use cookies in the future
    const email = location.state?.email;
    const { loading, error, fetchData, status} = useEndpoint();
    const [userID, setUserID] = useState(null);
    

    const newCollection = () => {
        console.log(email)
    }

    useEffect(() => {
        const fetchId = async () => {
            setUserID(await fetchData("/api/getID/{email}")); 
        }

        if(email !== undefined) {
            fetchId();
            console.log(userID);
        }
    });

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
import { useEffect, useState } from "react";
import Middiv from "./components/Middiv";
import { useLocation } from 'react-router-dom';
import useEndpoint from "./hooks/useEndpoint";

const CollectionsPage = () => {
    const location = useLocation();
    //TODO change it to use cookies in the future
    const userID = location.state?.id;
    const { loading, error, fetchData, status, data } = useEndpoint();
    //const [userID, setUserID] = useState(null);


    const newCollection = (collectionName) => {
        console.log(userID)
        var x = document.getElementById("collectorDiv");
        var newCollection = document.createElement("div");
        newCollection.innerHTML = `<div id="collectionID">
                                        <p>${collectionName}</p>
                                    </div>`
        x.appendChild(newCollection);
    }

    const loadCollections = async(event) => {
        try {
            const response = await fetch("http://localhost:8080/api/collections/getcollectionsbyUser=" + userID, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const responseData = await response.json();
            const status = response.status;
            
            
            if(status === 200) {
                const collectionList = responseData;
                for(var collection of collectionList) {
                    newCollection(collection.collectionName);
                }
            }
            else if(status === 403) {
                console.log("oh shit, forbidden")
            };
      
          } catch (exception) {
            console.log("something went wrong")
          }
    }


    useEffect(() => {
        loadCollections();
    }, []);

    return (
        <Middiv>
            <button className="newCollectionButton" onClick={newCollection}>
                +
            </button>
            <div id="collectorDiv">

            </div>

        </Middiv>
    );
}

export default CollectionsPage;
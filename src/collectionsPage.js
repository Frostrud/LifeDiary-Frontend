import { useEffect, useState } from "react";
import Middiv from "./components/Middiv";
import { useLocation } from 'react-router-dom';
import useEndpoint from "./hooks/useEndpoint";
import Modal from "react-modal";
import CollectionForm from "./components/CollectionForm";

//Documentation said it was smart to bind it to root
Modal.setAppElement("#root");

const CollectionsPage = () => {
    const location = useLocation();
    //TODO change it to use cookies in the future
    const userID = location.state?.id;
    const { loading, error, fetchData, status, data } = useEndpoint();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const newCollection = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const createCollectionBox = (collectionName) => {
        var x = document.getElementById("collectorDiv");
        var newCollection = document.createElement("div");
        newCollection.innerHTML = 
    `
    <div id="collectionDiv">
      <p>${collectionName}</p>
      <div classname ="collection-details">
        <div className = "collectionSize">Collection amount</div>
        <button className="toCollectionButton">
          button
        </button>
      </div>
    </div>
  `;
        x.appendChild(newCollection);
    }



    const addNewCollection = async (collectionName) => {
        console.log(collectionName);

        try {
            const response = await fetch("http://localhost:8080/api/collections/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: collectionName, id: userID })
            })
            const status = response.status;


            if (status === 200) {
                loadCollections();
            }
            else if (status === 403) {
                console.log("oh shit, forbidden")
            };

        } catch (exception) {
            console.log("something went wrong")
        }

        closeDialog();
    }

    const loadCollections = async (event) => {
        try {
            const response = await fetch("http://localhost:8080/api/collections/getCollectionsByUser=" + userID, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const responseData = await response.json();
            const status = response.status;


            if (status === 200) {
                const collectionList = responseData;

                //Loop to remove existing children
                var x = document.getElementById("collectorDiv");
                while (x.firstChild) {
                    x.removeChild(x.firstChild);
                }
                //Loop to create new children
                for (var collection of collectionList) {
                    createCollectionBox(collection.collectionName);
                }
            }
            else if (status === 403) {
                console.log("oh shit, forbidden")
            };

        } catch (exception) {
            console.log("something went wrong")
        }
    }


    //Runs twice for some reason?
    useEffect(() => {
        loadCollections();
    }, [userID]);

    return (
        <Middiv id="collectionsMidDiv">
            <Modal isOpen={isDialogOpen}
                onRequestClose={closeDialog}
                contentLabel="Add New Collection">
                <h2>Add New Collection</h2>
                <CollectionForm onSubmit={addNewCollection} />
            </Modal>
            <button className="newCollectionButton" onClick={newCollection}>
                +
            </button>
            <div id="collectorDiv">

            </div>

        </Middiv>
    );
}

export default CollectionsPage;
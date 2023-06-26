import { useEffect, useState } from "react";
import Middiv from "./components/Middiv";
import { useLocation } from 'react-router-dom';
import useEndpoint from "./hooks/useEndpoint";
import Modal from "react-modal";
import CollectionForm from "./components/CollectionForm";
import CollectionBox from "./components/collectionBox";

//Documentation said it was smart to bind it to root
Modal.setAppElement("#root");

const CollectionsPage = () => {
    const location = useLocation();
    //TODO change it to use cookies in the future
    const userID = location.state?.id;
    const { loading, error, fetchData, status, data } = useEndpoint();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [collectionsList, setCollectionsList] = useState();

    const newCollection = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const addNewCollection = async (collectionName) => {
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
                const List = responseData;

                setCollectionsList(List);
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

    useEffect(() => {
        console.log(collectionsList);
    })
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
                {collectionsList && collectionsList.map((collection) => (
                    <CollectionBox key={collection.id} collectionName={collection.collectionName} collectionId={collection.id}/>
                ))}
            </div>

        </Middiv>
    );
}

export default CollectionsPage;
import Middiv from "./components/Middiv";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import CollectionItem from "./components/CollectionItem";
import Modal from "react-modal";
import ItemForm from "./components/ItemForm";
import useFetch from "./hooks/useFetch";

//Documentation said it was smart to bind it to root
Modal.setAppElement("#root");

const Collection = () => {
    const location = useLocation();
    const userID = location.state?.userID;
    const collectionID = location.state?.collectionID;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [textList, setTextList] = useState();
    const { data: responseData, loading, error, status, fetchData } = useFetch();

    const newItem = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const addNewItem = async (itemName) => {
        try {
            let body = {name: itemName, id: collectionID}
            await fetchData("/api/texts/add", "POST", body,{
                headers: {
                    'Content-Type': 'application/json',
                },
            })

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

    const loadCollections = async () => {
        try {
            await fetchData("/api/collections/getSingleCollectionByCollectionID=" + collectionID, "GET", {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (status === 200) {
                //Unneeded with the new useEffect
                //updateTextList(responseData)
            } else if (status === 403) {
                console.log("Forbidden")
            }
        } catch (exception) {
            console.log("Something went wrong")
        }
    };

    const updateTextList = (responseData) => {
        console.log(responseData.texts)
        setTextList(responseData.texts);
    };

    useEffect(() => {
        loadCollections();
    }, [userID]);

    useEffect(() => {
        if(responseData) {
            setTextList(responseData.texts)
        }
    }, [responseData])

    return (
        <Middiv>
            <Modal isOpen={isDialogOpen}
                onRequestClose={closeDialog}
                contentLabel="Add New Item">
                <h2>Add New Item</h2>
                <ItemForm onSubmit={addNewItem} />
            </Modal>
            <button className="newItemButton" onClick={newItem}>
                +
            </button>
            <div className="collectionDiv">
                {textList && textList.map((text) => (
                    <CollectionItem key={text.id} headLine={text.headLine} content={text.content} textID={text.id} />
                ))}
            </div>
        </Middiv>
    );
}

export default Collection;
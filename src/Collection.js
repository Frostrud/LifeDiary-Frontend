import Middiv from "./components/Middiv";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import CollectionItem from "./components/CollectionItem";
import Modal from "react-modal";
import ItemForm from "./components/ItemForm";

//Documentation said it was smart to bind it to root
Modal.setAppElement("#root");

const Collection = () => {
    const location = useLocation();
    const userID = location.state?.userID;
    const collectionID = location.state?.collectionID;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [textList, setTextList] = useState();

    const newItem = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const addNewItem = async (itemName) => {
        try {
            const response = await fetch("http://localhost:8080/api/texts/add", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: itemName, id: collectionID })
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

    const loadCollections = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/collections/getSingleCollectionByCollectionID=" + collectionID, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const responseData = await response.json();
            const status = response.status;


            if (status === 200) {
                const responseObject = responseData;
                const list = responseObject.texts;
                setTextList(list);
            }
            else if (status === 403) {
                console.log("oh shit, forbidden")
            };
        } catch (exception) {
            console.log("something went wrong")
        }
    }

    useEffect(() => {
        loadCollections();
    }, [userID]);

    useEffect(() => {
        console.log(textList);
    })

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
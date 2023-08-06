import Middiv from "./components/Middiv";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import CollectionItem from "./components/CollectionItem";

const Collection = () => {
    const location = useLocation();
    const userID = location.state?.userID;
    const collectionID = location.state?.collectionID;
    const [textList, setTextList] = useState();

    

    const handleButton = () => {
        console.log(userID);
        console.log(collectionID);
        console.log(textList);
    };

    const loadCollections = async (event) => {
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

    useEffect(()=> {
        loadCollections();
    }, [userID]);

    useEffect(() => {
        console.log(textList);
    })

    return (
        <Middiv>
                <button className="newItemButton" onClick={handleButton}>
                    +
                </button>
                <div className="collectionDiv">
                    {textList && textList.map((text) => (
                            <CollectionItem key={text.id} headLine={text.headLine} content={text.content} textID={text.id}/>
                    ))}
            </div>
        </Middiv>
    );
}

export default Collection;
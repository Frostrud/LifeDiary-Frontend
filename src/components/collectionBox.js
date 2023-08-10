import { Link } from "react-router-dom";

const CollectionBox = ({ collectionName, collectionId, userID, deleteCollection}) => {
    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete this collection?")) {
            deleteCollection(collectionId);
        }
    }

    return (
        <div id="collectionDiv">
            <div className="topBar">
                <button onClick={handleDelete}>
                    X
                </button>
            </div>
            <p>{collectionName}</p>
            <div classname="collection-details">
                <Link to=
                    {`/collection/:${collectionId}`} state={{ userID: userID, collectionID: collectionId }}>
                    <button className="toCollectionButton">
                        To Collection
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default CollectionBox;
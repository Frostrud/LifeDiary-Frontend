import { Link } from "react-router-dom";

const CollectionBox = ({ collectionName, collectionId }) => {
    return (
        <div id="collectionDiv">
            <p>{collectionName}</p>
            <div classname="collection-details">
                <Link to={`/collection/:${collectionId}`}>
                    <button className="toCollectionButton">
                        To Collection {collectionId}
                    </button>
                </Link>
                
            </div>
        </div>
    );
}

export default CollectionBox;
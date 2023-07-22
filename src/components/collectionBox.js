import { Link } from "react-router-dom";

const CollectionBox = ({ collectionName, collectionId, userID}) => {
    return (
        <div id="collectionDiv">
            <p>{collectionName}</p>
            <div classname="collection-details">
                <Link to=
                { `/collection/:${collectionId}`} state = {{ userID: userID }}>
                    <button className="toCollectionButton">
                        To Collection
                    </button>
                </Link>
                
            </div>
        </div>
    );
}

export default CollectionBox;
const CollectionBox = (collectionName) => {
    return (
        <div id="collectionDiv">
            <p>${collectionName}</p>
            <div classname="collection-details">
                <div className="collectionSize">Collection amount</div>
                <button className="toCollectionButton">
                    button
                </button>
            </div>
        </div>
    );
}

export default CollectionBox;
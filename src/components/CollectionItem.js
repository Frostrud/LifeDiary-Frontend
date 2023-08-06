import { Link } from "react-router-dom";

const CollectionItem = ({ headLine, content, textID }) => {
    return (
        <div className="itemDiv">
            <div>
                <p>{headLine}</p>
            </div>
            <div>
                {content}
            </div>
            <div>
                <Link to=
                    {`/collection/TODO`} state={{}}>
                    <button className="toItemButton">
                        To Item
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CollectionItem;
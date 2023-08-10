import Middiv from "../components/Middiv";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const Text = () => {
    const location = useLocation();
    const textID = location.state?.textID;
    const [text, setText] = useState();

    const fetchText = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/texts/getSingleTextByTextID=" + textID, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const responseData = await response.json();
            const status = response.status;


            if (status === 200) { 
                const responseText = responseData;
                setText(responseText)
            }
            else if (status === 403) {
                console.log("oh shit, forbidden")
            };

        } catch (exception) {
            console.log("something went wrong")
        }
    }

    useEffect(() => {
        fetchText();
    }, [textID]);

    return (
        <Middiv>
            <div className="textDiv">
                <div className="textWindow">
                    <div className="textTopBar">
                        {text ? <h1>{text.headLine}</h1> : <h1>Loading...</h1>}
                    </div>
                    <div className="contentDiv">
                        {text ? text.content : "Loading content"}
                    </div>
                </div>
            </div>
        </Middiv>
    );
}
 
export default Text;
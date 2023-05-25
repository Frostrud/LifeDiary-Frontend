import { Link } from "react-router-dom";
import Middiv from "./Middiv";

const Home = () => {
    return (
        <Middiv>
            <div className="mainDiv">
                <div className='leftSide'>
                    <h1>Welcome to LifeDiary</h1>
                    <h1>The first Cloud-based storage service designed for trans-generational data storage</h1>
                    <p>Do you know if your pictures on Instagram will still be there in 50 years?</p>
                    <div className='heroSectionButtons'>
                        <Link to="/signup">
                            <button className='signUpButton'>
                                Join today for a limited free offer!
                            </button>
                        </Link>
                        <Link to="/plans">
                            <button className="otherPlansButton">
                                Or take a look at our current plans
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='pictureDiv'>
                    <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt='Earth From space'></img>
                </div>
            </div>
            <div className='baitDiv'>
                <div>
                    <img className="image1" src="harddrive.jpg" alt="harddrive"></img>
                    <p>Elevate your data storage to new heights with our cutting-edge cloud storage solution. Experience the unbeatable reliability and scalability of the cloud, while also preserving your digital legacy for future generations. Pass down your invaluable memories, documents, and media effortlessly, ensuring a lasting heritage that transcends physical limitations.</p>
                </div>
                <div>
                    <img className="image1" src="harddrive2.jpg" alt="harddrive"></img>
                    <p>Leave behind the constraints of traditional hard drives and embrace the future of data storage. Our cloud storage platform offers unmatched security, accessibility, and the added advantage of generational heritage. Safeguard your files from hardware failures, while empowering your family to inherit and cherish your digital legacy for years to come.</p>
                </div>
                <div>
                    <img className="image1" src="harddrive3.jpg" alt="harddrive"></img>
                    <p>Say goodbye to the risks of data loss and the limitations of hard drives. With our cloud storage service, not only do you gain the peace of mind of secure and redundant data storage, but you also unlock the ability to create a lasting generational heritage. Preserve your family's history, share memories seamlessly, and ensure a digital legacy that transcends time with our state-of-the-art cloud storage solution.</p>
                </div>
            </div>
            <div className="infoDiv">
                <img className="image1" src="HappyManSomething.jpg" alt="Happy man looking at clouds"></img>
                <div>
                    A cloud storage site with generational heritage offers a unique advantage by allowing users to pass down their stored data to future generations. This feature ensures that the valuable information, memories, and
                    important files accumulated over a lifetime can be preserved and shared with loved ones in a seamless and organized manner.
                    By enabling data inheritance, the cloud storage site eliminates the worry of data loss or fragmentation, ensuring a smooth transition of
                    digital assets from one generation to the next. This capability holds significant sentimental value, allowing families to maintain a digital legacy and
                    share cherished memories with future descendants. Furthermore, the ability to inherit data from a cloud storage site simplifies the estate planning process, facilitating
                    the transfer of digital assets without the need for complex legal procedures. By providing a seamless way to preserve and pass down information, a cloud storage site with generational
                    heritage becomes a valuable tool for families to maintain their history, knowledge, and personal legacy for years to come.
                </div>
            </div>
            <div className="infoDiv">
                <div>
                    In addition to its primary storage capabilities, a cloud storage site with generational heritage offers the unique advantage of
                    preserving and passing down digital assets to future generations. By allowing individuals to securely store and organize their data in the cloud, this
                    type of site ensures that valuable information, personal documents, cherished memories, and other digital content can be seamlessly inherited by descendants.
                    This feature not only facilitates the transfer of important files but also enables the preservation of family history, allowing future generations to access and explore their ancestors' digital legacy.
                    The ability to pass down data through generations fosters a sense of continuity, connecting family members across time and ensuring that knowledge, experiences, and treasured moments are preserved for years to come.
                    With a cloud storage site that supports generational heritage, individuals can confidently entrust their digital assets to a reliable platform that will safeguard and perpetuate their digital legacy.
                </div>
                <img className="image1" src="pexelsPhoto.webp" alt="Happy man looking at clouds"></img>
            </div>
            <div className="bottomDiv">
                <Link to="/signup">
                    <button className='bottomButton'>
                        Join today for a limited free offer!
                    </button>
                </Link>
            </div>
        </Middiv>
    );
}

export default Home;
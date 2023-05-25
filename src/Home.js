import NavBar from "./Navbar";
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
                        <img className="image1" src="https://media.istockphoto.com/id/667795446/photo/the-old-hard-disk-drive-is-disintegrating-in-space.jpg?s=612x612&w=is&k=20&c=uIJVgjQedSVohNKK6o-VG8YQ2ACJeF8LoaVuDxXcO-0=" alt="harddrive"></img>
                        <p>100% safe cloud storage for all your images, videos, family trees, info and everything you want to pass along to your future family and generations!</p>
                    </div>
                    <div>
                        <img className="image1" src="https://media.istockphoto.com/id/667795446/photo/the-old-hard-disk-drive-is-disintegrating-in-space.jpg?s=612x612&w=is&k=20&c=uIJVgjQedSVohNKK6o-VG8YQ2ACJeF8LoaVuDxXcO-0=" alt="harddrive"></img>
                        <p>Did you know that the average lifespan of a harddrive is 3-5 years and 5-10 for a SSD?</p>
                    </div>
                    <div>
                        <img className="image1" src="https://media.istockphoto.com/id/667795446/photo/the-old-hard-disk-drive-is-disintegrating-in-space.jpg?s=612x612&w=is&k=20&c=uIJVgjQedSVohNKK6o-VG8YQ2ACJeF8LoaVuDxXcO-0=" alt="harddrive"></img>
                        <p>Did you know that you own nothing of the data you store in the regular cloud storages and have no rights over it?</p>
                    </div>
                </div>
        </Middiv>
    );
}

export default Home;
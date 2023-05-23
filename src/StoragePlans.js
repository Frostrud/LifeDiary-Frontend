import NavBar from "./Navbar";

const StoragePlans = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="plansDiv">
                <div className="planDiv">
                    <div>
                        <h1>
                            Basic Plan
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Space up to 50GB
                        </h2>
                        <h2>
                            Monthly payment
                        </h2>
                        <h2>
                            Can only store images or videos
                        </h2>
                        <h2>
                            Only 5.99$ per month!
                        </h2>
                        <button>
                            Buy now
                        </button>
                    </div>

                </div>
                <div className="planDiv">
                    <div>
                        <h1>
                            Premium
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Space up to 300GB
                        </h2>
                        <h2>
                            Annual payment
                        </h2>
                        <h2>
                            Store any filetype that you want!
                        </h2>
                        <h2>
                            Only 11.99$ per month!
                        </h2>
                        <button>
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="planDiv">
                    <div>
                        <h1>
                            Premium +
                        </h1>
                    </div>
                    <div>
                        <h2>
                            Space up to 1TB
                        </h2>
                        <h2>
                            Annual payment
                        </h2>
                        <h2>
                            Create your own categories!
                        </h2>
                        <h2>
                            Includes a family tree!
                        </h2>
                        <h2>
                            Only 15.99$ per month!
                        </h2>
                        <button>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <footer>© 2023 LifeDiary </footer>
        </div>
    );
}

export default StoragePlans;
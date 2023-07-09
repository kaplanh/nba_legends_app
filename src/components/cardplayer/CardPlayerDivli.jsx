import { useState } from "react";

const PlayerCard = ({ player }) => {
    const {
        name,
        img,
        statistics,
        // statistics: [points, rebaunds, assist, allstar],
    } = player;
    const [toggle, setToggle] = useState(true);
    const [search , setSearch ] = useState('')

    const handleClick = (e) => {
        setToggle(!toggle);
    };
    const handleSearch = (e) => {
        player.filter((item.))
    }

    return (
        <div className="col col-md-6 col-lg-4 col-xl-3 p-3 p-1 ">
            <input
                onChange={handleSearch}
                className="form-control w-50 mx-auto"
                type="search"
                name="name"
                id="name"
                placeholder="Search Player..."
            />
            <div
                onClick={handleClick}
                className="card  "
                style={{ height: "30rem" }}
            >
                {toggle ? (
                    <div className="img-container">
                        <img
                            src={img}
                            className="card-img-top h-100 w-100"
                            alt="player"
                        />
                    </div>
                ) : (
                    <ul className="list h-75 d-flex flex-column justify-content-center align-content-center ms-5 fs-5 fw-bold">
                        {statistics.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                )}
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
            );
        </div>
    );
};

export default PlayerCard;

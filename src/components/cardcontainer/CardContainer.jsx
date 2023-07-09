// import PlayerCard from "./PlayerCard";
import { data } from "../../helper/data";
import CardPlayer from "../cardplayer/CardPlayer";
import { useState } from "react";

const CardContainer = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="container">
            <div className="form-group mt-4">
                <input
                    type="search"
                    className="form-control search m-4 w-75 mx-auto"
                    placeholder="Search Player"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className=" row ">
                {data
                    .filter((player) =>
                        player.name
                            .toLocaleLowerCase()
                            .includes(search.trim().toLocaleLowerCase())
                    )
                    .map((player, i) => (
                        <CardPlayer key={i} {...player} />
                    ))}
            </div>
        </div>
    );
};

export default CardContainer;

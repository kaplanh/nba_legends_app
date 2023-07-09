const Img = ({ img }) => {
    return (
        <div className="img-container h-75 ">
            <img
                src={img}
                className="card-img-top h-100 rounded-4"
                alt="player"
            />
        </div>
    );
};

export default Img;

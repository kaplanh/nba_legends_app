import img from "../../assets/nba-logo.png"
const Header = () => {
    return (
        <div className="text-center mt-4 ">
            <img src={img} alt="" />
            <h1>NBA Legends</h1>
        </div>
    );
};

export default Header;

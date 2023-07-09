const Ul = ({ statistics }) => {
    return (
        <ul className="statistics h-75 d-flex flex-column justify-content-center align-content-center m-auto fs-5 fw-bold bg-light ">
            {statistics.map((item, i) => {
                return (
                    <li key={i}>
                        <span>🏀</span> {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default Ul;

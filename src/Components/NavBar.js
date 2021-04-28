const NavBar = ({account}) => {
    return(
        <div className="navbar">
            <div className="contents">
                <div className="title">
                    <a href = "/">TokenMaker</a>
                </div>
                <div className="address">
                {account}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
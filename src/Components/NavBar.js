const NavBar = ({account}) => {
    return(
        <div className="navbar">
            <div className="contents">
                <div className="title">
                    TokenMaker
                </div>
                <div className="address">
                {account}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
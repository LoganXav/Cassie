import "./Navbar.scss"

export const Navbar: React.FC = () => {

    return(
        <div className="navbar-container">
            <div className= "navbar">
                <span>CASSIE</span>
                <div className="menu">
                    <span>INFO</span>
                    <span><i className="ri-menu-2-line"></i></span>
                </div>
            </div>
        </div>
    )
}
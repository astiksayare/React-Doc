
import "./Style.css";

const styles = {
    width: '100%', 
    height: '10vh', 
    position: 'absolute', 
    top: '0px', 
    backgroundColor: "#000", 
    color: "#fff"
};

const Header = () => {

    return (
        <section style={styles}>
        <nav className="navbar">
            {/* First container */}
            <div className="logo">
                <h1>React.logo</h1>
            </div>

            {/* Second Container */}
            <div className="list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </div>

            {/* Third container */}
            <div className="btn">
                <button>Login</button>
            </div>

        </nav>
        </section>
    )
}

export default Header;
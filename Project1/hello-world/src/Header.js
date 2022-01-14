import Intro from './Intro';

function Header() {
    return (
        <div>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Intro />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Header;
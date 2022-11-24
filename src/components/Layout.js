import Nav from './navBar'; 

function Layout({ children }) {

    return (

        <header className="App-header">
            <div id="portada-inicio">

                <h1>Flash video game store</h1>

            </div>

            <Nav />
            {children}
        </header>




    );







}

export default Layout
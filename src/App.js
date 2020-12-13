import './App.css';
import { Layout, /*Header,*/ Navigation, Drawer, Content } from 'react-mdl';
import Main from './pages/Main';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
      <div>
        <Layout>

            {/** Navbar rendering */}

                <Navbar />
                
                {/** Sidebar */}
                
                <Drawer>
                    <Navigation>
                        <Link to="/Home">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </Navigation>
                </Drawer>
            <Content>

                {/** React Router setup */}
                
                <Main />
            </Content>
        </Layout>
      </div>
  );
}

export default App;

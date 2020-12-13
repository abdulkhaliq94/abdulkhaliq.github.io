import './App.css';
import { Layout, /*Header,*/ Navigation, Drawer, Content } from 'react-mdl';
import Main from './pages/Main';
import Navbar from './components/Navbar'

function App() {
  return (
      <div>
        <Layout>

            {/** Navbar rendering */}

                <Navbar />
                
                {/** Sidebar */}
                
            <Content>

                {/** React Router setup */}
                
                <Main />
            </Content>
        </Layout>
      </div>
  );
}

export default App;

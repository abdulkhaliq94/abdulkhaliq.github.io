import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from './pages/Main';

function App() {
  return (
      <div>
        <Layout>
            <Content>

                {/** React Router setup */}
                
                <Main />
            </Content>
        </Layout>
      </div>
  );
}

export default App;

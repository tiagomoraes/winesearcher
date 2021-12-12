import AppRoutes from '@routes';
import GlobalStyle from './styles/globalStyle';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;

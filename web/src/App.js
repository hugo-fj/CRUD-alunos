import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

import Header from "./components/Header";
import AdicionarAluno from "./components/AdicionarAluno";
import EditarAluno from "./components/EditarAluno";
import ListarAluno from './components/ListarAluno';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route exact path="/" component={ListarAluno}>
          <ListarAluno/>
        </Route>
        <Route path="/adicionar">
          <AdicionarAluno/>
        </Route>
        <Route path="/editar">
          <EditarAluno/>
        </Route>

      </Switch>
    
    </BrowserRouter>

     

    







    </div>
  );
}

export default App;

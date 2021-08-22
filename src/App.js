import { Route, Switch, BrowserRouter } from "react-router-dom";
import NewTaskPage from "./pages/NewTask";
import Navbar from "./components/layout/navbar";
import AllTasks from "./pages/AllTasks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact={true}>
            <AllTasks />
          </Route>
          <Route path="/new-task">
            <NewTaskPage />
          </Route>
          <Route path="/favorites">
            <div>Favorite Tasks</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

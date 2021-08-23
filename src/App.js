import { Route, Switch, BrowserRouter } from "react-router-dom";
import NewTaskPage from "./pages/NewTask";
import Navbar from "./components/layout/navbar";
import AllTasks from "./pages/AllTasks";
import EditTask from "./pages/EditTask";

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
          <Route path="/edit/:id" component={EditTask}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

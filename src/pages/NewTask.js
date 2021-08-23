import { useHistory } from "react-router-dom";
import AddTodoForm from "../components/AddTodoForm";
import axios from "axios";

function NewTaskPage() {
  const history = useHistory();

  function addTaskHandler(taskData) {
    axios.post("http://localhost:3800/candidates", taskData).then(() => {
      history.replace("/");
    });
    console.log(taskData);
  }

  return <AddTodoForm onAddTask={addTaskHandler} />;
}

export default NewTaskPage;

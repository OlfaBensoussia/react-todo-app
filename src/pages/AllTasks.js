import Todo from "../components/Todo";
import { useState, useEffect } from "react";
import axios from "axios";

function AllTasks() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTasks, setLoadedTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3800/candidates")
      .then((res) => {
        setIsLoading(false);
        setLoadedTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Tasks</h1>
      {loadedTasks.map((task) => {
        return (
          <Todo
            key={task._id}
            id={task._id}
            title={task.title}
            link={task.link}
            description={task.description}
            task={task}
          />
        );
      })}

      <br />
    </section>
  );
}

export default AllTasks;

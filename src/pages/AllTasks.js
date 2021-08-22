import Todo from "../components/Todo";
import { useState, useEffect } from "react";

function AllTasks() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3800/candidates")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
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
      <h1>All Meetups</h1>
      {loadedMeetups.map((meetup) => {
        return (
          <Todo
            key={meetup._id}
            id={meetup._id}
            title={meetup.title}
            link={meetup.link}
            description={meetup.description}
            meetup={meetup}
          />
        );
      })}

      <br />
    </section>
  );
}

export default AllTasks;

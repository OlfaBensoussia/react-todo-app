import { useHistory } from "react-router-dom";
import AddTodoForm from "../components/AddTodoForm";
import axios from "axios";

function NewTaskPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    axios.post("http://localhost:3800/candidates", meetupData).then(() => {
      history.replace("/");
    });
    console.log(meetupData);
  }

  return (
    <AddTodoForm onAddMeetup={addMeetupHandler} />

    // <section>
    //   <h1>Add New Meetup</h1>
    //   <AddTodoForm />
    // </section>
  );
}

export default NewTaskPage;

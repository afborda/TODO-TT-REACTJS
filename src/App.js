import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/logo-tt.png";
import Tasks from "./components/Tasks";
import { GetTasks, AddTask, DeleteTask, updateTask } from "./service";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  async function handleAddItemToList(event) {
    event.preventDefault();

    const data = {
      task: task,
      done: false,
    };

    await AddTask(data);

    setTask("");
    listTasks();
  }

  async function handleUpdateTask(id) {
    const data = {
      done: true,
    };

    await updateTask(id, data);

    listTasks();
  }

  const deleteItem = async (id) => {
    await DeleteTask(id);
    listTasks();
  };

  const listTasks = async () => {
    const data = await GetTasks();
    setTaskList(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    listTasks();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>E aí, Cícero?</h1>
        <img src={Logo} alt="Logo" />
      </header>
      <form>
        <input
          type="text"
          name="task"
          id="add-task"
          placeholder="Digite uma tarefa nova"
          value={task}
          onChange={handleChangeInput}
        />
        <button onClick={handleAddItemToList} type="submit">
          +
        </button>
      </form>

      <h5>SUAS TAREFAS:</h5>

      {taskList.map(({ id, task, done }) => {
        console.log(id);
        return (
          <div key={id}>
            <Tasks
              task={task}
              done={done}
              id={id}
              onClick={() => deleteItem(id)}
              onDone={() => handleUpdateTask(id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

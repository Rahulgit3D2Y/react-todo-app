import Header from "./Header";
import Navbar from "./Navbar";
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <TodosLogic />
    </div>
  );
};

export default TodoApp;

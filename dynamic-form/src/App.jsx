import DynamicForm from "./dynamicForm";
import config from "./config.json";

const App = () => {
  return (
    <div className="App">
      <DynamicForm config={config} />
    </div>
  );
};

export default App;

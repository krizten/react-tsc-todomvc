import * as React from "react";
import * as ReactDOM from "react-dom";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import TodoApp from "./app";
import { TodoAcknowledgment } from "./components/acknowledgement";
import "./index.css";
import { TodoModel } from "./models/todoModel";

const model = new TodoModel("react-todos");

function render() {
  ReactDOM.render(
    <React.Fragment>
      <section className='todoapp'>
        <TodoApp model={model} />
      </section>
      <TodoAcknowledgment />
    </React.Fragment>,
    document.getElementById("root")
  );
}

model.subscribe(render);
render();

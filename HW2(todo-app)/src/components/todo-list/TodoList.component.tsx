import { ITodoItem } from "../../type";
import TodoItem from "../todo-item/TodoItem.component";
import "./TodoList.css";

interface IProps {
  items: ITodoItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = (props: IProps) => {
  return (
    <div className="list">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          data={item}
          onToggle={props.onToggle}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;

import { Trash } from "@phosphor-icons/react";
import "./TodoItem.css";
import { ITodoItem } from "../../type";

interface IProp {
  data: ITodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ data, onToggle, onDelete }: IProp) => {
  return (
    <div className={`item ${data.isUrgent ? "urgent" : ""}`}>
      <input
        type="checkbox"
        checked={data.isComplete}
        onChange={() => onToggle(data.id)}
      />
      <span className={data.isComplete ? "completed" : ""}>{data.title}</span>{" "}
      {}
      <Trash
        size={32}
        color="#ff0a0a"
        weight="fill"
        onClick={() => onDelete(data.id)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default TodoItem;

import { ITodoItem } from "../../type";
import "./TodoData.css";

interface IProps {
  items: ITodoItem[];
}

const TodoData = (props: IProps) => {
  const urgentCount = props.items.filter((item) => item.isUrgent).length;
  const completedCount = props.items.filter((item) => item.isComplete).length;

  return (
    <>
      <div className="Data">
        <div>{props.items.length}</div>
        <div>Current Tasks</div>
      </div>
      <div className="Data">
        <div>{completedCount}</div>
        <div>Completed Tasks</div>
      </div>
      <div className="Data">
        <div>{urgentCount}</div>
        <div>Urgent Tasks</div>
      </div>
    </>
  );
};

export default TodoData;

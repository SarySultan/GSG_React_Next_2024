import { ITodoItem } from "../../type";
import "./Form.css";

interface IProps {
  onSubmit: (item: ITodoItem) => void;
}

const Form = (props: IProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: string = e.currentTarget["task"].value;
    const isUrgent: boolean = e.currentTarget["urgent"].checked;
    if (task.length > 4) {
      const newTask: ITodoItem = {
        id: Date.now().toString(),
        title: task,
        isUrgent: isUrgent,
        isComplete: false,
      };
      props.onSubmit(newTask);
      e.currentTarget.reset();
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo ..." name="task" />
      <div>
        <label htmlFor="urgent">Urgent</label>
        <input id="urgent" type="checkbox" name="urgent" />
      </div>
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default Form;

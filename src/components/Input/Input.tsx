import React, { useRef } from "react";
import "./Input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        placeholder="Enter a task"
        className="input_box"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit" className="input_submit">
        Save
      </button>
    </form>
  );
};

export default Input;

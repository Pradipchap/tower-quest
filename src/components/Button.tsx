import classNames from "../../utils/classNames";
import { ButtonHTMLAttributes } from "react";
export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={classNames(
        " border border-yellow-500 bg-yellow-700 px-5 py-2 hover:bg-yellow-800 transition-all rounded-2xl text-xl text-white font-bold",
        className
      )}
    >
      {children}{" "}
    </button>
  );
}

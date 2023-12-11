import classNames from 'classnames';

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={classNames('button', props.className)}
    >
      {props.children}
    </button>
  );
}

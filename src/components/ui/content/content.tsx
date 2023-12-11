export default function Content(props: React.HTMLAttributes<HTMLDivElement>) {
  return <main {...props} id="mainContent">{props.children}</main>;
}

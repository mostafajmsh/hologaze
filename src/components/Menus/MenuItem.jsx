export default function MenuItem(props) {
  return (
    <li className="hover:text-white cursor-pointer transition-all duration-200 hover:transition-all hover:duration-200">
      <a>{props.title}</a>
    </li>
  );
}

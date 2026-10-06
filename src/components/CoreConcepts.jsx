// import componentsImg from "../assets/components.png";

export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt="components" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

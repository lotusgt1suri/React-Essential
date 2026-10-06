import reactLogo from "../assets/react-core-concepts.png";

const coreHeading = ["Fundamental", "Core", "Concise"];

function textChange() {
  const randomIndex = Math.floor(Math.random() * coreHeading.length); //returns an index (a number), not the actual text:- 1,2,0
  // console.log(randomIndex);
  return coreHeading[randomIndex];
}

export default function Header() {
  return (
    <header>
      <img src={reactLogo} alt="Logo" />
      <h1>React Essential</h1>
      <p>
        {textChange()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

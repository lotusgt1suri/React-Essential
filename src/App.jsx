import Header from "./components/Header";
import CoreConceptsWrap from "./components/CoreConceptsWrap.jsx";
import ExamplesCom from "./components/ExampleCom.jsx";

export default function App() {
  //   const coreData = CORE_CONCEPTS.map((item) => (
  //     <CoreConcepts {...item} key={item.title} />
  //   ));

  return (
    <div>
      <Header />
      <main>
        <CoreConceptsWrap />
        <ExamplesCom />
      </main>
    </div>
  );
}

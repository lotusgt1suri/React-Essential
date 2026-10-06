import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";

export default function CoreConceptsWrap() {
  return (
    <div id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts {...item} key={item.title} />
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function ExamplesCom() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(key) {
    setSelectedTopic(key);
  }
  return (
    <Section title="Examples" id="examples" className="ex" container="div">
      <menu>
        {Object.keys(EXAMPLES).map((key) => (
          <TabButton
            key={key}
            isSelected={selectedTopic === key}
            onSelect={() => handleClick(key)}
          >
            {EXAMPLES[key].title}
          </TabButton>
        ))}
      </menu>
      {!selectedTopic ? (
        <p>Please select a Topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}

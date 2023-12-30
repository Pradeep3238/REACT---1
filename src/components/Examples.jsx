import { useState } from 'react';

import TabButton from "../TabButton";
import Tabs from './Tabs';
import { EXAMPLES } from "../data";
import Section from './Section';

export default function Examples(){
    const [selectedTopic , setSelectedTopic]=useState("");

  
    let tabContent=<div id='tab-content'><p>Select a topic please</p></div>;
      if(selectedTopic){
        tabContent=(<div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>);
      }
  
  
  
    function clickHandler(selectedButton){
      setSelectedTopic(selectedButton);
    }
 return(
    
    <Section title={Examples} id="examples">
      <Tabs buttons={<>
      <TabButton isActive={selectedTopic==='components'} onClick={()=>clickHandler('components')}>Components</TabButton>
      <TabButton isActive={selectedTopic==='jsx'} onClick={()=>clickHandler('jsx')}>JSX</TabButton>
      <TabButton isActive={selectedTopic==='props'} onClick={()=>clickHandler('props')}>Props</TabButton>
      <TabButton isActive={selectedTopic==='state'} onClick={()=>clickHandler('state')}>State</TabButton>
      </>}>
        {tabContent}
        </Tabs>

      {/* {!selectedTopic ? (<div id='tab-content'><p>Select a topic please</p></div>
      ) : (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>
      )} */}
  </Section>
 )
}
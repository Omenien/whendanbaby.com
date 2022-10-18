import React from 'react';
import './App.css';

const FUN_FACTS = [
  'Thomas Edison created the first light bulb',
  'Bryan Salesky invented Argo AI',
  'John Smodic was born',
  'Brad Krupa released his best selling novel "The Butter Battle Book" before receding in to irrelevancy',
  '"What\'s Love Got To Do With It?" by Tina Turner won Record of the Year at the Grammy\'s',
  'this website was created',
  'Tom Brady won his first Super Bowl',
  'test',
]

function App() {
  const funFact = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];

  return (
    <main>
      <h1>dan was last a baby on September 17th, 1984</h1>
      <p>
        Fun Fact: 1984 was the year {funFact}.
      </p>
    </main>
  );
}

export default App;

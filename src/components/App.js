import React from 'react';
import ExampleComponent from './ExampleComponent';
import TestComponent from './TestComponent'; // Import the TestComponent if it's not already imported

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Update the contents of the h1 element */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax. JSX lets us include JavaScript
        functions right along with the HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <div className="example">
        <img
          alt="a deeply impressed man, perhaps thinking 'whoa'"
          src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        />
        <p>Whoa!</p>
      </div>
      <ExampleComponent />
      <TestComponent /> {/* Add the new TestComponent just below ExampleComponent */}
    </div>
  );
}

export default App;

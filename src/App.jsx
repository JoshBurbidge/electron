import * as React from 'react';

const App = () => {
  return (
    <div>
      <h2>{'Hello from React!'}</h2>
      {/* eslint-disable-next-line no-undef */}
      <p>{`Chrome version ${versions.chrome()}`}</p>
    </div>
  );
};

export default App;

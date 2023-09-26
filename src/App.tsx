import React from 'react';

import './App.css';

function App() {
  fetch("https://stoplight.io/mocks/freshertalent/task1capitalplacement/247155419/api/1/programs/%22y9lu1wqa4bc0w%22/application-form")
  .then((response)=>response.json())
  .then((data)=>console.log(data.data.attributes))
  return (
    <div className="App">
      <h1>hii</h1>
    </div>
  );
}

export default App;

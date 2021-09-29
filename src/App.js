import React   from 'react';
import './App.css';

import Header from './Component/Header.jsx';

import WriterContainer from './Component/WriterContainer.jsx';



function App() {

  return (
    <section className="app_wrapper">
    <div className="container">
<Header></Header>
<WriterContainer> </WriterContainer>


    </div>

    </section>
  );
}

export default App;

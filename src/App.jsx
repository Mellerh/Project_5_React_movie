import React from 'react';

// импортируем layouts 
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';



// корневой компонент, который монтируется в <div root>
function App() {
  return(
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}


export default App;
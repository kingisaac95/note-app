import React from "react";
import { NavigationBar } from "./NavigationBar/NavigationBar.jsx";
import { Note } from './Main/Note.jsx';
import Footer from "./Footer/Footer.jsx";

const App = () => {
  const styles = {
    padding: '10px 40px'
  }
    return(
      <div style={styles}>
        <NavigationBar />
        <Note />
        <Footer />
      </div>
    );
};

export default App;

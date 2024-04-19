import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css"


export default function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}










// import { render } from "@testing-library/react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiResponse: "",
//     };
//   }

//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//       .then((res) => res.json())
//       .then((res) => this.setState({ apiResponse: res }));
//   }

//   componentDidMount() {
//     this.callAPI();
//   }
// }

// export default App;
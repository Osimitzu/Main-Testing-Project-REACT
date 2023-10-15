import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Country } from "./components/Country";
import { Loader } from "./components/Loader";

function App() {
  /* 
  - Funcional
  - if...else 
  */
  // if (100 === 200) {
  //   return (
  //     <div className="App">
  //       <h1>La condición se cumple</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="App">
  //       <h1>La condición no se cumple</h1>
  //     </div>
  //   );
  // }
  /*
  - Visual
  - operadores ternarios (? :)
  - operación de corto circuito (&&)
  */
  //  const [isVisible, setIsVisible] = useState(true);
  // return (
  //   <div className="App">
  //     {100 === 100 ? (
  //       <h1>La condición se cumple</h1>
  //     ) : (
  //       <h1>La condición no se cumple</h1>
  //     )}
  //     {isVisible && <div>Este jsx es visible</div>}
  //     <button onClick={() => setIsVisible(!isVisible)}>Show // Hide</button>
  //   </div>
  // );

  const [countryInfo, setCountryInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/germany")
      .then((res) => {
        console.log(res.data[0]);
        setCountryInfo(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      {isLoading && <Loader />}
      <Country data={countryInfo} />
    </div>
  );
}

export default App;

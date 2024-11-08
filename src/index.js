import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import StateAndProps from './StateAndProps';
import UseState from './UseState';
import Props from './Props';
import Conditionalrender from './Conditionalrender';
import Conditiontest from './conditionalrender/Conditiontest';
import DisplayListItems from './Maping/DisplayListItems';
import Medialist from './Maping/Medialist';
import FetchApiData from './API/FetchApiData';
import AxiosApi from './API/AxiosApi';
import UseContext from './useContext/UseContext';
import ContextApi from './useContext/ContextApi';
/* import Navbar from './Navbar';
import Bodycontainer from './Bodycontainer';
import Footer from './Footer'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseContext />
    <ContextApi />
    {/* <AxiosApi /> */}
   {/*  <FetchApiData /> */}
    {/* <Medialist /> */}
  {/*   <DisplayListItems /> */}
  {/*   <Conditiontest /> */}
  {/*   <Conditionalrender /> */}
  {/*   <Props />
     <UseState />  */}
    {/* <StateAndProps /> */}
      {/* <Header /> */}
{/*       <Navbar />
      <Bodycontainer />
      <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

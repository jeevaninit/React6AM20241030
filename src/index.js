import 'bootstrap/dist/css/bootstrap.min.css';
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
import { Provider } from 'react-redux';
import store from './Redux/store';
import ReduxApi from './Redux/ReduxApi';
import Navbar from './Navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Container from './Navigation/Container';
import UseCallBack from './UseMemoAndCallBack/UseCallBack';
import UseMemo from './UseMemoAndCallBack/UseMemo';
import { UseRef } from './UseMemoAndCallBack/UseRef';
import Counterprogram from './Counterprogram';
import UserApp from './UserApp';
import CourseForm from './UserForm';
import ApiList from './API/LocalApi';
import Validations from './Validations';
import Appcurd from './CURD/Appcurd';

{
  /* The following line can be included in your src/index.js or App.js file */
}

/* import Navbar from './Navbar';
import Bodycontainer from './Bodycontainer';
import Footer from './Footer'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Appcurd />
<UserApp />

<BrowserRouter>

<Provider store={store} >
<Validations />
  <ApiList />
  <UseRef />
  <UseCallBack />
  <UseMemo />
  <Navbar />
  <Container />
  <Counterprogram />
  <CourseForm />

</Provider>
</BrowserRouter>
{/*     <UseContext />
    <ContextApi /> */}
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

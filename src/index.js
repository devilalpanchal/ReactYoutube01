import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import Return from './Return';
import Class from './Class';
import Jsx from './Jsx'
import Withoutksx from './Withoutjsx'
import reportWebVitals from './reportWebVitals';
import Bpp from './ClickEvent';
import State from './State';
import AppState from './StateInClassCom';
import Student from './PopsFunctCom';
import StudentOne from './PropsClassCompo';
import Input from './InputBoxValue';
import Toggle from './HideShow&Toggle';
import FormHandle from './FormLikeSignandLogIn';
import Condition from './ConditinalRendering';
import Validation from './BasicFromValidation';
import Bsall from './LifeCycleOfMethod';
import Tstate from './StateClass';
import MountDid from './ComponentDidMount';
import Didupdate from './ComponentDidUpdate';
import ShouldUpdate from './ShouldComUpdate';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User />
    <App />
    <Return />
    <Class />
    <Jsx />
    <Withoutksx />
    <Bpp />
    <State />
    <AppState />
    <Student name={"devil pk"} email={"devi@gamail.com"} others={{ address: "delhi", mobile: "6851254" }} />
    <Student name={"jeet pk"} email={"mohabnn@gamail.com"} others={{ address: "ratlam", mobile: "6851246546554" }} />
    <StudentOne name={"helo developer"} />
    <StudentOne name={"helo rect js"} />
    <StudentOne name={"helo java script"} />
    <Input />
    <Toggle />
    <FormHandle />
    <Condition />
    <Validation />
    <Bsall />
    <Tstate />
<MountDid/>
<Didupdate/>
<ShouldUpdate/>
  </React.StrictMode>
);
reportWebVitals();

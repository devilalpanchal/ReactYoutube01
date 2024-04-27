import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import CompWilUnMount from './ComWillUnMount';
import Amm from './Hooks/UseState';
import USeEllo from './Hooks/USeEffect';
import USeLiPro from './Hooks/UseEffPropsState';
import MapFucn from './Method/MapMethod';
import MapFucnBoot from './Method/BootStrapList';
import Neast from './Method/NestedListFrnesArr';
import ReuseComp from './Component/ReuseComponent';
import Fragment from './ReactFragment';
import PrantTochild from './Element/PrantTochild';
import PureCom from './Component/PureComp';
import Memo from './Hooks/UseMemo';
import UseFefer from './Hooks/UseRefer';
import FunctionalUSef from './Hooks/UseREfForFunctional';
import ForwarRef from './Hooks/ForwardReff';
import ConrolComponent from './Component/ControlledCom';
import UnconrolComponent from './Component/UnconroledCom';
import HigherOrderComponent from './Component/HigrOrderCom';
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
    <MountDid />
    <Didupdate />
    <ShouldUpdate />
    <CompWilUnMount />
    <Amm />
    <USeEllo />
    <USeLiPro />
    <MapFucn />
    <MapFucnBoot />
    <MapFucnBoot />
    <Neast/>
    <ReuseComp/>
    <Fragment/>
    <PrantTochild/>
    <PureCom/>
    <Memo/>
    <UseFefer/>
    <FunctionalUSef/>
    <ForwarRef/>
    <ConrolComponent/>
    <UnconrolComponent/>
    <HigherOrderComponent/>
  </React.StrictMode>
);
reportWebVitals();

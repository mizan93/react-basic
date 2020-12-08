/* eslint-disable react/jsx-pascal-case */
import React from 'react'

// import './App.css';
// import './logo.svg';
// import Click1 from './components/Click1'
// import Click2 from './components/Click2'
//  import BindEvent from './components/BindEvent'
//  import Parent from './components/Parent'
//  import Condition from './components/Condition'
//  import List from './components/Render'
// import "./components/mystyle.css";
// import Mystyle from "./components/Mystyle";
// import style from "./components/Style.module.css";
// import Form from "./components/Form"
// import ComponentA from "./components/ComponentA"
// import Update from "./components/Update"
// import UnmoutnA from "./components/UnmountA"
// import Error from "./components/Error";
// import Car from "./components/Car";
// import FragementTest from "./components/FragementTest";
// import Table from "./components/Table";
// import Purecomp from "./components/Purecomp";
// import MemoA from "./components/MemoA";
// import Refdemo from "./components/Refdemo";
// import { ForwardRefA } from "./components/ForwardRefA";
// import  Portal from "./components/Portal";
// import  User from "./components/User";
// import  ClickCounter2 from "./components/ClickCounter2";
// import HoverCounter2 from "./components/HoverCounter2";
// import CompA from "./components/CompA";
// import UserProvider from "./components/UserContext";
// import Fetchdatahook from "./components/hooks/Fetchdatahook";
// const { default: HookCounter2 } = require("./components/hooks/HookCounter2");
// const { default: MouseMove } = require("./components/hooks/MouseMove");
// const { default: UseStateWithArray } = require("./components/hooks/UseStateWithArray");
// const { default: UseStateWithObject } = require("./components/hooks/UseStateWithObject");
// const { default: MouseContainer } = require("./components/hooks/MouseContainer");
// const { default: POstform } = require("./components/POstform");
// const { default: Posts } = require("./components/Posts");
// const { default: HookCounter } = require("./components/hooks/HookCounter");
// const { default: Counter } = require("./components/hooks/Counter");
// const { default: Input } = require("./components/hooks/Input");
// const { default: Classtimer } = require("./components/hooks/Classtimer");
// const { default: Hooktimer } = require("./components/hooks/Hooktimer");
// import ContexcomA from './components/contex/ContexcomA'
import ReducerCounter from './components/ReducerCounter'
import ReduserCounter1 from './components/ReduserCounter1'
import MultiReducer from './components/MultiReducer'

// export const UserContext=React.createContext()
// export const ProfileContext=React.createContext()
function App() {
  // let success=true
  // let success = {
  //   color: "red",
  //   fontSize: "0px",
  // }; 
  let style = {
    color: "green",
    textAlign: "center",
  };
  return (
    <div className="App" style={style}>
    <MultiReducer></MultiReducer>
     {/*<ReduserCounter1></ReduserCounter1>
 
        <ReducerCounter></ReducerCounter>
     <Hooktimer></Hooktimer>
   <Classtimer></Classtimer>
    <Input></Input>
    <Counter></Counter>
<UseCallbackHook_parent></UseCallbackHook_parent>
    <UserContext.Provider value={'john'}>
    <ProfileContext.Provider value={'something about user'}>
    <ContexcomA></ContexcomA>
    </ProfileContext.Provider>

    
    </UserContext.Provider>
    <Fetchdatahook></Fetchdatahook>
    <MouseContainer></MouseContainer>
    <MouseMove></MouseMove>
     <HookCounter2></HookCounter2>
   <UseStateWithArray></UseStateWithArray>
    <UseStateWithObject></UseStateWithObject>
     <HookCounter></HookCounter>
    <POstform></POstform>
    <Posts></Posts>
   <UserProvider value="John">
    <CompA></CompA>
    </UserProvider>
     <CompA name="john"></CompA>
   <User render={(count,increment)=>(<ClickCounter2 count={count} increment={increment}></ClickCounter2>)}></User>
    <User render={(count,increment)=>(<HoverCounter2 count={count} increment={increment}></HoverCounter2>)}></User>
    <Portal></Portal>
    <ForwardRefA></ForwardRefA>
    <Refdemo></Refdemo>
     <MemoA></MemoA>
    <Purecomp></Purecomp>
        <FragementTest></FragementTest>
        <Table></Table>
        <Error>
          <Car car="Bugati"></Car>{" "}
        </Error>
        <Error>
          <Car car="HOnda"></Car>{" "}
        </Error>
        <Error>
          <Car car="Symphony"></Car>
        </Error>
<UnmoutnA></UnmoutnA>
    <Update></Update>
    <ComponentA></ComponentA>
       <h2 className={success ? "success font-md" : '' }>Hello user</h2>
       <h2 className={style.primary}>Style module</h2>
    
       <Click1></Click1>
<Click2></Click2> 
<BindEvent></BindEvent>
<Parent></Parent>
<Condition></Condition>
<List></List>
<Mystyle></Mystyle>
<Form></Form>*/}
     
    </div>
  );
}

export default App;

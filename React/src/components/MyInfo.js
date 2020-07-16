import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import TodoItem from './TodoItem';
import MyContent from './MyContent';
import ChangeEvent from './ChangeEvent';
import CheckedApp from './CheckedApp';
import CheckedItem from './CheckedItem';
import ConditionalApp from './ConditionalApp';
import ConditionalAppAndOperator from './ConditionalAppAndOperator';
import ConditionalAppButtonChangeEvent from './ConditionalAppButtonChangeEvent';
import FormApp from './FormApp';
import FormTravelApp from './FormTravelApp';
import FormContainer from './FormContainer';
import MemeGenerator from './MemeGenerator';
import FetchFromAPI from './FetchFromAPI';
export default MyInfo

function MyInfo(){
  const firstName="Priyanka"
  const lastName="Goyal"
  const date=new Date();
  const hours=date.getHours();
  let timeOfDay;

  if(hours < 12){
    timeOfDay = "morning"
  } else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
  } else{
    timeOfDay = "night"
  }

  const styles = {
    color:"#FF8C00", 
    backgroundColor:"#FF2D00",
  }
    return(
      <div>
        <nav>
          <h1>Hello {firstName + " " + lastName}!</h1>
          <h1>Hello {firstName} {lastName}!</h1>
          <h1 style={styles}>Good {timeOfDay}!</h1>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <p>This is a Paragragh</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
        <main>
          This is where most of the content will go.....
        </main>
        <Header/>
        <MainContent/>
        <MyContent/>
        <ChangeEvent/>
        <Footer/>
        <ConditionalApp/>
        <ConditionalAppAndOperator/>
        <ConditionalAppButtonChangeEvent/>
        <FormApp/>
        <FormTravelApp/>
        <FormContainer/>
        <MemeGenerator/>
        <FetchFromAPI/>
      </div>
      
    )
  }
  


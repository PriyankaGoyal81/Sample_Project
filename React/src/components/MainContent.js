import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';
import Jokes from './Jokes';
import JokeData from './JokeData';
import Product from './Product';
import ProductData from './ProductData';
import {Component} from 'react';
export default MainContent

function MainContent(){
    const jokeComponents = JokeData.map(joke => <Jokes key={joke.id} question={joke.question} answer={joke.answer}/>)
    const productComponents = ProductData.map(item => <Product key={item.id} product={item} />)
    return(
      <div>
        <main>
            This is my MainContent Page;
        </main>
        <ContactCard 
            contact={{name:"Palak Goyal", imgurl:"http://gmail.com", phone:"+425-368-8716", email:"priyanka.aggarwal81@gmail.com"}}
        />
        
        <ContactCard
           contact={{name:"Perna Goyal", imgurl:"http://gmail.com", phone:"+425-368-8716", email:"priyanka.aggarwal81@gmail.com"}}
        />
        <ContactCard
           contact={{name:"Pritti Goyal", imgurl:"http://gmail.com", phone:"+425-368-8716", email:"priyanka.aggarwal81@gmail.com"}}
        />

        <ContactCard
           contact={{name:"Sonia Goyal", imgurl:"http://gmail.com", phone:"+425-368-8716", email:"priyanka.aggarwal81@gmail.com"}}
        />
        <Jokes
            answer="My name is Palak Goyal">
        </Jokes>     
        <Jokes 
            question="What is your firstname:" 
            answer="priyanka">
        </Jokes>
        <Jokes 
            question="What is your lastname:" 
            answer="Goyal">
        </Jokes>
        <Jokes 
            question="What is your address:" 
            answer="McKelvey Hill Dr">
        </Jokes>
        <Jokes 
            question="What is your city:" 
            answer="MaryLand Heights">
        </Jokes>
        {jokeComponents}
        {productComponents}
      </div>
    )
  }
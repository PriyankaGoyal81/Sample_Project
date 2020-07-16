import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';
import Jokes from './Jokes';
import JokeData from './JokeData';
import Product from './Product';
import ProductData from './ProductData';
import {Component} from 'react';

// function MyContent(){
//     const jokeComponents = JokeData.map(joke => <Jokes key={joke.id} question={joke.question} answer={joke.answer}/>)
//     const productComponents = ProductData.map(item => <Product key={item.id} product={item} />)
//     return(
//       <div>
//         <main>
//             This is my My Content Page;
//         </main>
//         <Jokes
//             answer="My name is Palak Goyal">
//         </Jokes>     
//         <Jokes 
//             question="What is your firstname:" 
//             answer="priyanka">
//         </Jokes>
//         <Jokes 
//             question="What is your lastname:" 
//             answer="Goyal">
//         </Jokes>
//         <Jokes 
//             question="What is your address:" 
//             answer="McKelvey Hill Dr">
//         </Jokes>
//         <Jokes 
//             question="What is your city:" 
//             answer="MaryLand Heights">
//         </Jokes>
//         {jokeComponents}
//         {productComponents}
//       </div>
//     )
//   }

class MyContent extends Component{
    constructor(){
        super()
        this.state={
            jokes: JokeData
        }
    }
    
    render(){
        const jokeComponents = this.state.jokes.map(joke => <Jokes key={joke.id} question={joke.question} answer={joke.answer}/>)
        return(
        <div>
            <main>
                This is my My Content Page;
            </main>
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
        </div>
        )
    }
}

export default MyContent
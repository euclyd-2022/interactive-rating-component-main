
import './App.css';
import Footer from "./Footer";
import star from "./images/icon-star.svg";
import thankyou from "./images/illustration-thank-you.svg";
import {useState} from 'react';



function App() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({number}) => {
    return <button onClick= {() => setItems(number)} className="btn-set round">{number}</button>
  }
 return <div>
  {!isSubmitted && ( 
     <div className="wrapper">
<img className="round" src={star} alt="" />
<h2> How did we do?</h2>
<p>
Please let us know how we did with your support request. All feedback is appreciated 
to help us improve our offering!
</p>

<ul>
  <li><Button number={1}/></li>
  <li><Button number={2}/></li>
  <li><Button number={3}/></li>
  <li><Button number={4}/></li>
  <li><Button number={5}/></li>
</ul>





<div className="btn-submit-wrap">
<button onClick={() => setSubmitted(true)} className="btn-submit">Submit</button>
</div>
  </div>)}
  {isSubmitted && <ThankYou setSubmitted={setSubmitted} items={items} />}
 <Footer /> 
</div>

}

const ThankYou = ({items, setSubmitted}) => {
  return (
  <div className="wrapper thanks">
   <img src={thankyou} alt="pic"></img>
  <p className="p-rating">You selected {items} out of 5</p>
  <h2>Thank you!</h2>
<p>  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
  </p>
  <div className="btn-submit-wrap">
<button onClick={() => setSubmitted(false)} className="btn-submit">Reset</button>
</div>
</div>
  )
}
export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  return (
     <div className="container py-5 justify-content-center align-items-center"> 
     <h1 className='heading'>PRICE CARD SECTION</h1>
      <div className="row justify-content-center align-items-center">
       
        <Card price="$0"
        userType ="FREE"
        one="Single User"
        two="50GB Storage"
        three="Unlimited Public Projects"
        four="Community Access"
        five="Unlimited Private Projects"
        six="Dedicated Phone Support"
        seven="Free Subdomain"
        eigth="Monthly Status Report"
        freeRight= "&#10003;"
        freeWrong="&#9747;"
        color="grey"
        free=" wrong "
        />
        <Card price="$9"
         userType ="PLUS"
         one="5 Users"
         two="50GB Storage"
         three="Unlimited Public Projects"
         four="Community Access"
         five="Unlimited Private Projects"
         six="Dedicated Phone Support"
         seven="Free Subdomain"
         eigth="Monthly Status Report"
         plusRight= "&#10003;"
         plusWrong="&#9747;"
         plus ="wrong"

         />
        <Card 
         price="$49"
         userType ="PRO"  
         one="Unlimited Users"
         two="50GB Storage"
         three="Unlimited Public Projects"
         four="Community Access"
         five="Unlimited Private Projects"
         six="Dedicated Phone Support"
         seven="Free Subdomain"
         eigth="Monthly Status Report"
         proRight= "&#10003;"
         />
        </div>
      </div>
      

  )
}

export default App;

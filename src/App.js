
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
        freeRight= {<FontAwesomeIcon icon={faCheck} />}
        freeWrong={<FontAwesomeIcon icon={faXmark} />}
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
         plusRight= {<FontAwesomeIcon icon={faCheck} />}
         plusWrong={<FontAwesomeIcon icon={faXmark} />}
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
         proRight= {<FontAwesomeIcon icon={faCheck} />}
         />
        </div>
      </div>
      

  )
}

export default App;

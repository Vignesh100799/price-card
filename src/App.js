
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div>
      <h1 className="heading">PRICE CARD SECTION</h1>
    
    <div className="container py-5 justify-content-center align-items-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 mb-5">
          <div className="card">
            <div className="header text-center"><span>FREE</span>
              <h1> &#x24;0/month </h1></div>
            <div className="card-body">
              <ul className="ul-style">
                <li><span>&#10003;</span>Single User</li>
                <li><span>&#10003;</span>50GB Storage</li>
                <li><span>&#10003;</span>Unlimited Public Projects</li>
                <li><span>&#10003;</span>Community Access</li>
                <li className="wrong"><span>&#9747;</span>Unlimited Private Projects</li>
                <li className="wrong"><span>&#9747;</span>Dedicated Phone Support</li>
                <li className="wrong"><span>&#9747;</span>Free Subdomain</li>
                <li className="wrong"><span>&#9747;</span>Monthly Status Report</li>
              </ul>
              <div className="text-center"><button>BUTTON</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card">
            <div className=" header text-center"><span>PLUS</span>
              <h1> &#x24;9/month </h1></div>
            <div className="card-body">
              <ul className="ul-style">
                <li><span>&#10003;</span>5 Users</li>
                <li><span>&#10003;</span>50GB Storage</li>
                <li><span>&#10003;</span>Unlimited Public Projects</li>
                <li><span>&#10003;</span>Community Access</li>
                <li><span>&#10003;</span>Unlimited Private Projects</li>
                <li><span>&#10003;</span>Dedicated Phone Support</li>
                <li><span>&#10003;</span>Free Subdomain</li>
                <li className="wrong"><span>&#9747;</span>Monthly Status Report</li>
              </ul>
              <div className="text-center"><button>BUTTON</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card">
            <div className=" header text-center"><span>PRO</span>
              <h1> &#x24;49/month </h1></div>
            <div className="card-body">
              <ul className="ul-style">
                <li><span>&#10003;</span>Unlimited Users</li>
                <li><span>&#10003;</span>50GB Storage</li>
                <li><span>&#10003;</span>Unlimited Public Projects</li>
                <li><span>&#10003;</span>Community Access</li>
                <li><span>&#10003;</span>Unlimited Private Projects</li>
                <li><span>&#10003;</span>Dedicated Phone Support</li>
                <li><span>&#10003;</span>Free Subdomain</li>
                <li><span>&#10003;</span>Monthly Status Report</li>
              </ul>
              <div className="text-center"><button>BUTTON</button></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default App;

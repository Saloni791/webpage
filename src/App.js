
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='left'>

        <div className="leftt">

          <div style={{ color: "white", marginBottom: "50px" }} className="media">
            <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
              Proin facilisis risus mus a.
            </h1>
            <div style={{ marginTop: "30px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
          </div>

          <div className='left2'>

            <div className='search'>
              <i className="fa fa-search" ></i>
            </div>
            <div style={{ color: "white",marginTop:"10px" }}>Lorem Ipsum has been the industry's standard  </div>

          </div>

          <div className='left2'>

            <div className='lock'>
              <i className="fa fa-lock"></i>
            </div>
            <div style={{ color: "white",marginTop:"10px"  }}>Lorem Ipsum has been the industry's standard </div>
          </div>
        </div>

      </div>


      <div className='right'>

        <div className='rightt' >

          <div className='right1'>

            <div className='delete'>
              <i className="fa fa-trash"></i>
            </div>

            <div>
              <div >
                Feature
              </div>
              <div >
                <p>
                  Lorem Ipsum has been the industry's standard dummy
                </p>
                <p>                
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
             
            </div>

          </div>

          <div className='right1'>

            <div className='delete'>
              <i className="fa fa-trash"></i>
            </div>

            <div>
              <div >
                Feature
              </div>
              <div >
                <p>
                  Lorem Ipsum has been the industry's standard dummy
                </p>
                <p>                
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
            </div>

          </div>

          <div className='right1'>

            <div className='delete'>
              <i className="fa fa-trash"></i>
            </div>

            <div>
              <div >
                Feature
              </div>
              <div >
                <p>
                  Lorem Ipsum has been the industry's standard dummy
                </p>
                <p>                
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

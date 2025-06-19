import React from 'react'

const page = () => {
    return (
        <section id="about" className="py-5 bg-black text-white" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6 pe-md-5 border-end border-secondary">
            <h2 className="fw-bold display-5 mb-4 text-warning">Let’s Build Something Real.</h2>
            <p className="lead text-light mb-3">
              I’m Roshan — a full-stack learner who loves turning ideas into websites that actually help.
            </p>
            <p className="text-light">
              Whether you're a student trying to land your first job or a local business owner just starting online — I'm here to guide you step-by-step, with no tech jargon and no pressure.
            </p>

            <div className="mt-4 bg-dark border-start border-4 border-warning ps-3 py-2">
              <p className="mb-1"><strong>🎯 Mission:</strong> Make the web more accessible for people like YOU.</p>
              <p className="mb-1"><strong>⚒️ Skills:</strong> HTML, CSS, JS, Node.js, MongoDB, React, Bootstrap</p>
              <p className="mb-0"><strong>📍 Based in:</strong> India — working with anyone, anywhere.</p>
            </div>

            <a href="#contact" className="btn btn-outline-warning mt-4 fw-semibold px-4">Let’s Connect</a>
          </div>

          {/* Right Image */}
          <div className="col-md-6 mt-5 mt-md-0 text-center">
            <div className="img-fluid" style={{ Width: "100%", height: "100%"}}>
              <img
                src="/About picture.png"
                alt="Roshan working on laptop"
                className="img-fluid rounded"
              />
              <p className="mt-3 small text-white-50">“Behind every screen, there's a story. Let's build yours.”</p>
            </div>
          </div>

        </div>
      </div>
    </section>


        // <>
        //     <section id="about" className="py-5 bg-black text-white" style="font-family: 'Arial', sans-serif;">
        //         <div className="container">
        //             <div className="row align-items-center">

        //                 {/* <!-- Left Content --> */}
        //                 <div className="col-md-6 pe-md-5 border-end border-secondary">
        //                     <h2 className="fw-bold display-5 mb-4 text-warning">Let’s Build Something Real.</h2>
        //                     <p className="lead text-light mb-3">I’m Roshan — a full-stack learner who loves turning ideas into websites that actually help.</p>
        //                     <p className="text-light">Whether you're a student trying to land your first job or a local business owner just starting online — I'm here to guide you step-by-step, with no tech jargon and no pressure.</p>

        //                     <div className="mt-4 bg-dark border-start border-4 border-warning ps-3 py-2">
        //                         <p className="mb-1"><strong>🎯 Mission:</strong> Make the web more accessible for people like YOU.</p>
        //                         <p className="mb-1"><strong>⚒️ Skills:</strong> HTML, CSS, JS, Node.js, MongoDB, React, Bootstrap</p>
        //                         <p className="mb-0"><strong>📍 Based in:</strong> India — working with anyone, anywhere.</p>
        //                     </div>

        //                     <a href="#contact" className="btn btn-outline-warning mt-4 fw-semibold px-4">Let’s Connect</a>
        //                 </div>

        //                 {/* <!-- Right Image --> */}
        //                 <div className="col-md-6 mt-5 mt-md-0 text-center">
        //                     <div className="bg-secondary rounded shadow p-3" style="max-width: 350px; margin: auto;">
        //                         <img src="your-image.jpg" alt="Roshan working on laptop" className="img-fluid rounded" />
        //                         <p className="mt-3 small text-white-50">“Behind every screen, there's a story. Let's build yours.”</p>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </section>

        // </>

    )
}

export default page
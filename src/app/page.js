import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
        <div className="container-fluid w-100 h-auto text-center">
          <div className="display-1" style={{ fontSize: "10vw" }}>ROSHAN TECH STUDIO</div>
          <div className="display-6 text-uppercase d-none d-sm-none d-md-block d-lg-block" style={{ fontSize: "3vw" }}>YOUR VISION, OUR COMMITMENT</div>
          <div className="display-6 text-uppercase d-block d-sm-block d-md-none d-lg-none" style={{ fontSize: "5vw" }}>YOUR VISION, OUR COMMITMENT</div>
          <img src="/banner img.png" className="img-fluid" />
        </div>

        {/* coding wallpaper */}
        <div className="container-fluid my-5">
          <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?cs=srgb&dl=pexels-danny-meneses-340146-943096.jpg&fm=jpg" className="img-fluid w-100 h-auto" style={{ objectFit: "contain", borderRadius: "20px" }} />
        </div>

        {/* Service section */}
        <div className="container-fluid py-5">
          <div className="container">
            <h2 className="text-center display-5 fw-bold mb-5 text-white">💼 Service Plans</h2>
            <div className="row g-4">
              {/* Simple Website */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column shadow">
                  <img
                    src="https://www.marcelodesignx.com/wp-content/uploads/2021/06/simple-website-design-1024x576.jpeg"
                    className="card-img-top img-fluid"
                    alt="Simple Website"
                  />
                  <div className="card-body text-white d-flex flex-column" style={{ fontFamily: "Arial" }}>
                    <h3 className="card-title display-6 text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                      Simple Website
                    </h3>
                    <p>Perfect for Personal Brands or Portfolios</p>
                    <ul>
                      <li>1–3 Pages (Home, About, Contact)</li>
                      <li>Responsive Design (Mobile-friendly)</li>
                      <li>Contact Form</li>
                      <li>Basic SEO setup</li>
                    </ul>
                    <h5 className="mt-auto">Price: ₹2,999</h5>
                  </div>
                </div>
              </div>

              {/* Business Website */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column shadow">
                  <img
                    src="https://www.founderjar.com/wp-content/uploads/2023/08/5.-Allbirds-Small-Business-Website-Example.jpeg"
                    className="card-img-top img-fluid"
                    alt="Business Website"
                  />
                  <div className="card-body text-white d-flex flex-column" style={{ fontFamily: "Arial" }}>
                    <h3 className="card-title display-6 text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                      Business Website
                    </h3>
                    <p>For Startups & Local Businesses</p>
                    <ul>
                      <li>Up to 5 Pages (Home, About, Services, Contact, Blog)</li>
                      <li>Professional Design with Branding</li>
                      <li>SEO-optimized content</li>
                      <li>Contact Form with Email Integration</li>
                      <li>Google Map Integration</li>
                    </ul>
                    <h5 className="mt-auto"> Price: ₹5,999</h5>
                  </div>
                </div>
              </div>

              {/* Premium Website */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column shadow">
                  <img
                    src="https://www.blendb2b.com/hs-fs/hubfs/blog-images/Modern%20Website%20Designs/transpocos%20modern%20website%20design-1.png?width=790&height=388&name=transpocos%20modern%20website%20design-1.png"
                    className="card-img-top img-fluid"
                    alt="Premium Website"
                  />
                  <div className="card-body text-white d-flex flex-column" style={{ fontFamily: "Arial" }}>
                    <h3 className="card-title display-6 text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
                      Premium Website
                    </h3>
                    <p>For Professional or Growing Brands</p>
                    <ul>
                      <li>Up to 10 Pages + Blog System (CMS optional)</li>
                      <li>Animation & WhatsApp Integration</li>
                      <li>Hosting Setup (Netlify/Vercel)</li>
                      <li>Free SEO Audit + Optimization</li>
                      <li>Domain & SSL Setup</li>
                      <li>Contact Form with Email Integration</li>
                    </ul>
                    <h5 className="mt-auto">Price: ₹9,999</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section my-1" style={{ backgroundImage: "url('/CTA-banner.png')", height: "auto", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container-fluid w-100 h-auto text-center">
            <div className="display-1" style={{ fontSize: "10vw" }}>DON'T HAVE A WEBSITE</div>
            <button className="display-6">
              <a href="#" className="btn2" style={{ fontSize: "2vw" }}>Order Now</a>
            </button>
            <div className="w-100 d-flex justify-content-center align-items-center">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-stand-folding-hand-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--boy-stands-person-hands-character-casual-outfits-half-body-pack-people-illustrations-5600563.png"  />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

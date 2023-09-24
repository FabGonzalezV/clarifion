
import React, { useState, useEffect } from "react";
import Tabs from "./Header";
const Home = () => {
   const aux = [
      "Step 1 : Cart Review",
      "Step 2 : Checkout",
      "Step 3 : Special Offer",
      "Step 4 : Confirmation"
   ]
   let [steps, setSteps] = useState(aux);


   // useEffect(  () => {
   //    if (window.innerWidth < 578) {
   //       let newSteps = aux.map((step) => {
   //          let [, info] = step.split(" : ");
   //          return info;
   //       })
   //       setSteps(newSteps)
   //    }

   //    else {
   //       setSteps(aux)
   //    }
   // }, [window.innerWidth] )

   useEffect(() => {

      const handleResize = () => {
         if (window.innerWidth < 578) {
            const newSteps = aux.map((step) => {
               const [, info] = step.split(" : ");
               return info;
            });
            setSteps(newSteps);
         } else {
            setSteps(aux);
         }
      };


      window.addEventListener('resize', handleResize);


      handleResize();



   }, []);


   const [isPopImgVisible, setIsPopImgVisible] = useState(false);
   const handleTextMixClick = () => {
      setIsPopImgVisible(!isPopImgVisible);
   };

   const handleProductClick = () => {
      setIsPopImgVisible(!isPopImgVisible);
   };







   return (
      <div className="main-container">

         <header>
            <Tabs />
         </header>
         <main className="content-container">
            <section id="heading">
               <div className="heading-container">
                  <p>
                     Wait ! your order in progress.
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
               </div>
            </section>

            <section id="body">
               <div className="steps-container">

                  <div className="step step-text-t1">
                     <figure>
                        <img className="icon-pop" src={process.env.PUBLIC_URL + `/assets/images/checked.svg`} alt="checked.svg" />
                     </figure>
                     <span>
                        {steps[0]}
                     </span>
                  </div>
                  <div className="step step-text-t1">
                     <figure>
                        <img className={"icon-pop"} src={process.env.PUBLIC_URL + `/assets/images/checked.svg`} alt="checked.svg" />
                     </figure>
                     <span>
                        {steps[1]}
                     </span>
                  </div>
                  <div className="step step-text-t2">
                     <figure>
                        <img className="icon-pop" src={process.env.PUBLIC_URL + `/assets/images/step_three.svg`} alt="step_three.svg" />
                     </figure>
                     <span>
                        {steps[2]}
                     </span>
                  </div>
                  <div className="step step-text-t3">
                     <figure>
                        <img className="icon-pop" src={process.env.PUBLIC_URL + `/assets/images/step_four.svg`} alt="step_four.svg" />
                     </figure>
                     <span>
                        {steps[3]}
                     </span>
                  </div>

               </div>
               {/* aqui me quede */}
               <div className="body-desk">
                  <div className="body-desk-pop">
                     <figure  >
                        <img className="img-pop" src={process.env.PUBLIC_URL + `/assets/images/product-img.svg`} alt="product-img.svg" />
                     </figure>

                     <div className="bd-d-review">
                        <div className="bd-d-r-header">
                           <figure>
                              <img src={process.env.PUBLIC_URL + `/assets/images/user-icon.svg`} alt="user-icon.svg" />
                           </figure>
                           <div className="bd-d-r-header-row">
                              <div className="bd-d-r-h-row">
                                 <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/stars-icon.svg`} alt="stars-icon.svg" />
                                 </figure>
                              </div>

                              <div className="bd-d-r-h-row">
                                 <span className="bd-d-review-t2">
                                    Ken T.
                                 </span>
                                 <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/verify.svg`} alt="verify.svg" />
                                 </figure>
                                 <span className="bd-d-review-t3">
                                    Verified Customer
                                 </span>
                              </div>

                           </div>
                        </div>
                        <p className="bd-d-review-t1">
                           “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                        </p>
                     </div>
                  </div>
                  <div className="body-container">
                     <p className="bc-text-mix" onClick={handleTextMixClick}>
                        <span className="bc-text-mix-t2">ONE TIME ONLY</span>
                        <span>  special price for 6 extra Clarifion for only</span>
                        <span className="bc-text-mix-t2">$14 each</span>
                        <span> ($84.00 total!)</span>
                     </p>
                     {
                        isPopImgVisible ? <figure id="pop-img" className={"animate-pop-img"}>
                           <img src={process.env.PUBLIC_URL + `/assets/images/product-img.svg`} alt="product-img.svg" />
                        </figure> : <></>
                     }

                     <div className="bc-product-wrap">
                        <div className="bc-pruduct" onClick={handleProductClick}>
                           <figure  >
                              <img className="icon-pop-phone" src={process.env.PUBLIC_URL + `/assets/images/phone.svg`} alt="phone.svg" />

                           </figure>
                           <div className="bc-pruduct-text">
                              <div className="bc-pt-row">
                                 <span className="bc-pt-t1">
                                    Clarifion Air Ionizer
                                 </span>
                                 <div>
                                    <span className="bc-pt-t2">
                                       $180
                                    </span>
                                    <span className="bc-pt-t3">
                                       $84
                                    </span>
                                 </div>
                              </div>
                              <div className="bc-pt-stars">
                                 <figure>
                                    <img className="icon-pop-star" src={process.env.PUBLIC_URL + `/assets/images/star.svg`} alt="star.svg" />
                                 </figure>
                                 <figure>
                                    <img className="icon-pop-star" src={process.env.PUBLIC_URL + `/assets/images/star.svg`} alt="star.svg" />
                                 </figure>
                                 <figure>
                                    <img className="icon-pop-star" src={process.env.PUBLIC_URL + `/assets/images/star.svg`} alt="star.svg" />
                                 </figure>
                                 <figure>
                                    <img className="icon-pop-star" src={process.env.PUBLIC_URL + `/assets/images/star.svg`} alt="star.svg" />
                                 </figure>
                                 <figure>
                                    <img className="icon-pop-star" src={process.env.PUBLIC_URL + `/assets/images/star.svg`} alt="star.svg" />
                                 </figure>
                              </div>
                              <div className="bc-pt-row-t2">
                                 <figure>
                                    <img className="icon-pop-t5" src={process.env.PUBLIC_URL + `/assets/images/checkbox.svg`} alt="checkbox.svg" />
                                 </figure>
                                 <span className="bc-pt-t4">
                                    12 left in Stock
                                 </span>
                              </div>
                              <div id="bc-pw-subtext-1">
                                 <p className="bc-pw-t1">
                                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div id="bc-pw-subtext-2">
                           <p className="bc-pw-t1">
                              Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                           </p>
                        </div>
                     </div>


                     <div className="bc-p-check">
                        <div className="check-row">
                           <figure>
                              <img className="icon-pop-check" src={process.env.PUBLIC_URL + `/assets/images/tick-circle.svg`} alt="tick-circle.svg" />
                           </figure>
                           <p className="cr-t1">
                              Negative Ion Technology may <span className="cr-t2">help with allergens</span>
                           </p>
                        </div>
                        <div className="check-row">
                           <figure>
                              <img className="icon-pop-check" src={process.env.PUBLIC_URL + `/assets/images/tick-circle.svg`} alt="tick-circle.svg" />
                           </figure>
                           <p className="cr-t1">
                              Designed for <span className="cr-t2">air rejuvenation</span>
                           </p>
                        </div>
                        <div className="check-row">
                           <figure>
                              <img className="icon-pop-check" src={process.env.PUBLIC_URL + `/assets/images/tick-circle.svg`} alt="tick-circle.svg" />
                           </figure>
                           <p className="cr-t1" >
                              <span className="cr-t2">Perfect for every room </span>in all types of places.
                           </p>
                        </div>
                     </div>

                     <div className="bc-p-subt">
                        <div className="bc-p-subt-row">
                           <figure>
                              <img className="icon-pop-percent" src={process.env.PUBLIC_URL + `/assets/images/percent.svg`} alt="percent.svg" />
                           </figure>
                           <p className="bc-p-subt-row-t1">
                              Save <span className="bc-p-subt-row-t2">53%</span>
                              and get <span className="bc-p-subt-row-t2">6 extra Clarifision</span>
                              for only <span className="bc-p-subt-row-t2">$14 Each.</span>
                           </p>
                        </div>
                     </div>

                     <div className="bc-botton">
                        <div className="btn-green">
                           <div className="btn-green-t">
                              <span>
                                 Yes - Claim my discount
                              </span>
                              <figure>
                                 <img className="icon-pop-arrow" src={process.env.PUBLIC_URL + `/assets/images/arrow.svg`} alt="arrow.svg" />
                              </figure>
                           </div>

                        </div>
                        <div className="bc-btt-text">
                           <div className="bc-btt-trow">
                              <div>
                                 <p className="bc-btt-tt1">
                                    Free shipping
                                 </p>
                              </div>
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/line-small.svg`} alt="line-small.svg" />
                              </figure>
                              <div className="bc-btt-trow-child">
                                 <figure>
                                    <img id="lock-icon" src={process.env.PUBLIC_URL + `/assets/images/lock.svg`} alt="lock.svg" />
                                 </figure>

                                 <div>
                                    <p className="bc-btt-tt1">
                                       Secure 256-bit SSL encryption
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <figure >
                              <img id="line-big" src={process.env.PUBLIC_URL + `/assets/images/line-big.svg`} alt="line-big.svg" />
                              <img id="line-small" src={process.env.PUBLIC_URL + `/assets/images/line-small.svg`} alt="line-small.svg" />
                           </figure>
                           <div className="bc-btt-trow2">
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/visa.svg`} alt="" />
                              </figure>
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/shoppay.svg`} alt="" />
                              </figure>
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/paypal..svg`} alt="" />
                              </figure>
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/mastercard.svg`} alt="" />
                              </figure>
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/gpay.svg`} alt="" />
                              </figure>
                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/apay.svg`} alt="" />
                              </figure>

                              <figure>
                                 <img src={process.env.PUBLIC_URL + `/assets/images/amex.svg`} alt="" />
                              </figure>
                           </div>
                        </div>
                        <p className="bc-btt-tt2 ">No thanks, I don’t want this.</p>
                     </div>

                     <div className="guarantee">
                        <figure>
                           <img className="icon-pop-guarantee" src={process.env.PUBLIC_URL + `assets/images/guarantee.svg`} alt="guarantee.svg" />
                        </figure>
                        <p className="guarantee-text">
                           If you are not completely thrilled with your Clarifion - We have a
                           <span className="guarantee-tt2">30 day satisfaction guarantee.</span>
                           Please refer to our return policy at the bottom of the page for more details.
                           Happy Shopping!
                        </p>
                     </div>
                  </div>
               </div>
            </section>

         </main>
         <footer>
            <div className="footer">
               <div className="footer-row footer-tt1">
                  <span>Copyright (c) 2023</span>
                  <figure>
                     <img src={process.env.PUBLIC_URL + `/assets/images/line-small-2.svg`} alt="line-small-2.svg" />
                  </figure>
                  <span>Clarifionsupport@clarifion.com</span>
               </div>
               <div className="footer-row2 footer-tt2">
                  <figure>
                     <img className="icon-pop-arrow " src={process.env.PUBLIC_URL + `/assets/images/lock-2.svg`} alt="lock-2.svg" />
                  </figure>
                  <span>Secure 256-bit SSL encryption.</span>
               </div>
            </div>

         </footer>
      </div>
   );
}

export default Home;
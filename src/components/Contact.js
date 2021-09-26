import React from "react";

export default function Contact() {
  return (
    <div>

       <div class="container mx-auto p-4">
           <h3 class="text-center text-uppercase">contact us</h3>
           <p class="text-center w-75 m-auto">We appreciate the customer feedback regarding the likes/dislikes, please feel free to contact us by provided ways. In case regarding queries and service information feel free to contact us here.</p>
           <div class="row">
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">call us</h4>
                    <p>+9779876543210,+9779812345678</p>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">office loaction</h4>
                   <address>Sunrise-tower, Balkumari, Kathamandu_Nepal </address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">Branch loaction</h4>
                    <address>Sunrise-tower, Balkumari, Kathamandu_Nepal </address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">email</h4>
                    <p>http://hotel.management1815@gmail.com</p>
                  </div>
                </div>
             </div>
           </div>
       </div>
       </div>
  
  );
}

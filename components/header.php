 <nav class="navbar navbar-expand-lg navbar-fixed-top fixed-top py-3" id="navbar">
     <div class="container" id="">
         <a href="." class="navbar-brand" data-aos="fade-down" data-aos-offset="300" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration="800">Smart Home</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobile" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarMobile">
             <ul class="navbar-nav gap-3 mx-auto" id="gap">
                 <li class="nav-item"><a href="../pages/home.php" class="nav-link <?= ($title == 'Home') ? 'nav-active' : ''?>" data-aos="fade-down" data-aos-offset="300" data-aos-delay="50" data-aos-easing="ease-in-sine" data-aos-duration="800">Home</a></li>
                 <li class="nav-item"><a href="../pages/control.php" class="nav-link nav-control " data-aos="fade-down" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="800">Control</a></li>
                 <li class="nav-item"><a href="../pages/products.php" class="nav-link nav-products <?= ($title == 'Product') ? 'nav-active' : ''?>" data-aos="fade-down" data-aos-offset="300" data-aos-delay="150" data-aos-easing="ease-in-sine" data-aos-duration="800">Products</a></li>
                 <li class="nav-item"><a href="../pages/contact.php" class="nav-link nav-contact <?= ($title == 'Contact') ? 'nav-active' : ''?>" data-aos="fade-down" data-aos-offset="300" data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-duration="800">Contact</a></li>
             </ul>
             <ul class="navbar-nav gap-3">
                 <li class="nav-item" id="register"><a href="#" class="btn rounded-pill fw-medium px-4 py-2 signup shadow-none" id="signup" data-aos="fade-down" data-aos-offset="300" data-aos-delay="250" data-aos-easing="ease-in-sine" data-aos-duration="800">Registred</a></li>
             </ul>
         </div>
     </div>
 </nav>
var featuresNav = document.querySelector(".features-icon");

var companyNav = document.querySelector(".company-icon");

var featuresNavBar = document.querySelector(".secondary-nav-1");

var companyNavBar = document.querySelector(".secondary-nav-2");

var feat = document.querySelector("#features-click");

var featDropDown = document.querySelector(".features-dropdown");

var cont = document.querySelector("#contact-click");

var contDropDown = document.querySelector(".company-dropdown");

var cancel = document.querySelector(".cancel-btn");

var openNav = document.querySelector(".mb-menu");

var mobileNav = document.querySelector(".mobile-nav");

 function secImg() {
    companyNavBar.classList.toggle("visibility");
      companyNav.classList.toggle("lga-icon");
};

function futImg() {  
        featuresNav.classList.toggle("lga-icon");
        featuresNavBar.classList.toggle("visibility");
    
    };

    feat.addEventListener("click", function(){
      featDropDown.classList.toggle("visibility");
      feat.classList.toggle("lga-icon");
    });

    cont.addEventListener("click", ()=> {
      contDropDown.classList.toggle("visibility");
      cont.classList.toggle("lga-icon")
    })

    openNav.addEventListener("click", ()=> {
         mobileNav.style.display = 'block';
    });

    cancel.addEventListener("click", ()=> {
      mobileNav.style.display = 'none'
    });
    
    


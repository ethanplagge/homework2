var homePage = `<h1>Welcome to the Site!</h1>
<div class="double-info-wrapper">
  <div class="home-image"></div>
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
</div>
<div class="double-info-wrapper">
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
  <div class="home-image2"></div>
</div>`;

var aboutPage = `<h1>About the Site!</h1>
<div class="double-info-wrapper">
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
  <div class="about-image2"></div>
</div>
<div class="double-info-wrapper">
  <div class="about-image"></div>
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
</div>`;

var contactPage = `<h1>How to Contact Us!</h1>
<div class="double-info-wrapper">
  <div class="contact-image"></div>
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
</div>
<div class="double-info-wrapper">
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
  <div class="contact-image2"></div>
</div>`;

var productsPage = `<h1>View our products!</h1>
<div class="double-info-wrapper">
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
  <div class="products-image"></div>
</div>
<div class="double-info-wrapper">
<div class="products-image2"></div>
  <div class="home-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aut quia animi incidunt harum at perspiciatis. Voluptas, 
       voluptate provident porro nihil repellendus fuga asperiores, 
       unde consectetur, aspernatur ex vel ullam placeat.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aut quia animi incidunt harum at perspiciatis. Voluptas, 
        voluptate provident porro nihil repellendus fuga asperiores, 
        unde consectetur, aspernatur ex vel ullam placeat.</p>
  </div>
</div>`;


export function setPageLayout(pageID){
  let pageLayoutName = pageID + "Page";
  $("#content").html(eval(pageLayoutName));
}
$(document).ready(function(){
  $('.filter-item').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all') {
              $('.post-box').show(1000);       
      }
      else {
          $('.post-box').not('.' + value).hide(1000);
          $('.post-box').filter('.' + value).show(1000);

      }
  });
  /* Add Button */
  $('.filter-item').click(function(){
     $(this).addClass('active-filter').siblings().removeClass("active-filter");
  });

});
let header = document.querySelector("header");
window.addEventListener('scroll' , function (){
   header.classList.toggle('shadow',window.scrollY > 0);
})
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}




























let fuc_1 = document.querySelector(".fuc_1");
let fuc_2 = document.querySelector(".fuc_2");
let fuc_3 = document.querySelector(".fuc_3");
let dector = document.querySelector(".dectors");
fuc_1.addEventListener('click' , function(){
  dector.innerHTML = `
  <a href = 'd.html' class="btn btn-primary">رجوع</a>

  <div class = "row">
   <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>

         <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>


         <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>






        </div>
  
        
  
  
  
  
  
  
  
  
  
  
  `

  
})
fuc_2.addEventListener('click' , function(){
  dector.innerHTML = `
    <a href = 'd.html' class="btn btn-primary">رجوع</a>

  <div class = "row">
   <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>

         <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>


         <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>






        </div>
  
        
  
  
  
  
  
  
  
  
  
  
  
  `
  
});
fuc_3.addEventListener('click' , function(){
  dector.innerHTML = `
    <a href = 'd.html' class="btn btn-primary">رجوع</a>

  <div class = "row">
  
   <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>

         <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>


         <div class="col-md-4">
          <div class="card fuc_1">
            <div class="card-body text-center">
            <img src="imges/Profile-PNG-Images.png" alt="No" class =  "img-flouid">
  
              <h5 class="card-title">دكتور :- محمد علي الطاهر</h5>
              <div class = "card-body">
                <p class  = "card-text"> التخصص :-اخصائي جراحة العيون </p>
                 <p class  = "card-text"> الجامعة :- جامعة حلب سوريا</p>
                 <p  class  = "card-text" > <i class="fa-solid fa-star"></i> </p> 
                     <a href="#" class="btn btn-primary">حجز</a>
              </div>
            </div>
          </div>
        </div>






        </div>
  
        
  
  
  
  
  
  
  
  
  
  
  
  `
  
})
/* Writer auto Text */
var typed = new Typed('#typed', {
  strings: ['                                                                                                                                                                                                                                                                                                                                 شكركم على ثقتكم بنا واختياركم مستشفى مكة للعيون. نحن نقدر جدًا أنكم وثقتوا بنا برعايتكم الصحية. يسعدنا أن نكون قد ساهمنا في تحسين صحتكم البصرية. نحن نعتبركم جزءًا من عائلتنا، ونتطلع إلى خدمتكم مرة أخرى في المستقبل     شكركم على ثقتكم بنا واختياركم مستشفى مكة للعيون. نحن نقدر جدًا أنكم وثقتوا بنا برعايتكم الصحية. يسعدنا أن نكون قد ساهمنا في تحسين صحتكم البصرية. نحن نعتبركم جزءًا من عائلتنا، ونتطلع إلى خدمتكم مرة أخرى في المستقبل    أهلًا بك في مستشفى مكة للعيون، بيتكم الصحي لرعاية بصرك. نحن ملتزمون بتقديم أفضل رعاية طبية لعيونكم، باستخدام أحدث التقنيات وأكثرها تقدمًا. فريقنا من الأطباء المتخصصين والفنيين المهرة يعمل جاهدًا لتشخيص حالتك وعلاجها بدقة وفعالية. نسعى جاهدين لضمان راحتك ورضاك التام، ونحن هنا لمساعدتك في كل خطوة على الطريق نحو استعادة بصرك'],
  typeSpeed: 40,
  backSpeed: 20,
  loop: false
});




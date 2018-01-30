// $(function(){
// $.support.css3d=supportsCSS3D();

// var container=$('#flip-container');

// $('#toRecover').on('click',function(e){
//     flipit($('#recover'), e);
//     $('#signup').addClass("neat");
//     $('#recover').removeClass("neat",3000); 
// });

// $('#join').on('click', function(e){
//     flipit($('#signup'),e);
//     $('#recover').addClass("neat");
//     $('#signup').removeClass("neat",3000);   
// });

// $('#jcancel').on('click',function(e){
//     flipit($('#signup'),e);
// });
// $('#cancelit').on('click',function(e){
//     flipit($('#signup'),e);  
// });

// // disable after backend added
// formContainer.find('form').submit(function(e){
//     e.preventDefault();
// });
// // to here

// function ctoggle(){
//     return container.toggleClass('flipped').delay(200);
// }

// function flipit(el,e){
// $.when(ctoggle()).done(function(){
//     el.toggleClass('hide');
//     if(!$.support.css3d)
//     $('#signin').toggle();

// });
// e.preventDefault();
// }

// function supportsCSS3D(){
//     var props=[
//         'perspectiveProperty','WebkitPerspective','MozPerspective'
//     ], testDom=document.createElement('a');
//     for(var i=0;i<props.length;i++){
//         if(props[i] in testDom.style){
//             return true;
//         }
//     }
//     return false;
// }

// });
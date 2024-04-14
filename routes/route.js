const express = require("express");
const router = express.Router();




dt=require('./fn')

router.use('/robots.txt', function (req, res, next) {
  res.type('text/plain')
  res.send(
    `User-agent: *
     Disallow: /admin`);
});



randx=function(){
  e=Math.floor(Math.random() * 5)
  return e
}



x=dt.s_data.pages
x_cat=dt.s_data.cats
// Home page route.



router.get(x[0].url, function (req, res) {
  res.render(x[0].id,{
    t_nav:[x[0].t_nav[0],x[0].t_nav[1]],
    pg_title:x[0].pg_title,
    site_title:x[0].site_title,
    pg_description:x[0].pg_description,
    img_arr:[
      {src:x[0].imgArr[6].src,alt:x[0].imgArr[6].alt,title:x[0].imgArr[6].title},
      {src:x[0].imgArr[1].src,alt:x[0].imgArr[1].alt,title:x[0].imgArr[1].title},
      {src:x[0].imgArr[2].src,alt:x[0].imgArr[2].alt,title:x[0].imgArr[2].title},
      {src:x[0].imgArr[3].src,alt:x[0].imgArr[3].alt,title:x[0].imgArr[3].title},
      {src:x[0].imgArr[4].src,alt:x[0].imgArr[4].alt,title:x[0].imgArr[4].title},
      {src:x[0].imgArr[5].src,alt:x[0].imgArr[5].alt,title:x[0].imgArr[5].title}
    
    ],
    textSlide_arr:dt.s_data.local_areas[randx()]
  
  })
});

// About page route.
router.get(x[1].url, function (req, res) {
  res.render(x[1].id,{
    t_nav:[
      x[1].t_nav[0],
      x[1].t_nav[1],
      x[1].t_nav[2]],
    pg_title:x[1].pg_title,
    site_title:x[1].site_title,
    pg_description:x[1].pg_description,
    img_arr:[
      {src:x[1].imgArr[0].src,alt:x[1].imgArr[0].alt,title:x[1].imgArr[0].title},
      {src:x[1].imgArr[1].src,alt:x[1].imgArr[1].alt,title:x[1].imgArr[1].title},
    ],
    textSlide_arr:dt.s_data.local_areas[randx()]
  
  })
});

// optionMenu page route.
router.get(x[2].url, function (req, res) {
  res.render(x[2].id,{
    t_nav:[x[2].t_nav[0],x[2].t_nav[1]],
    pg_title:x[2].pg_title,
    site_title:x[2].site_title,
    pg_description:x[2].pg_description,
    img_arr:[{src:x[2].imgArr[0].src}],
    textSlide_arr:dt.s_data.local_areas[randx()]
  
  })
});

// booking page route.
router.get(x[3].url, function (req, res) {
  res.render(x[3].id,{
    t_nav:[
      x[3].t_nav[0],
      x[3].t_nav[1],
      x[3].t_nav[2],
    
    ],
    pg_title:x[3].pg_title,
    site_title:x[3].site_title,
    pg_description:x[3].pg_description,
    img_arr:[{src:x[3].imgArr[0].src}],
    textSlide_arr:dt.s_data.local_areas[randx()]
  
  })
});


// couples page route.
router.get(x_cat[0].url, function (req, res) {
  res.render(x_cat[0].id,{
    t_nav:
    [
    x_cat[0].t_nav[0],
    x_cat[0].t_nav[1],
    x_cat[0].t_nav[2]
  
  ],
    theId:x_cat[0].id,
    pg_title:x_cat[0].pg_title,
    site_title:x_cat[0].site_title,
    pg_description:x_cat[0].pg_description,
    img_arr:[{src:x_cat[0].imgArr[0].src}],
    textSlide_arr:dt.s_data.local_areas[randx()]
  
  })
});
// groups page route.
router.get(x_cat[1].url, function (req, res) {
  res.render(x_cat[1].id,{
    t_nav:[
      x_cat[1].t_nav[0],
      x_cat[1].t_nav[1],
      x_cat[1].t_nav[2]
    
    ],
    theId:x_cat[1].id,
    pg_title:x_cat[1].pg_title,
    site_title:x_cat[1].site_title,
    pg_description:x_cat[1].pg_description,
    img_arr:[
      {src:x_cat[1].imgArr[0].src,alt:x_cat[1].imgArr[0].alt,title:x_cat[1].imgArr[0].title},
      {src:x_cat[1].imgArr[1].src,alt:x_cat[1].imgArr[1].alt,title:x_cat[1].imgArr[1].title},
      {src:x_cat[1].imgArr[2].src,alt:x_cat[1].imgArr[2].alt,title:x_cat[1].imgArr[2].title},
      {src:x_cat[1].imgArr[3].src,alt:x_cat[1].imgArr[3].alt,title:x_cat[1].imgArr[3].title}

    
    ]
  
  })
});


module.exports = router;


// C:\wamp\www\public\2_pp_development\st-maarten-massage-mobile_git
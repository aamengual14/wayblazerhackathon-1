$( document ).ready(function() {
  var concepts = [];
  var imagesArray = [
    {
      imageId: "image1",
      concepts: ["adventure", "water", "outdoors"]
    },
    {
      imageId: "image2",
      concepts: ["romance", "restaurants", "wine"]
    },
    {
      imageId: "image3",
      concepts: ["family", "kids", "theme parks"]
    },
    {
      imageId: "image4",
      concepts: ["history", "tours", "city"]
    },
    {
      imageId: "image5",
      concepts: ["nightlife", "clubs", "dancing"]
    },
    {
      imageId: "image6",
      concepts: ["relax", "spa", "massage"]
    },
  ];

  $('.button').children('.img-responsive').hide(200);
  $('#button1').children('#' + imagesArray[0].imageId).show(200);
  $('#button2').children('#' + imagesArray[0].imageId).show(200);
  $('#button3').children('#' + imagesArray[0].imageId).show(200);
  $('#button4').children('#' + imagesArray[0].imageId).show(200);
  $('#button5').children('#' + imagesArray[0].imageId).show(200);
  $('#button6').children('#' + imagesArray[0].imageId).show(200);
  console.log("can you hear me?");
  var indexButton1 = 0;
  var indexButton2 = 0;
  var indexButton3 = 0;
  var indexButton4 = 0;
  var indexButton5 = 0;
  var indexButton6 = 0;

  $('#button1').click(function(e) {
      e.preventDefault();
      console.log("you clicked a button");
        $( this ).children('#' + imagesArray[indexButton1].imageId).hide(200);
        indexButton1++;
        if(indexButton1 > 5){
          indexButton1 = 0;
        }
        $( this ).children('#' + imagesArray[indexButton1].imageId).show(200);
  });
  $('#button2').click(function(e) {
      e.preventDefault();
      console.log("you clicked a button");
        $( this ).children('#' + imagesArray[indexButton2].imageId).hide(200);
        indexButton2++;
        if(indexButton2 > 5){
          indexButton2 = 0;
        }
        $( this ).children('#' + imagesArray[indexButton2].imageId).show(200);
  });
  $('#button3').click(function(e) {
      e.preventDefault();
      console.log("you clicked a button");
        $( this ).children('#' + imagesArray[indexButton3].imageId).hide(200);
        indexButton3++;
        if(indexButton3 > 5){
          indexButton3 = 0;
        }
        $( this ).children('#' + imagesArray[indexButton3].imageId).show(200);
  });
  $('#button4').click(function(e) {
      e.preventDefault();
      console.log("you clicked a button");
        $( this ).children('#' + imagesArray[indexButton4].imageId).hide(200);
        indexButton4++;
        if(indexButton4 > 5){
          indexButton4 = 0;
        }
        $( this ).children('#' + imagesArray[indexButton4].imageId).show(200);
  });
  $('#button5').click(function(e) {
      e.preventDefault();
      console.log("you clicked a button");
        $( this ).children('#' + imagesArray[indexButton5].imageId).hide(200);
        indexButton5++;
        if(indexButton5 > 5){
          indexButton5 = 0;
        }
        $( this ).children('#' + imagesArray[indexButton5].imageId).show(200);
  });
  $('#button6').click(function(e) {
      e.preventDefault();
      console.log("you clicked a button");
        $( this ).children('#' + imagesArray[indexButton6].imageId).hide(200);
        indexButton6++;
        if(indexButton6 > 5){
          indexButton6 = 0;
        }
        $( this ).children('#' + imagesArray[indexButton6].imageId).show(200);
  });
});

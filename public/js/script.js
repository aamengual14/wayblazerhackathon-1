  $( document ).ready(function() {
    var conceptsArray = [];
    var imagesArray1 = [
      {
        imageId: "image1",
        concepts: ["nightlife", "romance", "downtown"]
      },
      {
        imageId: "image2",
        concepts: ["wine", "restaurants", "scenic", "dining", "romance"]
      },
      {
        imageId: "image3",
        concepts: ["family", "kids", "themeparks", "water"]
      },
      {
        imageId: "image4",
        concepts: ["history", "tours", "city", "museums"]
      },
      {
        imageId: "image5",
        concepts: ["nightlife", "clubs", "dancing", "theatre"]
      },
      {
        imageId: "image6",
        concepts: ["adventure", "outdoors", "ziplining"]
      },
    ];
    var imagesArray2 = [
      {
        imageId: "image7",
        concepts: ["kids", "family", "museums"]
      },
      {
        imageId: "image8",
        concepts: ["skydiving", "adventure"]
      },
      {
        imageId: "image9",
        concepts: ["daning", "scenic", "city"]
      },
      {
        imageId: "image10",
        concepts: ["lake", "boating", "party"]
      },
      {
        imageId: "image11",
        concepts: ["hotels", "dining", "cocktails"]
      },
      {
        imageId: "image12",
        concepts: ["relaxation", "spa", "massage"]
      },
    ];
    var imagesArray3 = [
      {
        imageId: "image13",
        concepts: ["adventure", "water", "outdoors"]
      },
      {
        imageId: "image14",
        concepts: ["coffee", "dining", "local"]
      },
      {
        imageId: "image15",
        concepts: ["pool", "hotel", "rooftop"]
      },
      {
        imageId: "image16",
        concepts: ["history", "tours", "city"]
      },
      {
        imageId: "image17",
        concepts: ["nightlife", "clubs", "dancing", "theatre", "live", "music"]
      },
      {
        imageId: "image18",
        concepts: ["dining", "scenic", "romantic"]
      },
    ];
    var imagesArray4 = [
      {
        imageId: "image19",
        concepts: ["romance", "wine", "dining"]
      },
      {
        imageId: "image20",
        concepts: ["sailing", "water", "outdoors"]
      },
      {
        imageId: "image21",
        concepts: ["rock-climbing", "adventure", "outdoors"]
      },
      {
        imageId: "image22",
        concepts: ["live", "music", "city"]
      },
      {
        imageId: "image23",
        concepts: ["senic", "yoga", "parks"]
      },
      {
        imageId: "image24",
        concepts: ["health", "exercise"]
      },
    ];
    var imagesArray5 = [
      {
        imageId: "image25",
        concepts: ["spa", "relax", "massage"]
      },
      {
        imageId: "image26",
        concepts: ["tours", "landmarks", "local", "historic"]
      },
      {
        imageId: "image27",
        concepts: ["museum", "art", "city"]
      },
      {
        imageId: "image28",
        concepts: ["dancing", "country", "nightlife"]
      },
      {
        imageId: "image29",
        concepts: ["spa", "relax", "massage"]
      },
      {
        imageId: "image30",
        concepts: ["dining", "scenic"]
      },
    ];
    var imagesArray6 = [
      {
        imageId: "image31",
        concepts: ["yoga", "exercise", "outdoors"]
      },
      {
        imageId: "image32",
        concepts: ["romance", "venue", "wedding"]
      },
      {
        imageId: "image33",
        concepts: ["golf", "outdoors"]
      },
      {
        imageId: "image34",
        concepts: ["romance", "venue", "wedding"]
      },
      {
        imageId: "image35",
        concepts: ["kids", "museum", "finally"]
      },
      {
        imageId: "image36",
        concepts: ["relax", "spa", "massage"]
      },
    ];
    $('.button').children('.img-responsive').hide(200);
    $('#button1').children('#' + imagesArray1[0].imageId).show(200);
    $('#button2').children('#' + imagesArray2[0].imageId).show(200);
    $('#button3').children('#' + imagesArray3[0].imageId).show(200);
    $('#button4').children('#' + imagesArray4[0].imageId).show(200);
    $('#button5').children('#' + imagesArray5[0].imageId).show(200);
    $('#button6').children('#' + imagesArray6[0].imageId).show(200);

    var indexButton1 = 0;
    var indexButton2 = 0;
    var indexButton3 = 0;
    var indexButton4 = 0;
    var indexButton5 = 0;
    var indexButton6 = 0;

    $('#button1').click(function(e) {
        e.preventDefault();
          $( this ).children('#' + imagesArray1[indexButton1].imageId).hide(200);
          for (var i = 0; i < imagesArray1[indexButton1].concepts.length; i++){
            conceptsArray.push(imagesArray1[indexButton1].concepts[i]);
            console.log(conceptsArray);
          }
          indexButton1++;
          if(indexButton1 > 5){
            indexButton1 = 0;
          }
          $( this ).children('#' + imagesArray1[indexButton1].imageId).show(200);
          console.log(conceptsArray);
    });
    $('#button2').click(function(e) {
        e.preventDefault();
          $( this ).children('#' + imagesArray2[indexButton2].imageId).hide(200);
          for (var i = 0; i < imagesArray2[indexButton2].concepts.length; i++){
            conceptsArray.push(imagesArray2[indexButton2].concepts[i]);
            console.log(conceptsArray);
          }
          indexButton2++;
          if(indexButton2 > 5){
            indexButton2 = 0;
          }
          $( this ).children('#' + imagesArray2[indexButton2].imageId).show(200);
          console.log(conceptsArray);
    });
    $('#button3').click(function(e) {
        e.preventDefault();
          $( this ).children('#' + imagesArray3[indexButton3].imageId).hide(200);
          for (var i = 0; i < imagesArray3[indexButton3].concepts.length; i++){
            conceptsArray.push(imagesArray3[indexButton3].concepts[i]);
          }
          indexButton3++;
          if(indexButton3 > 5){
            indexButton3 = 0;
          }
          $( this ).children('#' + imagesArray3[indexButton3].imageId).show(200);
          console.log(conceptsArray);
    });
    $('#button4').click(function(e) {
        e.preventDefault();
          $( this ).children('#' + imagesArray4[indexButton4].imageId).hide(200);
          for (var i = 0; i < imagesArray4[indexButton4].concepts.length; i++){
            conceptsArray.push(imagesArray4[indexButton4].concepts[i]);
          }
          indexButton4++;
          if(indexButton4 > 5){
            indexButton4 = 0;
          }
          $( this ).children('#' + imagesArray4[indexButton4].imageId).show(200);
          console.log(conceptsArray);
    });
    $('#button5').click(function(e) {
        e.preventDefault();
          $( this ).children('#' + imagesArray5[indexButton5].imageId).hide(200);
          for (var i = 0; i < imagesArray5[indexButton5].concepts.length; i++){
            conceptsArray.push(imagesArray5[indexButton5].concepts[i]);
          }
          indexButton5++;
          if(indexButton5 > 5){
            indexButton5 = 0;
          }
          $( this ).children('#' + imagesArray5[indexButton5].imageId).show(200);
          console.log(conceptsArray);
    });
    $('#button6').click(function(e) {
        e.preventDefault();
          $( this ).children('#' + imagesArray6[indexButton6].imageId).hide(200);
          for (var i = 0; i < imagesArray6[indexButton6].concepts.length; i++){
            conceptsArray.push(imagesArray6[indexButton6].concepts[i]);
          }
          indexButton6++;
          if(indexButton6 > 5){
            indexButton6 = 0;
          }
          $( this ).children('#' + imagesArray6[indexButton6].imageId).show(200);
          console.log(conceptsArray);
    });

    $('.refresh').click(function(e) {
        e.preventDefault();
        $( '#button1' ).children('#' + imagesArray1[indexButton1].imageId).hide(200);
        indexButton1 ++;
        if(indexButton1 > 5){
            indexButton1 = 0;
        }
        $( '#button1' ).children('#' + imagesArray1[indexButton1].imageId).show(200);

        $( '#button2' ).children('#' + imagesArray2[indexButton2].imageId).hide(200);
        indexButton2 ++;
        if(indexButton2 > 5){
            indexButton2 = 0;
        }
        $( '#button2' ).children('#' + imagesArray2[indexButton2].imageId).show(200);

        $( '#button3' ).children('#' + imagesArray3[indexButton3].imageId).hide(200);
        indexButton3 ++;
        if(indexButton3 > 5){
            indexButton3 = 0;
        }
        $( '#button3' ).children('#' + imagesArray3[indexButton3].imageId).show(200);

        $( '#button4' ).children('#' + imagesArray4[indexButton4].imageId).hide(200);
        indexButton4 ++;
        if(indexButton4 > 5){
            indexButton4 = 0;
        }
        $( '#button4' ).children('#' + imagesArray4[indexButton4].imageId).show(200);

        $( '#button5' ).children('#' + imagesArray5[indexButton5].imageId).hide(200);
        indexButton5 ++;
        if(indexButton5 > 5){
            indexButton5 = 0;
        }
        $( '#button5' ).children('#' + imagesArray5[indexButton5].imageId).show(200);

        $( '#button6' ).children('#' + imagesArray6[indexButton6].imageId).hide(200);
        indexButton6 ++;
        if(indexButton6 > 5){
            indexButton6 = 0;
        }
        $( '#button6' ).children('#' + imagesArray6[indexButton6].imageId).show(200);
      });


    $('#arrow').click(function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: $(document).height()/1.9,
      }, 1000);
    });

    $('#banana').submit(function(e) {
          var str = conceptsArray.join([separator = ',']);
          $('#hiddenbanana').val(str);

    });


  });

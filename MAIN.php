<html>
  <head>
    <title>MOMMA'S BOY</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="" />
    <meta property="og:description" content="" />
    <meta property="og:title" content="" />
    <meta property="og:url"content="" />
    <meta property="og:type"content="website" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Schoolbell|Josefin+Sans" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/slider.css">
    <link rel="stylesheet" href="css/audioelement.css">
    <link href="css/APPLICATION.css" rel="stylesheet" media="screen">
  </head>


<body>

<!-- <a href="#arrow" class="arrow"> > </a> -->

<div class="slider" id="slider">
  <div class="slItems">
    <div class="slItem" style="background-image: url('img/0.jpg');">
      <div class="title">
      <img class="PINKMB" src="img/PINKMB.png">
      </div>
    </div>

    <div class="slItem" style="background-image: url('img/1.jpg');">
      <div class="title">
      <img class="PINKMB" src="img/PINKMB.png">
      </div>
    </div>

    <div class="slItem" style="background-image: url('img/2.jpg');">
      <div class="title">
      <img class="PINKMB" src="img/PINKMB.png">
      </div>
    </div>

  </div>
</div>


    <div id="NAV" class="NAV">
        <a href="#TOP"></a>
        <div id="NAVMENU" >
          <div class="nav-mobile-wrap">
            <a href="#arrow" class="MB">
             MB
            </a>
            <a href="#AUDIO" href="#TOP">
            <img src="img/HEADPHONES.png" class="HEADPHONES">
            </a>
            <a href="#SHOP" href="#TOP">
            <img src="img/SHOP.png" class="SHOP">
            </a>
            <a href="#CONTACT" href="#TOP">
            <img src="img/FRIEND.png" class="FRIEND">
            </a>
          </div>
        </div>

      <a class="toggle-nav">
        <div id="nav-icon3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  




    <div class="NEW">

    <div class="ABOUTBLOCK" id="arrow">

      <div class="SQUIDBLOCK">
      <img src="img/SQUID.png" class="SQUID">
      </div>

      <div class="ABOUTP">

        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>

      </div>


    </div>



    <div class="AUDIOBLOCK" id="AUDIO">

      <div class="COVER">
        <img src="img/MB.jpg" class="MBCOVER">
      </div>

      <div class="PLAYER">

          <h1>LIQUID COURAGE</h1>

          <div class="audio-element bottom" data-url="SOUND/MB.mp3" data-band="01"      data-song="Make Believe">
          </div> 
          <div class="audio-element bottom" data-url="SOUND/CH.mp3" data-band="02" data-song="Cool Heat">
          </div>
          <div class="audio-element bottom" data-url="SOUND/S.mp3" data-band="03" data-song="Sleepin'">
          </div>
          <div class="audio-element bottom" data-url="SOUND/SG.mp3" data-band="04" data-song="Sweet Girl">
          </div>
          <div class="audio-element bottom" data-url="SOUND/RR.mp3" data-band="05" data-song="Rinse &amp Repeat">
          </div>
          <div class="audio-element bottom" data-url="SOUND/BGB.mp3" data-band="06" data-song="Be Good Boy">
          </div>

      </div>

    </div>


    <div class="SHOPBLOCK" id="SHOP">

      <h1>SHOP</h1>

    <div class="SHOPWRAP">
      <a class="SHOPPIC" href="http://mommasboymerch.bigcartel.com/product/cassette-liquid-courage-ep">
      <img src="img/MB.jpg" class="">
      </a>

      <a class="SHOPPIC" href="http://mommasboymerch.bigcartel.com/product/cd-liquid-courage">
      <img src="img/MB.jpg" class="">
      </a>

      <a class="SHOPPIC" href="http://mommasboymerch.bigcartel.com/product/sticker">
      <img src="img/MB.jpg" class="">
      </a>
    </div>

    </div>



    <div class="TWITBLOCK">

      <div class="BIRDBLOCK">
      <img src="img/TWIT.png" class="BIRD">
      </div>


      <div class="tweet">
      
      </div>
    

    </div>



    <div class="CONTACTBLOCK" id="CONTACT">


  <div class="SOCIAL">

      <div class="SOCIALWRAP">
          <a href="https://www.facebook.com/mommasboykc/">
            <img src="img/FB.png" class="SOCIALICON">
          </a>

          <a href="https://twitter.com/mommasboykc" >
            <img src="img/twitter.png" class="SOCIALICON">
          </a>

          <a href="https://www.instagram.com/mommasboykc/">
            <img src="img/INSTA.png" class="SOCIALICON">
          </a>
      </div>

    </div>


      <form id="ajax-contact" method="post" action="mailer.php">
        <div class="FORM0">
          NAME*<br>      
          <input type="text" id="name" name="name" required><br>
          E-MAIL*
          <input type="text" id="email" name="email" required><br>
          
        </div>

        <div class="FORM1">
          MESSAGE*<br>
          <textarea id="message" name="message" class="MESSAGE" required></textarea><br>
          <input class="SEND" type="submit" value="SUBMIT">
        </div>
      </form>



    </div>



    <footer>

    </footer>







    
</div>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.runtime.min.js"></script>
<script src="js/audioelement.js"></script>
<script src="js/slider.js"></script>
<script src="js/tweetie.js"></script>
<script src="js/script.js"></script>

</body>
</html>
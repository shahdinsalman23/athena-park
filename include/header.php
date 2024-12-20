<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include 'include/css.php';?>
    <title><?php echo isset($title) ? $title : 'Home';  ?></title>
</head>

<body>


    <header class="header_main">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-4">
                    <div class="header-logo">
                        <a href="index.php"><img src="images/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="header-nav">
                        <ul>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="biography.php">biography</a></li>
                            <li><a href="music.php">Music</a></li>
                            <li><a href="movie.php">Movies & tv </a></li>
                            <li><a href="gallery.php">Gallery</a></li>
                            <li><a href="interview.php">Interviews</a></li>
                            <li><a href="subscribe.php">Subscribe</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="header-end">
                        <ul>
                            <li><a href=""><i class='bx bxl-spotify'></i></a></li>
                            <li><a href=""><i class='bx bxl-snapchat'></i></a></li>
                            <!-- <li><a href=""><i class='bx bxl-tumblr'></i></a></li> -->
                            <li><a href=""><i class='bx bxl-youtube'></i></a></li>
                            <li><a href=""><i class='bx bxl-instagram'></i></a></li>
                            <li><a href=""><i class='bx bxl-twitter'></i></a></li>
                            <li><a href=""><i class='bx bxl-soundcloud'></i></a></li>
                        </ul>
                        <span onclick="openNav()">&#9776;</span>
                    </div>
                </div>
            </div>
        </div>
    </header>




    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="index.php">Home</a>
        <a href="biography.php">biography</a>
        <a href="music.php">Music</a>
        <a href="movie.php">Movies & tv </a>
        <a href="gallery.php">Gallery</a>
        <a href="interview.php">Interviews</a>
        <a href="subscribe.php">Subscribe</a>
    </div>
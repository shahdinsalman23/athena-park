    <!-- Header -->
    <?php include 'include/header.php'; ?>


    <!-- Biography banner Section Start -->
    <section class="biography-banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="biography-banner-txt">
                        <h4>Musics</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br> Ipsum
                            has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Biography banner Section End -->




    <!-- Audio Player Section Start -->
    <section class="audio-player-sec">
        <div class="container">
            <div class="audio-player">
            <div class="row m-0 pl-0 pr-0">
                <div class="col-lg-6 col-md-4 pl-0 pr-0">
                    <div class="audio-img">
                        <img src="images/song-img.png" alt="">
                    </div>  
                </div>
                <div class="col-lg-6 col-md-8 pl-0 pr-0">
                    <div class="audio-player-txt">
                        <h3>Audio player</h3>
                        <h2>ATHENA - TUATARA - <br> MASTER FIXED ENDING</h2>
                    </div>
                    <div class="audio-line">
                        <input type="range" name="" id="">
                    </div>
                    <div class="music-playerbtns">
                        <a class="refresh-btn" href=""><i class='bx bx-refresh'></i></a>
                        <button href="#" class="previous-btn" onclick="previous_song()" id="pre"><i
                                class="fa fa-step-backward"></i></button>
                        <button href="#" class="play-btn" onclick="justplay()" id="play"><i
                                class="fa fa-play"></i></button>
                        <button href="#" class="previous-btn" onclick="next_song()" id="next"><i
                                class="fa fa-step-forward"></i></button>
                        <a href="#" class="shuffle-btn"><i class='bx bx-shuffle'></i></a>
                    </div>
                    <div class="athena-head">
                        <h2>Athena Park</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <!-- Audio Player Section End -->




    <!-- Footer -->
    <?php include 'include/footer.php'; ?>
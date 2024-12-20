let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create a audio Element
let track = document.createElement("audio");

// All song list
let All_song = [
  {
    name: "Faded",
    Path: "Audio Songs/song1.mp3",
    img: "Images/music1.jpg",
    singer: "Singer-ALAN WALKER",
  },
  {
    name: "Runaway",
    Path: "Audio Songs/song2.mp3",
    img: "Images/music2.jpg",
    singer: "singer-AURORA",
  },
  {
    name: "Shape Of You",
    Path: "Audio Songs/Ed_Sheeran_Shape_of_You_Lyrics_.mp3",
    img: "Images/music3.jpg",
    singer: "ED-SHEERAN",
  },
  {
    name: "Unstoppable",
    Path: "Audio Songs/song4.mp3",
    img: "Images/music4.jpg",
    singer: "Singer-SIA",
  },
  {
    name: "Falling",
    Path: "Audio Songs/song5.mp3",
    img: "Images/music5.jpg",
    singer: "Singer-TREVOR DANIEL",
  },
  {
    name: "Love Me Like You Do",
    Path: "Audio Songs/Ellie_Goulding_Love_Me_Like_You_Do.mp3",
    img: "Images/music4.jpg",
    singer: "Singer-ELLIE GOULDING",
  },
  {
    name: "Let Me Down Slowly",
    Path: "Audio Songs/Alec_Benjamin_Let_Me_Down_Slowly.mp3",
    img: "Images/music1.jpg",
    singer: "Singer-ALEC BENJAMIN",
  },
  {
    name: "Love Nwantiti",
    Path: "Audio Songs/yt1s.com - CKay  Love Nwantiti Remix ft Joeboy  Kuami Eugene Lyric Video.mp3",
    img: "Images/music2.jpg",
    singer: "Singer-CKAY",
  },
  {
    name: "Into Your Arms",
    Path: "Audio Songs/Felax_Into_Your_Arms.mp3",
    img: "Images/music2.jpg",
    singer: "Singer-WITT LOWRY",
  },
  {
    name: "Senorita",
    Path: "Audio Songs/Shawn_Mendes_Camila_Cabello_Señorita_Official_.mp3",
    img: "Images/music2.jpg",
    singer: "Singer-SHAWN MENDES",
  }
];

// All function
// function load the track
function load_track(index_no) {
    clearInterval(timer);
  reset_slider();
  track.src = All_song[index_no].Path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);
}
load_track(index_no);

// mute sound
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

// checking the sond is playing or not
function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// play song
function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
}

// pause song
function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play"></i>';
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}
// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "rgba(255,255,255,0.2)";
  } else {
    autoplay = 1;
    auto_play.style.background = "#ff8a65";
  }
}
function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  //   function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}

const API_KEY = "AIzaSyBa1-t9zH4k3JC5Dfrmx_mjoEaHNgQLnu8";
export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=" +
  API_KEY;
export const YOUTUBE_SEARCH_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  API_KEY +
  "&q=";
export const AUTOCOMPLETE_SEARCH_API =
  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const CHIP_LABELS = [
  "All",
  "Mutual Funds",
  "Personal Finances",
  "Gaming",
  "Computer Programming",
  "Music",
  "Startup Company",
  "Apple",
  "Foreign Exchange Markets",
  "Royal Enfield",
  "Yamaha",
  "Mixes",
  "Podcast",
  "Colleges",
  "Thoughts",
  "Live",
  "Bagger",
  "Bodybuilding",
  "Recently Uploaded",
  "Watched",
  "New to you",
];

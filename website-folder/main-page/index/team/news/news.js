// Example news data
const newsData = [
  {
    title: "First Announcement",
    desc: "This is a short description for the first news. Click to read more!",
    full: "This is the full description for the first announcement. Here you can put all the details, images, and more.",
    img: "/pictures/night_logo.png"
  },
  {
    title: "Second Announcement",
    desc: "This is a short description for the second news. Click to read more!",
    full: "This is the full description for the second announcement. Here you can put all the details, images, and more.",
    img: "/pictures/night_logo.png"
  },
  {
    title: "Third Announcement",
    desc: "This is a short description for the third news. Click to read more!",
    full: "This is the full description for the third announcement. Here you can put all the details, images, and more.",
    img: "/pictures/night_logo.png"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.news-panel').forEach((panel, idx) => {
    panel.addEventListener('click', () => {
      if (window.openNewsModal) {
        window.openNewsModal({
          img: newsData[idx].img,
          title: newsData[idx].title,
          desc: newsData[idx].full
        });
      }
    });
  });
});
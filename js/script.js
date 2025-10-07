document.addEventListener("DOMContentLoaded", function () {
  let icon = document.getElementById('icon-mobile');
  let ul = document.getElementById('ul-mobile');

  if (icon && ul) {
    // عند الضغط على أيقونة القائمة
    icon.onclick = function () {
      ul.classList.toggle("mobile-nav1");
    }

    // إغلاق القائمة عند الضغط على أحد الروابط (على الجوال)
    let links = ul.querySelectorAll('a');

    links.forEach(link => {
      link.onclick = function () {
        ul.classList.remove("mobile-nav1");
      }
    });
  }
});

    function loadVideo(container, videoId) {
      container.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0"
          title="مشاهدة الفيديو"
          frameborder="0"
          allowfullscreen
          loading="lazy"
          style="width: 100%; height: 100%;"
        ></iframe>
      `;
    }






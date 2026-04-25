// 🔥 헤더 스크롤 효과
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "white";
        header.style.color = "black";

        // 메뉴 글자 색도 같이 변경
        document.querySelectorAll(".header a").forEach(link => {
            link.style.color = "black";
        });

    } else {
        header.style.background = "transparent";
        header.style.color = "white";

        document.querySelectorAll(".header a").forEach(link => {
            link.style.color = "white";
        });
    }
});


// 🔥 부드러운 스크롤 (메뉴 클릭 시)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

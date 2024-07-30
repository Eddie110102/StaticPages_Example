const list = [
  { name: "音樂作品網站", link: "SingerIntroduction" },
  { name: "商城列表", link: "Product" },
  { name: "室內設計網站", link: "Interno" },
];

const box = document.querySelector("#container");

let result = "";
for (let i = 0; i < list.length; i++) {
  result += `
        <section>
        <a href="./${list[i].link}">
          <div class="cardImageBox">
            <img src="./${list[i].link}/images/cardImage.png" />
          </div>
          <h2>${list[i].name}</h2>
          </a>
        </section>`;
}
box.innerHTML = result;

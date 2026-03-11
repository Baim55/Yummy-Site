function menuOpen() {
  let menubar = document.getElementById("menubar");

  if (menubar.style.right == "-100%") {
    menubar.style.right = "0";
  } else {
    menubar.style.right = "-100%";
  }
}

const list = document.getElementById("list");

list.innerHTML = menu
  .map((item, index) => {
    const isActive = index === 0;
    return `
    <li class="py-[15px] px-[14px] font-medium duration-200 ${
      isActive ? "text-[#4e4e59]" : "text-[#7f7f90] hover:text-[#4e4e59]"
    }">
      <a href="${item.link}" class="relative px-[2px] ${isActive ? "active" : ""}">
        ${item.name}
      </a>
    </li>
  `;
  })
  .join("");

const eat = document.getElementById("eat");

eat.innerHTML += menuItems
  .map((item) => {
    return `
        <div
            class="mt-[50px] px-[12px] flex flex-col items-center text-center"
          >
            <img
              src="${item.img}"
              alt=""
              class="px-[60px] mb-[15px]"
            />
            <div>
              <h4 class="mb-[5px] text-[24px] font-bold">${item.name}</h4>
              <p class="mb-[5px] text-[#909294]">
               ${item.description}
              </p>
              <p class="mb-[16px] text-[24px] text-[#ce1212] font-bold">
                ${item.price}
              </p>
            </div>
          </div>
    `;
  })
  .join("");

let slider = document.getElementById("slider");

slider.innerHTML += testimonials
  .map((item) => {
    return `
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div
                  class="slider px-3 flex flex-col lg:flex-row items-center justify-between"
                >
                  <div
                    class="pl-[30px] border-l-2 border-[#ce1212] lg:mx-[12px] lg:mt-[24px]"
                  >
                    <div class="mb-[16px]">
                      <p>
                        <i class="fa-solid fa-quote-left text-[#e08282]"></i>
                        <span class="text-[#212529] italic"
                          >${item.desc}</span
                        >
                        <i class="fa-solid fa-quote-right text-[#e08282]"></i>
                      </p>
                      <h3
                        class="amatic font-semibold mt-[10px] mb-[5px] text-[#37373f] text-[20px]"
                      >
                        ${item.name}
                      </h3>
                      <h4 class="amatic mb-[10px] text-[#75777a] text-[14px]">
                        ${item.work}
                      </h4>
                      <div>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                      </div>
                    </div>
                  </div>
                  <img
                    src="${item.img}"
                    alt=""
                    class="rounded-full lg:w-[170px] lg:h-[170px] lg:mx-[12px] lg:mt-[24px]"
                  />
                </div>
              </div>
    `;
  })
  .join("");

let eventsData = document.getElementById("eventsData");
eventsData.innerHTML += evets
  .map((item) => {
    return ` <li class="splide__slide">
                <div
                  class="bg1 text-white p-[30px] min-h-[600px] flex flex-col justify-end"
                  style="background-image:url('${item.img}')"
                >
                  <h3 class="amatic text-[24px]">${item.title}</h3>
                  <span class="text-[32px] border-b-2 border-[#ce1212] w-fit"
                    >${item.price}</span
                  >
                  <p class="mt-[15px]">${item.description}</p>
                </div>
              </li>`;
  })
  .join("");

let chefsData = document.getElementById("chefsData");
chefsData.innerHTML += chefs
  .map((item) => {
    return `
  <div
              class="rounded-lg overflow-hidden shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:scale-105 duration-200"
            >
              <img src="${item.img}" alt="" class='w-full'/>
              <div
                class="pt-[10px] pb-[20px] px-[15px] text-center flex items-center justify-between flex-col"
              >
                <h4 class="text-[20px] font-bold text-[#37373f] mb-[5px]">
                  ${item.name}
                </h4>
                <span class="text-[14px] text-[#909294] font-medium"
                  >${item.role}</span
                >
                <p
                  class="mb-[16px] pt-[15px] text-[#636669] text-[14px] italic"
                >
                  ${item.desc}
                </p>
              </div>
            </div>
  `;
  })
  .join("");

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#party-slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1px",

    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: true,

    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let galleryData = document.getElementById("galleryData");
  galleryData.innerHTML = gallery
    .map((item) => {
      return `<li class="splide__slide">
        <img src="${item.img}" alt="" class="w-full h-[300px] object-cover" />
      </li>`;
    })
    .join("");

  new Splide("#gallery-slider", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "10px",
    focus: "center",
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: true,
    breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 1 },
    },
  }).mount();
});

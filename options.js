const cs = () => {
  if (content.scrollTop > 0) {
    podloga.style.boxShadow = "0 0 10px 3px rgba(0,0,0,0.4)";
    podloga.style.borderBottom = "4px solid #8494A5";
  } else {
    podloga.style.boxShadow = "";
    podloga.style.borderBottom = "";
  }
};

const wr = () => {
  setTimeout(() => {
    if (window.innerWidth > 1015) {
      let w1 = (window.innerWidth - 620) / 2;
      menu.style.left = w1 - 200 + "px";
      menu.style.display = "block";
      pan.style.left = w1 + "px";
      pan.style.display = "block";
    } else {
      menu.style.left = 0 + "px";
      menu.style.display = "block";
      pan.style.left = 200 + "px";
      pan.style.display = "block";
    }

    let wt = window.innerWidth - 310;

    if (wt > 0) {
      wt /= 2;
      box_t.style.left = wt + "px";
      box_t.style.display = "block";
    } else {
      box_t.style.left = 0 + "px";
      box_t.style.display = "block";
    }
  }, 200);
};

const mCl = e => {
  content.scrollTop = 0;

  let getChM = menu.children,
    i = getChM.length,
    getChP = pan.children,
    j = getChP.length;
  while (i--) getChM[i].className = "mBtn";
  while (j--) getChP[j].style.display = "none";

  e.target.className = "mBtn mBtnA";

  document.getElementById(e.target.dataset.r).style.display = "block";
};

const LMCl = e => {
  e.target.id === "c_btn"
    ? chrome.tabs.create({
        url:
          "https://chrome.google.com/webstore/detail/v7-gmail-zoom/nmddnckmbnlpdaehblenpajpfeajaejm",
        active: !0
      })
    : e.target.id === "e_btn"
    ? chrome.tabs.create({
        url:
          "https://microsoftedge.microsoft.com/addons/search/v7%20gmail%20zoom",
        active: !0
      })
    : chrome.tabs.create({
        url: "https://addons.opera.com/en/extensions/details/v7-gmail-zoom/",
        active: !0
      });
};

document.addEventListener("DOMContentLoaded", () => {
  let ww = window.innerWidth,
    wt = ww - 310;
  if (ww > 1015) {
    let w1 = (ww - 620) / 2;
    menu.style.left = w1 - 200 + "px";
    menu.style.display = "block";
    pan.style.left = w1 + "px";
    pan.style.display = "block";
  } else {
    menu.style.left = 0 + "px";
    menu.style.display = "block";
    pan.style.left = 200 + "px";
    pan.style.display = "block";
  }

  if (wt > 0) {
    wt /= 2;
    box_t.style.left = wt + "px";
    box_t.style.display = "block";
  } else {
    box_t.style.left = 0 + "px";
    box_t.style.display = "block";
  }

  LM.addEventListener("click", LMCl);
  menu.addEventListener("click", mCl);

  pp_link.addEventListener("click", () => {
    chrome.runtime.sendMessage({ c: "d" });
  });
  content.addEventListener("scroll", cs);
  window.addEventListener("resize", wr);

  m3.click();

  let mbl = document.getElementsByClassName("versionDate");
  for (let p3 = mbl.length - 1; p3 >= 0; p3--) {
    let getD = Number(mbl[p3].textContent);
    let ld = new Date(getD);

    mbl[p3].textContent = ld.toLocaleDateString();
  }

  let upd = location.href.split("#");
  if (upd[1]) {
    if (upd[1] === "firstrun") {
      m3.click();
      setTimeout(() => {
        document.getElementById("msg").style.display = " block";
      }, 1500);
    } else if (upd[1] === "log") {
      m2.click();
    }
  } else m3.click();

  setTimeout(() => {
    LM.animate(
      [
        { opacity: 0, transform: "translateX(-30px)" },
        { opacity: 1, transform: "translateX(0px)" }
      ],
      {
        duration: 200,
        steps: 5,
        webkitAnimationTimingFunction: "ease-out"
      }
    ).onfinish = () => {
      LM.style.opacity = 1;
      LM.style.left = 0 + "px";
    };
  }, 700);

  const yt = document.getElementsByClassName("example");

  [...yt].map(el =>
    el.addEventListener("click", () => {
      chrome.tabs.create({
        url: "https://youtu.be/RoMLgFxj1ic",
        active: !0
      });
    })
  );
});

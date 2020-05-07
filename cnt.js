(() => {
  let mo = null,
    z = {},
    getI,
    saveT,
    observeT,
    cnt = 0,
    s = document.createElement("style");

  chrome.storage.local.get("z", r => {
    z = r.z;
    style();
    si();
  });

  const si = () => {
    cnt++;
    if (cnt < 6) getI = setInterval(get, 2000);
  };

  const get = () => {
    let a = document.getElementsByTagName("header");
    if (a[0]) {
      clearInterval(getI);
      setTimeout(() => getF(a[0]), 1000);
    }
  };

  const getF = a => {
    const b = a.getElementsByTagName("form");
    if (b[0]) {
      const fp = b[0].parentNode.parentNode.parentNode;
      fp ? _gp(fp) : si();
    } else si();
  };

  const _gp = a => {
    const p = a.firstChild;
    p.style.paddingRight = "";

    const f = window.getComputedStyle(a, null).getPropertyValue("color");

    const container = document.createElement("div");
    container.id = "ico_container_v7_gmz_";
    container.title = "V7 Gmail Zoom";
    p.appendChild(container);

    const bg = document.createElement("div");
    bg.id = "ico_bg_v7_gmz_";
    container.appendChild(bg);

    const icon = document.createElement("div");
    icon.id = "ico_v7_gmz_";
    icon.textContent = "Z";
    icon.style.color = icon.style.borderColor = f;
    container.appendChild(icon);

    container.addEventListener("click", iC);

    let observer = new MutationObserver(() => {
      clearTimeout(observeT);
      observeT = setTimeout(() => mutate(a, icon, bg), 500);
    });

    observer.observe(a, {
      attributes: true
    });
  };

  const iC = () => {
    if (!mo) {
      mo = document.createElement("div");
      mo.id = "md_v7_gmz_";
      mo.innerHTML = `
      <div  class="header_v7_gmz_">
        <div id='g0_v7_gmz_' class="G_v7_gmz_ P_v7_gmz_" title="Open extension page"></div>
        <div id='g2_v7_gmz_' class="G_v7_gmz_ P_v7_gmz_" title="Donate with PayPal"></div>
        <div id='g3_v7_gmz_' class="G_v7_gmz_ P_v7_gmz_" title="Close"></div>
      </div>
      <div  class="content_v7_gmz_">
        <div class="row_v7_gmz_">
          <div id='b0i_v7_gmz_' class="I_v7_gmz_" title="Zoom list of messages"></div>
          <div id='b1_v7_gmz_' class="B_v7_gmz_ P_v7_gmz_" ></div>
          <div id='b2_v7_gmz_' class="V_v7_gmz_ P_v7_gmz_" title="Reset">${z.l}%</div>
          <div id='b3_v7_gmz_' class="B_v7_gmz_ P_v7_gmz_" ></div>
        </div>
        <div class="row_v7_gmz_">
          <div id='d0i_v7_gmz_' class="I_v7_gmz_" title="Zoom messages"></div>
          <div id='d1_v7_gmz_' class="B_v7_gmz_ P_v7_gmz_" ></div>
          <div id='d2_v7_gmz_' class="V_v7_gmz_ P_v7_gmz_" title="Reset">${z.m}%</div>
          <div id='d3_v7_gmz_' class="B_v7_gmz_ P_v7_gmz_" ></div>
        </div>
        <div class="row_v7_gmz_">
          <div id='w0i_v7_gmz_' class="I_v7_gmz_" title="Zoom composed messages"></div>
          <div id='w1_v7_gmz_' class="B_v7_gmz_ P_v7_gmz_" ></div>
          <div id='w2_v7_gmz_' class="V_v7_gmz_ P_v7_gmz_" title="Reset">${z.w}%</div>
          <div id='w3_v7_gmz_' class="B_v7_gmz_ P_v7_gmz_" ></div>
        </div>
      </div>`;

      document.body.appendChild(mo);
      mo.addEventListener("click", pC);
      mo.addEventListener("blur", cl);
      mo.setAttribute("tabIndex", "1");
      mo.focus();
    }
  };

  const pC = e => {
    const t = e.target.id;

    if (t === "g3_v7_gmz_") mo.blur();
    else {
      const go = e.target.classList.contains("P_v7_gmz_");

      if (go) {
        clearTimeout(saveT);
        switch (t) {
          case "g0_v7_gmz_":
            chrome.runtime.sendMessage({ a: "b" });
            break;

          case "g2_v7_gmz_":
            chrome.runtime.sendMessage({ c: "d" });
            break;

          case "b1_v7_gmz_":
            if (z.l > 30) z.l -= 10;
            break;

          case "b2_v7_gmz_":
            z.l = 100;
            break;

          case "b3_v7_gmz_":
            if (z.l < 250) z.l += 10;
            break;

          case "d1_v7_gmz_":
            if (z.m > 30) z.m -= 10;
            break;

          case "d2_v7_gmz_":
            z.m = 100;
            break;

          case "d3_v7_gmz_":
            if (z.m < 250) z.m += 10;
            break;

          case "w1_v7_gmz_":
            if (z.w > 30) z.w -= 10;
            break;

          case "w2_v7_gmz_":
            z.w = 100;
            break;

          case "w3_v7_gmz_":
            if (z.w < 250) z.w += 10;
            break;
        }

        newZ();
      }
    }
  };

  const newZ = () => {
    document.getElementById("b2_v7_gmz_").textContent = `${z.l}%`;
    document.getElementById("d2_v7_gmz_").textContent = `${z.m}%`;
    document.getElementById("w2_v7_gmz_").textContent = `${z.w}%`;

    s.innerHTML = "";

    style();

    saveT = setTimeout(() => {
      chrome.storage.local.set({ z: z });
    }, 500);
  };

  const cl = () => {
    try {
      mo.parentNode.removeChild(mo);
      mo = null;
    } catch (error) {
      console.log(error);
    }
  };

  const style = () => {
    s.appendChild(
      document.createTextNode(
        `.ii {zoom:${z.m}%} .Au {zoom:${z.w}% !important} .F {zoom:${z.l}%} .gb_0c {padding-right: 0 !important}`
      )
    );

    document.getElementsByTagName("head")[0].appendChild(s);
  };

  const mutate = (a, b, c) => {
    let f = window.getComputedStyle(a, null).getPropertyValue("color");
    b.style.color = b.style.borderColor = c.style.borderColor = f;
  };
})();

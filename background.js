chrome.runtime.onInstalled.addListener(d => {
  if (d.reason === "install") {
    chrome.storage.local.set({ z: { m: 100, l: 100, w: 100 } });
    chrome.tabs.create({ url: "options.html#firstrun" });
  } else if (d.reason === "update") {
    chrome.storage.local.get("z", r => {
      let z = r.z;
      if (!z.w) {
        z.w = 100;
        chrome.storage.local.set({ z: { m: 100, l: 100, w: 100 } });
      }

      chrome.tabs.create({ url: "options.html#log" });
    });
  }
});

chrome.runtime.onMessage.addListener(m => {
  m.a
    ? chrome.tabs.create({ url: "options.html" })
    : m.c
    ? chrome.tabs.create({
        url:
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4LFHZT6R4K6CA"
      })
    : chrome.tabs.create({
        url:
          "https://chrome.google.com/webstore/detail/v7-gmail-zoom/nmddnckmbnlpdaehblenpajpfeajaejm"
      });
});

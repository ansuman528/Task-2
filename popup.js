const clickme = document.getElementById("myBtn");
clickme.addEventListener("click",async function () {
   const link1 = "https://www.linkedin.com/in/raghavbajajnitrkl/";
   const link2 = "https://www.linkedin.com/in/sanjeetmishraphd/";
   const link3 = "https://www.linkedin.com/in/pratyusha-kumar-nayak-875a011b8/";
   const Profiles = new Array(link1,link2,link3);
   // window.open(link1);
   // window.open(link2);
   // window.open(link3);
   for(let i=0;i<Profiles.length;i++)
   {
      chrome.tabs.create({
         url: Profiles[i]
         }, function (newTab) {
         chrome.scripting.executeScript({
            target: {tabId: newTab.id},
            files: ['content.js']
         });
      });
   }
});
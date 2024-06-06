import { getInfo } from "/getInfo.js";

window.addEventListener("DOMContentLoaded", () => {
  let infoFromAPI;
  console.log(window.location.href);

  const btn = document.getElementById("btn");
  const btn2 = document.getElementById("btn2");
  const container = document.querySelector(".container");
  const loading = document.getElementById("loading-text")

  loading.style.display = "none"

  getInfo().then((data) => {
    loading.style.display = "block"
    infoFromAPI = data
    setTimeout(() => {
      loading.style.display = "none"
    }, 1000);
  });

  infoFromAPI ? container.innerHTML = `
    
    <div>
      <p>${(infoFromAPI.disclaimer)}</p>
      <h2>${infoFromAPI.chartName}</h2>
      <p class="bg-light bg-gradient">${infoFromAPI.bpi.EUR.rate_float} <i class="bi bi-currency-euro"></i> ${infoFromAPI.bpi.EUR.description}</p>
      <p><sub>Last Updated ${infoFromAPI.time.updated}</sub></p>
    </div>
    
    ` : alert("No info yet")
  });


  // btn.addEventListener("click", () => {
  //   loading.style.display = "block"
  //   getInfo().then((data) => {
  //     infoFromAPI = data
  //     setTimeout(() => {
  //       loading.style.display = "none"
  //     }, 1000);
  //   });
    
  // });

  // btn2.addEventListener("click", () => {
  // container.innerHTML = `<p>${JSON.stringify(infoFromAPI)}</p>`;
    
  //   infoFromAPI ? container.innerHTML = `
    
  //   <div>
  //     <p>${(infoFromAPI.disclaimer)}</p>
  //     <h2>${infoFromAPI.chartName}</h2>
  //     <p class="bg-light bg-gradient">${infoFromAPI.bpi.EUR.rate_float} <i class="bi bi-currency-euro"></i> ${infoFromAPI.bpi.EUR.description}</p>
  //     <p><sub>Last Updated ${infoFromAPI.time.updated}</sub></p>
  //   </div>
    
  //   ` : alert("No info yet")
  // });

// Add Interval

// setInterval(() => {
//   getInfo().then((value) => {
//     infoFromAPI = value
//     console.log(value);
//   })
// }, 60000);
// });

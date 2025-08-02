const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
      toggleBtn.classList.add('hidden'); // Hide hamburger

});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
      toggleBtn.classList.remove('hidden'); // Hide hamburger

});

dropdown.addEventListener("click", () => {
  sidebar.classList.add("active"); // show transaction
});

dropdown.addEventListener("click", () => {
  dropdown-menu.classList.remove("active"); // Hide transaction-menu
});

$(document).ready(function () {
    $.ajax({
      // file path
      url: 'data.json', 
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        // Summary Cards
        $.each(data.summary, function (index, item) {
          const card = `
            <div class="summary-card">
              <h2>${item.symbol}</h2>
              <p>¥${item.price.toLocaleString()}</p>
              <small>${item.changePercent > 0 ? '+' : ''}${item.changePercent}%</small>
            </div>
          `;
          $('#summary-cards').append(card);
        });
      }
      });
    });
const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
      toggleBtn.classList.add('hidden'); // Hide hamburger

});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  toggleBtn.classList.remove('hidden');
 toggleBtn.classList.add('active');
});


// dropdown.addEventListener("click", () => {
//   sidebar.classList.add("active"); // show transaction
// });

// dropdown.addEventListener("click", () => {
//   dropdown-menu.classList.remove("active"); // Hide transaction-menu
// });

$(document).ready(function () {
  $.getJSON('data.json', function (data) {
    data.market.forEach(coin => {
      const card = `
       <div class="card">
            <div>
            <div class="card-title">    
              <img src="${coin.img}" alt="${coin.name}">${coin.symbol} (${coin.name})
              <span>¥ ${coin.price_jpy}  
              <span style="color: ${coin.change_percent >= 0 ? 'green' : 'red'}">
              <img  style="float:bottom" src="Assets/${coin.change_percent >= 0 ? 'up.png' : 'down.png'}"> ${Math.abs(coin.change_percent)}%
              </span></span>
            </div>
            <div class="chart-placeholder">
              <img src="${coin.location}" alt="${coin.symbol}-chart" />
            </div>
            </div>
          </div>`;
      $('.card-slider').append(card);
    });
  });
});


//   })
//     // Function to format numbers with commas
//     function formatNumber(num) {
//         return num.toLocaleString('ja-JP');
//     }

//     // Function to get the appropriate shade image based on symbol
//     function getShadeImage(symbol) {
//         const shadeMap = {
//             'BTC': 'Shade.png',
//             'ETH': 'Shade-1.png',
//             'XEM': 'Shade-2.png',
//             'XRP': 'shade-3.png'
//         };
//         return `Assets/${shadeMap[symbol] || 'Shade.png'}`;
//     }

//     // Load data using AJAX
//     $.ajax({
//         url: 'data.json',
//         method: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             // Render market cards
//             const cardSlider = $('.card-slider');
//             cardSlider.empty(); // Clear existing cards

//             data.market.forEach(coin => {
//                 const card = `
//                     <div class="card">
//                         <div>
//                             <div class="card-title">
//                                 ${coin.symbol} (${coin.name})
//                                 <span>¥ ${formatNumber(coin.price_jpy)} 
//                                     <span style="color: ${coin.change_percent >= 0 ? 'green' : 'red'}">
//                                         ${coin.change_percent >= 0 ? '▲' : '▼'} ${Math.abs(coin.change_percent)}%
//                                     </span>
//                                 </span>
//                             </div>
//                             <div class="chart-placeholder">
//                                 <img src="${getShadeImage(coin.symbol)}" alt="${coin.symbol}-chart" />
//                             </div>
//                         </div>
//                     </div>
//                 `;
//                 cardSlider.append(card);
//             });

//             // Update BTC Details section
//             if (data.btc_details) {
//                 $('.btc-info h2 .price-info').text(`¥ ${formatNumber(data.btc_details.price_jpy)}`);
//             }

//             // Update Market Cap table
//             const marketCapBody = $('.marketcap-table tbody');
//             marketCapBody.empty();

//             data.market_cap.forEach(coin => {
//                 const row = `
//                     <tr>
//                         <td>${coin.symbol}</td>
//                         <td>¥ ${formatNumber(coin.price_jpy)}</td>
//                         <td style="color: ${coin.change_percent >= 0 ? 'green' : 'red'}">
//                             ${coin.change_percent >= 0 ? '▲' : '▼'} ${Math.abs(coin.change_percent)}%
//                         </td>
//                     </tr>
//                 `;
//                 marketCapBody.append(row);
//             });

//             // Update Latest Activities table
//             const activitiesBody = $('.activity-table tbody');
//             activitiesBody.empty();

//             data.latest_activities.forEach(activity => {
//                 const row = `
//                     <tr>
//                         <td>${activity.date}</td>
//                         <td>${activity.description}</td>
//                         <td style="color: ${activity.amount.startsWith('+') ? 'green' : 'red'}">${activity.amount}</td>
//                     </tr>
//                 `;
//                 activitiesBody.append(row);
//             });
//         },
//         error: function(xhr, status, error) {
//             console.error('Error loading data:', error);
//             $('.card-slider').html('<p>Error loading market data</p>');
//         }
//     });

//     // Refresh data every 60 seconds
//     setInterval(function() {
//         $.ajax({
//             url: 'data.json',
//             method: 'GET',
//             dataType: 'json'
//         });
//     }, 60000);
// });


// const personObj = {fName:'John',lName:'Max',age:26,

//     }

//     const{fName,lName,...rt}=personObj
//     console.log(fName)

// const array=[1,"Hi",true,[null,undefined]];
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
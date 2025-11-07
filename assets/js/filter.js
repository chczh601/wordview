let regions = [];
fetch("assets/data/regions.json")
  .then(r=>r.json())
  .then(json=>{
    regions = json;
    renderCards(regions);
    addMarkers(regions);
  });

const continentSel = document.getElementById("continentFilter");
const climateSel = document.getElementById("climateFilter");

function getSelected(select){
  return Array.from(select.selectedOptions).map(o=>o.value);
}
function filter(){
  const cont = getSelected(continentSel);
  const clim = getSelected(climateSel);
  const filtered = regions.filter(r=>{
    const c1 = cont.length ? cont.includes(r.continent) : true;
    const c2 = clim.length ? clim.includes(r.climate) : true;
    return c1 && c2;
  });
  renderCards(filtered);
  addMarkers(filtered);
}
continentSel.addEventListener("change", filter);
climateSel.addEventListener("change", filter);

function renderCards(data){
  const container = document.getElementById("cards");
  container.innerHTML = "";
  data.forEach(r=>{
    const card = document.createElement("div");
    card.className = "card";
    card.id = "card-"+r.id;
    card.innerHTML = `
      <img src="${r.img}" loading="lazy">
      <div class="card-body">
        <h3>${r.name[LANG]}</h3>
        <div class="tags">
          <span class="tag">${i18n[LANG][r.continent]}</span>
          <span class="tag">${i18n[LANG][r.climate]}</span>
        </div>
        <p class="desc">${r.desc[LANG]}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

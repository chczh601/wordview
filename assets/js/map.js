// 初始化 Leaflet 地图
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let markerGroup = L.layerGroup().addTo(map);

function addMarkers(data){
  markerGroup.clearLayers();
  data.forEach(d=>{
    const marker = L.marker([d.lat, d.lng]).addTo(markerGroup);
    marker.bindPopup(`
      <div style="width:200px">
        <img src="${d.img}" style="width:100%;height:auto;border-radius:6px">
        <strong>${d.name[LANG]}</strong><br>
        <span>${d.desc[LANG]}</span><br>
        <a href="#card-${d.id}" style="color:#2a76dd">查看详情 →</a>
      </div>
    `);
  });
}

const i18n = {
  zh:{
    title:"世界人文风情",
    asia:"亚洲", europe:"欧洲", africa:"非洲", oceania:"大洋洲",
    namerica:"北美洲", samerica:"南美洲",
    tropical:"热带", temperate:"温带", cold:"寒带", arid:"干旱"
  },
  en:{
    title:"World Culture & Landscape",
    asia:"Asia", europe:"Europe", africa:"Africa", oceania:"Oceania",
    namerica:"North America", samerica:"South America",
    tropical:"Tropical", temperate:"Temperate", cold:"Cold", arid:"Arid"
  }
};
let LANG = "zh";

function applyLang(l){
  LANG = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(i18n[l][key]) el.textContent = i18n[l][key];
  });
}
document.getElementById("langSwitch").addEventListener("change", e=>applyLang(e.target.value));
// 初始化
applyLang(LANG);

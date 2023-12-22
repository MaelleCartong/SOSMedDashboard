(function(){var e={8867:function(e,t,i){"use strict";i.d(t,{m:function(){return L},h:function(){return I}});i(7658);var a=i(2482),r=i(4437);const s="https://sheets.googleapis.com/v4/spreadsheets/1opF61Qq2DgrJIP-kQD5-KHzC4xZkp2u_zqigTGk3V0I/values/Data_operations?key=AIzaSyAmVlX2yvPjwWulb1RcZ2mDQhanJ8mF5HI";var n;(function(e){e["rescue"]="Rescue",e["transfer"]="Transfer"})(n||(n={}));class o{constructor(){(0,a.Z)(this,"date",new Date),(0,a.Z)(this,"typeOps",n.rescue),(0,a.Z)(this,"nbOps",NaN),(0,a.Z)(this,"nbSurvivor",NaN),(0,a.Z)(this,"male",NaN),(0,a.Z)(this,"female",NaN),(0,a.Z)(this,"under18",NaN),(0,a.Z)(this,"under18unacc",NaN),(0,a.Z)(this,"under5",NaN),(0,a.Z)(this,"pregnantWomen",NaN),(0,a.Z)(this,"latitude",NaN),(0,a.Z)(this,"longitude",NaN),(0,a.Z)(this,"windForce",NaN),(0,a.Z)(this,"waveHeight",NaN),(0,a.Z)(this,"boatType",""),(0,a.Z)(this,"nbNationalities",""),(0,a.Z)(this,"transfertType",""),(0,a.Z)(this,"imageSrc",[]),(0,a.Z)(this,"videoSrc",[]),(0,a.Z)(this,"portDisembarkation","")}}const p=function(e){const t=e.split("/");return new Date(parseInt(t[2]),parseInt(t[1])-1,parseInt(t[0]))},l=async function(){const e=await(await fetch(s)).json(),t=e.values.splice(0,1)[0].map((e=>{let t;while(null!==(t=/_([a-zA-Z\d])/g.exec(e)))e=e.replace(t[0],t[1].toLocaleUpperCase());return e}));return e.values.map(((e,i)=>{const a={};return t.forEach(((t,i)=>{a[t]=e[i]})),c(a,`line ${i}`)}))},c=function(e,t){const i=new o;i.date=p(e.date),i.typeOps=e.typeOps,i.nbOps=parseInt(e.nbOps),i.nbSurvivor=parseInt(e.nbSurvivor),i.male=parseInt(e.male),i.female=parseInt(e.female),i.under18=parseInt(e.under18),i.under18unacc=parseInt(e.under18Unacc),i.under5=parseInt(e.under5),i.pregnantWomen=parseInt(e.pregnantWomen);const a=e.latitude.concat(", ").concat(e.longitude);try{const e=(0,r.O)(a);i.latitude=e.decimalLatitude,i.longitude=e.decimalLongitude}catch{console.error(`Invalid coordinates ${a} for operation ${t}`)}return i.windForce=parseInt(e.windForce),i.waveHeight=parseInt(e.waveHeight),i.boatType=e.boatType,i.nbNationalities=e.typeNationalities,i.transfertType=e.transfertType,i.imageSrc=e.imageSrc?e.imageSrc.split(";"):[],i.videoSrc=e.videoSrv?e.videoSrv.split(";"):[],i.portDisembarkation=e.PortDisembarkation,i},d=function(e){return isNaN(e)?"0":e.toString()},u=function(e,t){const i=document.getElementById(e);i&&(i.innerText=t)},h=function(e){u("popUpTypeOps",e.typeOps),u("popUpDate",new Date(e.date).toDateString()),u("popUpBoatType",e.boatType),u("popUpPort",e.portDisembarkation),u("popUpNbSurvivor",d(e.nbSurvivor)),u("popUpFemale",d(e.female)),u("popUpMale",d(e.male)),u("popUpMinor",d(e.under18)),u("popUpPregnant",d(e.pregnantWomen)),u("popUpUnaccompagnied",d(e.under18unacc)),u("popUpChildren",d(e.under5)),u("popUpNationalities",d(e.nbNationalities?e.nbNationalities.split(";").length:0)),u("popUpWind",d(e.windForce)),u("popUpWave",d(e.waveHeight)),u("popUpLat",d(e.latitude)),u("popUpLon",d(e.longitude))},m=function(e){L.updatePopUpVisibility(),h(e),L.setVideoAndPicturePopUpVisibility(e.imageSrc.length>0||e.videoSrc.length>0),L.setPopUpVideoUrls(e.videoSrc),L.setPopUpImageUrls(e.imageSrc)},g=function(e,t,i){u("statsMinDate",b(e)),u("statsMaxDate",b(t));let a=0,r=0,s=0,n=0,o=0,p=0,l=0,c=0;const h=I.allData.map((e=>e.nbOps)).reduce(((e,t)=>e+t),0);let m=0;const g=I.allData.filter((e=>e.nbSurvivor)).map((e=>e.nbSurvivor)).reduce(((e,t)=>e+t),0),f=[];for(const d of i)a=d.nbSurvivor?a+d.nbSurvivor:a,r=d.female?r+d.female:r,s=d.male?s+d.male:s,n=d.under18?n+d.under18:n,o=d.pregnantWomen?o+d.pregnantWomen:o,p=d.under18unacc?p+d.under18unacc:p,l=d.under5?l+d.under5:l,d.nbNationalities&&f.push(d.nbNationalities.split(";")),m+=d.nbOps;c=[...new Set(f.flat())].length,u("statsNbSurvivor",d(a)),u("statsFemale",d(r)),u("statsMale",d(s)),u("statsMinor",d(n)),u("statsPregnant",d(o)),u("statsUnaccompagnied",d(p)),u("statsChildren",d(l)),u("statsNationalities",d(c)),u("statsOps3",d(m)),u("statsNbOperations",d(h)),u("statsNbOperationsMobile",d(h)),u("statsNbPeopleAssisted",d(g)),u("statsNbPeopleAssistedMobile",d(g)),u("statsMinDate2",b(e)),u("statsMaxDate2",b(t)),u("statsNbSurvivor2",d(a)),u("statsOps2",d(m))};function b(e){const t=e.getFullYear(),i=(1+e.getMonth()).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return i+"/"+a+"/"+t}var f=i(7108),v=i(2262);class y{constructor(e,t,i,r){(0,a.Z)(this,"_className",void 0),(0,a.Z)(this,"_title",void 0),(0,a.Z)(this,"_eventHandler",void 0),(0,a.Z)(this,"_innerHTML",void 0),(0,a.Z)(this,"_btn",void 0),(0,a.Z)(this,"_container",void 0),this._className=e,this._title=t,this._eventHandler=i,this._innerHTML=r}onAdd(){return this._btn=document.createElement("button"),this._btn.className="mapboxgl-ctrl-icon "+this._className,this._btn.type="button",this._btn.title=this._title,this._btn.onclick=this._eventHandler,this._btn.innerHTML=this._innerHTML,this._container=document.createElement("div"),this._container.className="mapboxgl-ctrl-group mapboxgl-ctrl",this._container.appendChild(this._btn),this._container}onRemove(){this._container.parentNode&&this._container.parentNode.removeChild(this._container)}}var S=i(6158);i(1703);class _{constructor(){(0,a.Z)(this,"map",void 0),(0,a.Z)(this,"container",void 0),this.container=document.createElement("div")}onAdd(e){this.map=e,this.container.className="BaseMapPicker";const t=document.createElement("div");t.className="mapboxgl-ctrl-group mapboxgl-ctrl";const i=document.createElement("button");i.className="mapboxgl-ctrl-icon mapbox-gl-change_layer icon icon-layers BaseMapPicker__btn",i.onclick=()=>{_.toggleDropDownButtonVisibility()},t.append(i);const a=document.createElement("div");a.id="BaseMapPicker__dropdownItem",a.className="BaseMapPicker__dropdownContent";for(const r of D){const e=document.createElement("div");e.className="mapboxgl-ctrl-group mapboxgl-ctrl BaseMapPicker__itemBtnGrp";const t=document.createElement("button");t.className="mapboxgl-ctrl-icon BaseMapPicker__btn",t.style.backgroundImage=`url(${r.img})`,t.onclick=()=>{_.toggleDropDownButtonVisibility(),I.updateBasemap(r.id)},e.append(t),a.appendChild(e)}return this.container.append(t,a),_.hideOnClickOutside(this.container),this.container}onRemove(){this.container?.parentNode?.removeChild(this.container),this.map=void 0}static toggleDropDownButtonVisibility(){const e=document.getElementById("BaseMapPicker__dropdownItem");if(!e)throw new Error("Could not find base map picker");e.classList.toggle("BaseMapPicker__show")}static hideOnClickOutside(e){const t=t=>{const i=document.getElementById("BaseMapPicker__dropdownItem");!e.contains(t.target)&&_.isVisible(e)&&i&&i.classList.contains("BaseMapPicker__show")&&_.toggleDropDownButtonVisibility()};document.addEventListener("click",t)}static isVisible(e){return!!e&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}}function w(e){const t={type:"FeatureCollection",features:[]};return e.map((e=>{0===e.imageSrc.length&&(e.imageSrc=""),0===e.videoSrc.length&&(e.videoSrc=""),e.imageSrc.length>0&&"string"!==typeof e.imageSrc&&(e.imageSrc=e.imageSrc.join()),e.videoSrc.length>0&&"string"!==typeof e.videoSrc&&(e.videoSrc=e.videoSrc.join()),isNaN(e.latitude)&&isNaN(e.longitude)||t.features.push({type:"Feature",properties:{...e},geometry:{coordinates:[e.longitude,e.latitude],type:"Point"}})})),t}const D=[{id:0,name:"SOS Mediterranee",img:"/basemaps-icons/sosmed.png",style:"mapbox://styles/sosmediterranee/ckkdvswwr0ol117t7d91p7wac"},{id:1,name:"Satellite Imagery",img:"/basemaps-icons/satellite.png",style:"mapbox://styles/mapbox/satellite-v9"},{id:2,name:"Dark",img:"/basemaps-icons/dark.png",style:"mapbox://styles/mapbox/dark-v10"}];let N;class O{constructor(){(0,a.Z)(this,"operationsData",void 0),(0,a.Z)(this,"filteredOperationsData",void 0),(0,a.Z)(this,"map",void 0),(0,a.Z)(this,"defaultExtent",void 0),(0,a.Z)(this,"harborMarkers",[]),(0,a.Z)(this,"sar",void 0),(0,a.Z)(this,"sarCenters",void 0),(0,a.Z)(this,"currentBasemap",0)}init(){this.map=new S.Map({accessToken:"pk.eyJ1Ijoid2VzbGV5YmFuZmllbGQiLCJhIjoiY2pmMDRwb202MGlzNDJ3bm44cHA3YXZiNCJ9.b2yOf2vbWnWiV7mlsFAywg",container:"mapContainer",style:D[this.currentBasemap].style,center:[9,35],zoom:4}),N=this.map,this.defaultExtent=this.map.getBounds();const e=new S.NavigationControl({showCompass:!1,showZoom:!0});this.map.addControl(e);const t=new y("mapbox-gl-change_layer icon icon-view","Reset view",this.resetView.bind(this),"");this.map.addControl(t,"top-right");const i=new _;this.map.addControl(i,"top-right")}setCurrentBasemap(e){this.currentBasemap=e,this.map.setStyle(D[this.currentBasemap].style),this.map.once("render",(()=>{this.createOperationLayer(this.filteredOperationsData),this.createSarRegions(this.sar,this.sarCenters)}))}createMarkers(e,t){this.createHarborsMarkers(e),this.createOperationLayer(t)}createOperationLayer(e){this.map.getLayer("Operation")&&this.map.removeLayer("Operation"),this.map.getSource("operations")&&this.map.removeSource("operations"),this.operationsData=e,this.filteredOperationsData=[...e],this.map.addSource("operations",{type:"geojson",data:w(e.filter((e=>!isNaN(e.longitude)&&!isNaN(e.latitude))))}),this.addOperationLayer()}addOperationLayer(){this.map.getLayer("Operation")&&this.map.removeLayer("Operation"),this.map.off("mouseenter","Operation",this.setMapCursorPointer),this.map.off("mouseleave","Operation",this.removeMapCursorPointer),this.map.off("click","Operation",this.catchClickOnOperation),this.map.addLayer({id:"Operation",type:"circle",source:"operations",paint:{"circle-radius":["step",["zoom"],3,6,5,7.5,8,9,10],"circle-color":["match",["get","typeOps"],"Rescue","#F03E1B","Transfer","#9CA3AF","#000"]}}),this.map.on("mouseenter","Operation",this.setMapCursorPointer),this.map.on("mouseleave","Operation",this.removeMapCursorPointer),this.map.on("click","Operation",this.catchClickOnOperation)}updateOperationsLayer(e,t){t&&(this.operationsData=t),this.filteredOperationsData=[...this.operationsData],e.rescue||(this.filteredOperationsData=this.filteredOperationsData.filter((e=>"Rescue"!==e.typeOps))),e.transfer||(this.filteredOperationsData=this.filteredOperationsData.filter((e=>"Transfer"!==e.typeOps))),this.map.getSource("operations").setData(w(this.filteredOperationsData))}setMapCursorPointer(){N.getCanvas().style.cursor="pointer"}removeMapCursorPointer(){N.getCanvas().style.cursor=""}catchClickOnOperation(e){m(N.queryRenderedFeatures(e.point)[0].properties)}createHarborsMarkers(e){e.features.forEach((e=>{const t=new S.Popup({closeButton:!1}).setHTML("<span class='text-lg'>"+e.properties?.name+"</span>");this.harborMarkers.push(this.createMarker("icon icon-anchor-o",e.geometry.coordinates[1],e.geometry.coordinates[0]).setPopup(t))}))}createMarker(e,t,i,a){const r=document.createElement("div");return r.className=`marker ${e}`,a&&r.addEventListener("click",(()=>{a()})),new S.Marker(r).setLngLat([t,i])}createSarRegions(e,t){this.sar=e,this.sarCenters=t,this.map.addSource("sar",e),this.map.addSource("sarCenters",t),this.displaySarRegions()}resetView(){this.map.fitBounds(this.defaultExtent)}destroy(){this.map.remove()}displayMarkers(e,t,i){switch(e){case"harbor":this.displayHarbors();break;case"srr":this.displaySarRegions();break}}displayHarbors(){this.harborMarkers.forEach((e=>e.addTo(this.map)))}displaySarRegions(){this.map.addLayer({id:O.SAR_LAYER_ID,type:"line",source:"sar",layout:{},paint:{"line-color":"#999999","line-width":1,"line-dasharray":[1,2]}}),this.map.addLayer({id:O.SAR_NAME_LAYER_ID,type:"symbol",source:"sarCenters",layout:{"symbol-placement":"point","text-font":["Open Sans Regular"],"text-field":"{Nom}","text-size":10}})}hideMarkers(e){switch(e){case"harbor":this.hideHarbors();break;case"srr":this.hideSarRegions();break}}hideHarbors(){this.harborMarkers.forEach(O.remove)}hideSarRegions(){this.map.removeLayer(O.SAR_LAYER_ID),this.map.removeLayer(O.SAR_NAME_LAYER_ID)}static remove(e){e.remove()}}(0,a.Z)(O,"SAR_LAYER_ID","sar"),(0,a.Z)(O,"SAR_NAME_LAYER_ID","sar-name");var M=i(1839),k=i(8398),C=i(8776),R=i(1572),V=i(3838),x=i(4074),P=i(5623);const Z=function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})};class U{constructor(){(0,a.Z)(this,"histColor",P.w.BLUE),(0,a.Z)(this,"holderColor",P.w.GRAY),(0,a.Z)(this,"transitionDuration",80),(0,a.Z)(this,"barHeight",50),(0,a.Z)(this,"barWidth",6),(0,a.Z)(this,"id","vue-histogram"),(0,a.Z)(this,"ionRangeSlider",void 0),(0,a.Z)(this,"min",new Date(2016,1,1).valueOf()),(0,a.Z)(this,"max",new Date(2020,12,31).valueOf()),(0,a.Z)(this,"x",M.Z().clamp(!0)),(0,a.Z)(this,"y",M.Z().range([this.barHeight,0])),(0,a.Z)(this,"hist",void 0),(0,a.Z)(this,"width",300)}setWidth(e){this.width=e-20,this.x.range([0,this.width])}updateBarColor(e){const t=x.eR().duration(this.transitionDuration);x.eR(t).selectAll(`.vue-histogram-slider-bar-${this.id}`).attr("fill",(t=>t.x0<=e.to&&t.x0>=e.from?this.histColor:this.holderColor))}display(e,t,i){this.min=e||k.Z(i),this.max=t||C.Z(i),this.x.domain([this.min,this.max]);const a=V.Z(`#${this.id}`).attr("height",this.barHeight);this.hist=a.append("g").attr("class","histogram")}updateHistogram(e,t){const a=i(9755),r=x.eR().duration(this.transitionDuration);if(void 0===this.hist)return;this.hist.selectAll(`.vue-histogram-slider-bar-${this.id}`).remove();const s=R.Z().domain(this.x.domain()).thresholds(this.width/(this.barWidth+5));let n;n=s(e||[]),this.y.domain([0,C.Z(n,(e=>e.length))]),this.hist.selectAll(`.vue-histogram-slider-bar-${this.id}`).data(n).enter().insert("rect","rect.overlay").attr("class",`vue-histogram-slider-bar-${this.id}`).attr("x",(e=>this.x(e.x0))).attr("y",(e=>this.y(e.length))).attr("rx",4).attr("width",this.barWidth).transition(r).attr("height",(e=>this.barHeight-this.y(e.length))).attr("fill",(e=>this.histColor)),this.ionRangeSlider&&this.ionRangeSlider.destroy();const o=a("#histogram-slider").ionRangeSlider({skin:"round",min:this.min,max:this.max,from:this.min,to:this.max,type:"double",grid:!0,step:1,from_fixed:!1,to_fixed:!1,hide_min_max:!0,hide_from_to:!1,force_edges:!1,drag_interval:!0,grid_num:5,block:!1,keyboard:!0,prettify:Z,onChange:e=>{t.filterData(e.from,e.to),this.updateBarColor(e)}});this.ionRangeSlider=o.data("ionRangeSlider"),setTimeout((()=>{this.ionRangeSlider&&this.updateBarColor(this.ionRangeSlider.result)}),this.transitionDuration+10)}updateSlider(e,t){this.ionRangeSlider.options.from=e,this.ionRangeSlider.options.to=t,this.ionRangeSlider.updateResult(),this.ionRangeSlider.update(this.ionRangeSlider.options)}}const A={harbor:{icon:!0,"icon-anchor-o":!0,"text-black":!0,"text-xs":!0},rescue:{"bg-secondary":!0},srr:{"text-grayClose":!0,"legend-srr":!0},transfer:{"bg-gray-400":!0}},L=(0,v.qj)({_isMenuVisible:!1,updateMenuVisibility(){this._isMenuVisible=!this._isMenuVisible},get isMenuVisible(){return this._isMenuVisible},_isPopUpVisible:!1,updatePopUpVisibility(){this._isPopUpVisible=!this._isPopUpVisible},get isPopUpVisible(){return this._isPopUpVisible},_isVideoAndPicturePopUpVisible:!1,setVideoAndPicturePopUpVisibility(e){this._isVideoAndPicturePopUpVisible=e},get isVideoAndPicturePopUpVisible(){return this._isVideoAndPicturePopUpVisible},_popUpVideoUrls:[""],setPopUpVideoUrls(e){this._popUpVideoUrls=e.split(",")},get popUpVideoUrls(){return this._popUpVideoUrls},_popUpImageUrls:[""],setPopUpImageUrls(e){this._popUpImageUrls=e.split(",")},get popUpImageUrls(){return this._popUpImageUrls},_virtualVisitVisibility:!1,switchVirtualVisitVisibility(){this._virtualVisitVisibility=!this._virtualVisitVisibility,this.updateVirtualVisitAlreadyOpened()},get virtualVisitVisibility(){return this._virtualVisitVisibility},_virtualVisitAlreadyOpened:!1,updateVirtualVisitAlreadyOpened(){this._virtualVisitAlreadyOpened=!0},get virtualVisitAlreadyOpened(){return this._virtualVisitAlreadyOpened}}),I={allData:[],harbors:{},sar:{},sarCenters:{},state:new f.Z,baseMap:new O,histogramSlider:new U,filterData(e,t){this.state.minDate=new Date(e),this.state.maxDate=new Date(t);for(const a in f.M)a!==f.M.srr&&this.updateMap(a,this.state.switch[a]);const i=this.allData.filter((e=>this.state.minDate<=e.date&&e.date<=this.state.maxDate));this.baseMap.updateOperationsLayer(this.state.switch,i),this.updateStats(i)},async initStore(){this.harbors=await this.getHarbors(),this.sar=i(2428),this.sarCenters=i(9853),this.allData=await l(),this.updateHistogramSlider(),this.baseMap.createMarkers(this.harbors,this.allData),this.baseMap.createSarRegions(this.sar,this.sarCenters),this.filterData(this.state.minDate,this.state.maxDate)},displayMap(){this.baseMap.init()},updateBasemap(e){this.baseMap.setCurrentBasemap(e)},updateMap(e,t){this.baseMap.updateOperationsLayer(this.state.switch),t?this.baseMap.displayMarkers(e,this.state.minDate,this.state.maxDate):this.baseMap.hideMarkers(e)},destroyMap(){this.baseMap.destroy()},displayHistogramSlider(e,t,i){this.histogramSlider.display(e,t,i)},setWidthHistogramSlider(e){this.histogramSlider.setWidth(e)},updateHistogramSlider(){this.histogramSlider.updateHistogram(this.allData.map((e=>e.date.getTime())),this)},updateHistogramSliderFromTo(){this.histogramSlider.updateSlider(this.state.minDate.valueOf(),this.state.maxDate.valueOf()),this.updateHistogramSlider()},updateStats(e){g(this.state.minDate,this.state.maxDate,e)},toggleSwitch(e){this.state.switch[e]=!this.state.switch[e],this.updateMap(e,this.state.switch[e])},getCssClass(e){return A[e]},async getHarbors(){const e="https://sheets.googleapis.com/v4/spreadsheets/1opF61Qq2DgrJIP-kQD5-KHzC4xZkp2u_zqigTGk3V0I/values/Data_ports?key=AIzaSyAmVlX2yvPjwWulb1RcZ2mDQhanJ8mF5HI",t=await(await fetch(e)).json();t.values.shift();const i={type:"FeatureCollection",features:[]};return t.values.map((e=>{const t=e[1]+" "+e[2];try{const a=(0,r.O)(t);i.features.push({type:"Feature",properties:{name:e[0]},geometry:{coordinates:[a.decimalLatitude,a.decimalLongitude],type:"Point"}})}catch(a){}})),Promise.resolve(i)}}},7108:function(e,t,i){"use strict";i.d(t,{M:function(){return a},Z:function(){return s}});var a,r=i(2482);(function(e){e["harbor"]="harbor",e["rescue"]="rescue",e["srr"]="srr",e["transfer"]="transfer"})(a||(a={}));class s{constructor(){(0,r.Z)(this,"minDate",new Date(2016,0,1)),(0,r.Z)(this,"maxDate",new Date),(0,r.Z)(this,"switch",{rescue:!0,transfer:!0,harbor:!0,srr:!0})}}},8981:function(e,t,i){"use strict";var a=i(9963),r=i(6252);const s={class:"flex flex-col h-screen overflow-hidden"},n={class:"absolute bottom-0 flex flex-col w-full items-center bg-white md:static md:block"};function o(e,t,i,a,o,p){const l=(0,r.up)("AppHeader"),c=(0,r.up)("KeyNumbersMobile"),d=(0,r.up)("BaseMap"),u=(0,r.up)("PopUp"),h=(0,r.up)("Stats"),m=(0,r.up)("KeyNumbers"),g=(0,r.up)("HistogramSlider"),b=(0,r.up)("AppLegend"),f=(0,r.up)("VirtualVisit");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",s,[(0,r.Wm)(l),(0,r.Wm)(c),(0,r.Wm)(d)]),(0,r.Wm)(u),(0,r._)("div",n,[(0,r.Wm)(h),(0,r.Wm)(m),(0,r.Wm)(g)]),(0,r.Wm)(b),e.reactiveStore.virtualVisitAlreadyOpened?((0,r.wg)(),(0,r.j4)(f,{key:0})):(0,r.kq)("",!0)],64)}var p=i(8867),l=(0,r.aZ)({components:{AppHeader:(0,r.RC)((()=>i.e(940).then(i.bind(i,2940)))),AppLegend:(0,r.RC)((()=>i.e(710).then(i.bind(i,3710)))),BaseMap:(0,r.RC)((()=>i.e(991).then(i.bind(i,2991)))),HistogramSlider:(0,r.RC)((()=>i.e(789).then(i.bind(i,4789)))),KeyNumbers:(0,r.RC)((()=>i.e(650).then(i.bind(i,9650)))),KeyNumbersMobile:(0,r.RC)((()=>i.e(435).then(i.bind(i,2435)))),PopUp:(0,r.RC)((()=>i.e(439).then(i.bind(i,6439)))),Stats:(0,r.RC)((()=>i.e(613).then(i.bind(i,9613)))),VirtualVisit:(0,r.RC)((()=>i.e(128).then(i.bind(i,4128))))},setup(){return(0,r.bv)((()=>{p.h.initStore()})),{reactiveStore:p.m}}}),c=i(3744);const d=(0,c.Z)(l,[["render",o]]);var u=d,h=i(9150);function m(){const e=i(8973),t={};return e.keys().forEach((i=>{const a=i.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const r=a[1];t[r]=e(i)}})),t}const g=(0,h.o)({locale:navigator.language.split("-")[0],fallbackLocale:"en",messages:m()});(0,a.ri)(u).use(g).mount("#app")},5623:function(e,t,i){"use strict";i.d(t,{w:function(){return a}});const a={BLUE:"#1a2747",GRAY:"#999999",ORANGE:"#f03e1b"}},8973:function(e,t,i){var a={"./en.json":790,"./fr.json":844};function r(e){var t=s(e);return i(t)}function s(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=8973},2428:function(e){"use strict";e.exports=JSON.parse('{"type":"geojson","data":{"type":"FeatureCollection","name":"Search_and_Rescue_Regions","features":[{"type":"Feature","properties":{"FID":3,"Nom":"SRR Malta"},"geometry":{"type":"MultiLineString","coordinates":[[[11.5,36.5],[19,36.5],[23.5833,34.3333],[11.5,34.3333],[11.5,36.5]]]}},{"type":"Feature","properties":{"FID":1,"Nom":"SRR Italy"},"geometry":{"type":"MultiLineString","coordinates":[[[13.7233,45.595],[13.7133,45.5983],[13.63,45.63],[13.3133,45.545],[13.2117,45.4533],[13.2117,45.455],[13,45.1633],[13.135,44.7517],[13.2317,44.5333],[13.4683,44.3017],[14.5,43.4983],[14.76,43.2883],[15.27,42.9217],[15.5517,42.7683],[15.725,42.675],[16.0233,42.5183],[16.5533,42.25],[18,41.57],[18.15,41.5],[18.325,41.3917],[19,40.4167],[19,36],[16,36],[14.1333,36.5],[12.6667,35.25],[12.2333,35.25],[11.5,36.5],[11.5,37.5],[10.35,38],[9.0833,38.5333],[7.7333,38.5333],[7.7333,41.3333],[9.75,41.3333],[9.75,42.0833],[9.75,43.1667],[9.5,43.5],[7.7,43.5],[7.53,43.785]]]}},{"type":"Feature","properties":{"FID":2,"Nom":"SRR Libya"},"geometry":{"type":"MultiLineString","coordinates":[[[11.5,32.3667],[11.5,34.3333],[23.5833,34.3333],[24.1667,34],[25.1667,31.6667]]]}}]}}')},9853:function(e){"use strict";e.exports=JSON.parse('{"type":"geojson","data":{"type":"FeatureCollection","name":"Search_and_Rescue_Regions_Centers","features":[{"type":"Feature","properties":{"FID":3,"Nom":"SRR Malta"},"geometry":{"type":"Point","coordinates":[16.9,35.6]}},{"type":"Feature","properties":{"FID":1,"Nom":"SRR Italy"},"geometry":{"type":"Point","coordinates":[12.2,40.2]}},{"type":"Feature","properties":{"FID":2,"Nom":"SRR Libya"},"geometry":{"type":"Point","coordinates":[17.8,33.8]}}]}}')},790:function(e){"use strict";e.exports=JSON.parse('{"header":{"sos":"SOS","mediterranee":"Mediterranee","title":"Interactive map","subtitle":"History of rescue operations in the Mediterranean","glossary":"Glossary","logBook":"Logbook","donate":{"title":"Save lives","subtitle":"Now","button":"I donnate","button2":"Make a donation"}},"contributors":{"contrib":"Contributors","volunteers":"CartONG volunteers and staff","dev":"Developers","others":"Others"},"legend":{"title":"View","rescue":"Rescue","transfer":"Transfer","srr":"Search & rescue region","harbor":"Ports"},"stats":{"females":"Women","males":"Men","minors":"Minor","pregnants":"Pregnant","unaccompanied":"Unaccompanied","children":"Children","nationalities":"Nationalities","peoples":"Survivors","opDays":"Days of operation","rescueNb":"Rescue Operations","since":"Since"},"popup":{"wind":"Wind","windUnit":"knots","waves":"Wave height","boat":"Boat in distress","port":"Disembarkation port","videosAndPictures":"Pictures and videos","dateFilter":"Date of filtering"}}')},844:function(e){"use strict";e.exports=JSON.parse('{"header":{"sos":"SOS","mediterranee":"Mediterranee","title":"Carte interactive","subtitle":"Historique des opérations de secours en Méditerranée","glossary":"Glossaire","logBook":"Journal de bord","donate":{"title":"Sauver des vies","subtitle":"Maintenant","button":"Je donne","button2":"Faire un don"}},"contributors":{"contrib":"Contributeurs","volunteers":"Volontaires & Staff de CartONG","dev":"Développeurs","others":"Autres"},"legend":{"harbor":"Ports","rescue":"Sauvetage","srr":"Région de recherche & sauvetage","title":"Vue","transfer":"Transfert"},"stats":{"females":"Femmes","males":"Hommes","minors":"Mineurs","pregnants":"Enceintes","unaccompanied":"Isolés","children":"Enfants","nationalities":"Nationalités","peoples":"Personnes rescapées","opDays":"Jours d\'opérations","rescueNb":"Opérations de sauvetage","since":"Depuis"},"popup":{"wind":"Vent","windUnit":"noeuds","waves":"Hauteur des vagues","boat":"Bateau en détresse","port":"Port de débarquement","videosAndPictures":"Images et vidéos","dateFilter":"Date de filtrage"}}')}},t={};function i(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){i.amdO={}}(),function(){var e=[];i.O=function(t,a,r,s){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var o=!0,p=0;p<a.length;p++)(!1&s||n>=s)&&Object.keys(i.O).every((function(e){return i.O[e](a[p])}))?a.splice(p--,1):(o=!1,s<n&&(n=s));if(o){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,a){return i.f[a](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{128:"2d99b00a",203:"73d95258",326:"3a651b27",435:"feb86403",439:"748fa165",576:"5b657bed",613:"8cd2e0b5",650:"9d84c3d0",710:"439a6fe1",789:"c8196493",931:"57e4d18a",940:"031f5234",977:"f182f2aa",991:"b4779b0b"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+e+"."+{128:"151a2c02",203:"86cc1c80",326:"95541c7b",439:"c9ed0e80",576:"be232f83",613:"6a33506b",650:"337e3e3e",789:"de4e036d",931:"326f4174",940:"75933b9e",977:"0807cf30"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sos-mediterranee-dashboard:";i.l=function(a,r,s,n){if(e[a])e[a].push(r);else{var o,p;if(void 0!==s)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+s){o=d;break}}o||(p=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",t+s),o.src=a),e[a]=[r];var u=function(t,i){o.onerror=o.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(i)})),t)return t(i)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),p&&document.head.appendChild(o)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,i,a,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=function(i){if(s.onerror=s.onload=null,"load"===i.type)a();else{var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||t,p=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");p.code="CSS_CHUNK_LOAD_FAILED",p.type=n,p.request=o,s.parentNode&&s.parentNode.removeChild(s),r(p)}};return s.onerror=s.onload=n,s.href=t,i?i.parentNode.insertBefore(s,i.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var r=i[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){r=n[a],s=r.getAttribute("data-href");if(s===e||s===t)return r}},a=function(a){return new Promise((function(r,s){var n=i.miniCssF(a),o=i.p+n;if(t(n,o))return r();e(a,o,null,r,s)}))},r={143:0};i.f.miniCss=function(e,t){var i={128:1,203:1,326:1,439:1,576:1,613:1,650:1,789:1,931:1,940:1,977:1};r[e]?t.push(r[e]):0!==r[e]&&i[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};i.f.j=function(t,a){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(i,a){r=e[t]=[i,a]}));a.push(r[2]=s);var n=i.p+i.u(t),o=new Error,p=function(a){if(i.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",o.name="ChunkLoadError",o.type=s,o.request=n,r[1](o)}};i.l(n,p,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,n=a[0],o=a[1],p=a[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(p)var c=p(i)}for(t&&t(a);l<n.length;l++)s=n[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},a=self["webpackChunksos_mediterranee_dashboard"]=self["webpackChunksos_mediterranee_dashboard"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(8981)}));a=i.O(a)})();
//# sourceMappingURL=app.09674d57.js.map
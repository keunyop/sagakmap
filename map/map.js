// var map = new naver.maps.Map('map', {
//     center: new naver.maps.LatLng(37.39234762613166, 127.13087848124754),
//     zoom: 11 // PC
//     // zoom: 13        // Mobile
// });

var infowindows = [];

for (var i = 0, ii = CHURCHS.length; i < ii; i++) {

    let marker = new naver.maps.Marker({
        position: CHURCHS[i].position,
        map: map,
    });

    marker.set('seq', i);

    marker.addListener('click', onClick);

    let infowindow = new naver.maps.InfoWindow({
        content: [
            '<div class="wrap">',
            '   <div class="info">',
            '       <div class="title">' + CHURCHS[i].name,
            '           <div class="close" onclick="closeOverlay(' + CHURCHS[i].id + ');" title="닫기"></div>',
            '       </div>',
            '       <div class="body">',
            '           <div class="img">',
            '               <img src="' + CHURCHS[i].img + '" width="73" height="70">',
            '           </div>',
            '           <div class="desc">',
            '               <div class="ellipsis">담임목사: ' + CHURCHS[i].pastor + '</div>',
            '               <div class="jibun ellipsis">' + CHURCHS[i].address + '</div>',
            '               <div onclick="openDetail(' + i + ');"><p class="link"><u>자세히보기</u></p></div>',
            '           </div>',
            '       </div>',
            '   </div>',
            '</div>'
        ].join(''),

        borderWidth: 0,
        disableAnchor: true,
        backgroundColor: 'transparent',

        pixelOffset: new naver.maps.Point(73, 33),
    });

    infowindows.push(infowindow);

    // 첫 로딩시 본당 open
    if (i == 0) {
        this.onClick(null, marker);
    }

    icon = null;
    marker = null;
    infowindow = null;
}

function onClick(e, m) {
    let marker = m ? m : e.overlay;
    let seq = marker.get('seq'),
        infowindow = infowindows[seq];

    moveMapCenter(marker.position);

    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
}

// 커스텀 오버레이를 닫기 위해 호출되는 함수
function closeOverlay(churchId) {
    let infowindow = infowindows[churchId - 1];
    infowindow.close();
}

function closeAllChurchInfo() {
    infowindows.forEach(infowindow => {
        infowindow.close();
    });
}

function openChurchInfo(churchId) {
    let marker = new naver.maps.Marker({
        position: CHURCHS[churchId - 1].position
    });

    moveMapCenter(marker.position);

    infowindows[churchId - 1].open(map, marker);
}

function moveMapCenter(position) {
    map.panTo(position);
}

function openDetail(id) {
    $("#detailModalLabel").text(CHURCHS[id].name);
    $("#detailModal").modal("show");
}
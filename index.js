const MARKER_IMG_URL = 'https://ssl.pstatic.net/static/maps/img/icons/sp_pins_spot_v3.png',
    MARKER_IMG_OVER_URL = 'https://ssl.pstatic.net/static/maps/img/icons/sp_pins_spot_v3_over.png';

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.39234762613166, 127.13087848124754),
    zoom: 16
});

var infowindows = [];

for (var i = 0, ii = CHURCHS.length; i < ii; i++) {
    let icon = {
        url: MARKER_IMG_URL,
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(i * 29, 0)
    },
        marker = new naver.maps.Marker({
            position: CHURCHS[i].position,
            map: map,
            icon: icon
        });

    marker.set('seq', i);

    marker.addListener('mouseover', onMouseOver);
    marker.addListener('mouseout', onMouseOut);
    marker.addListener('click', onClick);

    let infowindow = new naver.maps.InfoWindow({
        content: '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' + CHURCHS[i].name +
            '            <div class="close" onclick="closeOverlay(' + CHURCHS[i].id + ');" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="' + CHURCHS[i].img + '" width="73" height="70">' +
            '            </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">담임목사: ' + CHURCHS[i].pastor + '</div>' +
            '                <div class="jibun ellipsis">' + CHURCHS[i].address + '</div>' +
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">자세히보기</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        maxWidth: 300,
    });

    infowindows.push(infowindow);

    icon = null;
    marker = null;
    infowindow = null;
}

function onMouseOver(e) {
    let marker = e.overlay,
        seq = marker.get('seq');

    marker.setIcon({
        url: MARKER_IMG_OVER_URL,
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(seq * 29, 50)
    });
}

function onMouseOut(e) {
    let marker = e.overlay,
        seq = marker.get('seq');

    marker.setIcon({
        url: MARKER_IMG_URL,
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(seq * 29, 0)
    });
}

function onClick(e) {
    let marker = e.overlay,
        seq = marker.get('seq'),
        infowindow = infowindows[seq];

    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
}
const MARKER_IMG_URL = 'https://ssl.pstatic.net/static/maps/img/icons/sp_pins_spot_v3.png',
    MARKER_IMG_OVER_URL = 'https://ssl.pstatic.net/static/maps/img/icons/sp_pins_spot_v3_over.png';

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.39234762613166, 127.13087848124754),
    zoom: 16
});

var markerList = [];

for (var i = 0, ii = CHURCHS.length; i < ii; i++) {
    var icon = {
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

    markerList.push(marker);

    marker.addListener('mouseover', onMouseOver);
    marker.addListener('mouseout', onMouseOut);

    icon = null;
    marker = null;
}

function onMouseOver(e) {
    var marker = e.overlay,
        seq = marker.get('seq');

    marker.setIcon({
        url: MARKER_IMG_OVER_URL,
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(seq * 29, 50)
    });
}

function onMouseOut(e) {
    var marker = e.overlay,
        seq = marker.get('seq');

    marker.setIcon({
        url: MARKER_IMG_URL,
        size: new naver.maps.Size(24, 37),
        anchor: new naver.maps.Point(12, 37),
        origin: new naver.maps.Point(seq * 29, 0)
    });
}
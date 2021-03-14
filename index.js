var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.39234762613166, 127.13087848124754), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
    };

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption);


let churchs = [
    { x: 37.39234762613166, y: 127.13087848124754, name: '분당우리교회(송림)' },
    { x: 37.385095301113125, y: 127.11948028227279, name: '분당우리교회(드림센터)' }
];

churchs.forEach(church => {
    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(church.x, church.y);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">' + church.name + '</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position: markerPosition,
        content: iwContent
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
});
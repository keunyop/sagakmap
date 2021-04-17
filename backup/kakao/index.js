var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.39234762613166, 127.13087848124754), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
    };

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption);

var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

let markers = [];
let overlayMap = new Map();

CHURCHS.forEach(church => {
    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(church.x, church.y);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    var content = '<div class="wrap">' +
        '    <div class="info">' +
        '        <div class="title">' + church.name +
        '            <div class="close" onclick="closeOverlay(' + church.id + ');" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="' + church.img + '" width="73" height="70">' +
        '            </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">담임목사: ' + church.pastor + '</div>' +
        '                <div class="jibun ellipsis">' + church.address + '</div>' +
        '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">자세히보기</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()
    });

    if (church.id != 1) {
        overlay.setMap(null); // 처음 로딩시 안나오게
    }

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        overlay.setMap(map);
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    markers.push(marker);

    overlayMap.set(church.id, overlay);

});

// 클러스터러에 마커들을 추가
clusterer.addMarkers(markers);

// 커스텀 오버레이를 닫기 위해 호출되는 함수
function closeOverlay(churchId) {
    overlayMap.get(churchId).setMap(null);
}
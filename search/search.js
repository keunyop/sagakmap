// TODO: data/churchlist.js 의 데이터를 사용해야함.
const CHURCHS2 = [
    {
        id: 1,
        position: new naver.maps.LatLng(37.39234762613166, 127.13087848124754),
        name: '분당우리교회(송림본당)',
        img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210129_48%2F1611890671329AA2iU_GIF%2Funnamed.gif',
        pastor: '이찬수',
        address: '경기도 성남시 분당구 이매로 100 송림중고등학교 내 강당'
    },
    {
        id: 2,
        position: new naver.maps.LatLng(37.385095301113125, 127.11948028227279),
        name: '분당우리교회(드림센터)',
        img: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201912/24/8152a544-0640-4f25-8589-9b484b6d01ac.jpg',
        pastor: '이찬수',
        address: '경기도 성남시 분당구 황새울로 311번길 9'
    },
    {
        id: 3,
        position: new naver.maps.LatLng(37.616232324895606, 126.71553679454613),
        name: '1 교구',
        img: 'static/img/신종철.png',
        pastor: '신종철',
        address: '경기 서북부(김포시, 고양시, 파주시)'
    },
    {
        id: 4,
        position: new naver.maps.LatLng(37.532133640470555, 126.98027825016551),
        name: '2 교구',
        img: 'static/img/정광용.png',
        pastor: '정광용',
        address: '서울 1(마포구, 서대문구, 용산구, 은평구, 종로구, 중구)'
    },
    {
        id: 5,
        position: new naver.maps.LatLng(37.82452463915741, 127.44899770595332),
        name: '3 교구',
        img: 'static/img/김용신.png',
        pastor: '김용신',
        address: '서울 2 / 경기 북동부(동대문구, 성동구, 강북구, 광진구, 노원구, 도봉구, 성북구, 중랑구, 가평군, 구리시, 남양주시, 양주시, 의정부시)'
    },
    {
        id: 6,
        position: new naver.maps.LatLng(37.52244725446933, 126.90920397238646),
        name: '4 교구',
        img: 'static/img/김단일.png',
        pastor: '김단일',
        address: '서울 3(서초구, 동작구, 관악구, 강서구, 구로구, 금천구, 양천구, 영등포구)'
    },
    {
        id: 7,
        position: new naver.maps.LatLng(37.49731081920644, 127.06449696083372),
        name: '5 교구',
        img: 'static/img/유병휘.png',
        pastor: '유병휘',
        address: '서울 4(강남구)'
    },
    {
        id: 8,
        position: new naver.maps.LatLng(37.50465828900087, 127.11514233482994),
        name: '6 교구',
        img: 'static/img/김성진.png',
        pastor: '김성진',
        address: '서울 5(송파구, 강동구)'
    },
    {
        id: 9,
        position: new naver.maps.LatLng(37.50560426406749, 126.78740095393402),
        name: '7 교구',
        img: 'static/img/박삼열.png',
        pastor: '박삼열',
        address: '경기 서부(인천시, 부천시, 시흥시)'
    },
    {
        id: 10,
        position: new naver.maps.LatLng(37.32279769636419, 126.82401342108861),
        name: '8 교구',
        img: 'static/img/조정환.png',
        pastor: '조정환',
        address: '경기 중부(안양시, 과천시, 의왕시, 군포시, 광명시, 안산시)'
    },
    {
        id: 11,
        position: new naver.maps.LatLng(37.47747488065518, 127.14592965569439),
        name: '9 교구',
        img: 'static/img/장성민.png',
        pastor: '장성민',
        address: '위례(위례, 송파, 수정, 하남)'
    },
    {
        id: 12,
        position: new naver.maps.LatLng(37.548155733455715, 127.21119274619608),
        name: '10 교구',
        img: 'static/img/이진우.png',
        pastor: '이진우',
        address: '경기 동부(하남시, 양평군)'
    },
    {
        id: 13,
        position: new naver.maps.LatLng(37.43620269214977, 127.1018733164468),
        name: '11 교구',
        img: 'static/img/주은석.png',
        pastor: '주은석',
        address: '성남 1(수정구)'
    },
    {
        id: 14,
        position: new naver.maps.LatLng(37.43306604600031, 127.16305052949178),
        name: '12 교구',
        img: 'static/img/이광희.png',
        pastor: '이광희',
        address: '성남 2(중원구)'
    },
    {
        id: 15,
        position: new naver.maps.LatLng(37.401412322079764, 127.1082615317764),
        name: '13 교구',
        img: 'static/img/박재진.png',
        pastor: '박재진',
        address: '분당 1(야탑1, 2동, 이매2동, 삼평동)'
    },
    {
        id: 16,
        position: new naver.maps.LatLng(37.410853350314135, 127.13826481358821),
        name: '14 교구',
        img: 'static/img/정재환.png',
        pastor: '정재환',
        address: '분당 2(이매1동, 야탑3동)'
    },
    {
        id: 17,
        position: new naver.maps.LatLng(37.382974421520004, 127.12607346908385),
        name: '15 교구',
        img: 'static/img/김인용.png',
        pastor: '김인용',
        address: '분당 3(서현1동, 수내1, 2동)'
    }
];


CHURCHS2.forEach(church => {
    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(church.name);         // Create a text node
    node.appendChild(textnode);

    document.getElementById("search").appendChild(node);
});

const CHURCHS = [
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
        img: 'static/img/.png',
        pastor: '유병휘',
        address: '서울 4(강남구)'
    },
    {
        id: 8,
        position: new naver.maps.LatLng(37.50465828900087, 127.11514233482994),
        name: '6 교구',
        img: 'static/img/.png',
        pastor: '김성진',
        address: '서울 5(송파구, 강동구)'
    },
    {
        id: 9,
        position: new naver.maps.LatLng(37.50560426406749, 126.78740095393402),
        name: '7 교구',
        img: 'static/img/.png',
        pastor: '박삼열',
        address: '경기 서부(인천시, 부천시, 시흥시)'
    },
    {
        id: 10,
        position: new naver.maps.LatLng(37.32279769636419, 126.82401342108861),
        name: '8 교구',
        img: 'static/img/.png',
        pastor: '조정환',
        address: '경기 중부(안양시, 과천시, 의왕시, 군포시, 광명시, 안산시)'
    },
    {
        id: 11,
        position: new naver.maps.LatLng(37.47747488065518, 127.14592965569439),
        name: '9 교구',
        img: 'static/img/.png',
        pastor: '장성민',
        address: '위례(위례, 송파, 수정, 하남)'
    },
    {
        id: 12,
        position: new naver.maps.LatLng(37.548155733455715, 127.21119274619608),
        name: '10 교구',
        img: 'static/img/.png',
        pastor: '이진우',
        address: '경기 동부(하남시, 양평군)'
    },
    {
        id: 13,
        position: new naver.maps.LatLng(37.43620269214977, 127.1018733164468),
        name: '11 교구',
        img: 'static/img/.png',
        pastor: '주은석',
        address: '성남 1(수정구)'
    },
    {
        id: 14,
        position: new naver.maps.LatLng(37.43306604600031, 127.16305052949178),
        name: '12 교구',
        img: 'static/img/.png',
        pastor: '이광희',
        address: '성남 2(중원구)'
    },
    {
        id: 15,
        position: new naver.maps.LatLng(37.401412322079764, 127.1082615317764),
        name: '13 교구',
        img: 'static/img/.png',
        pastor: '박재진',
        address: '분당 1(야탑1, 2동, 이매2동, 삼평동)'
    },
    {
        id: 16,
        position: new naver.maps.LatLng(37.410853350314135, 127.13826481358821),
        name: '14 교구',
        img: 'static/img/.png',
        pastor: '정재환',
        address: '분당 2(이매1동, 야탑3동)'
    },
    {
        id: 17,
        position: new naver.maps.LatLng(37.382974421520004, 127.12607346908385),
        name: '15 교구',
        img: 'static/img/.png',
        pastor: '김인용',
        address: '분당 3(서현1동, 수내1, 2동)'
    },
    {
        id: 18,
        position: new naver.maps.LatLng(37.37612887763261, 127.134713910288),
        name: '16 교구',
        img: 'static/img/.png',
        pastor: '최정권',
        address: '분당 4(분당동, 서현2동, 정자2동, 수내3동)'
    },
    {
        id: 19,
        position: new naver.maps.LatLng(37.36432949402776, 127.1167958424504),
        name: '17 교구',
        img: 'static/img/.png',
        pastor: '박현교',
        address: '분당 5(정자동, 정자1, 3동, 구미동)'
    },
    {
        id: 20,
        position: new naver.maps.LatLng(37.38409656991021, 127.07587197221969),
        name: '18 교구',
        img: 'static/img/.png',
        pastor: '박민근',
        address: '분당 6(백현동, 판교동, 운중동, 하산운동, 금곡동, 궁내동, 대장동, 동원동)'
    },
    {
        id: 21,
        position: new naver.maps.LatLng(37.30052675082409, 127.60906474887996),
        name: '19 교구',
        img: 'static/img/.png',
        pastor: '윤지영',
        address: '광주 1(태전동, 경안동(오포읍을 제외한 광주), 여주, 이천, 원주)'
    },
    {
        id: 22,
        position: new naver.maps.LatLng(37.366398437902966, 127.22924577470128),
        name: '20 교구',
        img: 'static/img/.png',
        pastor: '정진영',
        address: '광주 2(오포읍, 모현읍)'
    },
    {
        id: 23,
        position: new naver.maps.LatLng(37.331283987294654, 127.11421050692988),
        name: '21 교구',
        img: 'static/img/.png',
        pastor: '안영주',
        address: '수지 1(죽전1, 2동, 죽전동)'
    },
    {
        id: 24,
        position: new naver.maps.LatLng(37.33991193953674, 127.08119898484037),
        name: '22 교구',
        img: 'static/img/.png',
        pastor: '전광진',
        address: '수지 2(동천동, 풍덕천동, 고기동)'
    },
    {
        id: 25,
        position: new naver.maps.LatLng(37.32044909336443, 127.05978485589709),
        name: '23 교구',
        img: 'static/img/.png',
        pastor: '이주현',
        address: '수지 3(성복동, 신봉동, 상현동)'
    },
    {
        id: 26,
        position: new naver.maps.LatLng(37.30409605608955, 127.12333283587184),
        name: '24 교구',
        img: 'static/img/.png',
        pastor: '이상훈',
        address: '기흥 1(보정동, 마북동, 언남동)'
    },
    {
        id: 27,
        position: new naver.maps.LatLng(37.27258044103764, 127.15131685050838),
        name: '25 교구',
        img: 'static/img/.png',
        pastor: '김영윤',
        address: '기흥 2(동백동, 중동, 창덕동, 처인구(모현 제외))'
    },
    {
        id: 28,
        position: new naver.maps.LatLng(37.282631600020764, 127.09945282800419),
        name: '26 교구',
        img: 'static/img/.png',
        pastor: '탁병진',
        address: '기흥 3(신갈동, 지곡동, 하길동, 고매동, 공세동, 구갈동, 서천동, 영덕동, 보라동, 상갈동, 상하동)'
    },
    {
        id: 29,
        position: new naver.maps.LatLng(37.2796078810942, 127.04998608861365),
        name: '27 교구',
        img: 'static/img/.png',
        pastor: '우광민',
        address: '광교(이의동, 원천동, 하동)'
    },
    {
        id: 30,
        position: new naver.maps.LatLng(37.235100365600324, 126.87456923292012),
        name: '28 교구',
        img: 'static/img/.png',
        pastor: '조훈',
        address: '수원(수원시(광교 제외), 비봉면, 봉담읍)'
    },
    {
        id: 31,
        position: new naver.maps.LatLng(37.21120588032976, 127.07722922768443),
        name: '29 교구',
        img: 'static/img/.png',
        pastor: '이완수',
        address: '경기 남부(화성시, 동탄이남)'
    }
];
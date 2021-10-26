const BIZS = [
    {
        id: 1,
        position: new naver.maps.LatLng(37.39234762613166, 127.13087848124754),
        industry: '양식',
        name: '톨리브',
        item: '이태리식당',
        address: '서울 서초구 서초중앙로24길 9 (서초동) 신우빌딩',
        phone: '0507-1393-0044'
    },
    {
        id: 2,
        position: new naver.maps.LatLng(37.385095301113125, 127.11948028227279),
        industry: '커피/음료',
        name: '안암카페더보일',
        item: '',
        address: '서울 성북구 고려대로28길 17-3 해랑빌딩 1층',
        phone: '010-2679-2784'
    },
    {
        id: 3,
        position: new naver.maps.LatLng(37.616232324895606, 126.71553679454613),
        industry: '한식',
        name: '제육을 논하다',
        item: '',
        address: '서울시 광진구 구의동 244-50 올바른주방 9호',
        phone: '02-456-5106'
    },
    {
        id: 4,
        position: new naver.maps.LatLng(37.532133640470555, 126.98027825016551),
        industry: '한식',
        name: '천년학이 우렁 먹는 날',
        item: '추어탕, 쌈밥',
        address: '서울시 서초구 서초대로25길 54',
        phone: '02-583-2348'
    },
    {
        id: 5,
        position: new naver.maps.LatLng(37.82452463915741, 127.44899770595332),
        industry: '커피/음료',
        name: '메가mgc커피 대치학원가점',
        item: '',
        address: '서울특별시 강남구 도곡로 77길 6 102호',
        phone: '02-6747-7070'
    },
    {
        id: 6,
        position: new naver.maps.LatLng(37.52244725446933, 126.90920397238646),
        industry: '한식',
        name: '계경순대국',
        item: '',
        address: '서울특별시 강남구 밤고개로1길 10(수서역벤처빌점)',
        phone: '02-2040-7898'
    },
    {
        id: 7,
        position: new naver.maps.LatLng(37.49731081920644, 127.06449696083372),
        industry: '일식',
        name: '사누끼제면소',
        item: '',
        address: '서울특별시 강남구 역삼동 817',
        phone: '02-501-4267'
    },
    {
        id: 8,
        position: new naver.maps.LatLng(37.50465828900087, 127.11514233482994),
        industry: '일식',
        name: '그우동집',
        item: '',
        address: '서울특별시 강남구 역삼로7길7 1층 (대표자:이경균)',
        phone: '02-553-0908'
    },
    {
        id: 9,
        position: new naver.maps.LatLng(37.50560426406749, 126.78740095393402),
        industry: '커피/음료',
        name: '파머스빈',
        item: '',
        address: '서울특별시 강남구 테헤란로 313 성지하이츠 1층 114호',
        phone: '02-556-7260'
    },
    {
        id: 10,
        position: new naver.maps.LatLng(37.32279769636419, 126.82401342108861),
        industry: '기타',
        name: '포시애틀 (강남직영점)',
        item: '베트남 쌀국수 및 베트남 식당 프랜차이즈 사업',
        address: '서울특별시 강남구 테헤란로4길 46 쌍용플래티넘밸류 B119호',
        phone: '02-501-4414 / 010-2675-8299'
    },
    {
        id: 11,
        position: new naver.maps.LatLng(37.47747488065518, 127.14592965569439),
        industry: '한식',
        name: '큰맘할매순대국',
        item: '',
        address: '서울특별시 강동구 성내로 16 (성내동 동해빌딩)',
        phone: '02-477-0504'
    },
    {
        id: 12,
        position: new naver.maps.LatLng(37.548155733455715, 127.21119274619608),
        industry: '커피/음료',
        name: '바내',
        item: '',
        address: '서울특별시 강동구 풍성로63길 79, 101호',
        phone: '02-6408-2580'
    },
    {
        id: 13,
        position: new naver.maps.LatLng(37.43620269214977, 127.1018733164468),
        industry: '일식',
        name: '소풍',
        item: '',
        address: '서울특별시 광진구 광장동 257-4번지 1층',
        phone: '02-444-5693'
    },
    {
        id: 14,
        position: new naver.maps.LatLng(37.43306604600031, 127.16305052949178),
        industry: '커피/음료',
        name: '카페 문앤도어',
        item: '',
        address: '서울특별시 광진구 천호대로127길 42-2 1층',
        phone: '010-7928-6704'
    },
    {
        id: 15,
        position: new naver.maps.LatLng(37.401412322079764, 127.1082615317764),
        industry: '일식',
        name: '초밥앤알밥',
        item: '',
        address: '서울특별시 구로구 새말로 97 테크노마트 지하1 푸드코트 28호',
        phone: '02-2111-1628'
    },
    {
        id: 16,
        position: new naver.maps.LatLng(37.410853350314135, 127.13826481358821),
        industry: '일식',
        name: '최고당 돈가스',
        item: '',
        address: '서울특별시 남부순환로 269길 16',
        phone: '02-522-8818'
    },
    {
        id: 17,
        position: new naver.maps.LatLng(37.382974421520004, 127.12607346908385),
        industry: '기타',
        name: '고루모도시락',
        item: '도시락',
        address: '서울특별시 도봉구 도봉로109길 40, 1층',
        phone: '02-999-8300'
    },
    {
        id: 18,
        position: new naver.maps.LatLng(37.37612887763261, 127.134713910288),
        industry: '패스트푸드',
        name: '샐러드박스',
        item: '패스트푸드',
        address: '서울특별시 동작구 만양로 3, 1층',
        phone: '02-815-6337'
    },
    {
        id: 19,
        position: new naver.maps.LatLng(37.36432949402776, 127.1167958424504),
        industry: '제과점',
        name: '예솜 푸드 서비스',
        item: '푸드',
        address: '서울특별시 서초구 바우뫼로 6길 8-4 태성빌딩 예솜푸드',
        phone: '010-3630-9185'
    },
    {
        id: 20,
        position: new naver.maps.LatLng(37.38409656991021, 127.07587197221969),
        industry: '커피/음료',
        name: '고품격커피공장 서일점',
        item: '',
        address: '서울특별시 서초구 효령로68길 66 101호',
        phone: '02-6104-2123'
    },
    {
        id: 21,
        position: new naver.maps.LatLng(37.30052675082409, 127.60906474887996),
        name: '19 교구 교회',
        division: '19교구',
        img: 'static/img/윤지영.png',
        pastor: '윤지영',
        address: '광주 1(태전동, 경안동(오포읍을 제외한 광주), 여주, 이천, 원주)'
    },
    {
        id: 22,
        position: new naver.maps.LatLng(37.366398437902966, 127.22924577470128),
        name: '20 교구 교회',
        division: '20교구',
        img: 'static/img/정진영.png',
        pastor: '정진영',
        address: '광주 2(오포읍, 모현읍)'
    },
    {
        id: 23,
        position: new naver.maps.LatLng(37.331283987294654, 127.11421050692988),
        name: '21 교구 교회',
        division: '21교구',
        img: 'static/img/안영주.png',
        pastor: '안영주',
        address: '수지 1(죽전1, 2동, 죽전동)'
    },
    {
        id: 24,
        position: new naver.maps.LatLng(37.33991193953674, 127.08119898484037),
        name: '22 교구 교회',
        division: '22구',
        img: 'static/img/전광진.png',
        pastor: '전광진',
        address: '수지 2(동천동, 풍덕천동, 고기동)'
    },
    {
        id: 25,
        position: new naver.maps.LatLng(37.32044909336443, 127.05978485589709),
        name: '23 교구 교회',
        division: '23교구',
        img: 'static/img/이주현.png',
        pastor: '이주현',
        address: '수지 3(성복동, 신봉동, 상현동)'
    },
    {
        id: 26,
        position: new naver.maps.LatLng(37.30409605608955, 127.12333283587184),
        name: '24 교구 교회',
        division: '24교구',
        img: 'static/img/이상훈.png',
        pastor: '이상훈',
        address: '기흥 1(보정동, 마북동, 언남동)'
    },
    {
        id: 27,
        position: new naver.maps.LatLng(37.27258044103764, 127.15131685050838),
        name: '25 교구 교회',
        division: '25교구',
        img: 'static/img/김영윤.png',
        pastor: '김영윤',
        address: '기흥 2(동백동, 중동, 창덕동, 처인구(모현 제외))'
    },
    {
        id: 28,
        position: new naver.maps.LatLng(37.282631600020764, 127.09945282800419),
        name: '26 교구 교회',
        division: '26교구',
        img: 'static/img/탁병진.png',
        pastor: '탁병진',
        address: '기흥 3(신갈동, 지곡동, 하길동, 고매동, 공세동, 구갈동, 서천동, 영덕동, 보라동, 상갈동, 상하동)'
    },
    {
        id: 29,
        position: new naver.maps.LatLng(37.2796078810942, 127.04998608861365),
        name: '27 교구 교회',
        division: '27교구',
        img: 'static/img/우광민.png',
        pastor: '우광민',
        address: '광교(이의동, 원천동, 하동)'
    },
    {
        id: 30,
        position: new naver.maps.LatLng(37.235100365600324, 126.87456923292012),
        name: '28 교구 교회',
        division: '28교구',
        img: 'static/img/조훈.png',
        pastor: '조훈',
        address: '수원(수원시(광교 제외), 비봉면, 봉담읍)'
    },
    {
        id: 31,
        position: new naver.maps.LatLng(37.21120588032976, 127.07722922768443),
        name: '29 교구 교회',
        division: '29교구',
        img: 'static/img/이완수.png',
        pastor: '이완수',
        address: '경기 남부(화성시, 동탄이남)'
    }
];
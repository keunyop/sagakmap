
const BIZS = [
    {
        id: 1,
        position: new naver.maps.LatLng(37.485734361088795, 127.02129486693141),
        type: 'restaurant',
        industry: '커피/음료',
        name: '고품격커피공장 서일점',
        item: '',
        address: '서울특별시 서초구 효령로68길 66 101호',
        phone: '02-6104-2123'
    },

    {
        id: 2,
        position: new naver.maps.LatLng(37.59429976931268, 127.01699564723774),
        type: 'restaurant',
        industry: '커피/음료',
        name: '안암카페더보일',
        item: '',
        address: '서울 성북구 고려대로28길 17-3 해랑빌딩 1층',
        phone: '010-2679-2784'
    },

    {
        id: 3,
        position: new naver.maps.LatLng(37.53864963235178, 127.08933897939224),
        type: 'restaurant',
        industry: '한식',
        name: '제육을 논하다',
        item: '',
        address: '서울시 광진구 구의동 244-50 올바른주방 9호',
        phone: '02-456-5106'
    },

    {
        id: 4,
        position: new naver.maps.LatLng(37.49096276221008, 126.99316307936884),
        type: 'restaurant',
        industry: '한식',
        name: '천년학이 우렁 먹는 날',
        item: '추어탕, 쌈밥',
        address: '서울시 서초구 서초대로25길 54',
        phone: '02-583-2348'
    },

    {
        id: 5,
        position: new naver.maps.LatLng(37.49949912201403, 127.05906258678979),
        type: 'restaurant',
        industry: '커피/음료',
        name: '메가mgc커피 대치학원가점',
        item: '',
        address: '서울특별시 강남구 도곡로 77길 6 102호',
        phone: '02-6747-7070'
    },

    {
        id: 6,
        position: new naver.maps.LatLng(37.488833349229765, 127.10137663333195),
        type: 'restaurant',
        industry: '한식',
        name: '계경순대국',
        item: '',
        address: '서울특별시 강남구 밤고개로1길 10(수서역벤처빌점)',
        phone: '02-2040-7898'
    },

    {
        id: 7,
        position: new naver.maps.LatLng(37.5012564043807, 127.02746559471913),
        type: 'restaurant',
        industry: '일식',
        name: '사누끼제면소',
        item: '',
        address: '서울특별시 강남구 역삼동 817',
        phone: '02-501-4267'
    },

    {
        id: 8,
        position: new naver.maps.LatLng(37.49512806671499, 127.03304367937092),
        type: 'restaurant',
        industry: '일식',
        name: '그우동집',
        item: '',
        address: '서울특별시 강남구 역삼로7길7 1층 (대표자:이경균)',
        phone: '02-553-0908'
    },

    {
        id: 9,
        position: new naver.maps.LatLng(37.50451887164191, 127.04505581799441),
        type: 'restaurant',
        industry: '커피/음료',
        name: '파머스빈',
        item: '',
        address: '서울특별시 강남구 테헤란로 313 성지하이츠 1층 114호',
        phone: '02-556-7260'
    },

    {
        id: 10,
        position: new naver.maps.LatLng(37.49596131077952, 127.03042157540713),
        type: 'restaurant',
        industry: '기타',
        name: '포시애틀 (강남직영점)',
        item: '베트남 쌀국수 및 베트남 식당 프랜차이즈 사업',
        address: '서울특별시 강남구 테헤란로4길 46 쌍용플래티넘밸류 B119호',
        phone: '02-501-4414 / 010-2675-8299'
    },

    {
        id: 11,
        position: new naver.maps.LatLng(37.530682309004426, 127.12245754076922),
        type: 'restaurant',
        industry: '한식',
        name: '큰맘할매순대국',
        item: '',
        address: '서울특별시 강동구 성내로 16 (성내동 동해빌딩)',
        phone: '02-477-0504'
    },

    {
        id: 12,
        position: new naver.maps.LatLng(37.53220519789523, 127.13990137938899),
        type: 'restaurant',
        industry: '커피/음료',
        name: '바내',
        item: '',
        address: '서울특별시 강동구 풍성로63길 79, 101호',
        phone: '02-6408-2580'
    },

    {
        id: 13,
        position: new naver.maps.LatLng(37.54809366364975, 127.10360807197969),
        type: 'restaurant',
        industry: '일식',
        name: '소풍',
        item: '',
        address: '서울특별시 광진구 광장동 257-4번지 1층',
        phone: '02-444-5693'
    },

    {
        id: 14,
        position: new naver.maps.LatLng(37.554969787359326, 127.09083136405474),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페 문앤도어',
        item: '',
        address: '서울특별시 광진구 천호대로127길 42-2 1층',
        phone: '010-7928-6704'
    },

    {
        id: 15,
        position: new naver.maps.LatLng(37.50712030505318, 126.89089650213889),
        type: 'restaurant',
        industry: '일식',
        name: '초밥앤알밥',
        item: '',
        address: '서울특별시 구로구 새말로 97 테크노마트 지하1 푸드코트 28호',
        phone: '02-2111-1628'
    },

    {
        id: 16,
        position: new naver.maps.LatLng(37.47816027876006, 126.97849934074367),
        type: 'restaurant',
        industry: '일식',
        name: '최고당 돈가스',
        item: '',
        address: '서울특별시 남부순환로 269길 16',
        phone: '02-522-8818'
    },

    {
        id: 17,
        position: new naver.maps.LatLng(37.647807351497406, 127.03102543340948),
        type: 'restaurant',
        industry: '기타',
        name: '고루모도시락',
        item: '도시락',
        address: '서울특별시 도봉구 도봉로109길 40, 1층',
        phone: '02-999-8300'
    },

    {
        id: 18,
        position: new naver.maps.LatLng(37.50596285715073, 126.94629561799512),
        type: 'restaurant',
        industry: '패스트푸드',
        name: '샐러드박스',
        item: '패스트푸드',
        address: '서울특별시 동작구 만양로 3, 1층',
        phone: '02-815-6337'
    },

    {
        id: 19,
        position: new naver.maps.LatLng(37.470348238585224, 127.0254228140137),
        type: 'restaurant',
        industry: '제과점',
        name: '예솜 푸드 서비스',
        item: '푸드',
        address: '서울특별시 서초구 바우뫼로 6길 8-4 태성빌딩 예솜푸드',
        phone: '010-3630-9185'
    },

    {
        id: 20,
        position: new naver.maps.LatLng(37.495635458939006, 127.01473827937106),
        type: 'restaurant',
        industry: '양식',
        name: '톨리브',
        item: '이태리식당',
        address: '서울 서초구 서초중앙로24길 9 (서초동) 신우빌딩',
        phone: '0507-1393-0044'
    },

    {
        id: 21,
        position: new naver.maps.LatLng(37.542136420551365, 127.04941264054045),
        type: 'restaurant',
        industry: '커피/음료',
        name: 'Naked Coffee',
        item: '',
        address: '서울특별시 성동구 뚝섬로3길 13',
        phone: '02-464-0201'
    },

    {
        id: 22,
        position: new naver.maps.LatLng(37.547265560587014, 127.04524216382609),
        type: 'restaurant',
        industry: '커피/음료',
        name: '타미하우스',
        item: '',
        address: '서울특별시 성동구 왕십리로 10길 6, 1층 104호',
        phone: '010-9074-6574'
    },

    {
        id: 23,
        position: new naver.maps.LatLng(37.61338996303047, 127.06454770248446),
        type: 'restaurant',
        industry: '한식',
        name: '김과장고깃집석계점',
        item: '',
        address: '서울특별시 성북구 한천로78길 46 김과장고깃집',
        phone: '01099564000'
    },

    {
        id: 24,
        position: new naver.maps.LatLng(37.50298423945648, 127.11060360243094),
        type: 'restaurant',
        industry: '기타',
        name: '반찬장이',
        item: '반찬',
        address: '서울특별시 송파구 가락로 133, 1층 4호',
        phone: '02-420-8383'
    },

    {
        id: 25,
        position: new naver.maps.LatLng(37.489286166197886, 127.12423273311116),
        type: 'restaurant',
        industry: '치킨',
        name: 'BBQ 문정점',
        item: '',
        address: '서울특별시 송파구 문정동 41-1번지 1층',
        phone: '02-409-9561'
    },

    {
        id: 26,
        position: new naver.maps.LatLng(37.50583688884634, 127.09042555586635),
        type: 'restaurant',
        industry: '양식',
        name: '임실치즈피자 잠실점',
        item: '',
        address: '서울특별시 송파구 백제고분로21길 15',
        phone: '02-415-2880'
    },

    {
        id: 27,
        position: new naver.maps.LatLng(37.49877580777516, 127.10663954845893),
        type: 'restaurant',
        industry: '양식',
        name: '토브피자 화덕피자',
        item: '화덕피자',
        address: '서울특별시 송파구 송파대로 345 헬리오시티 상가 1A동 지하1층 B144호',
        phone: '02-400-2046'
    },

    {
        id: 28,
        position: new naver.maps.LatLng(37.49853823402682, 127.1079948717421),
        type: 'restaurant',
        industry: '한식',
        name: '수하동 헬리오시티점',
        item: '',
        address: '서울특별시 송파구 송파대로 345 헬리오시티 상가 4블럭 1층 1호 (헬리오시티 3번 게이트 앞)',
        phone: '024094559'
    },

    {
        id: 29,
        position: new naver.maps.LatLng(37.497526497917406, 127.14687912517552),
        type: 'restaurant',
        industry: '커피/음료',
        name: '단백한하루',
        item: '',
        address: '서울특별시 송파구 오금동 42-3번지 1층',
        phone: '0507-1358-5075'
    },

    {
        id: 30,
        position: new naver.maps.LatLng(37.514091351216976, 127.10424689449673),
        type: 'restaurant',
        industry: '한식',
        name: '곰국시집',
        item: '',
        address: '서울특별시 송파구 올림픽로 300',
        phone: '02-3213-4577'
    },

    {
        id: 31,
        position: new naver.maps.LatLng(37.512017436703104, 127.09811319449565),
        type: 'restaurant',
        industry: '분식',
        name: '리김밥',
        item: '',
        address: '서울특별시 송파구 올림픽로240 지하1층 푸드스트리트 리김밥 잠실롯데월드점',
        phone: '02-2143-1248'
    },

    {
        id: 32,
        position: new naver.maps.LatLng(37.472597118690416, 127.14673126716117),
        type: 'restaurant',
        industry: '치킨',
        name: '깐부치킨 위례중앙점',
        item: '',
        address: '서울특별시 송파구 위례광장로 120 위례중앙푸르지오 1단지 147',
        phone: '02-400-5544'
    },

    {
        id: 33,
        position: new naver.maps.LatLng(37.56714925783348, 126.9973709945224),
        type: 'restaurant',
        industry: '일식',
        name: '고레카레',
        item: '',
        address: '서울특별시 중구 을지로170 을지트윈타워 지하1층 고레카레',
        phone: '02-3706-7321'
    },

    {
        id: 34,
        position: new naver.maps.LatLng(37.566008152561864, 127.01762454849171),
        type: 'restaurant',
        industry: '제과점',
        name: '로드리카페',
        item: '',
        address: '서울특별시 중구 퇴계로414  1층, 로드리',
        phone: '0264390880'
    },

    {
        id: 35,
        position: new naver.maps.LatLng(37.386379157717826, 127.1288329558085),
        type: 'restaurant',
        industry: '한식',
        name: '노아노아',
        item: '황태구이 정식 등',
        address: '경기 성남시 분당구 서현로237번길 8 (서현동)',
        phone: '031-706-9181'
    },

    {
        id: 36,
        position: new naver.maps.LatLng(37.37223589003904, 127.10640480977148),
        type: 'restaurant',
        industry: '치킨',
        name: '매드후라이치킨 정자점',
        item: '',
        address: '경기 성남시 분당구 정자일로 240 (정자동, 월드프라자102.103)',
        phone: '031-726-4295'
    },

    {
        id: 37,
        position: new naver.maps.LatLng(37.446491980250315, 127.1271747484338),
        type: 'restaurant',
        industry: '기타',
        name: '플로렌스 파티하우스 가천대역점',
        item: '돌잔치/파티룸',
        address: '경기 성남시 수정구 성남대로 1298 (태평동)',
        phone: '0507-1423-6114'
    },

    {
        id: 38,
        position: new naver.maps.LatLng(37.38479606905116, 126.85532541771707),
        type: 'restaurant',
        industry: '제과점',
        name: '효원당',
        item: '호두과자',
        address: '경기 시흥시 수도권제1순환고속도로 105 (조남동) 시흥하늘휴게소',
        phone: '010-3661-0329'
    },

    {
        id: 39,
        position: new naver.maps.LatLng(37.277262001591865, 127.15174600232203),
        type: 'restaurant',
        industry: '한식',
        name: '더 한점',
        item: '지리산흑돼지 전문',
        address: '경기 용인시 기흥구 동백5로 17 (중동, 레이크시티프라자 203호)',
        phone: '031-287-0862'
    },

    {
        id: 40,
        position: new naver.maps.LatLng(37.321372718281204, 127.11282135631306),
        type: 'restaurant',
        industry: '커피/음료',
        name: '컴포즈커피 용인보정점',
        item: '커피',
        address: '경기 용인시 기흥구 죽전로 39 (보정동, 에스제이타워) 1층 우측코너',
        phone: '031-276-9593'
    },

    {
        id: 41,
        position: new naver.maps.LatLng(37.327415899524354, 127.10092240974976),
        type: 'restaurant',
        industry: '커피/음료',
        name: '더크라운커피랩',
        item: '커피음료',
        address: '경기 용인시 수지구 풍덕천로181번길 4-6 (풍덕천동) 1층',
        phone: '031-263-3211'
    },

    {
        id: 42,
        position: new naver.maps.LatLng(37.71148438549098, 127.48191717924917),
        type: 'restaurant',
        industry: '커피/음료',
        name: '코리달리스카페',
        item: '',
        address: '경기도 가평군 청평면 호반로 887',
        phone: '031 585 4788'
    },

    {
        id: 43,
        position: new naver.maps.LatLng(37.4576028075656, 127.21399672515626),
        type: 'restaurant',
        industry: '커피/음료',
        name: '선데이커피(핸드드립커피 전문점)',
        item: '',
        address: '경기도 광주 남한산성면 불당길27 샬롬하우스 1층',
        phone: '010-2736-3907, 031-746-3352'
    },

    {
        id: 44,
        position: new naver.maps.LatLng(37.40954302215082, 127.248440871699),
        type: 'restaurant',
        industry: '커피/음료',
        name: '로스트 어 파운드',
        item: '',
        address: '경기도 광주시 경안로 138, 1층 101호',
        phone: '031-761-0972'
    },

    {
        id: 45,
        position: new naver.maps.LatLng(37.339001052141235, 127.3211841023516),
        type: 'restaurant',
        industry: '한식',
        name: '사래골김치찌개집',
        item: '',
        address: '경기도 광주시 도척면 도척윗로 184',
        phone: '031-767-2244'
    },

    {
        id: 46,
        position: new naver.maps.LatLng(37.36085370944199, 127.1615594637358),
        type: 'restaurant',
        industry: '한식',
        name: '족보있는 국밥',
        item: '국밥/돈까츠',
        address: '경기도 광주시 오포읍 문형산길 21',
        phone: '031-716-0577'
    },

    {
        id: 47,
        position: new naver.maps.LatLng(37.36062484426836, 127.14720869442245),
        type: 'restaurant',
        industry: '한식',
        name: '채선당',
        item: '',
        address: '경기도 광주시 오포읍 상태길9',
        phone: '031=712-5747'
    },

    {
        id: 48,
        position: new naver.maps.LatLng(37.36130539441856, 127.15528102510962),
        type: 'restaurant',
        industry: '분식',
        name: '김마리 ',
        item: '',
        address: '경기도 광주시 오포읍 신현로73 1층 김마리',
        phone: '031-726-3008'
    },

    {
        id: 49,
        position: new naver.maps.LatLng(37.387243842862794, 127.2340695637485),
        type: 'restaurant',
        industry: '기타',
        name: '하루만족발',
        item: '',
        address: '경기도 광주시 태전동로 21번지',
        phone: '031-764-8922'
    },

    {
        id: 50,
        position: new naver.maps.LatLng(37.38647295694968, 127.23379303306146),
        type: 'restaurant',
        industry: '일식',
        name: '쿄와스시',
        item: '',
        address: '경기도 광주시 태전동로 29 1층',
        phone: '031-798-8844'
    },

    {
        id: 51,
        position: new naver.maps.LatLng(37.37154192920369, 127.12189683702414),
        type: 'restaurant',
        industry: '기타',
        name: '돌고래반찬',
        item: '반찬',
        address: '경기도 분당구 수내53 돌고래상가지층 102~104호',
        phone: '031-712-0994'
    },

    {
        id: 52,
        position: new naver.maps.LatLng(37.36389202935824, 127.12168743702091),
        type: 'restaurant',
        industry: '커피/음료',
        name: 'cafe415',
        item: '',
        address: '경기도 분당구 정자동 한솔마을 청구코아상가',
        phone: '031-718-7625'
    },

    {
        id: 53,
        position: new naver.maps.LatLng(37.372325816813486, 127.11555417168091),
        type: 'restaurant',
        industry: '한식',
        name: '키친두레',
        item: '한식 (도시락)',
        address: '경기도 성남시 내정로 129번길 1',
        phone: '031-713-4515/ 010-6752-8999'
    },

    {
        id: 54,
        position: new naver.maps.LatLng(37.36617898113531, 127.11539122511188),
        type: 'restaurant',
        industry: '제과점',
        name: '달보드레',
        item: '베이커리',
        address: '경기도 성남시 내정로58(정자동) 1층',
        phone: '031-714-3477'
    },

    {
        id: 55,
        position: new naver.maps.LatLng(37.3708248008815, 127.12302456127621),
        type: 'restaurant',
        industry: '분식',
        name: '정스깁밥',
        item: '',
        address: '경기도 성남시 돌마로361 동신코아 지하1층',
        phone: '031-712-2481'
    },

    {
        id: 56,
        position: new naver.maps.LatLng(37.34027179520332, 127.12245920975606),
        type: 'restaurant',
        industry: '한식',
        name: '하늘선',
        item: '한정식',
        address: '경기도 성남시 분당구 구미 122번길 6',
        phone: '031-786-1718'
    },

    {
        id: 57,
        position: new naver.maps.LatLng(37.3524992366165, 127.10542534098464),
        type: 'restaurant',
        industry: '한식',
        name: '오늘하루',
        item: '쌈밥/ 한방차',
        address: '경기도 성남시 분당구 금곡동 정자1로 삼라마이다스빌 201호',
        phone: '031 714 6607'
    },

    {
        id: 58,
        position: new naver.maps.LatLng(37.37615734512455, 127.11986252511683),
        type: 'restaurant',
        industry: '제과점',
        name: '희동아뜰리에',
        item: '쿠키전문점',
        address: '경기도 성남시 분당구 내정로165번길 38 양지마을 청구문화시장 2층 213호 희동아뜰리에쿠키',
        phone: '070-8972-1803'
    },

    {
        id: 59,
        position: new naver.maps.LatLng(37.371457318254905, 127.12192464839762),
        type: 'restaurant',
        industry: '일식',
        name: '호호초밥, 카츠젠',
        item: '',
        address: '경기도 성남시 분당구 내정로174번길 42 돌고래상가 지하 222호',
        phone: '0507-1304-7943'
    },

    {
        id: 60,
        position: new naver.maps.LatLng(37.37092313339829, 127.102004879084),
        type: 'restaurant',
        industry: '한식',
        name: 'M가마솥설렁탕',
        item: '설렁탕',
        address: '경기도 성남시 분당구 대왕판교로296 궁내동빌딩',
        phone: '031-713-0088'
    },

    {
        id: 61,
        position: new naver.maps.LatLng(37.39759139020496, 127.11567270978384),
        type: 'restaurant',
        industry: '기타',
        name: '데일리쿡',
        item: '반찬',
        address: '경기도 성남시 분당구 동판교로 155 봇들마을 7단지 A상가 101호',
        phone: '0507-1494-7078'
    },

    {
        id: 62,
        position: new naver.maps.LatLng(37.387939843285764, 127.11504617909235),
        type: 'restaurant',
        industry: '커피/음료',
        name: '무궁화파이브',
        item: '',
        address: '경기도 성남시 분당구 동판교로 52번길 9-9',
        phone: '031-705-3367'
    },

    {
        id: 63,
        position: new naver.maps.LatLng(37.39679091841602, 127.11368784047029),
        type: 'restaurant',
        industry: '양식',
        name: '비앙또아',
        item: '',
        address: '경기도 성남시 분당구 동판교로177번길 25, 판교 아브뉴프랑 1층',
        phone: '031-707-1088'
    },

    {
        id: 64,
        position: new naver.maps.LatLng(37.39856672562807, 127.11345453306726),
        type: 'restaurant',
        industry: '한식',
        name: '양바위 본점',
        item: '',
        address: '경기도 성남시 분당구 동판교로177번길 25, 판교 아브뉴프랑 1층',
        phone: '031-706-9288'
    },

    {
        id: 65,
        position: new naver.maps.LatLng(37.384500872995844, 127.15165665580744),
        type: 'restaurant',
        industry: '한식',
        name: '이원희맛집직화쌈밥',
        item: '',
        address: '경기도 성남시 분당구 문정로 148번길9',
        phone: '031-781-3838'
    },

    {
        id: 66,
        position: new naver.maps.LatLng(37.34938523409287, 127.10736753304371),
        type: 'restaurant',
        industry: '분식',
        name: '석관동떡볶이 NC 미금점',
        item: '',
        address: '경기도 성남시 분당구 미금일로 154번길 20',
        phone: '010-3053-6530'
    },

    {
        id: 67,
        position: new naver.maps.LatLng(37.364257284575125, 127.12779350236389),
        type: 'restaurant',
        industry: '양식',
        name: '라라테이블',
        item: '',
        address: '경기도 성남시 분당구 발이봉남로 31번길 2',
        phone: '031-711-9998'
    },

    {
        id: 68,
        position: new naver.maps.LatLng(37.37745753388805, 127.1114116790873),
        type: 'restaurant',
        industry: '기타',
        name: '예봄떡방',
        item: '떡집',
        address: '경기도 성남시 분당구 백현로97번길',
        phone: '031-8022-7200'
    },

    {
        id: 69,
        position: new naver.maps.LatLng(37.39475464866966, 127.11207056375227),
        type: 'restaurant',
        industry: '한식',
        name: '푸에르코 | 하누마루',
        item: '',
        address: '경기도 성남시 분당구 분당내곡로 117 크래프톤타워 2층',
        phone: '031-622-7500'
    },

    {
        id: 70,
        position: new naver.maps.LatLng(37.38464397192752, 127.1218846864945),
        type: 'restaurant',
        industry: '한식',
        name: '채선당',
        item: '',
        address: '경기도 성남시 분당구 분당로53번길 11 서원플라자2층(서현점)',
        phone: '031-702-3655'
    },

    {
        id: 71,
        position: new naver.maps.LatLng(37.36025255954569, 127.12296006373545),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페써밋',
        item: '',
        address: '경기도 성남시 분당구 불곡로 4 리더스프라자 5층',
        phone: '010-2667-0725'
    },

    {
        id: 72,
        position: new naver.maps.LatLng(37.37383827473507, 127.13794270236852),
        type: 'restaurant',
        industry: '기타',
        name: '소미당',
        item: '떡',
        address: '경기도 성남시 분당구 불정로 386번길10 미래그린상가 1088',
        phone: '031-702-6438'
    },

    {
        id: 73,
        position: new naver.maps.LatLng(37.388329332761565, 127.15477196374904),
        type: 'restaurant',
        industry: '커피/음료',
        name: '로스팅하우스137',
        item: '',
        address: '경기도 성남시 분당구 새마을로233번길 3 로스팅하우스137',
        phone: '031.708.0137'
    },

    {
        id: 74,
        position: new naver.maps.LatLng(37.38788844700066, 127.12246076374895),
        type: 'restaurant',
        industry: '커피/음료',
        name: '19티',
        item: '',
        address: '경기도 성남시 분당구 서현로 180번길 19 101-20호',
        phone: '010-8411-5025'
    },

    {
        id: 75,
        position: new naver.maps.LatLng(37.38577095837235, 127.12886873306101),
        type: 'restaurant',
        industry: '한식',
        name: '망향국수(분당점)',
        item: '',
        address: '경기도 성남시 분당구 서현로239번길 6',
        phone: '031-704-9333'
    },

    {
        id: 76,
        position: new naver.maps.LatLng(37.386345955258115, 127.13030820237458),
        type: 'restaurant',
        industry: '양식',
        name: '카페 라온',
        item: '',
        address: '경기도 성남시 분당구 서현로257번길 15',
        phone: '031-704-1279'
    },

    {
        id: 77,
        position: new naver.maps.LatLng(37.41187279882044, 127.13002252513402),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페마로네',
        item: '커피,가죽공방',
        address: '경기도 성남시 분당구 성남대로  916번길7. 202호',
        phone: '070.8839.1028'
    },

    {
        id: 78,
        position: new naver.maps.LatLng(37.36566188701335, 127.10794075579841),
        type: 'restaurant',
        industry: '한식',
        name: '쭈락',
        item: '쭈꾸미, 낙지, 홍어 전문요리',
        address: '경기도 성남시 분당구 성남대로 331번길 3-9. 2층',
        phone: '031-717-8100'
    },

    {
        id: 79,
        position: new naver.maps.LatLng(37.38097790653944, 127.13255397908893),
        type: 'restaurant',
        industry: '분식',
        name: '김마리 정자점',
        item: '',
        address: '경기도 성남시 분당구 성남대로389 폴라리스2건물1층 김마리',
        phone: '031-711-7676'
    },

    {
        id: 80,
        position: new naver.maps.LatLng(37.41247920821954, 127.12650560979104),
        type: 'restaurant',
        industry: '분식',
        name: '김밥마니아야탑본점 ',
        item: '',
        address: '경기도 성남시 분당구 성남대로925번길19 터미널프라자108호',
        phone: '010-5205-7130 '
    },

    {
        id: 81,
        position: new naver.maps.LatLng(37.41567655739543, 126.9535388343083),
        type: 'restaurant',
        industry: '분식',
        name: '김밥연구소우리',
        item: '',
        address: '경기도 성남시 분당구 수내동 20-2 효림프라자1층 117호',
        phone: '031-715-4749'
    },

    {
        id: 82,
        position: new naver.maps.LatLng(37.3751957451616, 127.11799921771268),
        type: 'restaurant',
        industry: '분식',
        name: '야옹제면소',
        item: '',
        address: '경기도 성남시 분당구 수내동 29 대명제이스트상가 지하1층 (배달전문)',
        phone: ''
    },

    {
        id: 83,
        position: new naver.maps.LatLng(37.371888739343525, 127.12222387908444),
        type: 'restaurant',
        industry: '분식',
        name: '돌고래손칼국수',
        item: '',
        address: '경기도 성남시 분당구 수내동 돌고래상가 지하163호',
        phone: '031-717-7181'
    },

    {
        id: 84,
        position: new naver.maps.LatLng(37.410954344287326, 127.12801030238647),
        type: 'restaurant',
        industry: '커피/음료',
        name: '커피컵',
        item: '',
        address: '경기도 성남시 분당구 야탑동 358-2 분당 아미고타워 지하 1층',
        phone: '010-8531-6448'
    },

    {
        id: 85,
        position: new naver.maps.LatLng(37.39284799313535, 127.12706750978143),
        type: 'restaurant',
        industry: '치킨',
        name: '와그너치킨 ',
        item: '',
        address: '경기도 성남시 분당구 양현로 94번길 29(이매점)',
        phone: '031-709-3221'
    },

    {
        id: 86,
        position: new naver.maps.LatLng(37.39246030051567, 127.1252028330643),
        type: 'restaurant',
        industry: '커피/음료',
        name: '째즈고양이카페',
        item: '고양이카페',
        address: '경기도 성남시 분당구 양현로 94번길 7 대명프라자 503호',
        phone: '031-705-9022'
    },

    {
        id: 87,
        position: new naver.maps.LatLng(37.3915139898866, 127.12681382512413),
        type: 'restaurant',
        industry: '커피/음료',
        name: '아파트먼트커피',
        item: '',
        address: '경기도 성남시 분당구 양현로94번길 28 이매촌동신3단지아파트 상가 1층 104호',
        phone: '전화없어요'
    },

    {
        id: 88,
        position: new naver.maps.LatLng(37.39267751379318, 127.12698167909465),
        type: 'restaurant',
        industry: '분식',
        name: '우리집김밥',
        item: '',
        address: '경기도 성남시 분당구 양현로94번길 29 이매동상가 1층',
        phone: '0507-1398-5700'
    },

    {
        id: 89,
        position: new naver.maps.LatLng(37.48264303426043, 127.04422665585501),
        type: 'restaurant',
        industry: '커피/음료',
        name: '아티크',
        item: '카페*의류 편집샵 병행',
        address: '경기도 성남시 분당구 운중동 383-1 2층',
        phone: '031-704-3344/ 010-8939-4700'
    },

    {
        id: 90,
        position: new naver.maps.LatLng(37.39196679129374, 127.09035800237724),
        type: 'restaurant',
        industry: '커피/음료',
        name: '노란코끼리 판교점',
        item: '',
        address: '경기도 성남시 분당구 운중로277번길 46-8, 서판교도서관 정문 앞',
        phone: '031-8017-1002'
    },

    {
        id: 91,
        position: new naver.maps.LatLng(37.39662511042039, 127.12166355075173),
        type: 'restaurant',
        industry: '기타',
        name: '떡 마을',
        item: '떡',
        address: '경기도 성남시 분당구 이매동 141 풍림상가 101호',
        phone: '031-706-0012'
    },

    {
        id: 92,
        position: new naver.maps.LatLng(37.393608856910696, 127.13301859443831),
        type: 'restaurant',
        industry: '커피/음료',
        name: '우리카페',
        item: '',
        address: '경기도 성남시 분당구 이매로 113 EMC골프장1층',
        phone: '031-705-2918'
    },

    {
        id: 93,
        position: new naver.maps.LatLng(37.36178534884204, 127.11057850236276),
        type: 'restaurant',
        industry: '제과점',
        name: '자매공작소',
        item: '디저트',
        address: '경기도 성남시 분당구 정자동 150-3번지 1층',
        phone: '010-9375-6489'
    },

    {
        id: 94,
        position: new naver.maps.LatLng(37.36248819411282, 127.10630042511032),
        type: 'restaurant',
        industry: '한식',
        name: '하누비노 정자점',
        item: '',
        address: '경기도 성남시 분당구 정자일로 136, 엠코헤리츠 3단지 101호',
        phone: '031-719-2192'
    },

    {
        id: 95,
        position: new naver.maps.LatLng(37.36305856798562, 127.10665287114062),
        type: 'restaurant',
        industry: '한식',
        name: '양바위 정자점',
        item: '',
        address: '경기도 성남시 분당구 정자일로 140, 엠코헤리츠 2단지 B119~121호',
        phone: '031-715-9288'
    },

    {
        id: 96,
        position: new naver.maps.LatLng(37.36360402540005, 127.10652411770708),
        type: 'restaurant',
        industry: '중식',
        name: '37.36305856798562, 127.10665287114062',
        item: '',
        address: '경기도 성남시 분당구 정자일로 197',
        phone: '031-715-1277'
    },

    {
        id: 97,
        position: new naver.maps.LatLng(37.36509446465818, 127.10634527908104),
        type: 'restaurant',
        industry: '한식',
        name: '양우정 본점',
        item: '',
        address: '경기도 성남시 분당구 정자일로156번길 6 뉴본타워 1층',
        phone: '본점 0317139252 판교점 031 706 9252'
    },

    {
        id: 98,
        position: new naver.maps.LatLng(37.36961621505771, 127.10660410977022),
        type: 'restaurant',
        industry: '한식',
        name: '봄날의청국장',
        item: '',
        address: '경기도 성남시 분당구 정자일로210 동양정자파라곤',
        phone: '031-712-0888'
    },

    {
        id: 99,
        position: new naver.maps.LatLng(37.37028013451299, 127.10531517167999),
        type: 'restaurant',
        industry: '한식',
        name: '육블럭',
        item: '',
        address: '경기도 성남시 분당구 정자일로213번길 10, 성원상떼뷰리젠시 101동 1층 105, 106호',
        phone: '031-715-6692'
    },

    {
        id: 100,
        position: new naver.maps.LatLng(37.38442507363059, 127.1248815097774),
        type: 'restaurant',
        industry: '일식',
        name: '노군꼬치 서현점',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 39번길 49 1층 125호',
        phone: '031-709-2869'
    },

    {
        id: 101,
        position: new naver.maps.LatLng(37.41688587626387, 127.13367196804084),
        type: 'restaurant',
        industry: '기타',
        name: '애니타임 아이스크림 할인점 서현점',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로39번길7 49동삼성한신 근린상가 134호',
        phone: '010-9952-3345'
    },

    {
        id: 102,
        position: new naver.maps.LatLng(37.37884900209415, 127.13197544099796),
        type: 'restaurant',
        industry: '분식',
        name: '김마리 서현점',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로40번길42 우성종합상가1층 김마리',
        phone: '031-704-7676'
    },

    {
        id: 103,
        position: new naver.maps.LatLng(37.40700534828726, 127.10347355296575),
        type: 'restaurant',
        industry: '분식',
        name: '키친박스',
        item: '',
        address: '경기도 성남시 분당구 판교로 255번길 9-22 우림W-CITY 1층 135호',
        phone: '031-628-8850'
    },

    {
        id: 104,
        position: new naver.maps.LatLng(37.408883352378666, 127.11995294993524),
        type: 'restaurant',
        industry: '한식',
        name: '잔칫날',
        item: '',
        address: '경기도 성남시 분당구 판교로 430 건영상가 113호',
        phone: '031-705-8074'
    },

    {
        id: 105,
        position: new naver.maps.LatLng(37.40653533218747, 127.12310788650494),
        type: 'restaurant',
        industry: '커피/음료',
        name: '공차 (분당아름마을점)',
        item: '',
        address: '경기도 성남시 분당구 판교로 441 109호',
        phone: '0507-1342-7408'
    },

    {
        id: 106,
        position: new naver.maps.LatLng(37.408000926877776, 127.13170567169824),
        type: 'restaurant',
        industry: '기타',
        name: '세리네반찬',
        item: '반찬 판매, 배달',
        address: '경기도 성남시 분당구 판교로 519, 경남아너스빌 상가동 106-2호',
        phone: '031-781-5054'
    },

    {
        id: 107,
        position: new naver.maps.LatLng(37.40261812470762, 127.10851456375603),
        type: 'restaurant',
        industry: '커피/음료',
        name: '투썸플레이스',
        item: '커피숍',
        address: '경기도 성남시 분당구 판교역로 235 H 스퀘어 1층 N동',
        phone: '031 696 7777'
    },

    {
        id: 108,
        position: new naver.maps.LatLng(37.402874105737496, 127.11066569444291),
        type: 'restaurant',
        industry: '한식',
        name: '담소소사골순대(판교3호점)',
        item: '',
        address: '경기도 성남시 분당구 판교역로 240 삼환하이펙스 A동 109,110호',
        phone: '031-698-2821'
    },

    {
        id: 109,
        position: new naver.maps.LatLng(37.39469110903034, 127.11053694643604),
        type: 'restaurant',
        industry: '일식',
        name: '림꼬또',
        item: '일식,한식',
        address: '경기도 성남시 분당구 판교역로152 알파돔3  201호 ',
        phone: '070 8827 1319'
    },

    {
        id: 110,
        position: new naver.maps.LatLng(37.36222142612107, 127.11153637114013),
        type: 'restaurant',
        industry: '치킨',
        name: 'BHC치킨 분당정자점',
        item: '',
        address: '경기도 성남시 분당구 황새울로 12번길 11-3',
        phone: '031-716-9282   010-8448-1538'
    },

    {
        id: 111,
        position: new naver.maps.LatLng(37.38518576634201, 127.12073537909096),
        type: 'restaurant',
        industry: '한식',
        name: '하누비노 서현점',
        item: '',
        address: '경기도 성남시 분당구 황새울로 314, 유니퀘스트사옥 1층',
        phone: '031-709-2192'
    },

    {
        id: 112,
        position: new naver.maps.LatLng(37.38801047054315, 127.12137856597231),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페레사',
        item: '',
        address: '경기도 성남시 분당구 황새울로 319번길 텍스타워 ',
        phone: '031-781-0578'
    },

    {
        id: 113,
        position: new naver.maps.LatLng(37.386217309926266, 127.12493227512172),
        type: 'restaurant',
        industry: '한식',
        name: '육쌈냉면',
        item: '',
        address: '경기도 성남시 분당구 황새울로 360번길 28 은성프라자 202호',
        phone: '031-703-6392'
    },

    {
        id: 114,
        position: new naver.maps.LatLng(37.3786283422883, 127.11177896374433),
        type: 'restaurant',
        industry: '한식',
        name: '백채김치찌게',
        item: '',
        address: '경기도 성남시 분당구 황새울로200번길 9-7(107호 수내동)',
        phone: '031-625-1215'
    },

    {
        id: 115,
        position: new naver.maps.LatLng(37.458755095256315, 127.15837009446987),
        type: 'restaurant',
        industry: '기타',
        name: '웨이 메이커',
        item: '떡집',
        address: '경기도 성남시 수정구 논골로47번길 4',
        phone: '010-8940-8489'
    },

    {
        id: 116,
        position: new naver.maps.LatLng(37.44856122733329, 127.14796470980824),
        type: 'restaurant',
        industry: '치킨',
        name: 'BHC치킨',
        item: '',
        address: '경기도 성남시 수정구 산성대로 215길 3. 1층 ',
        phone: '031-758-9935'
    },

    {
        id: 117,
        position: new naver.maps.LatLng(37.4593733911339, 127.16437547912683),
        type: 'restaurant',
        industry: '커피/음료',
        name: '빽다방',
        item: '',
        address: '경기도 성남시 수정구 산성대로 535 1층 ',
        phone: '031-748-0323'
    },

    {
        id: 118,
        position: new naver.maps.LatLng(37.4596409544387, 127.1644815177534),
        type: 'restaurant',
        industry: '일식',
        name: '역전우동',
        item: '',
        address: '경기도 성남시 수정구 산성대로 539 1층 ',
        phone: '031-744-0410'
    },

    {
        id: 119,
        position: new naver.maps.LatLng(37.45351446189413, 127.13284004049743),
        type: 'restaurant',
        industry: '패스트푸드',
        name: '던킨도넛',
        item: '',
        address: '경기도 성남시 수정구 성남대로 1342 (복정동) 1층복사',
        phone: '031-752-0926'
    },

    {
        id: 120,
        position: new naver.maps.LatLng(37.44169042618303, 127.14429552514842),
        type: 'restaurant',
        industry: '한식',
        name: '청산골왕갈비',
        item: '갈비집',
        address: '경기도 성남시 수정구 신흥3동 시민로 144',
        phone: '031-743-7963'
    },

    {
        id: 121,
        position: new naver.maps.LatLng(37.44503949414567, 127.1352841865236),
        type: 'restaurant',
        industry: '분식',
        name: '신전떡볶이',
        item: '',
        address: '경기도 성남시 수정구 태평3동 3763번지',
        phone: '031-721-2288'
    },

    {
        id: 122,
        position: new naver.maps.LatLng(37.406582141729956, 127.1272695944447),
        type: 'restaurant',
        industry: '한식',
        name: '콩이소야',
        item: '',
        address: '경기도 성남시 양현로 탑마을 쌍용아파트상가',
        phone: '031-703-0343'
    },

    {
        id: 123,
        position: new naver.maps.LatLng(37.39179819980672, 127.08125009443752),
        type: 'restaurant',
        industry: '제과점',
        name: '위 베이커리',
        item: '',
        address: '경기도 성남시 운중로 166번길 4-2 1층',
        phone: '031-607-2461'
    },

    {
        id: 124,
        position: new naver.maps.LatLng(37.434227320249605, 127.15918028651839),
        type: 'restaurant',
        industry: '한식',
        name: '금산삼계탕',
        item: '',
        address: '경기도 성남시 중원구 둔촌대로379',
        phone: '031-744-9889'
    },

    {
        id: 125,
        position: new naver.maps.LatLng(37.446098187369834, 127.16266897912057),
        type: 'restaurant',
        industry: '기타',
        name: '배러댄와플 단대오거리점',
        item: '커피, 와플',
        address: '경기도 성남시 중원구 산성대로 372번길 21(금광동), 1층',
        phone: '031-732-5949'
    },

    {
        id: 126,
        position: new naver.maps.LatLng(37.42428049758436, 127.12554455520953),
        type: 'restaurant',
        industry: '패스트푸드',
        name: '크리스버거',
        item: '수제햄버거',
        address: '경기도 성남시 중원구 양현로405번길 17 시티파크 104호',
        phone: '070-8777-9000'
    },

    {
        id: 127,
        position: new naver.maps.LatLng(37.24000315103287, 127.03124360970776),
        type: 'restaurant',
        industry: '제과점',
        name: '조앤스파이',
        item: '',
        address: '경기도 수원시 권선구 곡선로 49번길 14-15 1층 조앤스파이',
        phone: '010-2282-2880'
    },

    {
        id: 128,
        position: new naver.maps.LatLng(37.28041482814029, 127.01714557046519),
        type: 'restaurant',
        industry: '커피/음료',
        name: '뜰카페',
        item: '',
        address: '경기도 수원시 영통구 도청로 17번길 40(이의동) 104호',
        phone: '031-214-4521'
    },

    {
        id: 129,
        position: new naver.maps.LatLng(37.25268321963513, 127.07203351024971),
        type: 'restaurant',
        industry: '패스트푸드',
        name: '에그몬 홈플러스영통점',
        item: '',
        address: '경기도 수원시 영통구 봉영로 1576 1층',
        phone: '070-8865-0728'
    },

    {
        id: 130,
        position: new naver.maps.LatLng(37.299895723579866, 127.05351538926939),
        type: 'restaurant',
        industry: '패스트푸드',
        name: 'GTS버거(광교까페거리점)',
        item: '햄버거',
        address: '경기도 수원시 영통구 센트럴파크로 127번길 100 지하 1층',
        phone: '0507-1325-2910'
    },

    {
        id: 131,
        position: new naver.maps.LatLng(37.286536163275315, 127.06516768644708),
        type: 'restaurant',
        industry: '일식',
        name: '잊지못회',
        item: '',
        address: '경기도 수원시 영통구 센트럴파크로 33 힐스테이트 레이크 상가 103호',
        phone: '010-9259-4123'
    },

    {
        id: 132,
        position: new naver.maps.LatLng(37.25445906566598, 127.06344136115062),
        type: 'restaurant',
        industry: '커피/음료',
        name: '원유로 스페셜티 광교중앙역점',
        item: '',
        address: '경기도 수원시 영통구 에듀타운로 102 SK view A동1층117호',
        phone: '010-3461-1337'
    },

    {
        id: 133,
        position: new naver.maps.LatLng(37.28991127787891, 127.05617386325139),
        type: 'restaurant',
        industry: '커피/음료',
        name: '커피에반하다 경기대광교역점',
        item: '',
        address: '경기도 수원시 영통구 이의동 대학1로 20-1',
        phone: '031-215-5331'
    },

    {
        id: 134,
        position: new naver.maps.LatLng(37.35040011438312, 126.98839480704486),
        type: 'restaurant',
        industry: '커피/음료',
        name: '뜰17',
        item: '',
        address: '경기도 수원시 장안구 만석로159번길72 1층 ',
        phone: '031-258-4521'
    },

    {
        id: 135,
        position: new naver.maps.LatLng(37.285659536796494, 127.01655227904304),
        type: 'restaurant',
        industry: '커피/음료',
        name: '커피해안',
        item: '',
        address: '경기도 수원시 팔달구 화서문로72번길 19, 1층',
        phone: '031-255-8879'
    },

    {
        id: 136,
        position: new naver.maps.LatLng(37.31103610823195, 126.9951485250852),
        type: 'restaurant',
        industry: '한식',
        name: '제복이네',
        item: '배달전문, 고기밥상, 쌈밥, 냉면 등 ',
        address: '경기도 시흥시 신천로 100번길 36 수정타워아파트 상가 105호',
        phone: '031-318-9992'
    },

    {
        id: 137,
        position: new naver.maps.LatLng(37.33196507447195, 126.83799515631814),
        type: 'restaurant',
        industry: '한식',
        name: '수라상',
        item: '백반, 한식',
        address: '경기도 안산시 단원구 예술길23 (고잔동)',
        phone: '031-414-0595'
    },

    {
        id: 138,
        position: new naver.maps.LatLng(37.604749161798864, 127.35428133316704),
        type: 'restaurant',
        industry: '분식',
        name: '문호리가족김밥',
        item: '김밥,떡볶기',
        address: '경기도 양평군 서종면 중미산로 22 101-2호',
        phone: '031-771-8284'
    },

    {
        id: 139,
        position: new naver.maps.LatLng(37.14200304353519, 127.07503150966066),
        type: 'restaurant',
        industry: '중식',
        name: '칭하이',
        item: '',
        address: '경기도 오산시 밀머리로 1번길12 우리마트 2층 201호 ',
        phone: '031-377-7889'
    },

    {
        id: 140,
        position: new naver.maps.LatLng(37.283537827958114, 127.11189721766833),
        type: 'restaurant',
        industry: '한식',
        name: '하루끝',
        item: '',
        address: '경기도 용인시 기흥구 관곡로56,101호',
        phone: '031-282-6392, 010-3235-0359'
    },

    {
        id: 141,
        position: new naver.maps.LatLng(37.28063312265917, 127.11261846369716),
        type: 'restaurant',
        industry: '일식',
        name: '해삼',
        item: '회, 해산물',
        address: '경기도 용인시 기흥구 구갈로 66번길 11-1',
        phone: '031-286-5015'
    },

    {
        id: 142,
        position: new naver.maps.LatLng(37.25479551747928, 127.13158069437127),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페501',
        item: '휴게음식점',
        address: '경기도 용인시 기흥구 사은로 240',
        phone: '031-284-0501'
    },

    {
        id: 143,
        position: new naver.maps.LatLng(37.258732172661475, 127.10683304834322),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페보라동',
        item: '',
        address: '경기도 용인시 기흥구 용구대로 1890번길 25',
        phone: '031-284-3895'
    },

    {
        id: 144,
        position: new naver.maps.LatLng(37.32229098217125, 127.10912977165694),
        type: 'restaurant',
        industry: '커피/음료',
        name: '25디그리스',
        item: '',
        address: '경기도 용인시 기흥구 죽전로15번길 11-14',
        phone: '031-889-5749'
    },

    {
        id: 145,
        position: new naver.maps.LatLng(37.28271129037401, 127.15350814835476),
        type: 'restaurant',
        industry: '제과점',
        name: '호네뜨 베이커리',
        item: '베이커리 카페',
        address: '경기도 용인시 기흥구 평촌2로 2번길 2, 103호',
        phone: '031-282-6488'
    },

    {
        id: 146,
        position: new naver.maps.LatLng(37.533584019677384, 127.07764909789218),
        type: 'restaurant',
        industry: '제과점',
        name: '나른한 오후',
        item: '천연발효종',
        address: '경기도 용인시 수지구 고기로 395',
        phone: '031-261-7735'
    },

    {
        id: 147,
        position: new naver.maps.LatLng(37.313920174836795, 127.08845106371311),
        type: 'restaurant',
        industry: '분식',
        name: '이자리손칼국수',
        item: '',
        address: '경기도 용인시 수지구 만현로 27  108호 아자리손칼국수',
        phone: '031-263-0153'
    },

    {
        id: 148,
        position: new naver.maps.LatLng(37.31838581271599, 127.07059773706891),
        type: 'restaurant',
        industry: '기타',
        name: '바닐라샌드위치',
        item: '샌드위치',
        address: '경기도 용인시 수지구 성복1로 80 2층 211호',
        phone: '031-261-0611'
    },

    {
        id: 149,
        position: new naver.maps.LatLng(37.31578159427627, 127.08089738781618),
        type: 'restaurant',
        industry: '분식',
        name: '리김밥',
        item: '',
        address: '경기도 용인시 수지구 성복2로 38 롯데몰수지점 지하1층 ',
        phone: '031-5174-4044'
    },

    {
        id: 150,
        position: new naver.maps.LatLng(37.33774810422048, 127.09417516318865),
        type: 'restaurant',
        industry: '패스트푸드',
        name: '잇츠 키친',
        item: '샐러드, 샌드위치',
        address: '경기도 용인시 수지구 손곡로 80',
        phone: '010-5251-3185'
    },

    {
        id: 151,
        position: new naver.maps.LatLng(37.33460514928013, 127.05160104097605),
        type: 'restaurant',
        industry: '한식',
        name: '우시륵',
        item: '',
        address: '경기도 용인시 수지구 신봉1로 344번길 10',
        phone: '031-262-8570'
    },

    {
        id: 152,
        position: new naver.maps.LatLng(37.323108747686824, 127.11765763303092),
        type: 'restaurant',
        industry: '제과점',
        name: '드림 플라워 케이크',
        item: '특별한날  맞춤 떡케이크',
        address: '경기도 용인시 수지구 죽전로 87, 433동 1101호',
        phone: '010-9242-4360'
    },

    {
        id: 153,
        position: new naver.maps.LatLng(37.3244049375113, 127.12336537172293),
        type: 'restaurant',
        industry: '일식',
        name: '호식당',
        item: '',
        address: '경기도 용인시 수지구 죽전로136 월드프라자106호',
        phone: '070-7756-5514 '
    },

    {
        id: 154,
        position: new naver.maps.LatLng(37.33180460436679, 127.12471304043882),
        type: 'restaurant',
        industry: '한식',
        name: '죽전골 남원추어탕',
        item: '추어요리전문점',
        address: '경기도 용인시 수지구 현암로 134-1',
        phone: '031-898-4007'
    },

    {
        id: 155,
        position: new naver.maps.LatLng(37.14639795727099, 127.14328932554204),
        type: 'restaurant',
        industry: '커피/음료',
        name: '호텔북리',
        item: '브런치',
        address: '경기도 용인시 처인구 남사읍 당하로 6-10',
        phone: '010-2907-3322'
    },

    {
        id: 156,
        position: new naver.maps.LatLng(37.33330706166677, 127.17198960234894),
        type: 'restaurant',
        industry: '한식',
        name: '천서리 막국수 레이크cc점, 커피숍',
        item: '',
        address: '경기도 용인시 처인구 모현읍 능원로 82',
        phone: '031-323-0600'
    },

    {
        id: 157,
        position: new naver.maps.LatLng(37.238581233778596, 127.18757007182975),
        type: 'restaurant',
        industry: '커피/음료',
        name: '클락켄트커피',
        item: '',
        address: '경기도 용인시 처인구 중부대로 1281번길 16-1',
        phone: '031-328-8090'
    },

    {
        id: 158,
        position: new naver.maps.LatLng(37.287006637603696, 127.20894952530567),
        type: 'restaurant',
        industry: '기타',
        name: '타이씨암',
        item: '태국음식',
        address: '경기도 용인시 처인구 포곡읍 성산로 633 호텔 더숨 포레스트 F동2층',
        phone: '031-323-3235'
    },

    {
        id: 159,
        position: new naver.maps.LatLng(37.31038575275706, 126.95548754066209),
        type: 'restaurant',
        industry: '기타',
        name: '모두쿱',
        item: '덮밥도시락',
        address: '경기도 의왕시 월암길 41 1층',
        phone: '050-5771-5775'
    },

    {
        id: 160,
        position: new naver.maps.LatLng(37.31038575275706, 126.95548754066209),
        type: 'restaurant',
        industry: '제과점',
        name: '쿠키라인',
        item: '수제쌀쿠키',
        address: '경기도 의왕시 월암길 41 지층',
        phone: '050-5771-5775'
    },

    {
        id: 161,
        position: new naver.maps.LatLng(37.56995256092732, 127.18519454078826),
        type: 'restaurant',
        industry: '분식',
        name: '백종원의 미정국수',
        item: '국수',
        address: '경기도 하남시 미사강변대로226번길 14',
        phone: '070-7756-0410'
    },

    {
        id: 162,
        position: new naver.maps.LatLng(37.207877199789294, 127.06182406388629),
        type: 'restaurant',
        industry: '커피/음료',
        name: '카페부부스',
        item: '브런치',
        address: '경기도 화성시 동탄공원로 2길 27-12',
        phone: '031-613-4190'
    },

    {
        id: 163,
        position: new naver.maps.LatLng(37.21860157905193, 127.09917547571365),
        type: 'restaurant',
        industry: '커피/음료',
        name: '복고다방',
        item: '',
        address: '경기도 화성시 동탄기흥로 614 동탄테크노밸리 1층 125호 ',
        phone: '010-8950-6255'
    },

    {
        id: 164,
        position: new naver.maps.LatLng(37.172203046896094, 127.10589942128578),
        type: 'restaurant',
        industry: '커피/음료',
        name: '더프레시',
        item: '',
        address: '경기도 화성시 동탄대로 181 레이크꼬모 B3F CB335호 더프레시',
        phone: '01039444845'
    },

    {
        id: 165,
        position: new naver.maps.LatLng(37.17345958728674, 127.10427735486067),
        type: 'restaurant',
        industry: '한식',
        name: '한촌설렁탕 레이크꼬모점',
        item: '설렁탕',
        address: '경기도 화성시 동탄대로 181, C102호',
        phone: '031-375-8838'
    },

    {
        id: 167,
        position: new naver.maps.LatLng(37.401776441143355, 127.10730858725407),
        type: 'restaurant',
        industry: '기타',
        name: '아이스걸크림보이',
        item: '아이스크림',
        address: '경기도 화성시 동탄대로 469-12 1042호',
        phone: '031-377-8818'
    },

    {
        id: 168,
        position: new naver.maps.LatLng(37.20045473181481, 127.09736098664467),
        type: 'restaurant',
        industry: '커피/음료',
        name: '더벤티',
        item: '',
        address: '경기도 화성시 동탄순환대로 127-27 B103호',
        phone: '071-436-4443'
    },

    {
        id: 169,
        position: new naver.maps.LatLng(37.22742336586881, 127.09835386254142),
        type: 'restaurant',
        industry: '일식',
        name: '보스참치 동탄점',
        item: '',
        address: '경기도 화성시 동탄순환대로 25길 24 1층 109호',
        phone: '010-6436-9325'
    },

    {
        id: 170,
        position: new naver.maps.LatLng(37.20726300785861, 127.11099997923124),
        type: 'restaurant',
        industry: '패스트푸드',
        name: '노브랜드버거 (동탄영천점)',
        item: '버거, 치킨, 각종 사이드, 샐러드',
        address: '경기도 화성시 동탄순환대로 689',
        phone: '031-374-5580'
    },

    {
        id: 171,
        position: new naver.maps.LatLng(37.21129307622762, 127.05787994061426),
        type: 'restaurant',
        industry: '한식',
        name: '도란도란',
        item: '돼지갈비',
        address: '경기도 화성시 동탄지성로163',
        phone: '031-225-4295'
    },

    {
        id: 172,
        position: new naver.maps.LatLng(37.214813723369915, 127.0377336559613),
        type: 'restaurant',
        industry: '분식',
        name: '배달의쌀국수',
        item: '',
        address: '경기도 화성시 진안동 867-1 1층 102호',
        phone: '031-224-9091'
    },

    {
        id: 173,
        position: new naver.maps.LatLng(37.35467402706217, 127.94568354068365),
        type: 'restaurant',
        industry: '커피/음료',
        name: '하진파파',
        item: '',
        address: '강원도 원주시 원일로 181',
        phone: '010-6336-9993'
    },

    {
        id: 174,
        position: new naver.maps.LatLng(37.36665178090374, 127.10512929120132),
        type: 'restaurant',
        industry: '한식',
        name: '소소한 식당 인텔리지점',
        item: '덮밥, 우동, 정식',
        address: '성남시 분당구 정자1로 177 인텔리지상가동 2층',
        phone: '010-8739-4704'
    },

    {
        id: 175,
        type: 'restaurant',
        industry: '한식',
        name: '강수산',
        item: '',
        address: 'https://m.smartstore.naver.com/mussel',
        phone: '010-5252-1797'
    },

    {
        id: 176,
        type: 'restaurant',
        industry: '커피/음료',
        name: '꼬모수제청',
        item: '',
        address: 'https://smartstore.naver.com/iamccomo',
        phone: '010-7306-8336'
    },

    {
        id: 177,
        type: 'restaurant',
        industry: '커피/음료',
        name: '마메',
        item: '',
        address: 'https://smartstore.naver.com/coffeemame ',
        phone: '031-707-2846'
    },

    {
        id: 178,
        type: 'restaurant',
        industry: '커피/음료',
        name: '살곰달곰커피',
        item: '스페셜티커피, 드립백',
        address: 'https://m.smartstore.naver.com/salgomdalgom',
        phone: '010-5148-2520'
    },

    {
        id: 179,
        type: 'restaurant',
        industry: '제과점',
        name: 'pimpi',
        item: '떡케익',
        address: '카톡채널 pimpicake 인스타 @pimp_iiii',
        phone: ''
    },

    {
        id: 180,
        position: new naver.maps.LatLng(37.364327343236916, 127.10624875592218),
        type: 'restaurant',
        industry: '한식',
        name: '양우정 판교점',
        item: '',
        address: '경기도 성남시 분당구 대왕판교로606번길 10 라스트리트 1동 112호',
        phone: '본점 0317139252 판교점 031 706 9252'
    },

    {
        id: 181,
        position: new naver.maps.LatLng(37.40888913027885, 127.20429642536476),
        type: 'restaurant',
        industry: '한식',
        name: '미감만족정원오리',
        item: '',
        address: '경기도 광주시 순암로 449번길 9',
        phone: '031-769-9998'
    },

    {
        id: 182, position: new naver.maps.LatLng(37.58108679222994, 126.89066434079373), type: 'service', industry: '기타', name: '그림비즈니스센터', item: '공유오피스',
        address: '서울 마포구 월드컵북로 400 (상암동) 상암동 서울산업진흥원 2층 홈페이지 http://www.grimbiz.com/ 블로그  https://blog.naver.com/grimbiz ', phone: '1661-9731'
    },

    {
        id: 183, position: new naver.maps.LatLng(37.493538333609706, 127.0755688640248), type: 'service', industry: '병원', name: '신석호 정신과', item: '정신과',
        address: '서울특별시 강남구 개포로 615 석탑프라자 201', phone: '02-2226-2231'
    },

    {
        id: 184, position: new naver.maps.LatLng(37.486610444400014, 127.04519388729521), type: 'service', industry: '한의원', name: '서문한의원', item: '한의원',
        address: '서울특별시 강남구 남부순환로 2738, 3층', phone: '02-579-5100'
    },

    {
        id: 185, position: new naver.maps.LatLng(37.4988676025109, 127.03832181799187), type: 'service', industry: '부동산중개업', name: '유일부동산 중개법인', item: '',
        address: '서울특별시 강남구 논현로 428, 302호 (역삼동 정진빌딩)', phone: ''
    },

    {
        id: 186, position: new naver.maps.LatLng(37.502355885975625, 127.03640025610065), type: 'service', industry: '기타', name: '(주)헤리티지앤파트너스', item: '법인 보험영업',
        address: '서울특별시 강남구 논현로 507, 1703호 (성지하이츠3차빌딩)', phone: ''
    },

    {
        id: 187, position: new naver.maps.LatLng(37.49793348273831, 127.03932957195538), type: 'service', industry: '기타', name: '카피루스', item: '출력, 복사, 제본, 인쇄업',
        address: '서울특별시 강남구 논현로 76길 9 서울강남빌딩 1층', phone: '02-552-9978'
    },

    {
        id: 188, position: new naver.maps.LatLng(37.493118785042036, 127.04271077144148), type: 'service', industry: '병원', name: '서울본브릿지병원', item: '',
        address: '서울특별시 강남구 도곡로214', phone: '1899-0090'
    },

    {
        id: 189, position: new naver.maps.LatLng(37.501781492263405, 127.02770959471937), type: 'service', industry: '부동산중개업', name: '삼광공인중개사', item: '',
        address: '서울특별시 강남구 봉은사로18길 88', phone: '02-557-2929'
    },

    {
        id: 190, position: new naver.maps.LatLng(37.49431187454366, 127.06307942540639), type: 'service', industry: '학원', name: '대치상어수학학원', item: '',
        address: '서울특별시 강남구 삼성로 155 대치퍼스트빌딩 409호', phone: '02-554-0222'
    },

    {
        id: 191, position: new naver.maps.LatLng(37.51913068343876, 127.05164051958806), type: 'service', industry: '병원', name: '청담에스에스 640의원', item: '피부,탈모,도수치료',
        address: '서울특별시 강남구 삼성로 640, 2층', phone: '02-545-0640'
    },

    {
        id: 192, position: new naver.maps.LatLng(37.505263439500986, 127.05609710213791), type: 'service', industry: '헬스/필라테스', name: '헬스올림프스', item: '',
        address: '서울특별시 강남구 삼성로85길19 302 대치빌딩', phone: '010-8339-4711'
    },

    {
        id: 193, position: new naver.maps.LatLng(37.52303667524207, 127.04273410214657), type: 'service', industry: '건축/인테리어/디자인', name: '도어즈', item: '',
        address: '서울특별시 강남구 선릉로 146길 27-10 (청담동 20-2) 3층', phone: '010-9108-0716'
    },

    {
        id: 194, position: new naver.maps.LatLng(37.506159799160606, 127.04809664868588), type: 'service', industry: '병원', name: '연세오케이통증의학과의원', item: '',
        address: '서울특별시 강남구 선릉로 517 비젼빌딩 ', phone: '02-556-8257'
    },

    {
        id: 195, position: new naver.maps.LatLng(37.5316625682244, 127.04007087138001), type: 'service', industry: '학원', name: '스튜디오H', item: '드로잉수업,미술심리치료(자격증 유)',
        address: '서울특별시 강남구 압구정동 한양아파트', phone: '010-9173-8147'
    },

    {
        id: 196, position: new naver.maps.LatLng(37.533195577683756, 127.02798984182982), type: 'service', industry: '학원', name: '강의하는 아이들', item: '',
        address: '서울특별시 강남구 압구정로 29기 72-1 A동 3층 2호 ', phone: '02-543-8209 '
    },

    {
        id: 197, position: new naver.maps.LatLng(37.533429658398354, 127.02823895470914), type: 'service', industry: '부동산중개업', name: '압구정케빈부동산중개', item: '',
        address: '서울특별시 강남구 압구정로29길 71 현대아파트 상가 3동 115호', phone: '02-545-8880'
    },

    {
        id: 198, position: new naver.maps.LatLng(37.51747990216109, 127.03699330661973), type: 'service', industry: '기타', name: '(주)바른보존', item: '문화재수리(보존과학)',
        address: '서울특별시 강남구 언주로134길.202호 에이170(논현동, 성암빌딩)', phone: '02-518-4326'
    },

    {
        id: 199, position: new naver.maps.LatLng(37.49667459709153, 127.02925327937159), type: 'service', industry: '병원', name: '강남 연세 흉부외과', item: '하지정맥류 전문',
        address: '서울특별시 강남구 역삼동 826-23, 3층', phone: '02-556-9388'
    },

    {
        id: 200, position: new naver.maps.LatLng(37.50490818732083, 127.06296683333996), type: 'service', industry: '학원', name: '튠댄스컴퍼니', item: '댄스스투디오',
        address: '서울특별시 강남구 역삼로 404 (재석빌딩) B1 튠댄스컴퍼니 ', phone: '02 565 7590'
    },

    {
        id: 201, position: new naver.maps.LatLng(37.51069011317911, 127.061335506612), type: 'service', industry: '기타', name: '씨비젼 ', item: '홍보영상제작',
        address: '서울특별시 강남구 영동대로 643 삼안빌딩 501호 (청담역1번출구)', phone: '070-8843-3700'
    },

    {
        id: 202, position: new naver.maps.LatLng(37.504430281856955, 127.04509305610172), type: 'service', industry: '기타', name: '헌터스그룹', item: '서치펌',
        address: '서울특별시 강남구 테헤란로 311 아남타워 1208호', phone: '010 3626 8330'
    },

    {
        id: 203, position: new naver.maps.LatLng(37.504293458763655, 127.04492139271623), type: 'service', industry: '기타', name: '헌터스 그룹', item: '직업 소개업',
        address: '서울특별시 강남구 테헤란로 311 아남타워 12층', phone: '010-3103-8338'
    },

    {
        id: 204, position: new naver.maps.LatLng(37.50424651138142, 127.0451845640302), type: 'service', industry: '기타', name: 'Kga에셋', item: '보험판매전문',
        address: '서울특별시 강남구 테헤란로 313,1808호(성지하이츠 1차)', phone: '02-565-5563'
    },

    {
        id: 205, position: new naver.maps.LatLng(37.50410219471859, 127.04613059472038), type: 'service', industry: '기타', name: '신한라이프', item: '보험',
        address: '서울특별시 강남구 테헤란로 318 11층', phone: '010-2345-3238'
    },

    {
        id: 206, position: new naver.maps.LatLng(37.50528993929549, 127.04881492541168), type: 'service', industry: '병원', name: '연세채움정신건강의학과의원', item: '',
        address: '서울특별시 강남구 테헤란로 339, 선릉빌딩 8층', phone: '02-568-2075'
    },

    {
        id: 207, position: new naver.maps.LatLng(37.50704630212573, 127.05362706403146), type: 'service', industry: '학원', name: 'WECODE', item: '코딩부트캠프',
        address: '서울특별시 강남구 테헤란로 427, 위워크 타워', phone: '010-7365-4553'
    },

    {
        id: 208, position: new naver.maps.LatLng(37.503582772544895, 127.04478547937495), type: 'service', industry: '기타', name: '노무법인 아인', item: '노무사',
        address: '서울특별시 강남구 테헤란로310, 15층 1503호(역삼동, 두꺼비빌딩)', phone: '02-6959-2405'
    },

    {
        id: 209, position: new naver.maps.LatLng(37.51901330359488, 127.0417061566204), type: 'service', industry: '한의원', name: '신유한의원', item: '',
        address: '서울특별시 강남구 학동로 55길 12 세왕빌딩 4층', phone: '02-794-7588'
    },

    {
        id: 210, position: new naver.maps.LatLng(37.4607636452758, 127.10137258728265), type: 'service', industry: '부동산중개업', name: '골든공인중개사 사무소', item: '',
        address: '서울특별시 강남구 헌릉로590길 63 강남데시앙파크 상가 102호', phone: '02-451-4600'
    },

    {
        id: 211, position: new naver.maps.LatLng(37.55995299518456, 127.15259494871184), type: 'service', industry: '부동산중개업', name: '은혜무지개', item: '부동산 중개',
        address: '서울특별시 강동구 동남로81길 78', phone: '02-427-4111'
    },

    {
        id: 212, position: new naver.maps.LatLng(37.565687857363116, 127.1727623026789), type: 'service', industry: '학원', name: '쇼뇨몬테소리', item: '',
        address: '서울특별시 강동구 아리수로 423 강일큐브 3층', phone: '010-6839-5752'
    },

    {
        id: 213, position: new naver.maps.LatLng(37.53742587020755, 127.13921823335576), type: 'service', industry: '한의원', name: '평강한의원', item: '',
        address: '서울특별시 강동구 양재대로 1465 마루빌딩 6층', phone: '02-478-9595'
    },

    {
        id: 214, position: new naver.maps.LatLng(37.53609937026125, 127.13436549511925), type: 'service', industry: '병원', name: '류마내과', item: '',
        address: '서울특별시 강동구 천호동 천호대로 1099 정산타워빌딩 ', phone: '02 474 5450'
    },

    {
        id: 215, position: new naver.maps.LatLng(37.61617947821943, 127.03097808735838), type: 'service', industry: '학원', name: '하나보습학원', item: '',
        address: '서울특별시 강북구 미아동 도봉로10라길 5 (골든빌4층)', phone: '02-907-3511'
    },

    {
        id: 216, position: new naver.maps.LatLng(37.52942945203215, 126.85432677145918), type: 'service', industry: '기타', name: '선율드림', item: '실내악 연주',
        address: '서울특별시 강서구 국회대로 171', phone: '010-3345-8479'
    },

    {
        id: 217, position: new naver.maps.LatLng(37.553588301971985, 126.82978906601193), type: 'service', industry: '건축/인테리어/디자인', name: '곰글로벌', item: '바닥재,조명기구,욕실',
        address: '서울특별시 강서구 마곡중앙로 59-21, 에이스 타워2 812호', phone: '0507-1385-6109'
    },

    {
        id: 218, position: new naver.maps.LatLng(37.56038044983183, 126.85510545664043), type: 'service', industry: '기타', name: '(주)공간의삶', item: '안전진단',
        address: '서울특별시 강서구 화곡로68길 15 ', phone: '02-6243-0501'
    },

    {
        id: 219, position: new naver.maps.LatLng(37.47504027381387, 126.91739962539701), type: 'service', industry: '병원', name: '연세마취통증의학과 ', item: '',
        address: '서울특별시 관악구 난곡로 226(세이브마트 옆, 마더스약국 건물 5층)', phone: '02-866-7585'
    },

    {
        id: 220, position: new naver.maps.LatLng(37.476413595481795, 126.9781467100523), type: 'service', industry: '학원', name: '뮤지큐 음악동화', item: '',
        address: '서울특별시 관악구 남현1길 10, 3층', phone: '02-585-5726'
    },

    {
        id: 221, position: new naver.maps.LatLng(37.62895430221965, 126.8586958630414), type: 'service', industry: '기타', name: '(주)사운드센트럴', item: '',
        address: '서울특별시 광진구 ', phone: '010-4162-2958'
    },

    {
        id: 222, position: new naver.maps.LatLng(37.5415492848347, 127.069390341286), type: 'service', industry: '병원', name: '서울나란이치과', item: '교정치과',
        address: '서울특별시 광진구 아차산로 237 (건대입구역)', phone: '02-461-7522'
    },

    {
        id: 223, position: new naver.maps.LatLng(37.55802664690267, 127.08837434078266), type: 'service', industry: '병원', name: '본마디의원', item: '',
        address: '서울특별시 광진구 용마산로 44, 화성빌딩 2층', phone: '02.3437.8855'
    },

    {
        id: 224, position: new naver.maps.LatLng(37.5547996774114, 127.09104594078099), type: 'service', industry: '기타', name: '문앤도어아카이브', item: '가죽공방',
        address: '서울특별시 광진구 중곳동 112-1 102호', phone: '010-7928-6704'
    },

    {
        id: 225, position: new naver.maps.LatLng(37.4909481990894, 126.89335364867847), type: 'service', industry: '학원', name: '(주)대양인스티튜트', item: '',
        address: '서울특별시 구로구 도림로 90, 혜성빌딩 2층', phone: '02-838-0002'
    },

    {
        id: 226, position: new naver.maps.LatLng(37.475084973467474, 126.8896721486707), type: 'service', industry: '학원', name: '천재교과서 온라인 학습 밀크티 (초중고)', item: '',
        address: '서울특별시 금천구 디지탈로 10길  78,1210호 ', phone: '010-7321-5280'
    },

    {
        id: 227, position: new naver.maps.LatLng(37.655686199535396, 127.06829837944916), type: 'service', industry: '학원', name: '지혜나눔네트워크', item: '중장년을 위한 온라인 교육',
        address: '서울특별시 노원구 상계2동 노원로 428', phone: '010-3324-7278'
    },

    {
        id: 228, position: new naver.maps.LatLng(37.65841527455102, 127.03688087945048), type: 'service', industry: '건축/인테리어/디자인', name: '공간이야기', item: '홈 앤 사무실 인테리어',
        address: '서울특별시 도복구 쌍문동 45-6', phone: '01077717882'
    },

    {
        id: 229, position: new naver.maps.LatLng(37.48697734105402, 126.98087464867643), type: 'service', industry: '한의원', name: '이레한의원', item: '',
        address: '서울특별시 동작구 동작대로 25길 16 4층', phone: '02-3477-1079'
    },

    {
        id: 230, position: new naver.maps.LatLng(37.50754164130629, 126.96647367937693), type: 'service', industry: '학원', name: '소마 사고력 수학학원', item: '',
        address: '서울특별시 동작구 현충로 118 4층 ', phone: '02-823-4006'
    },

    {
        id: 231, position: new naver.maps.LatLng(37.554926743186975, 126.92099074078101), type: 'service', industry: '독서실/고시원', name: '홍대허브하우스', item: '고시원',
        address: '서울특별시 마포구 양화로 124, 4층', phone: '010-7572-1839'
    },

    {
        id: 232, position: new naver.maps.LatLng(37.554263517415784, 126.91428621009014), type: 'service', industry: '건축/인테리어/디자인', name: '디자인가인드(주)', item: '인테리어 설계/시공',
        address: '서울특별시 마포구 양화로7길 66-4(서교동)', phone: '02-558-8575'
    },

    {
        id: 233, position: new naver.maps.LatLng(37.56015829470709, 126.92587379474799), type: 'service', industry: '법률/상담', name: '로뎀상담실', item: '상담 치료',
        address: '서울특별시 마포구 연희로1길 12 302호( 동교동 푸른빌딩)', phone: '02-717-0475'
    },

    {
        id: 234, position: new naver.maps.LatLng(37.569099507244125, 126.90791694078791), type: 'service', industry: '병원', name: '서울포도나무치과', item: '',
        address: '서울특별시 마포구 월드컵북로 192', phone: '02-374-2875'
    },

    {
        id: 235, position: new naver.maps.LatLng(37.51124491555606, 127.0211942486881), type: 'service', industry: '병원', name: '초이성형외과의원', item: '',
        address: '서울특별시 서초구 강남대로 543 2층', phone: '02-543-7781'
    },

    {
        id: 236, position: new naver.maps.LatLng(37.47258619283271, 127.04005726401475), type: 'service', industry: '기타', name: '인디고라임', item: '영상 프로덕션',
        address: '서울특별시 서초구 강남대로18길 19 5층', phone: '02-529-2690'
    },

    {
        id: 237, position: new naver.maps.LatLng(37.503659806319156, 127.0101267179941), type: 'service', industry: '건축/인테리어/디자인', name: '하나건축사사무소', item: '건축설계',
        address: '서울특별시 서초구 고무래로 16 3층', phone: '02-533-3633'
    },

    {
        id: 238, position: new naver.maps.LatLng(37.48041108841976, 127.03891183332806), type: 'service', industry: '법률/상담', name: '엠에이치에스특허', item: '변리사업',
        address: '서울특별시 서초구 바우뫼로37길 23-6 602호(양재동,  태홍빌딩)', phone: '0505-300-2244(010-9349-0930)'
    },

    {
        id: 239, position: new naver.maps.LatLng(37.493448080344685, 127.0131545719534), type: 'service', industry: '법률/상담', name: '법무법인(유한) 태승', item: '변호사업',
        address: '서울특별시 서초구 서초 중앙로 125 로이어즈타워 1205호', phone: '02-596-1003'
    },

    {
        id: 240, position: new naver.maps.LatLng(37.483333799777476, 127.00384304867475), type: 'service', industry: '골프연습장', name: '키덜트골프클럽,버디버디골프클럽(같은주소지)', item: '',
        address: '서울특별시 서초구 서초동 남부순환로333길 32 지하', phone: '02-585-9710'
    },

    {
        id: 241, position: new naver.maps.LatLng(37.49526141500859, 127.01533037144252), type: 'service', industry: '법률/상담', name: 'KEY법률사무소', item: '변호사업',
        address: '서울특별시 서초구 서초중앙로24길12, 302호', phone: '02-3482-0883'
    },

    {
        id: 242, position: new naver.maps.LatLng(37.47775321023182, 127.04440767936248), type: 'service', industry: '건축/인테리어/디자인', name: '에이드앤 건축설계', item: '건축설계/리모델링',
        address: '서울특별시 서초구 양재2동 논현로 83 산호물산 a동 1613호', phone: '02-589-1875'
    },

    {
        id: 243, position: new naver.maps.LatLng(37.476273129642394, 127.0429680719449), type: 'service', industry: '건축/인테리어/디자인', name: '(주)건축사사무소 에스아이 ', item: '건축 설계 / 감리 / 인테리어',
        address: '서울특별시 서초구 언남11길 34-2, #403 (양재동, 영동빌딩) http://www.si-arch.com https://blog.naver.com/hanichun', phone: '02-3462-0289, 010-9145-0289'
    },

    {
        id: 244, position: new naver.maps.LatLng(37.464280320777625, 127.02560034917711), type: 'service', industry: '부동산중개업', name: 'SH우면공인중개사사무소', item: '',
        address: '서울특별시 서초구 태봉로 2길 65, 상가102호(우면동 서초네이처힐4단지)', phone: '02-577-5770'
    },

    {
        id: 245, position: new naver.maps.LatLng(37.54913349874231, 127.01972407939716), type: 'service', industry: '병원', name: '연세유라인치과', item: '',
        address: '서울특별시 성동구 장토길 33 2층', phone: '02-2231-2822'
    },

    {
        id: 246, position: new naver.maps.LatLng(37.49531691903478, 127.13142615660905), type: 'service', industry: '부동산중개업', name: '에이스부동산', item: '',
        address: '서울특별시 송파구 동남로 18길 12 1층(가락동)', phone: '02-404-6789'
    },

    {
        id: 247, position: new naver.maps.LatLng(37.496923352881375, 127.1314856560981), type: 'service', industry: '독서실/고시원', name: '아카데미라운지 가락독서실(송파)', item: '',
        address: '서울특별시 송파구 동남로 211 2층 ', phone: '02 409 9998'
    },

    {
        id: 248, position: new naver.maps.LatLng(37.49605760910481, 127.15039577937137), type: 'service', industry: '병원', name: '시온연합의원', item: '피부과',
        address: '서울특별시 송파구 마천로 311', phone: '02-404-7727'
    },

    {
        id: 249, position: new naver.maps.LatLng(37.50768071551557, 127.11596118679371), type: 'service', industry: '독서실/고시원', name: '더라이브러리 송파점', item: '스터디 카페',
        address: '서울특별시 송파구 백제고분로 46길43 3층', phone: '070-8866-3966'
    },

    {
        id: 250, position: new naver.maps.LatLng(37.496191009854236, 127.11967271006196), type: 'service', industry: '미용실', name: '바라봄헤어', item: '',
        address: '서울특별시 송파구 송이로 20길 18', phone: '02- 6417- 3544'
    },

    {
        id: 251, position: new naver.maps.LatLng(37.49390617813127, 127.11893259471556), type: 'service', industry: '법률/상담', name: '이엘세무회계사무소', item: '회계사무소',
        address: '서울특별시 송파구 송파대로 260 1404호(가락동, 제일오피스텔)', phone: '010-9108-7851'
    },

    {
        id: 252, position: new naver.maps.LatLng(37.49850342814609, 127.10638205661039), type: 'service', industry: '피부관리', name: '피부전공', item: '',
        address: '서울특별시 송파구 송파대로 345 1A B 59호', phone: '010-6541-1523'
    },

    {
        id: 253, position: new naver.maps.LatLng(37.47649257022285, 127.13968176047847), type: 'service', industry: '부동산중개업', name: '럭키 공인중개사', item: '',
        address: '서울특별시 송파구 위례광장로 121 위례 24단지내상가 101-1호', phone: ' 02-406-6363/ 010-4435-8911'
    },

    {
        id: 254, position: new naver.maps.LatLng(37.480771866033365, 127.14392985609018), type: 'service', industry: '세탁소', name: '크린토피아 아이파크 1차점', item: '',
        address: '서울특별시 송파구 위례광장로 136 상가 E동 119호', phone: '02-448-3939'
    },

    {
        id: 255, position: new naver.maps.LatLng(37.51130174579461, 127.08017092541449), type: 'service', industry: '부동산중개업', name: '이레공인중개사', item: '',
        address: '서울특별시 송파구 잠실동 177-4 ', phone: '02-420-0058'
    },

    {
        id: 256, position: new naver.maps.LatLng(37.51332632455024, 127.11117051799867), type: 'service', industry: '건축/인테리어/디자인', name: '디자인 리가', item: '',
        address: '서울특별시 송파구 정의로 7길 13 오피스동 611(문정동 에코송파)', phone: '02-2058-1518/ 010-2305-7304'
    },

    {
        id: 257, position: new naver.maps.LatLng(37.4939173802547, 127.12261367144164), type: 'service', industry: '기타', name: '신성 네트워크', item: '스크린골프장, pc방 창업지원및 공장설비자금 지원',
        address: '서울특별시 송파구 중대로10길 13', phone: '010-3813-3283'
    },

    {
        id: 258, position: new naver.maps.LatLng(37.49617984245376, 126.90676205647851), type: 'service', industry: '기타', name: '더봄길', item: '백일상 돌상대여',
        address: '서울특별시 영등포구 디지털로 420, 상가 106호', phone: '010-9376-2995'
    },

    {
        id: 259, position: new naver.maps.LatLng(37.53663161946976, 126.89277986059354), type: 'service', industry: '법률/상담', name: '인모스트투자자문', item: '투자자문사',
        address: '서울특별시 영등포구 양평로21길 26 1603호', phone: '02-2068-6482'
    },

    {
        id: 260, position: new naver.maps.LatLng(37.60400937183715, 126.92654815666177), type: 'service', industry: '학원', name: '경희대신강호태권도장', item: '',
        address: '서울특별시 은평구 녹번로9 3층 ', phone: '02-382-9498'
    },

    {
        id: 261, position: new naver.maps.LatLng(37.571890693442896, 126.97450301009889), type: 'service', industry: '기타', name: '(주)지씨엔', item: '해외이주,유학 컨설팅',
        address: '서울특별시 종로구 새문안로 5길 13 변호사회관 1204호', phone: '02-3486-1400'
    },

    {
        id: 262, position: new naver.maps.LatLng(37.56786718632109, 127.00141413337056), type: 'service', industry: '건축/인테리어/디자인', name: '토브디자인', item: '디자인&인쇄',
        address: '서울특별시 중구 을지로 35길 16-14', phone: '010-3438-0153'
    },

    {
        id: 263, position: new naver.maps.LatLng(37.56814034900321, 126.98543597147793), type: 'service', industry: '헬스/필라테스', name: '센터원웰니스', item: '',
        address: '서울특별시 중구 을지로5길 26 서관3층(수하동, 미래에셋센터원)', phone: '02-6030-1000'
    },

    {
        id: 264, position: new naver.maps.LatLng(37.568466994076736, 126.99837511009699), type: 'service', industry: '기타', name: '삼성공업', item: '미싱바늘',
        address: '서울특별시 중구 창경궁로 58', phone: '010-8785-0719'
    },

    {
        id: 265, position: new naver.maps.LatLng(37.56096248529846, 127.0129922180219), type: 'service', industry: '기타', name: '소망기획', item: '청자켓 전문샘플실',
        address: '서울특별시 중구 청구로 83-5 ', phone: '010-2175-5084'
    },

    {
        id: 266, position: new naver.maps.LatLng(37.53073968390796, 126.84434900862294), type: 'service', industry: '건축/인테리어/디자인', name: '다온탄성', item: '',
        address: '서울특별시 화곡로 176-19 성재센트리움', phone: '010-4156-6439'
    },

    {
        id: 267, position: new naver.maps.LatLng(37.37085799249875, 126.93742172534637), type: 'service', industry: '학원', name: '서울음악학원', item: '',
        address: '경기 군포시 금산로 92 (산본동) 3층', phone: '031-396-1800'
    },

    {
        id: 268, position: new naver.maps.LatLng(37.3764393744906, 127.11782666466172), type: 'service', industry: '기타', name: '지지스튜디오(수내)', item: '사진관',
        address: '경기 성남시 분당구 내정로173번길 11 (수내동, 양지마을) 대명상가 지하 1층', phone: '031-707-4479'
    },

    {
        id: 269, position: new naver.maps.LatLng(37.37503524012982, 127.13097434862163), type: 'service', industry: '건축/인테리어/디자인', name: '윤아이디', item: '',
        address: '경기 성남시 분당구 분당로 190 (분당동, 샛별마을라이프아파트, 102호))', phone: '031-703-4243'
    },

    {
        id: 270, position: new naver.maps.LatLng(37.41070858818085, 127.1370708253656), type: 'service', industry: '자동차수리', name: '드림카센터', item: '',
        address: '경기 성남시 분당구 야탑로161번길 4-4 (야탑동)', phone: '031-705-0951'
    },

    {
        id: 271, position: new naver.maps.LatLng(37.384210177241904, 127.12828987138859), type: 'service', industry: '기타', name: '다트커뮤니케이션즈', item: '(온라인)디스플레이광고, 홈페이지 및 VR 제작',
        address: '경기 성남시 분당구 중앙공원로 53 (서현동, 시범단지삼성.한신아파트)', phone: '010-9819-5518'
    },

    {
        id: 272, position: new naver.maps.LatLng(37.386813255742716, 127.11181691793732), type: 'service', industry: '피부관리', name: '고은 콜라겐 피부샵', item: '피부관리',
        address: '경기 성남시 분당구 판교역로2번길 35 (백현동) 1층', phone: '031-704-4007'
    },

    {
        id: 273, position: new naver.maps.LatLng(37.387097649656496, 127.1238334332827), type: 'service', industry: '병원', name: '분당21세기병원', item: '[목,허리 디스크/관절,골절]',
        address: '경기 성남시 분당구 황새울로342번길 15 (서현동) 은성빌딩 5,6층', phone: '031-703-0175'
    },

    {
        id: 274, position: new naver.maps.LatLng(37.28022264653131, 126.99836852036266), type: 'service', industry: '부동산중개업', name: '호반탑부동산', item: '부동산',
        address: '경기 성남시 수정구 고등로 34 (고등동, 호반써밋 판교밸리) 108호', phone: '031-756-4900'
    },

    {
        id: 275, position: new naver.maps.LatLng(37.48397587354917, 127.14987397320029), type: 'service', industry: '학원', name: '자람학원', item: '초중 영어 수학',
        address: '경기 성남시 수정구 위례동로 153 (창곡동) 에이플타워 601호', phone: '031-701-3371'
    },

    {
        id: 276, position: new naver.maps.LatLng(37.44366913012249, 127.15468248184379), type: 'service', industry: '병원', name: '박근완치과', item: '',
        address: '경기 성남시 중원구 산성대로 340-1 (중앙동) 범원빌딩 3층', phone: '031-744-3333'
    },

    {
        id: 277, position: new naver.maps.LatLng(37.2892562413437, 127.06092566732357), type: 'service', industry: '학원', name: '이화앤해금스튜디오', item: '국악, 해금(입시, 취미)',
        address: '경기 수원시 영통구 법조로 25 (하동) 광교SK뷰레이크 A동 411호', phone: '031-8001-2001'
    },

    {
        id: 278, position: new naver.maps.LatLng(37.294632928413186, 127.11885043323795), type: 'service', industry: '학원', name: '수학생각학원', item: '',
        address: '경기 용인시 기흥구 구성로 88 (언남동) 국민은행 5층 504호', phone: '070-4327-1499'
    },

    {
        id: 279, position: new naver.maps.LatLng(37.27251663426227, 127.1181053485726), type: 'service', industry: '부동산중개업', name: '더샵 공인중개사사무소', item: '부동산',
        address: '경기 용인시 기흥구 기흥역로58번길 78 (구갈동, 기흥역 더샵) 기흥역더샵 판매시설 201동 103호', phone: '031-284-6111'
    },

    {
        id: 280, position: new naver.maps.LatLng(37.25785699276922, 127.13958669408926), type: 'service', industry: '학원', name: '늘봄음악학원', item: '',
        address: '경기 용인시 기흥구 중부대로 788번길 20 쌍용아파트 상가 3층', phone: '031-286-2167'
    },

    {
        id: 281, position: new naver.maps.LatLng(37.33117118362603, 127.11099845601758), type: 'service', industry: '보육시설', name: '아이빌리어린이집', item: '',
        address: '경기 용인시 수지구 용구대로 2742 (죽전동, 동성1차아파트, A 관리동)', phone: '031-261-5953'
    },

    {
        id: 282, position: new naver.maps.LatLng(37.33257822313011, 127.12224735256574), type: 'service', industry: '학원', name: '마스터수학 전문학원', item: '수학 학원',
        address: '경기 용인시 수지구 현암로119 죽전메디뷰4층 404호', phone: '031-262-3698'
    },

    {
        id: 283, position: new naver.maps.LatLng(37.23364309301204, 127.20180434113703), type: 'service', industry: '건축/인테리어/디자인', name: '이루레건축', item: '',
        address: '경기 용인시 처인구 금령로40번길 15-16 (김량장동) 1층', phone: '031-8097-2722'
    },

    {
        id: 284, position: new naver.maps.LatLng(37.74830128460874, 127.52571264087537), type: 'service', industry: '여관업', name: '카세리오', item: '',
        address: '경기도 가평군 가평읍 북한강변로 173', phone: '031-581-8001'
    },

    {
        id: 285, position: new naver.maps.LatLng(37.71121278362896, 127.48226050223846), type: 'service', industry: '여관업', name: '인터라켄스테이', item: '',
        address: '경기도 가평군 청평면 호반로 887', phone: '031 585 4788'
    },

    {
        id: 286, position: new naver.maps.LatLng(37.629972297260124, 126.71951528725769), type: 'service', industry: '한의원', name: '삼송경희한의원', item: '',
        address: '경기도 고양시 덕양구 삼송로88 오성프라자 401호', phone: '02-371-3375'
    },

    {
        id: 287, position: new naver.maps.LatLng(37.67611941187617, 126.81150067945916), type: 'service', industry: '기타', name: 'A to Z 통번역', item: '통번역',
        address: '경기도 고양시 일산동구 위시티 1로 7 503-1003', phone: '010-7663-0855'
    },

    {
        id: 288, position: new naver.maps.LatLng(37.65638726214713, 126.7738748101401), type: 'service', industry: '기타', name: '주)제이피플', item: '행사기획대행, 인력아웃소싱',
        address: '경기도 고양시 일산동구 중앙로1305-30, 마이다스오피스텔1017호', phone: '010-3228-6252'
    },

    {
        id: 289, position: new naver.maps.LatLng(37.68473449646244, 126.71627801066543), type: 'service', industry: '보육시설', name: '일산 아이사랑 어린이 집', item: '어린이집',
        address: '경기도 고양시 일산서구 송산로 339', phone: '031-923-0020'
    },

    {
        id: 290, position: new naver.maps.LatLng(37.67723080322342, 126.7471285487692), type: 'service', industry: '한의원', name: '문지홍한의원', item: '',
        address: '경기도 고양시 일산서구 중앙로 1576 태진빌딩 203호', phone: '031-918-1075'
    },

    {
        id: 291, position: new naver.maps.LatLng(37.421519088356256, 126.99229599468046), type: 'service', industry: '피부관리', name: '세레니끄 과천점', item: '',
        address: '경기도 과천시 별양로 12', phone: '02-3679-1580'
    },

    {
        id: 292, position: new naver.maps.LatLng(37.4292641283991, 126.88352711795791), type: 'service', industry: '기타', name: '예섬', item: '인쇄/홍보물',
        address: '경기도 광명시 소하동 서원로 25', phone: '02-3663-2813'
    },

    {
        id: 293, position: new naver.maps.LatLng(37.476748494817365, 126.87009181005256), type: 'service', industry: '병원', name: '연세김앤정 정형외과', item: '정형외과',
        address: '경기도 광명시 철산로 36 양정타워 6층', phone: '02-2684-1111'
    },

    {
        id: 294, position: new naver.maps.LatLng(37.37970640459945, 127.22915006407202), type: 'service', industry: '학원', name: '한우리 독서토론 논술', item: '',
        address: '경기도 광주 태봉로 163-2 힐스2차 2102동 1301호', phone: '010-9017-1646'
    },

    {
        id: 295, position: new naver.maps.LatLng(37.41012362961318, 127.25929245656755), type: 'service', industry: '여관업', name: '아이오텔 모텔', item: '',
        address: '경기도 광주시 경안동 20-91', phone: '031-797-3951'
    },

    {
        id: 296, position: new naver.maps.LatLng(37.39297529740906, 127.22447478724973), type: 'service', industry: '노인요양시설', name: '서연방문재활간호 재가요양센터', item: '',
        address: '경기도 광주시 광나안로 29-34, 2층', phone: '010-4434-2487'
    },

    {
        id: 297, position: new naver.maps.LatLng(37.35339171390508, 127.16419314068305), type: 'service', industry: '기타', name: '티엘조경', item: '조경',
        address: '경기도 광주시 능평로 46-6', phone: '031-717-5257'
    },

    {
        id: 298, position: new naver.maps.LatLng(37.38471677332794, 127.23889062535312), type: 'service', industry: '기타', name: '담안 75 셀프세차장', item: '셀프 세차장',
        address: '경기도 광주시 담안길 75', phone: '031-768-2285'
    },

    {
        id: 299, position: new naver.maps.LatLng(37.3951998771644, 127.24200245604865), type: 'service', industry: '부동산중개업', name: '이너피스', item: '',
        address: '경기도 광주시 순암로67(장지동87-4)', phone: '031-764-7759'
    },

    {
        id: 300, position: new naver.maps.LatLng(37.40937649689781, 127.25959720318336), type: 'service', industry: '기타', name: '러브에셋종합보험', item: '',
        address: '경기도 광주시 역동로 5 갤러리아 플라자 212호', phone: '010-8955-7883'
    },

    {
        id: 301, position: new naver.maps.LatLng(37.360277316786856, 127.21626560999593), type: 'service', industry: '보육시설', name: '새샘어린이집', item: '어린이집',
        address: '경기도 광주시 오포안로 263번길', phone: '031-767-4279'
    },

    {
        id: 302, position: new naver.maps.LatLng(37.35621026804335, 127.16599151792254), type: 'service', industry: '건축/인테리어/디자인', name: '거미하우스 인테리어', item: '욕실인테리어',
        address: '경기도 광주시 오포읍 능평로 5', phone: '010-5745-8804, 031-726-0300'
    },

    {
        id: 303, position: new naver.maps.LatLng(37.359307792090505, 127.16798763733293), type: 'service', industry: '학원', name: '바이올린. 비올라', item: '개인레슨',
        address: '경기도 광주시 오포읍 대명대길 11번길19 모아맨션103동102호', phone: '010-2605-7142'
    },

    {
        id: 304, position: new naver.maps.LatLng(37.3771816249799, 127.26082042534948), type: 'service', industry: '부동산중개업', name: '대주파크빌공인중개사사무소', item: '',
        address: '경기도 광주시 오포읍 마루들길 272, 기덕빌딩 103호', phone: '031-762-4800'
    },

    {
        id: 305, position: new naver.maps.LatLng(37.37923111553627, 127.25560231793364), type: 'service', industry: '여행', name: '소라투어', item: '여행',
        address: '경기도 광주시 오포읍 양벌로 195-30 (104호)', phone: '010-5643-0321'
    },

    {
        id: 306, position: new naver.maps.LatLng(37.344473412004064, 127.17917871791687), type: 'service', industry: '한의원', name: '능골한의원', item: '',
        address: '경기도 광주시 오포읍 오포로 119', phone: '031-765-8706'
    },

    {
        id: 307, position: new naver.maps.LatLng(37.34699674583343, 127.1810090179182), type: 'service', industry: '자동차수리', name: '브아뛰르', item: '',
        address: '경기도 광주시 오포읍 오포로 171번길 11-7', phone: '010-8556-4684'
    },

    {
        id: 308, position: new naver.maps.LatLng(37.358896126756356, 127.2313590179239), type: 'service', industry: '부동산중개업', name: '테마건축 유튜브주택박사', item: '',
        address: '경기도 광주시 오포읍 추자리 263-3 테마빌딩 201호', phone: '031-766-9745'
    },

    {
        id: 309, position: new naver.maps.LatLng(37.35844210612136, 127.16572164068573), type: 'service', industry: '학원', name: '3030몰입영어', item: '',
        address: '경기도 광주시 오포읍 태제로 137-1  포레시티 A동 102호', phone: '010-5668-0413'
    },

    {
        id: 310, position: new naver.maps.LatLng(37.40831392345544, 127.25943397932885), type: 'service', industry: '기타', name: '마루건축사사무소', item: '',
        address: '경기도 광주시 중앙로 196, 대영빌딩2층', phone: '031-767-6109'
    },

    {
        id: 311, position: new naver.maps.LatLng(37.41030570433004, 127.26127147932965), type: 'service', industry: '헬스/필라테스', name: '브레이브짐(BRAVE GYM)', item: '',
        address: '경기도 광주시 중앙로 327 이레빌딩 3층(2,3층)', phone: '1877-4868'
    },

    {
        id: 312, position: new naver.maps.LatLng(37.4217794376225, 127.23116573329962), type: 'service', industry: '법률/상담', name: '힐링스케치미술치료센터', item: '미술치료센터',
        address: '경기도 광주시 탄벌길161', phone: '01088925555'
    },

    {
        id: 313, position: new naver.maps.LatLng(37.38706978336072, 127.22953440595766), type: 'service', industry: '학원', name: '해법영어수학', item: '',
        address: '경기도 광주시 태봉로 110 태전아이파크 102동 104호', phone: '010-9627-7096'
    },

    {
        id: 314, position: new naver.maps.LatLng(37.3779937308338, 127.11608675604032), type: 'service', industry: '학원', name: '필아트 미술학원', item: '',
        address: '경기도 광주시 태성로 130-1 한양프라자3층 302호', phone: '010-8994-3353'
    },

    {
        id: 315, position: new naver.maps.LatLng(37.53523318222481, 127.08973027197375), type: 'service', industry: '학원', name: '라라음악학원', item: '',
        address: '경기도 광주시 태성로 130-1, 한양플라자 301호', phone: '010-5525-7567'
    },

    {
        id: 316, position: new naver.maps.LatLng(37.39209950186707, 127.22174667932089), type: 'service', industry: '기타', name: '키즈키친봄', item: '쿠킹클래스',
        address: '경기도 광주시 태전중앙로 14 2층', phone: '010-2752-2215'
    },

    {
        id: 317, position: new naver.maps.LatLng(37.39597422333239, 127.23380546813908), type: 'service', industry: '네일숍', name: '안녕네일샵', item: '',
        address: '경기도 광주시 태전중앙로16 서원프라자2동 1층', phone: '010-8223-4875'
    },

    {
        id: 318, position: new naver.maps.LatLng(37.393393189505844, 127.22174124070249), type: 'service', industry: '부동산중개업', name: '중앙공인중개사사무소', item: '',
        address: '경기도 광주시 회안대로 350-3(태전동)', phone: '031-797-240, 010-9856-9821'
    },

    {
        id: 319, position: new naver.maps.LatLng(37.39342728507974, 127.22148374863096), type: 'service', industry: '기타', name: '드래곤피싱', item: '낚시 출조',
        address: '경기도 광주시 회안대로 350-3(태전동), 3층', phone: '010-9918-1370'
    },

    {
        id: 320, position: new naver.maps.LatLng(37.603014682820316, 127.14306047942337), type: 'service', industry: '한의원', name: '위강한의원(구리남양주점)', item: '',
        address: '경기도 구리시 경춘로 253, 다우스퀘어 201호 ', phone: '031-523-2015'
    },

    {
        id: 321, position: new naver.maps.LatLng(37.317902489472985, 126.91781393324925), type: 'service', industry: '기타', name: '개인택배', item: '택배',
        address: '경기도 군포시 송부로49번길15 금강펜테리움105동 202호', phone: '010-3443-2985'
    },

    {
        id: 322, position: new naver.maps.LatLng(37.58649560893153, 127.17099265614169), type: 'service', industry: '병원', name: '다산큰나무정신건강의학과', item: '',
        address: '경기도 남양주시 다산중앙로124번길 22-8, 리더스퀘어 406호', phone: '031-567-9101'
    },

    {
        id: 323, position: new naver.maps.LatLng(37.68556573832459, 127.19737409480902), type: 'service', industry: '기타', name: '제이엘컴퍼니(렌탈119)', item: 'TFS천막, 몽골천막,탁자,의자,전시장치, 에어컨,화장실 등 렌탈',
        address: '경기도 남양주시 진건읍 독정로 성지2길 106-5 www.rental119.co.kr/', phone: '031-528-1190'
    },

    {
        id: 324, position: new naver.maps.LatLng(37.483484189193284, 126.7794576333296), type: 'service', industry: '병원', name: '예솔치과의원', item: '',
        address: '경기도 부천시 경인로 216-1', phone: '032-653-3339'
    },

    {
        id: 325, position: new naver.maps.LatLng(37.49035484845813, 126.76747051798768), type: 'service', industry: '학원', name: '아이보람 부천남센터', item: '원어 비디오와 원서를 활용하는 엄마표 영어 모임',
        address: '경기도 부천시 중동로 108 현대아이파크 상가 308호', phone: '032-667-8919'
    },

    {
        id: 326, position: new naver.maps.LatLng(37.386317956238656, 127.1364429253538), type: 'service', industry: '기타', name: '24시홈서비스 ', item: '하수도 막힘 뚫음 / 고압세척',
        address: '경기도 분당구 안골로42 ', phone: '1833-9701'
    },

    {
        id: 327, position: new naver.maps.LatLng(37.370386409281885, 127.14265072534609), type: 'service', industry: '병원', name: '닥터심스의원', item: '가정의학과',
        address: '경기도 분당구 장안로27 스마트114빌딩 3층', phone: '031-701-1350~1'
    },

    {
        id: 328, position: new naver.maps.LatLng(37.37794569595112, 127.11397861000445), type: 'service', industry: '법률/상담', name: 'CEO클리닉', item: '중소기업리스크관리센터',
        address: '경기도 분당구 황새울로200번길34 코포모타워5층', phone: '031-786-0210'
    },

    {
        id: 329, position: new naver.maps.LatLng(37.4015009747701, 127.1011691639803), type: 'service', industry: '법률/상담', name: '피엔피 인베스트먼트 ', item: '특허법인',
        address: '경기도 성남시  판교로228번길 15, 2동7층701', phone: '031-622- 3953'
    },

    {
        id: 330, position: new naver.maps.LatLng(37.3382721694967, 127.11570737929488), type: 'service', industry: '학원', name: '분당드럼학원', item: '드럼',
        address: '경기도 성남시 구미로60 관보쇼핑 501호', phone: '010-8320-4926'
    },

    {
        id: 331, position: new naver.maps.LatLng(37.37751660683909, 127.1337401303368), type: 'service', industry: '학원', name: '동아수학학원', item: '초중고수학학원',
        address: '경기도 성남시 분당구  486번길6. 304호 서현동  상록프라자  동아  초중고  수학 학원   ', phone: '031-701-5554'
    },

    {
        id: 332, position: new naver.maps.LatLng(37.33861337510648, 127.1156644639496), type: 'service', industry: '학원', name: '수학을풀다 수학학원', item: '',
        address: '경기도 성남시 분당구 구미동 구미로 60  관보쇼핑 504호', phone: '01064189410'
    },

    {
        id: 333, position: new naver.maps.LatLng(37.33834041074265, 127.11579320998537), type: 'service', industry: '학원', name: 'YBM잉글루 분당구미 제1캠퍼스 ', item: '영어교습소',
        address: '경기도 성남시 분당구 구미로 60  관보쇼핑 408호 ', phone: '010 -2569 -0213'
    },

    {
        id: 334, position: new naver.maps.LatLng(37.37101810933917, 127.10215879465585), type: 'service', industry: '건축/인테리어/디자인', name: '케이에스디자인 ', item: '',
        address: '경기도 성남시 분당구 금곡동 대왕판교로 300', phone: '070-4647-1176'
    },

    {
        id: 335, position: new naver.maps.LatLng(37.38008423460666, 127.11580532984794), type: 'service', industry: '학원', name: 'GTG사고력수학 수내캠퍼스', item: '',
        address: '경기도 성남시 분당구 내정로 173번길 49(수내동, 궁전프라자 3) 213호', phone: '031-714-2350'
    },

    {
        id: 336, position: new naver.maps.LatLng(37.37806193597298, 127.11565760258775, type: 'service', industry: '건축/인테리어/디자인', name: '팔레스인테리어', item: '',
        address: '경기도 성남시 분당구 내정로173번길 49, 110호 (수내동 궁전프라자-3)', phone: '010-5345-2732'
    },

    {
        id: 337, position: new naver.maps.LatLng(37.363042733105246, 127.11583831396167), type: 'service', industry: '학원', name: '분당유도관', item: '',
        address: '경기도 성남시 분당구 내정로24정든마을 (이경숙집사님남편)', phone: '0507-1434-8883'
    },

    {
        id: 338, position: new naver.maps.LatLng(37.364775598667606, 127.11440474861703), type: 'service', industry: '부동산중개업', name: '우리공인중개사', item: '',
        address: '경기도 성남시 분당구 내정로55 상록마을 우성상가117호', phone: '010 8583 3700'
    },

    {
        id: 339, position: new naver.maps.LatLng(37.368857980950594, 127.10631206396432), type: 'service', industry: '학원', name: '토브구문정독 영어학원', item: '영어 어학원',
        address: '경기도 성남시 분당구 느티로 16, 5층 (정자동, 젤존타워1)', phone: '031-719-1193'
    },

    {
        id: 340, position: new naver.maps.LatLng(37.36905961498776, 127.10512597138123), type: 'service', industry: '미용실', name: '이포크드류', item: '미용실',
        address: '경기도 성남시 분당구 느티로 2 AK와이즈플레이스 2층', phone: '031-714-3003'
    },

    {
        id: 341, position: new naver.maps.LatLng(37.3698736075842, 127.11055434861959), type: 'service', industry: '기타', name: '효도쿡123 정자점', item: '시니어 식사배달 서비스',
        address: '경기도 성남시 분당구 느티로51번길8-4 1층', phone: '031-719-1230'
    },

    {
        id: 342, position: new naver.maps.LatLng(37.371237295180684, 127.122863633275), type: 'service', industry: '학원', name: 'TM 수학', item: '',
        address: '경기도 성남시 분당구 돌마로 361 (동신코아)', phone: '031-778-7976'
    },

    {
        id: 343, position: new naver.maps.LatLng(37.37600727097868, 127.13590752534873), type: 'service', industry: '학원', name: '작은화실', item: '미술',
        address: '경기도 성남시 분당구 돌마로 476번길31 삼환상가 304호', phone: '010-9482-8062'
    },

    {
        id: 344, position: new naver.maps.LatLng(37.350522860654884, 127.1099177179196), type: 'service', industry: '법률/상담', name: '민트심리상담센터', item: '상담센터',
        address: '경기도 성남시 분당구 돌마로 80 현대벤쳐빌 640호', phone: '031-897-6715'
    },

    {
        id: 345, position: new naver.maps.LatLng(37.37154424546619, 127.122863633275), type: 'service', industry: '한의원', name: '오한의원', item: '',
        address: '경기도 성남시 분당구 돌마로361 동신코아5층', phone: '031-712-1697'
    },

    {
        id: 346, position: new naver.maps.LatLng(37.375836753343144, 127.13547837189616), type: 'service', industry: '학원', name: '미술숲미술교습소', item: '미술',
        address: '경기도 성남시 분당구 돌마로476번길31 203호(서현동 임광종합상가)', phone: '031-701-5257'
    },

    {
        id: 347, position: new naver.maps.LatLng(37.377423108139624, 127.13423348673072), type: 'service', industry: '기타', name: '포인스튜디오', item: '장소 대관 (댄스연습실, 악기연습실)',
        address: '경기도 성남시 분당구 돌마로486번길 6 상록프라자 지하1층', phone: '010-2352-7436'
    },

    {
        id: 348, position: new naver.maps.LatLng(37.3502684703712, 127.10937770257433), type: 'service', industry: '법률/상담', name: '노동법률 동행', item: '고용,산재보험사무대행',
        address: '경기도 성남시 분당구 돌마로68 6층 610호(구미동 분당프라자)', phone: '031-702-2343'
    },

    {
        id: 349, position: new naver.maps.LatLng(37.39399170137011, 127.11855711052402), type: 'service', industry: '부동산중개업', name: '다올공인 중개사', item: '',
        address: '경기도 성남시 분당구 동판교로 122 백현마을 2단지 상가 106호', phone: '031-8017-7100'
    },

    {
        id: 350, position: new naver.maps.LatLng(37.39610118505112, 127.11505041794184), type: 'service', industry: '세탁소', name: '크린토피아 성남봇들8단지점', item: '',
        address: '경기도 성남시 분당구 동판교로 153  봇들마을 8단지', phone: '031-8016-1121'
    },

    {
        id: 351, position: new naver.maps.LatLng(37.38643925978949, 127.1147954179371), type: 'service', industry: '미용실', name: '미용실봄', item: '',
        address: '경기도 성남시 분당구 동판교로52번길19-17(백현동586-2)', phone: '010 7472 4026'
    },

    {
        id: 352, position: new naver.maps.LatLng(37.41192010047123, 127.1339986026043), type: 'service', industry: '교정/재활', name: '위스포츠복지TOP운동발달센터', item: '운동발달 및 재활치료',
        address: '경기도 성남시 분당구 매화로 44 조일빌딩 4층', phone: '031-8017-3250'
    },

    {
        id: 353, position: new naver.maps.LatLng(37.41341705106573, 127.13374744071228), type: 'service', industry: '기타', name: '드림아트홀', item: '공연시설',
        address: '경기도 성남시 분당구 매화로 55번길 6-8 b01호', phone: '010-4275-1216'
    },

    {
        id: 354, position: new naver.maps.LatLng(37.35242478078316, 127.11314845653958), type: 'service', industry: '기타', name: '분당 베누스토/마이심포니', item: '악기레슨, 아마추어 오케스트라, 연습실대여',
        address: '경기도 성남시 분당구 미금로 215 대원칸타빌 상가 203호', phone: '010-2885-6947'
    },

    {
        id: 355, position: new naver.maps.LatLng(37.349647065763435, 127.11419844464568), type: 'service', industry: '부동산중개업', name: '보람공인중개사사무소', item: '',
        address: '경기도 성남시 분당구 미금로177.신원상가', phone: '031.717.4900'
    },

    {
        id: 356, position: new naver.maps.LatLng(37.3460858370862, 127.1099163565366), type: 'service', industry: '기타', name: '공간정오', item: '여성전용작업실. 동네책방. 문화프로그램운영. 리필스테이션 ',
        address: '경기도 성남시 분당구 미금일로85 404호 ', phone: ' 031-762-0314'
    },

    {
        id: 357, position: new naver.maps.LatLng(37.370686445482136, 127.11725896339166), type: 'service', industry: '학원', name: '스쿨 에이이아이오유', item: '성인전문 영어회화 (개인 및 업체출강 가능: 회화, 비지니스, ielts, opic)',
        address: '경기도 성남시 분당구 백현로', phone: '01050232123'
    },

    {
        id: 358, position: new naver.maps.LatLng(37.37747562557906, 127.11025925711142), type: 'service', industry: '법률/상담', name: 'EPL코칭(이피엘코칭)', item: '기업코칭강의',
        address: '경기도 성남시 분당구 백현로 100,정자아이파크 1611호', phone: '010-5277-1106'
    },

    {
        id: 359, position: new naver.maps.LatLng(37.37751209122497, 127.1112158525875), type: 'service', industry: '독서실/고시원', name: 'SOS 스터디센터(관리형학습센터)', item: '스터디센터',
        address: '경기도 성남시 분당구 백현로 97, 다운타운빌딩 6층 SOS스터디센터', phone: '031-717-1616'
    },

    {
        id: 360, position: new naver.maps.LatLng(37.4124194694907, 127.14001527140222), type: 'service', industry: '보육시설', name: '울타리어린이집', item: '보육시설',
        address: '경기도 성남시 분당구 벌말로 50번길 14 702동 102호 (야탑동, 매화마을화성빌리지)', phone: '031 707 2780'
    },

    {
        id: 361, position: new naver.maps.LatLng(37.40015181833133, 127.11211618235232), type: 'service', industry: '기타', name: '레푸스 판교점', item: '발 치료',
        address: '경기도 성남시 분당구 분당내곡로 151 삼도타워 304호 ', phone: '031-702-8870'
    },

    {
        id: 362, position: new naver.maps.LatLng(37.37641493375481, 127.1458466253491), type: 'service', industry: '건축/인테리어/디자인', name: '스튜디오 단한', item: '인테리어 설계',
        address: '경기도 성남시 분당구 분당동 105-8번지 1층', phone: '031-701-8480'
    },

    {
        id: 363, position: new naver.maps.LatLng(37.37235847953279, 127.13973254862078), type: 'service', industry: '피부관리', name: '권영미스킨케어', item: '',
        address: '경기도 성남시 분당구 분당로 263번길 35 굿모닝프라자 501호', phone: '010-4092-6361'
    },

    {
        id: 364, position: new naver.maps.LatLng(37.372925443670006, 127.12906089913301), type: 'service', industry: '건축/인테리어/디자인', name: '씨제이상사', item: '건축,토목',
        address: '경기도 성남시 분당구 분당로190 샛별마을 110-701', phone: '010-4203-1247'
    },

    {
        id: 365, position: new naver.maps.LatLng(37.38483277110277, 127.12268902931736), type: 'service', industry: '병원', name: '하나 이비인후과', item: '',
        address: '경기도 성남시 분당구 분당로53번길 20 이랜드프라자 4층', phone: '031-701-1175'
    },

    {
        id: 366, position: new naver.maps.LatLng(37.362917961102404, 127.1217385258542), type: 'service', industry: '부동산중개업', name: '마트공인중개사사무소', item: '',
        address: '경기도 성남시 분당구 불정로 195 우성상가 113호(정자동, 정든마을우성6단지아파트)', phone: '031-713-7600'
    },

    {
        id: 367, position: new naver.maps.LatLng(37.36677647228758, 127.12678137930872), type: 'service', industry: '학원', name: '팀플체대입시 / 팀플짐', item: '입시체육학원 & PT',
        address: '경기도 성남시 분당구 불정로 254 삼평프라자 B1 ', phone: '031-716-1020'
    },

    {
        id: 368, position: new naver.maps.LatLng(37.37464065103353, 127.13700491000297), type: 'service', industry: '법률/상담', name: '분당법무사합동사무소', item: '법무사사무소',
        address: '경기도 성남시 분당구 불정로 380 동남프라자303호', phone: '031-608-0011'
    },

    {
        id: 369, position: new naver.maps.LatLng(37.38665305332443, 127.12413708260479), type: 'service', industry: '피부관리', name: '리본 스킨 스튜디오', item: '',
        address: '경기도 성남시 분당구 불정로 381(서현동)효자촌 동진프라자 2층 208호', phone: '010-3373-4122'
    },

    {
        id: 370, position: new naver.maps.LatLng(37.37677343795294, 127.14042929465877), type: 'service', industry: '세탁소', name: '워시앤조이셀프빨래방 분당서현점', item: '',
        address: '경기도 성남시 분당구 불정로 420번길6', phone: '010-5904-8442'
    },

    {
        id: 371, position: new naver.maps.LatLng(37.36151805248774, 127.1147281406871), type: 'service', industry: '기타', name: '수수공방', item: '도예공방',
        address: '경기도 성남시 분당구 불정로 87번길 10(정자동)', phone: '031-714-5735'
    },

    {
        id: 372, position: new naver.maps.LatLng(37.366989894514894, 127.12683191792775), type: 'service', industry: '학원', name: '감성수학', item: '초중고수학',
        address: '경기도 성남시 분당구 불정로256 청우프라자4층', phone: '031-712-0096'
    },

    {
        id: 373, position: new naver.maps.LatLng(37.393243174966116, 127.07211927932134), type: 'service', industry: '미용실', name: '씨엘헤어', item: '',
        address: '경기도 성남시 분당구 산운로 98 산운마을 8단지 상가2층', phone: '031-8016-7224'
    },

    {
        id: 374, position: new naver.maps.LatLng(37.40382093423039, 127.10108169467189), type: 'service', industry: '기타', name: '창성에이스산업', item: '소방재품',
        address: '경기도 성남시 분당구 삼평동 판교로 253', phone: ''
    },

    {
        id: 375, position: new naver.maps.LatLng(37.40261625191871, 127.11043351794484), type: 'service', industry: '한의원', name: '소예한의원', item: '',
        address: '경기도 성남시 분당구 삼평동 판교역로 240 삼환하이펙스A동 210호', phone: '031-698-3575'
    },

    {
        id: 376, position: new naver.maps.LatLng(37.38871304220244, 127.15455873328354), type: 'service', industry: '학원', name: '코드아트랩', item: '아동미술',
        address: '경기도 성남시 분당구 새마을로233번길13', phone: '010-6789-0331'
    },

    {
        id: 377, position: new naver.maps.LatLng(37.37521505899845, 127.1368382100032), type: 'service', industry: '피부관리', name: '그린스킨케어', item: '',
        address: '경기도 성남시 분당구 서현동 305-1 동진프라자 2층 213', phone: '031-709-1070'
    },

    {
        id: 378, position: new naver.maps.LatLng(37.38209639436869, 127.1281247793161), type: 'service', industry: '부동산중개업', name: '굿모닝부동산', item: '',
        address: '경기도 성남시 분당구 서현동 89-7', phone: '031-704-8888'
    },

    {
        id: 379, position: new naver.maps.LatLng(37.37402861754817, 127.13792151000249), type: 'service', industry: '학원', name: '분당중앙검도', item: '검도',
        address: '경기도 성남시 분당구 서현동 미래타운A상가 2070호', phone: '031-709-1500'
    },

    {
        id: 380, position: new naver.maps.LatLng(37.389834213740116, 127.12249764862918), type: 'service', industry: '교정/재활', name: '프로그레시브', item: '자세 및 체형 교정센타',
        address: '경기도 성남시 분당구 서현동서현로170번길 풍림아이원플러스D동1704호', phone: '010-3765-5257'
    },

    {
        id: 381, position: new naver.maps.LatLng(37.38906654609784, 127.12583369466473), type: 'service', industry: '미용실', name: '헤어매직', item: '',
        address: '경기도 성남시 분당구 서현로 181', phone: '031-702-6846'
    },

    {
        id: 382, position: new naver.maps.LatLng(37.38969782323431, 127.1226693097799), type: 'service', industry: '여행', name: '선진항공여행사 ', item: '전세버스',
        address: '경기도 성남시 분당구 서현로170 D1501', phone: '0317837008'
    },

    {
        id: 383, position: new naver.maps.LatLng(37.38724635752635, 127.12551447909208), type: 'service', industry: '한의원', name: '동신한의원', item: '',
        address: '경기도 성남시 분당구 서현로210번길 2(지번) 서현동 245-3', phone: '031-707-9993'
    },

    {
        id: 384, position: new naver.maps.LatLng(37.36583091756768, 127.10633797908172), type: 'service', industry: '학원', name: '피아노브릿지음악학원', item: '성인음악학원',
        address: '경기도 성남시 분당구 성남대로 331번길 13 507호', phone: '010-5044-6290'
    },

    {
        id: 385, position: new naver.maps.LatLng(37.367904566438874, 127.10768641373924), type: 'service', industry: '병원', name: '서울바를정치과', item: '',
        address: '경기도 성남시 분당구 성남대로 349 시그마타워 402호 ', phone: '031-726-3427'
    },

    {
        id: 386, position: new naver.maps.LatLng(37.370926196430716, 127.10754887908408), type: 'service', industry: '학원', name: '미국유학닷컴 분당지사', item: '',
        address: '경기도 성남시 분당구 성남대로 381.', phone: '031-711-2167'
    },

    {
        id: 387, position: new naver.maps.LatLng(37.34082410167879, 127.10857855578656), type: 'service', industry: '피부관리', name: '올리비아 아이', item: '뷰티(속눈섭파마.속눈썹연장)',
        address: '경기도 성남시 분당구 성남대로 51 포스빌 오피스텔', phone: '010-7519-7854'
    },

    {
        id: 388, position: new naver.maps.LatLng(37.400025996228436, 127.12580048596587), type: 'service', industry: '미용실', name: '쥬비미용실', item: '',
        address: '경기도 성남시 분당구 성남대로 779번길 13,106호(이매동,오성프라자)', phone: '031-704-0203'
    },

    {
        id: 389, position: new naver.maps.LatLng(37.41114551540989, 127.12832986826606), type: 'service', industry: '여행', name: '(주)이엔휴', item: '여행사',
        address: '경기도 성남시 분당구 성남대로 916번길 11, 526(야탑동, 글라스타워)', phone: '070-4129-7602'
    },

    {
        id: 390, position: new naver.maps.LatLng(37.351467428591924, 127.1092584023578), type: 'service', industry: '병원', name: '청담윤 성형외과', item: '성형외과/피부과',
        address: '경기도 성남시 분당구 성남대로168 미도프라자3층(신분당선1번출구)', phone: '031 -712-5502'
    },

    {
        id: 391, position: new naver.maps.LatLng(37.36545513639947, 127.10764564388901), type: 'service', industry: '학원', name: '아트파일미술학원', item: '입시미술',
        address: '경기도 성남시 분당구 성남대로331 3-9, 503호 (정자동,백궁프라자3차)', phone: '031-704-7757'
    },

    {
        id: 392, position: new naver.maps.LatLng(37.36482559890286, 127.10749823702093), type: 'service', industry: '학원', name: 'FICUS영어학원', item: '',
        address: '경기도 성남시 분당구 성남대로331번길 3-13 대명제스트빌딩 4층', phone: '0317260509'
    },

    {
        id: 393, position: new naver.maps.LatLng(37.372456104291615, 127.1069056563377), type: 'service', industry: '네일숍', name: '끌로디아', item: '속눈썹 //(구)언니의속눈썹',
        address: '경기도 성남시 분당구 성남대로393 분당두산위브파빌리온 A동1층 상가', phone: '010-7404-3228'
    },

    {
        id: 394, position: new naver.maps.LatLng(37.380671657779466, 127.11824080183592), type: 'service', industry: '건축/인테리어/디자인', name: '한솔 비아이엠', item: '',
        address: '경기도 성남시 분당구 수내로 54 보보스쉐르빌 1714호', phone: '031-714-6830'
    },

    {
        id: 395, position: new naver.maps.LatLng(37.37114746762293, 127.12897674099392), type: 'service', industry: '부동산중개업', name: '삼부공인중개소', item: '',
        address: '경기도 성남시 분당구 수내로201 샛별마을 삼부아파트 분산상가101호', phone: '031-705-9994'
    },

    {
        id: 396, position: new naver.maps.LatLng(37.4118151512691, 127.13606258489891), type: 'service', industry: '학원', name: '행복한수학공부방 ', item: '',
        address: '경기도 성남시 분당구 야탑동 매화로38번길15 (2F)', phone: '010-5554-0905'
    },

    {
        id: 397, position: new naver.maps.LatLng(37.41510254314086, 127.13015429099836), type: 'service', industry: '여행', name: '모두투어', item: '여행사',
        address: '경기도 성남시 분당구 야탑동 판교로 477 저우스토아 (이매점)', phone: '010-3173-3952'
    },

    {
        id: 398, position: new naver.maps.LatLng(37.410424894029, 127.13506817012231), type: 'service', industry: '미용실', name: '애프터선데이클럽', item: '',
        address: '경기도 성남시 분당구 야탑로 149번길 5 지하1층', phone: '010-4320-3766'
    },

    {
        id: 399, position: new naver.maps.LatLng(37.409053830073205, 127.1219271354627), type: 'service', industry: '건축/인테리어/디자인', name: '토브플랜 ', item: '',
        address: '경기도 성남시 분당구 야탑로 28 우당프라자 b1', phone: '01053040092'
    },

    {
        id: 400, position: new naver.maps.LatLng(37.41082824695809, 127.13499924682813), type: 'service', industry: '기타', name: '지지스튜디오', item: '사진관',
        address: '경기도 성남시 분당구 야탑로139번길6-11', phone: '031-707-4479'
    },

    {
        id: 401, position: new naver.maps.LatLng(37.40826150188988, 127.12147496216802), type: 'service', industry: '기타', name: '우리ENG', item: '전기공사, 전기관련기술용역',
        address: '경기도 성남시 분당구 야탑로20', phone: '010-8944-5683'
    },

    {
        id: 402, position: new naver.maps.LatLng(37.4084930188452, 127.1448183508033), type: 'service', industry: '건축/인테리어/디자인', name: '에이알피앤씨', item: '도장공사',
        address: '경기도 성남시 분당구 야탑로237 백마빌딩502호', phone: '010-3255-9454'
    },

    {
        id: 403, position: new naver.maps.LatLng(37.39955771683608, 127.12701877011659), type: 'service', industry: '건축/인테리어/디자인', name: '건축사사무소 에이피엠', item: '건축설계, 감리',
        address: '경기도 성남시 분당구 양현로 166번길 15. 308호', phone: '031-724-4854'
    },

    {
        id: 404, position: new naver.maps.LatLng(37.41704400808698, 127.13605250819583), type: 'service', industry: '병원', name: '젠동물병원', item: '동물병원',
        address: '경기도 성남시 분당구 양현로 479 2층 (야탑 119안전센터 옆)', phone: '031-752-0075'
    },

    {
        id: 405, position: new naver.maps.LatLng(37.390479414586984, 127.12733823886487), type: 'service', industry: '기타', name: '순영공방', item: '옷과 자수',
        address: '경기도 성남시 분당구 양현로 94번길 28 동신상가 201호 ', phone: '010-7111-3456'
    },

    {
        id: 406, position: new naver.maps.LatLng(37.399421345602164, 127.12740500818703), type: 'service', industry: '학원', name: '비유아트취미미술 ', item: '',
        address: '경기도 성남시 분당구 양현로166번길 15 장수빌딩 2층 201호', phone: '031-752-2123'
    },

    {
        id: 407, position: new naver.maps.LatLng(37.39159531326501, 127.12647760818317), type: 'service', industry: '학원', name: 'GGE 해법수학(이매)', item: '수학',
        address: '경기도 성남시 분당구 양현로94길 9 성우빌딩2층', phone: ''
    },

    {
        id: 408, position: new naver.maps.LatLng(37.391883330472055, 127.12665420023009), type: 'service', industry: '세탁소', name: '백양세탁소', item: '',
        address: '경기도 성남시 분당구 양현로94번길 이매촌동신3단지내 상가205호', phone: '031-703-0134'
    },

    {
        id: 409, position: new naver.maps.LatLng(37.379813798351684, 127.05017644985753), type: 'service', industry: '기타', name: '문예진캘리그라피', item: '캘리그리피 수업, 수제도장(전각) 제작 등',
        address: '경기도 성남시 분당구 운중동 석운로 440', phone: '010-4552-0121'
    },

    {
        id: 410, position: new naver.maps.LatLng(37.392722884617534, 127.07788101001167), type: 'service', industry: '헬스/필라테스', name: '턴핏PT', item: '피트니스',
        address: '경기도 성남시 분당구 운중로 131, 8층 803, 804호(스타식스 매트로)', phone: '031-698-4246'
    },

    {
        id: 411, position: new naver.maps.LatLng(37.391588368608154, 127.09228385655834), type: 'service', industry: '피부관리', name: '이파리본 스파', item: '',
        address: '경기도 성남시 분당구 운중로 225번길 58-1', phone: '031-703-0456'
    },

    {
        id: 412, position: new naver.maps.LatLng(37.40001984757293, 127.12585263328897), type: 'service', industry: '학원', name: '이투스247(이매점)', item: '독학 재수학원',
        address: '경기도 성남시 분당구 이매동 105-2', phone: '031-708-0247'
    },

    {
        id: 413, position: new naver.maps.LatLng(37.39196063121767, 127.12565964863042), type: 'service', industry: '학원', name: '해원국어교습소', item: '국어 ',
        address: '경기도 성남시 분당구 이매동 양현로 94번길 11  208호 ', phone: '031-781-7005'
    },

    {
        id: 414, position: new naver.maps.LatLng(37.39928729950812, 127.12947619466956), type: 'service', industry: '미용실', name: '김가이헤어', item: '',
        address: '경기도 성남시 분당구 이매동86-11번지 1층 김가이헤어.', phone: '031 704 7096'
    },

    {
        id: 415, position: new naver.maps.LatLng(37.3920014062716, 127.1329268486303), type: 'service', industry: '기타', name: '제이기획', item: '편집 기획 인쇄',
        address: '경기도 성남시 분당구 이매로 124 b02호', phone: '010 3323 6186'
    },

    {
        id: 416, position: new naver.maps.LatLng(37.39573006202827, 127.12221320259631), type: 'service', industry: '학원', name: '트리니티주니어스쿨 어학원', item: '유치.초등 영어교육',
        address: '경기도 성남시 분당구 이매로 15', phone: '031 -708 -5400'
    },

    {
        id: 417, position: new naver.maps.LatLng(37.394845156743926, 127.12225062535792), type: 'service', industry: '건축/인테리어/디자인', name: '보람디자인', item: '',
        address: '경기도 성남시 분당구 이매로 16', phone: '031-802-4424'
    },

    {
        id: 418, position: new naver.maps.LatLng(37.395562684083366, 127.12624651001309), type: 'service', industry: '학원', name: '분당재성학원', item: '',
        address: '경기도 성남시 분당구 이매로 47 3층 302호', phone: '031-781-4300'
    },

    {
        id: 419, position: new naver.maps.LatLng(37.39569581237116, 127.12664572932262), type: 'service', industry: '학원', name: '베를린실용음악학원', item: '음악학원',
        address: '경기도 성남시 분당구 이매로 51 한라프라자 203호 (이매역4번출구)', phone: '031-707-8462'
    },

    {
        id: 420, position: new naver.maps.LatLng(37.39441706611742, 127.1300658867387), type: 'service', industry: '자동차수리', name: '분당카병원', item: '',
        address: '경기도 성남시 분당구 이매로 84 (이매동261) 1층', phone: '031-708-7735'
    },

    {
        id: 421, position: new naver.maps.LatLng(37.39411020944582, 127.12985131001243), type: 'service', industry: '자동차수리', name: '분당CAR병원', item: '자동차 외장관리 및 외형복원',
        address: '경기도 성남시 분당구 이매로84 1층', phone: '031-708-7735'
    },

    {
        id: 422, position: new naver.maps.LatLng(37.41605725959542, 127.12990594864208), type: 'service', industry: '학원', name: '야탑율음악학원', item: '피아노전문',
        address: '경기도 성남시 분당구 장미로101, 1동3층 1302호(야탑동,장미마을근린상가)', phone: ' 031-707-7734'
    },

    {
        id: 423, position: new naver.maps.LatLng(37.36427843114909, 127.11745586396218), type: 'service', industry: '학원', name: '수제이수학학원', item: '',
        address: '경기도 성남시 분당구 정자2동 정자로 113', phone: '031 719 1106'
    },

    {
        id: 424, position: new naver.maps.LatLng(37.36570718807797, 127.12063957137951), type: 'service', industry: '미용실', name: '돼지이용원 ', item: '',
        address: '경기도 성남시 분당구 정자2동 정자로 143', phone: '031-714-7537'
    },

    {
        id: 425, position: new naver.maps.LatLng(37.37125187723591, 127.10542120258451), type: 'service', industry: '학원', name: '아트앤아이 미술학원(유학미술)', item: '',
        address: '경기도 성남시 분당구 정자동 12-1 백궁지엔느 빌딩 4층', phone: '031-716-2722 '
    },

    {
        id: 426, position: new naver.maps.LatLng(37.373946923955714, 127.11368724862173), type: 'service', industry: '자동차수리', name: '오토챠밍', item: '',
        address: '경기도 성남시 분당구 정자동 내정로129번길 32', phone: '031-711-1327'
    },

    {
        id: 427, position: new naver.maps.LatLng(37.36899249904613, 127.11013205258367), type: 'service', industry: '미용실', name: '뷰티피부관리샵', item: '',
        address: '경기도 성남시 분당구 정자동 느티 공무원 주공아파트 70번지 4단지상가내 1층 112호', phone: '031-713-8464'
    },

    {
        id: 428, position: new naver.maps.LatLng(37.36127777527242, 127.10788919068695), type: 'service', industry: '기타', name: '라인 아트', item: '갤러리 ',
        address: '경기도 성남시 분당구 정자동 성남대로 275', phone: '010 3703 4930'
    },

    {
        id: 429, position: new naver.maps.LatLng(37.3711627398654, 127.10743849862027), type: 'service', industry: '학원', name: '헤더스잉글리쉬', item: '',
        address: '경기도 성남시 분당구 정자동 성남대로385 분당클리닉 701호', phone: '031 -726 -6262'
    },

    {
        id: 430, position: new naver.maps.LatLng(37.36289044187889, 127.11770687930675), type: 'service', industry: '미용실', name: '플로라', item: '',
        address: '경기도 성남시 분당구 정자로 112', phone: '010-3020-8474'
    },

    {
        id: 431, position: new naver.maps.LatLng(37.364254165477846, 127.12101135888318), type: 'service', industry: '골프연습장', name: 'LG골프연습장', item: '',
        address: '경기도 성남시 분당구 정자로 143 한솔마을근린상가 (우)13608 정자동 111번지 b01호 LG골프연습장', phone: '031-711-1855'
    },

    {
        id: 432, position: new naver.maps.LatLng(37.36329197702935, 127.11260715948569), type: 'service', industry: '학원', name: '개인과외', item: '개인과외(영어)',
        address: '경기도 성남시 분당구 정자로 56 라이프2단지 201-509', phone: '010-5291-9133'
    },

    {
        id: 433, position: new naver.maps.LatLng(37.361616351727896, 127.10531790999669), type: 'service', industry: '세탁소', name: '크린토피아(스타파크점)', item: '',
        address: '경기도 성남시 분당구 정자일로 121 상가동 1층 비-31호', phone: '031- 717- 5503'
    },

    {
        id: 434, position: new naver.maps.LatLng(37.36857033382831, 127.10576017930941), type: 'service', industry: '병원', name: '티엘씨 소아과', item: '',
        address: '경기도 성남시 분당구 정자일로 197 푸르지오시티 2차 203호', phone: '031-607-1001'
    },

    {
        id: 435, position: new naver.maps.LatLng(37.371450199122414, 127.10522760207289), type: 'service', industry: '미용실', name: '베일리뷰티', item: '미용실',
        address: '경기도 성남시 분당구 정자일로 213번길 19 아이파크2 201동 상가 2층 베일리뷰티', phone: '031-717-1010'
    },

    {
        id: 436, position: new naver.maps.LatLng(37.371456510859346, 127.10567869465606), type: 'service', industry: '학원', name: '바인 에듀케이션', item: '학원/유학원',
        address: '경기도 성남시 분당구 정자일로 227', phone: '031-8023-5565'
    },

    {
        id: 437, position: new naver.maps.LatLng(37.37197781109159, 127.10614251792998), type: 'service', industry: '학원', name: '온스콜라 ', item: '',
        address: '경기도 성남시 분당구 정자일로 234 태남프라자 502호 온스콜라 ', phone: ''
    },

    {
        id: 438, position: new naver.maps.LatLng(37.37196304949805, 127.10640481000172), type: 'service', industry: '학원', name: ' K.라벨르 뷰티아카데미', item: '미용학원',
        address: '경기도 성남시 분당구 정자일로 240 206호', phone: '031-714-4523 '
    },

    {
        id: 439, position: new naver.maps.LatLng(37.37997370979356, 127.1283814253508), type: 'service', industry: '자동차수리', name: '유앤아이카', item: '',
        address: '경기도 성남시 분당구 중앙공원로 20 시범단지 현대아파트 분산상가 1동', phone: '031-702-0348'
    },

    {
        id: 440, position: new naver.maps.LatLng(37.38364988109417, 127.12544224862636), type: 'service', industry: '학원', name: '바른수학', item: '',
        address: '경기도 성남시 분당구 중앙공원로 31번길 42', phone: '031-708- 3014'
    },

    {
        id: 441, position: new naver.maps.LatLng(37.38387503021491, 127.12548914466215), type: 'service', industry: '학원', name: '샘물피아노', item: '',
        address: '경기도 성남시 분당구 중앙공원로 31번길42.서현파크프라자2층', phone: '050- 71347-0055'
    },

    {
        id: 442, position: new naver.maps.LatLng(37.38222419621389, 127.12810022931605), type: 'service', industry: '건축/인테리어/디자인', name: '지음(디자인)', item: '',
        address: '경기도 성남시 분당구 중앙공원로 39번길 7 삼성한신근린상가 131호', phone: '010-3519-4844'
    },

    {
        id: 443, position: new naver.maps.LatLng(37.38195999136656, 127.12808186397083), type: 'service', industry: '학원', name: '뮤엠영어 서현초점', item: '영어',
        address: '경기도 성남시 분당구 중앙공원로39번길 7', phone: '031-708-0579'
    },

    {
        id: 444, position: new naver.maps.LatLng(37.38072909765585, 127.12945297931552), type: 'service', industry: '기타', name: '브랑시기', item: ' 오일샵(도테라), 피부오일',
        address: '경기도 성남시 분당구 중앙공원로40번길4  현대카스빌딩 136호', phone: '010-2762-7597'
    },

    {
        id: 445, position: new naver.maps.LatLng(37.3801775991317, 127.13033135604154), type: 'service', industry: '부동산중개업', name: '골드부동산', item: '',
        address: '경기도 성남시 분당구 중앙공원로40번길8,156호(서현동,현대아케이드)', phone: '031-701-6600'
    },

    {
        id: 446, position: new naver.maps.LatLng(37.34435641269548, 127.10585060998832), type: 'service', industry: '건축/인테리어/디자인', name: '비앤씨글로벌(주)', item: '건설,제조,철골공사',
        address: '경기도 성남시 분당구 탄천상로 164 C동 427호 (구미동,시그마2오피스텔)', phone: '070-4335-7004'
    },

    {
        id: 447, position: new naver.maps.LatLng(37.40018718555042, 127.12784946723652), type: 'service', industry: '학원', name: '한국가이던스(주) ', item: '교육서비스',
        address: '경기도 성남시 분당구 판교로 255번길 9-22 우림wcity A동 801호', phone: ''
    },

    {
        id: 448, position: new naver.maps.LatLng(37.40573720073437, 127.12205651794648), type: 'service', industry: '부동산중개업', name: '모범공인중개사', item: '',
        address: '경기도 성남시 분당구 판교로 436,104호(이매동,아름마을)', phone: '031-704-5000'
    },

    {
        id: 449, position: new naver.maps.LatLng(37.39598488972349, 127.09786712597783), type: 'service', industry: '부동산중개업', name: '황금부동산', item: '',
        address: '경기도 성남시 분당구 판교로 478, 105호', phone: '010-3749-7307'
    },

    {
        id: 450, position: new naver.maps.LatLng(37.41142202893087, 127.128080042978), type: 'service', industry: '자동차수리', name: '블루핸즈 현대 야탑써비스', item: '',
        address: '경기도 성남시 분당구 판교로 582', phone: '031-701-5566'
    },

    {
        id: 451, position: new naver.maps.LatLng(37.390486916616496, 127.11197234121303), type: 'service', industry: '세탁소', name: '크린토피아백현마을점', item: '',
        address: '경기도 성남시 분당구 판교역로 102백현마을5단지 가상가 102호', phone: '031-703-8271'
    },

    {
        id: 452, position: new naver.maps.LatLng(37.38566676576426, 127.11215533328206), type: 'service', industry: '건축/인테리어/디자인', name: 'WHDM', item: '디자인(제품/인테리어)',
        address: '경기도 성남시 분당구 판교역로 50번길 34', phone: '010-8847-0909'
    },

    {
        id: 453, position: new naver.maps.LatLng(37.38771764990164, 127.10960491793774), type: 'service', industry: '부동산중개업', name: '8단지부동산', item: '',
        address: '경기도 성남시 분당구 판교역로 72 상가동 102호', phone: '031-8017-8017'
    },

    {
        id: 454, position: new naver.maps.LatLng(37.37698538954815, 127.1126626332778), type: 'service', industry: '기타', name: '베데스다', item: '마사지샵',
        address: '경기도 성남시 분당구 황새울로 200번길 22 (수내동,한솔인피니티)311호', phone: '031-606-0304'
    },

    {
        id: 455, position: new naver.maps.LatLng(37.37667106541984, 127.11274264120676), type: 'service', industry: '건축/인테리어/디자인', name: '디자인 하임 한샘대리점', item: '',
        address: '경기도 성남시 분당구 황새울로 200번길 22,910호(한솔인피니티)', phone: '010-5423-7314'
    },

    {
        id: 456, position: new naver.maps.LatLng(37.37912581250678, 127.11587545940256), type: 'service', industry: '병원', name: '분당예치과', item: '',
        address: '경기도 성남시 분당구 황새울로 258번길 37(수내동, 흥국생명빌딩 2층)', phone: '031-708-2828'
    },

    {
        id: 457, position: new naver.maps.LatLng(37.378737214365195, 127.11564437535024), type: 'service', industry: '부동산중개업', name: '초림부동산', item: '',
        address: '경기도 성남시 분당구 황새울로 258번길 43, 수내프라자 318호', phone: '031-718-1700'
    },

    {
        id: 458, position: new naver.maps.LatLng(37.385323568418656, 127.12171937931764), type: 'service', industry: '부동산중개업', name: '천지부동산', item: '',
        address: '경기도 성남시 분당구 황새울로 330번길 16 101호', phone: '031-706-5205'
    },

    {
        id: 459, position: new naver.maps.LatLng(37.3864407704775, 127.12202760604461), type: 'service', industry: '네일숍', name: '발라드네일', item: '',
        address: '경기도 성남시 분당구 황새울로 335번길 5 N타운빌딩 1층', phone: '031-696-1313'
    },

    {
        id: 460, position: new naver.maps.LatLng(37.37894182756832, 127.11551562931447), type: 'service', industry: '기타', name: '예 수선실', item: '각종 의류수선&리폼',
        address: '경기도 성남시 분당구 황새울로258번길43 현대수내프라자3층 324호 ', phone: '031-8016-0990'
    },

    {
        id: 461, position: new naver.maps.LatLng(37.37234517594226, 127.14003463723998), type: 'service', industry: '학원', name: '토킹클럽서현어학원', item: '',
        address: '경기도 성남시 분당로 263번길 39 레이디파크빌딩 302-303호', phone: '031-707-7905'
    },

    {
        id: 462, position: new naver.maps.LatLng(37.36935959186642, 127.1074510486194), type: 'service', industry: '부동산중개업', name: '분당부동산 ', item: '',
        address: '경기도 성남시 분댱구 느티로27', phone: '031-735-2000'
    },

    {
        id: 463, position: new naver.maps.LatLng(37.3888140477064, 127.12395264070041), type: 'service', industry: '기타', name: '모모', item: '두피관리샵',
        address: '경기도 성남시 서현동 서현에클라트1차 537호', phone: '010-3222-9653'
    },

    {
        id: 464, position: new naver.maps.LatLng(37.3861278694952, 127.12385350259186), type: 'service', industry: '미용실', name: '이디엘헤어', item: '',
        address: '경기도 성남시 서현로 210번길 20, 2층 10호', phone: '031-707-7771'
    },

    {
        id: 465, position: new naver.maps.LatLng(37.42745552275459, 127.09919771002856), type: 'service', industry: '부동산중개업', name: '자이풍경채 공인중개사', item: '',
        address: '경기도 성남시 수정구 고등공원로 19,제일풍경채상가2동 120호', phone: '031-715-7900'
    },

    {
        id: 466, position: new naver.maps.LatLng(37.439775145404134, 127.14235839468917), type: 'service', industry: '기타', name: '(주)무림하우징', item: '건물 및 아파트관리',
        address: '경기도 성남시 수정구 산성대로 223 9층', phone: '010-3778-5437'
    },

    {
        id: 467, position: new naver.maps.LatLng(37.44249361841023, 127.14985872538134), type: 'service', industry: '기타', name: '성남우체국보험팀', item: '우체국보험',
        address: '경기도 성남시 수정구 산성대로301', phone: '010-2797-8997'
    },

    {
        id: 468, position: new naver.maps.LatLng(37.439174801713136, 127.12983302537948), type: 'service', industry: '미용실', name: '태후사랑', item: '',
        address: '경기도 성남시 수정구 성남대로 1210번길13-12', phone: '010-3097-7457'
    },

    {
        id: 469, position: new naver.maps.LatLng(37.44011666818186, 127.12999103330841), type: 'service', industry: '부동산중개업', name: '우리공인 중개사 사무소', item: '',
        address: '경기도 성남시 수정구 수정남로 18번길 1', phone: '031-757-6469'
    },

    {
        id: 470, position: new naver.maps.LatLng(37.440658894441455, 127.13313724072559), type: 'service', industry: '부동산중개업', name: '양지공인중개사', item: '',
        address: '경기도 성남시 수정구 수정남로46번길1, 1층', phone: '031-753-3137'
    },

    {
        id: 471, position: new naver.maps.LatLng(37.44198390364672, 127.13194293330938), type: 'service', industry: '기타', name: '동성당', item: '시계',
        address: '경기도 성남시 수정구 수정로 109', phone: '031-753-3927'
    },

    {
        id: 472, position: new naver.maps.LatLng(37.449299395926836, 127.14051066400332), type: 'service', industry: '학원', name: '금광태권도장 ', item: '',
        address: '경기도 성남시 수정구 시민로 234   4층 ', phone: '031.755.3396'
    },

    {
        id: 473, position: new naver.maps.LatLng(37.441427495270155, 127.14454470244547), type: 'service', industry: '병원', name: '삼성통증의학과', item: '',
        address: '경기도 성남시 수정구 신흥동 수정로 208 메드위즈빌딩 3층', phone: '031-749-6599'
    },

    {
        id: 474, position: new naver.maps.LatLng(37.458921102893605, 127.16459048677024), type: 'service', industry: '병원', name: '서울하나치과', item: '',
        address: '경기도 성남시 수정구 양지동 229  3층', phone: '031-734-9200'
    },

    {
        id: 475, position: new naver.maps.LatLng(37.473381248162724, 127.1426636846459), type: 'service', industry: '학원', name: '위례 YBM잉글루 트램영어 제1캠퍼스', item: '',
        address: '경기도 성남시 수정구 위례광장로 310 우성트램타워 9층 YBM잉글루', phone: '031-757-0901/ 010-6272-0221'
    },

    {
        id: 476, position: new naver.maps.LatLng(37.467412981637985, 127.14836738728589), type: 'service', industry: '학원', name: '이화루체음악학원 ', item: '',
        address: '경기도 성남시 수정구 위례동로61 자연앤래미안이편한세상 상가동201호', phone: '031-755.9333'
    },

    {
        id: 477, position: new naver.maps.LatLng(37.420646663165776, 127.11654494864416), type: 'service', industry: '기타', name: '카야인터내셔널', item: 'NGO',
        address: '경기도 성남시 수정구 탄천로307번길 14, 3층', phone: '070-5121-2198'
    },

    {
        id: 478, position: new naver.maps.LatLng(37.45006524764525, 127.14002445658694), type: 'service', industry: '미용실', name: '김은희 헤어겔러리', item: '',
        address: '경기도 성남시 수정구 태평4동 남문로 129번길 16-1 1층', phone: '010-5325-2393'
    },

    {
        id: 479, position: new naver.maps.LatLng(37.44918245007595, 127.13201741796743), type: 'service', industry: '학원', name: '미시간학원', item: '영어,수학 교습',
        address: '경기도 성남시 수정구 태평로 48번길 10', phone: '031-721-2468'
    },

    {
        id: 480, position: new naver.maps.LatLng(37.467963728653395, 127.13786379470301), type: 'service', industry: '기타', name: 'PJ렌트카 성남영업소', item: '',
        address: '경기도 성남시 위례서일로1길 3-6 위례헤리움 401호', phone: '010-8512-5026'
    },

    {
        id: 481, position: new naver.maps.LatLng(), type: 'service', industry: '네일숍', name: '로즌(Rosen)', item: '네일, (파티) 대여룸',
        address: '경기도 성남시 정자동 67-5(느티로 69번길 12)', phone: '010-5623-5287'
    },

    {
        id: 482, position: new naver.maps.LatLng(), type: 'service', industry: '미용실', name: '김영헤어', item: '',
        address: '경기도 성남시 정자동 정자로 113 한솔주공5단지 상가', phone: '010-6348-0415'
    },

    {
        id: 483, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '셀리맘아트 미술학원', item: '미술학원',
        address: '경기도 성남시 정자일로 55 두산위브 109동 303호', phone: '070-4143-0722'
    },

    {
        id: 484, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '하림수학교습소', item: '수학',
        address: '경기도 성남시 중원구 금빛로 49(금광동) 대진빌딩 6층', phone: '010-4860-6913'
    },

    {
        id: 485, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '거성공인중개사', item: '',
        address: '경기도 성남시 중원구 금빛로 77번길 14, 1층 (금광2동)', phone: '031-743-0033'
    },

    {
        id: 486, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '하나로퀵서비스', item: '퀵서비스',
        address: '경기도 성남시 중원구 도촌남로 27,동강프라자 406호', phone: '1899-6433'
    },

    {
        id: 487, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '하나치과의원', item: '',
        address: '경기도 성남시 중원구 둔촌대로 163', phone: '031-752-2874'
    },

    {
        id: 488, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '우리희망내과', item: '내과',
        address: '경기도 성남시 중원구 산성대로 366, 5층(중앙동, 벽산프라자)', phone: '031-757-1717'
    },

    {
        id: 489, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '비비미인 비만클리닉', item: '가정의학과',
        address: '경기도 성남시 중원구 산성대로 366, 5층(중앙동, 벽산프라자)', phone: '031-747-1717'
    },

    {
        id: 490, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '김평호변호사사무실', item: '',
        address: '경기도 성남시 중원구 산성대로 454번길 2 신우빌딩', phone: '031-744-6655'
    },

    {
        id: 491, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '허니컴', item: '인테리어 수도설비',
        address: '경기도 성남시 중원구 산성대로320-4, 1층', phone: '010-3745-9947'
    },

    {
        id: 492, position: new naver.maps.LatLng(), type: 'service', industry: '한의원', name: '경희우리한의원', item: '',
        address: '경기도 성남시 중원구 산성대로526 은행시장 2층', phone: '031-746-7500'
    },

    {
        id: 493, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '페스티노 수학학원', item: '',
        address: '경기도 성남시 중원구 성남동 2551번자 1층 105호', phone: '010-2796-9149'
    },

    {
        id: 494, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '현대파출부', item: '가사도우미,식당도우미',
        address: '경기도 성남시 중원구 성남동 4136번지 메트로칸430호', phone: '010-5093-5123'
    },

    {
        id: 495, position: new naver.maps.LatLng(), type: 'service', industry: '세탁소', name: '크린토피아 코인워시 여수동점', item: '',
        address: '경기도 성남시 중원구 여수울로15번길 4-16 1층', phone: '031-756-2938'
    },

    {
        id: 496, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '우리 한부모가족지원센터', item: '무직 봉사활동',
        address: '경기도 성남시 중원구 은행동 제10공영주차장', phone: '031-732-5777'
    },

    {
        id: 497, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '경희대 학생태권도 체육관', item: '체육관(태권도)',
        address: '경기도 성남시 중원구 제일로 77, 3층', phone: '031-751-5812'
    },

    {
        id: 498, position: new naver.maps.LatLng(), type: 'service', industry: '세탁소', name: '크린토피아,모란', item: '',
        address: '경기도 성남시 중원구 제일로63번길6-1', phone: '070,4113-6600'
    },

    {
        id: 499, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '보라음악보습 학원 ', item: '',
        address: '경기도 성남시 중원구 제일로77', phone: '031-751-5812'
    },

    {
        id: 500, position: new naver.maps.LatLng(), type: 'service', industry: '헬스/필라테스', name: '팀히어로GYM', item: '필라테스/ PT',
        address: '경기도 성남시 중원구 하대원동 132-9 B02호 지하1층', phone: '031-754-9311'
    },

    {
        id: 501, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '인형극단 우끼', item: '극단',
        address: '경기도 성남시 중원구 희망로 314/ 5층', phone: '010-9787-5386'
    },

    {
        id: 502, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '굿모닝치과', item: '',
        address: '경기도 성남시 중원구 희망로 341  2층', phone: '031-734-2225'
    },

    {
        id: 503, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '이레음악학원', item: '',
        address: '경기도 성남시 중원구 희망로 344번길11', phone: '031-747-2644'
    },

    {
        id: 504, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '더블유에이치디엠(WHDM)', item: '디자인회사',
        address: '경기도 성남시 판교역로 50번길 34', phone: '031-701-3141'
    },

    {
        id: 505, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '어바웃뷰티', item: '메이크업,업스타일살롱',
        address: '경기도 성남시 판교역로192번길 22  ', phone: '010-2810-2938'
    },

    {
        id: 506, position: new naver.maps.LatLng(), type: 'service', industry: '여관업', name: '호텔가덴', item: '호텔관광업',
        address: '경기도 수원시 권선구 경수대로 335번길 12', phone: '031-239-5572'
    },

    {
        id: 507, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '웰치과', item: '',
        address: '경기도 수원시 권선구 금곡로 102번길 20 센터프라자 3층', phone: '031-293-0275'
    },

    {
        id: 508, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '생각꿈틀미술학원', item: '',
        address: '경기도 수원시 권선구 호매실동 1020-20', phone: '031-294-3022'
    },

    {
        id: 509, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '힘(HIM)컴퍼니', item: '타일시공',
        address: '경기도 수원시 권선구 효탑로 50', phone: '010-5382-3080'
    },

    {
        id: 510, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '골프153피팅스튜디오', item: '골프피팅',
        address: '경기도 수원시 금곡로205 해피리움빌딩511호 ', phone: '010-4284-1153'
    },

    {
        id: 511, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '루아이디', item: '',
        address: '경기도 수원시 영통구 광교중앙로 170 A동 903호(광교효성해링턴타워)', phone: '031-272-0336'
    },

    {
        id: 512, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '영선갤러리', item: '미술품',
        address: '경기도 수원시 영통구 덕영대로 1471번길 59(망포동) ', phone: '031-203-1089'
    },

    {
        id: 513, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '영선부동산', item: '',
        address: '경기도 수원시 영통구 덕영대로 1471번길 59(망포동) ', phone: '031-203-5558'
    },

    {
        id: 514, position: new naver.maps.LatLng(), type: 'service', industry: '법률/상담', name: '김용일 변호사사무실', item: '변호사사무소',
        address: '경기도 수원시 영통구 동수원로 537번길 16-1 2층 (나누리병원옆)', phone: '031-212-8448'
    },

    {
        id: 515, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '서울아이정신과의원', item: '',
        address: '경기도 수원시 영통구 봉영로 1605 모던타운', phone: '031-203-4275'
    },

    {
        id: 516, position: new naver.maps.LatLng(), type: 'service', industry: '보육시설', name: '월드마크빅스맘 어린이집', item: '',
        address: '경기도 수원시 영통구 센트럴타운로 107', phone: '070-7514-1248'
    },

    {
        id: 517, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '레푸스 광교점', item: '발 치료',
        address: '경기도 수원시 영통구 센트럴타운로 85 광교아브뉴프랑 라온존 206', phone: '031-215-8870'
    },

    {
        id: 518, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '마마몽떼몬테소리', item: '몬테소리',
        address: '경기도 수원시 영통구 센트럴파크로128번지 78 1층', phone: '010-8362-7907'
    },

    {
        id: 519, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '용인대선호태권도', item: '',
        address: '경기도 수원시 영통구 영통로505 정원빌딩 5층', phone: '010-5578-7104'
    },

    {
        id: 520, position: new naver.maps.LatLng(), type: 'service', industry: '법률/상담', name: '연세마시멜로아동청소년상담센터', item: '상담 치료',
        address: '경기도 수원시 영통구 청명북로81 청명마을 주공아파트 407동 103호', phone: '010-8606-2031'
    },

    {
        id: 521, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '뮤엠영어화서 어학원', item: '',
        address: '경기도 수원시 일월로 22번길 22-5 서수원프라자 503호', phone: '031-298-0055'
    },

    {
        id: 522, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '(주)이지일렉트릭', item: '응용 소프트웨어 개발 및 공급업',
        address: '경기도 수원시 장안구 만석로 207, 302호', phone: '070-8777-1253'
    },

    {
        id: 523, position: new naver.maps.LatLng(), type: 'service', industry: '미용실', name: '우현(wh)헤어살롱', item: '',
        address: '경기도 수원시 팔달구 권선로 741-21인계지움 205호', phone: '031-221-4976'
    },

    {
        id: 524, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '즐거운피아노음악학원', item: '',
        address: '경기도 수원시 팔달구 덕영대로803번길 43 402호,403호', phone: '031-256-5156'
    },

    {
        id: 525, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '생각꿈틀미술학원', item: '',
        address: '경기도 수원시 팔달구 덕영대로803번길 43 404호', phone: '031-257-3022'
    },

    {
        id: 526, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: 'IBR 뷰티아카데미', item: '',
        address: '경기도 수원시 팔달구 매산로11 MG빌딩 5층', phone: '031-306-3214'
    },

    {
        id: 527, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '이지어학원', item: '',
        address: '경기도 수원시 팔달구 중부대로 245, 우만동 용신빌딩 6층', phone: '010-9413-4210'
    },

    {
        id: 528, position: new naver.maps.LatLng(), type: 'service', industry: '법률/상담', name: '배곧아동발달센터', item: '아동치료/성인상담',
        address: '경기도 시흥시 배곧4로 99 로얄페스타 301호', phone: '031-431-1714'
    },

    {
        id: 529, position: new naver.maps.LatLng(), type: 'service', industry: '한의원', name: '하늘체한의원', item: '',
        address: '경기도 안산시 단원구 고잔1길 17 6층', phone: '031-365-3675'
    },

    {
        id: 530, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '대우통운', item: '운송주선,다육식물판매',
        address: '경기도 안산시 단원구 산단로 345, B동 320호 (원곡동 유통상가)', phone: '031-499-8888'
    },

    {
        id: 531, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '(주)한일환경기계', item: '환경인허가',
        address: '경기도 안산시 단원구 석수로 138', phone: '010-8823-8919'
    },

    {
        id: 532, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '희망의원', item: '',
        address: '경기도 안산시 본오동 805-15', phone: '031-406-5556'
    },

    {
        id: 533, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '스토리플랜트', item: '조경시공.관리.수직정원',
        address: '경기도 안산시 상록구 건건동 178-5', phone: '01039409067'
    },

    {
        id: 534, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '우성건축', item: '건물 및 가정집 수리',
        address: '경기도 안산시 상록구 본오로 133 우성상가동128호', phone: '031-409-8251'
    },

    {
        id: 535, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '케이디건축', item: '인테리어업',
        address: '경기도 안산시 상록구 충장로3안길 34', phone: '031-713-3480'
    },

    {
        id: 536, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '안성웰의원', item: '병원',
        address: '경기도 안성시 중앙로 368(석정동) 모아빌딩 3층', phone: '031-671-6400'
    },

    {
        id: 537, position: new naver.maps.LatLng(), type: 'service', industry: '법률/상담', name: '원성희세무회계사무소', item: '세무사',
        address: '경기도 안양시 동안구 관양동 1506-27 인덕원프라자 701호', phone: '010-9436-4325'
    },

    {
        id: 538, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '우리들 치과', item: '',
        address: '경기도 안양시 동안구 관양동 타워빌딩 4층', phone: '031-421-4567'
    },

    {
        id: 539, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '어니더레블', item: '',
        address: '경기도 안양시 동안구 동안로 283, 13동206호', phone: ''
    },

    {
        id: 540, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '믿음치과의원', item: '',
        address: '경기도 안양시 동안구 흥안대로 511 3층', phone: '031-342-7575'
    },

    {
        id: 541, position: new naver.maps.LatLng(), type: 'service', industry: '세탁소', name: '크린토피아(뜨란채점)', item: '세탁',
        address: '경기도 안양시 천서로289 주공상가204호', phone: '031-445-0066'
    },

    {
        id: 542, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '로뎀성모안과', item: '안과 진료',
        address: '경기도 양주시 회천남로 76 한덕타워 4층 402호', phone: '031-858-8000'
    },

    {
        id: 543, position: new naver.maps.LatLng(), type: 'service', industry: '한의원', name: '김한의원', item: '한방 진료',
        address: '경기도 여주시 세종로 76-1', phone: '031-881-3399'
    },

    {
        id: 544, position: new naver.maps.LatLng(), type: 'service', industry: '한의원', name: '맑은숲한의원', item: '',
        address: '경기도 여주시 여흥로109번길 15 (창동)?동방빌딩3층 ', phone: '031-883-3775'
    },

    {
        id: 545, position: new naver.maps.LatLng(), type: 'service', industry: '헬스/필라테스', name: '헬스매니아', item: '',
        address: '경기도 오산시 청학로 173 농협건물 2층', phone: '031-378-9129'
    },

    {
        id: 546, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '슈퍼맘', item: '산후관리서비스',
        address: '경기도 용인시 광교 중앙로301 드림타워 705-3호', phone: '031-216-2253'
    },

    {
        id: 547, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: 'OK 부동산 ', item: '',
        address: '경기도 용인시 기흥구  용구대로 2398 벽산 주상가 110호', phone: '031-274-5454'
    },

    {
        id: 548, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '경희대명성태권도', item: '태권도',
        address: '경기도 용인시 기흥구 구갈로 115-18 도현마을현대아이파크아파트 내 상가2층', phone: '031-287-6288'
    },

    {
        id: 549, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '필립디자인 ', item: '',
        address: '경기도 용인시 기흥구 구성로 65 ', phone: '031-284-4804'
    },

    {
        id: 550, position: new naver.maps.LatLng(), type: 'service', industry: '미용실', name: '리안헤어', item: '',
        address: '경기도 용인시 기흥구 동백로 5로 23 ', phone: '031-284-4056'
    },

    {
        id: 551, position: new naver.maps.LatLng(), type: 'service', industry: '피부관리', name: '카야뷰티', item: '뷰티(속눈섭파마.속눈썹연장)',
        address: '경기도 용인시 기흥구 동백중앙로 177, 1210호', phone: '010-7551-0523'
    },

    {
        id: 552, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '성모프라임 내과', item: '',
        address: '경기도 용인시 기흥구 동백중앙로 283번지  골드프라자 C동 5층 성모프라임 내과 ', phone: '031-8005-7582'
    },

    {
        id: 553, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '오케이치과의원', item: '',
        address: '경기도 용인시 기흥구 동백중앙로 358-12', phone: '031-287-5365'
    },

    {
        id: 554, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '미앤지의원', item: '',
        address: '경기도 용인시 기흥구 마북동 524-1', phone: '031-284-7744'
    },

    {
        id: 555, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: 'e편한부동산중개사무소', item: '',
        address: '경기도 용인시 기흥구 마북로 208 e편한세상아파트 상가동102호', phone: '031-275-2855'
    },

    {
        id: 556, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '죽전자이공인중개사', item: '',
        address: '경기도 용인시 기흥구 보정로94 상가동101호', phone: '031-897-7000'
    },

    {
        id: 557, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '1인 운수 사업자(한승완)', item: '운수업',
        address: '경기도 용인시 기흥구 언남동 구성로 99', phone: '010-2113-3416'
    },

    {
        id: 558, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '쿨컨디션', item: '에어컨 설치 및 이전설치(이사철 시즌)',
        address: '경기도 용인시 기흥구 언동로 231', phone: '010-3494-8844'
    },

    {
        id: 559, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '디자인 3.3', item: '',
        address: '경기도 용인시 기흥구 용구대로 2311(경기도 일자리재단) 비즈 14호', phone: '0507- 1340- 3513'
    },

    {
        id: 560, position: new naver.maps.LatLng(), type: 'service', industry: '피부관리', name: '더풋샵죽전점', item: '',
        address: '경기도 용인시 기흥구 죽전로 23 호암프라자 2층', phone: '031-266-8824'
    },

    {
        id: 561, position: new naver.maps.LatLng(), type: 'service', industry: '헬스/필라테스', name: 'U필라테스', item: '필라테스센타',
        address: '경기도 용인시 기흥구 탑실로 36 공세프라자 3층', phone: '031-285-1561'
    },

    {
        id: 562, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '뉴밸런스재활의학과', item: '',
        address: '경기도 용인시 기흥구 한보라1로 5 보라메가타운 4층 뉴밸런스재활의학과', phone: '031-8005-9000'
    },

    {
        id: 563, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '쇼팽음악학원', item: '음악학원',
        address: '경기도 용인시 기흥구 한보라1로56 메디프라자401', phone: '031-274-5072'
    },

    {
        id: 564, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: 'SM 수학학원', item: '초 중 고  수학학원',
        address: '경기도 용인시 기흥구 흥덕2로 115 미래도프라자 7층', phone: '031- 215- 2536'
    },

    {
        id: 565, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '테르엔창업센터', item: '창업보육센터',
        address: '경기도 용인시 기흥구 흥덕2로87번길 18. 이시티 A-407호', phone: '031-215-6001'
    },

    {
        id: 566, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '이새로수학학원', item: '수학학원',
        address: '경기도 용인시 기흥구 흥덕중앙로 41 흥덕웰스프라자 805호', phone: '010-9874-8863'
    },

    {
        id: 567, position: new naver.maps.LatLng(), type: 'service', industry: '독서실/고시원', name: '우행공스터디카페', item: '스터디 카페',
        address: '경기도 용인시 기흥수 마북동 181-2 한성프라자 401호', phone: '031-281-0731'
    },

    {
        id: 568, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '광교새벽정신어학원', item: '영어',
        address: '경기도 용인시 수지구 광교마을로 54 SB타운 201호', phone: '031-211-0500'
    },

    {
        id: 569, position: new naver.maps.LatLng(), type: 'service', industry: '보육시설', name: '하람어린이집', item: '가정어린이집',
        address: '경기도 용인시 수지구 대지로49 퍼스트하임 204동 101호', phone: '031-283-6867'
    },

    {
        id: 570, position: new naver.maps.LatLng(), type: 'service', industry: '노인요양시설', name: '굿데이케어센터', item: '노인요양시설',
        address: '경기도 용인시 수지구 동천동 동천로99번길3 상록제일프라자7층', phone: '031-276-1932'
    },

    {
        id: 571, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '한우리 홈독서클럽', item: '홈독서클럽',
        address: '경기도 용인시 수지구 만현로67번길 20 상현더샵파크사이드 102동', phone: '010.8773.2217'
    },

    {
        id: 572, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '88공인중개사 사무소', item: '',
        address: '경기도 용인시 수지구 만현로67번길 9 아이파크2단지 상가101호', phone: '031-272-0088'
    },

    {
        id: 573, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '뮤지끄실용음악학원', item: '실용음악학원',
        address: '경기도 용인시 수지구 만현로82-4 헤르메스빌딩 603호', phone: '031-264-8641'
    },

    {
        id: 574, position: new naver.maps.LatLng(), type: 'service', industry: '피부관리', name: '올가드림뷰티', item: '',
        address: '경기도 용인시 수지구 문인로 57 삼성,풍림,동아APT 상가 108호', phone: '010-3186-8648'
    },

    {
        id: 575, position: new naver.maps.LatLng(), type: 'service', industry: '자동차수리', name: '수리수리 모터스', item: '',
        address: '경기도 용인시 수지구 문인로 70번길 10', phone: '031-266-6848'
    },

    {
        id: 576, position: new naver.maps.LatLng(), type: 'service', industry: '헬스/필라테스', name: '닛시필라테스 ', item: '필라테스 ',
        address: '경기도 용인시 수지구 성복2로 108-2 웰스톤갤러리', phone: '0312632211'
    },

    {
        id: 577, position: new naver.maps.LatLng(), type: 'service', industry: '미용실', name: '준오헤어 롯데몰수지점', item: '',
        address: '경기도 용인시 수지구 성복2로 38 롯데몰3층 준오헤어', phone: '031 5174 4305'
    },

    {
        id: 578, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '프리덤아트스페이스 미술학원', item: '미술',
        address: '경기도 용인시 수지구 손곡로 103번지 5층', phone: '010-2915-0398'
    },

    {
        id: 579, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '손곡플레이팩토', item: '창의수학',
        address: '경기도 용인시 수지구 손곡로 53', phone: '010-7187-0700'
    },

    {
        id: 580, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '제이샵공방', item: '비누공방',
        address: '경기도 용인시 수지구 수지로 78번길 8 벽산블루밍상가 108호', phone: '010-4254-8538'
    },

    {
        id: 581, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '수지현대플레이팩토', item: '공부방',
        address: '경기도 용인시 수지구 수지로342번길 18', phone: '010-9240-8246'
    },

    {
        id: 582, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: 'YBM브레이니영어/ 브레이니 리더스', item: '',
        address: '경기도 용인시 수지구 수풍로 38 삼성래미안 2차 아파트 상가 202호 & 205호', phone: '010-2204-3181'
    },

    {
        id: 583, position: new naver.maps.LatLng(), type: 'service', industry: '헬스/필라테스', name: '닛시필라테스 ', item: '필라테스 ',
        address: '경기도 용인시 수지구 신봉1로 175번길 진성프라자 7층', phone: '0312612234'
    },

    {
        id: 584, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '해법수학', item: '',
        address: '경기도 용인시 수지구 신봉2로 60', phone: '031-263-3799'
    },

    {
        id: 585, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '분양사무실', item: '주거용 오피스텔 분양',
        address: '경기도 용인시 수지구 신수로783번길 4, 웰리스101  아파텔', phone: '010 6215 9556'
    },

    {
        id: 586, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '경희대석사천무태권도 ', item: '',
        address: '경기도 용인시 수지구 정평로63 성지아파트상가 3층 ', phone: '010-8581-4709'
    },

    {
        id: 587, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '원시큐어(OoneSECURE)', item: 'ICT 및 정보보안 컨설팅, 4차산업 강의, 자문, 강사, 작가',
        address: '경기도 용인시 수지구 죽전1동 대지로 49, 203-1906(죽전퍼스트하임)', phone: '010-2932-1882'
    },

    {
        id: 588, position: new naver.maps.LatLng(), type: 'service', industry: '보육시설', name: '수지우리어린이집', item: '',
        address: '경기도 용인시 수지구 포은대로 313번길7-10 이편한 세상 수지 @ 101동 103호', phone: '031-893-3345'
    },

    {
        id: 589, position: new naver.maps.LatLng(), type: 'service', industry: '독서실/고시원', name: '하우스터디독서실 용인수지센터(풍덕천동)', item: '',
        address: '경기도 용인시 수지구 풍덕천로 116 영일빌딩 6층', phone: '010-5655-8052'
    },

    {
        id: 590, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '드림영어', item: '개인과외',
        address: '경기도 용인시 죽전2동 용구대로2771번길 66', phone: '01043470531'
    },

    {
        id: 591, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '대륭이엔씨', item: '스치로폴 재활용',
        address: '경기도 용인시 처인구 남사면 통삼리 522-1', phone: '010-5352-1540'
    },

    {
        id: 592, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: 'J위드학원', item: '',
        address: '경기도 용인시 처인구 남사면 한숲로45 옐로우상가B동 4층 419호', phone: '031-332-6696'
    },

    {
        id: 593, position: new naver.maps.LatLng(), type: 'service', industry: '여관업', name: '프랑스올리브', item: '펜션',
        address: '경기도 용인시 처인구 남사읍 전궁로 93번길 18-2', phone: '01054196085'
    },

    {
        id: 594, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '이룸디자인건설', item: '건설, 리모델링 토탈 인테리어',
        address: '경기도 용인시 처인구 모현읍 포인대로 1069번길 13-4', phone: '031-8009-0416'
    },

    {
        id: 595, position: new naver.maps.LatLng(), type: 'service', industry: '여관업', name: '호텔 더숨 포레스트 내 바베큐', item: '연회장 및 세미나실',
        address: '경기도 용인시 처인구 포곡읍 전대리 473-13', phone: '010-6415-9060'
    },

    {
        id: 596, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '문소아청소년과의원', item: '',
        address: '경기도 용인시 처인구 포곡읍 포곡로 78-8 대두 3차타운', phone: '031-334-7188'
    },

    {
        id: 597, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '사명통증의학과', item: '통증의학과',
        address: '경기도 의왕시 내손로 11 가동상가 208호', phone: '031-426-7582'
    },

    {
        id: 598, position: new naver.maps.LatLng(), type: 'service', industry: '보육시설', name: '조이플키즈', item: '',
        address: '경기도 이천시 신아로 128번길 74-51', phone: '031-637-2972'
    },

    {
        id: 599, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '이천 플랜트치과의원', item: '',
        address: '경기도 이천시 창전동 149-9', phone: '031-639-0028'
    },

    {
        id: 600, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '현인연구소', item: '3D입체영상, 특수광학 연구개발',
        address: '경기도 파주시 회동길480 아트팩토리 A219호', phone: '010-3375-8154'
    },

    {
        id: 601, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '평택본플란트치과의원', item: '치과',
        address: '경기도 평택시 동삭로 384 동화메디컬빌딩 3.4층', phone: '031-653-0880'
    },

    {
        id: 602, position: new naver.maps.LatLng(), type: 'service', industry: '한의원', name: '경희미르애한의원', item: '',
        address: '경기도 하남시 미사강변남로 103 랑데르3 2층', phone: '031-8027-8275'
    },

    {
        id: 603, position: new naver.maps.LatLng(), type: 'service', industry: '세탁소', name: '크린토피아 하남미사18단지점', item: '',
        address: '경기도 하남시 미사강변서로127-1 정문상가 2층 202호', phone: '010-7434-4421'
    },

    {
        id: 604, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: 'HONOR CONSTRUCTION', item: '건설 인테리어',
        address: '경기도 하남시 미사강변중앙로 111번안길 32. 401호', phone: '010-2331-1465'
    },

    {
        id: 605, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '예음원피아노', item: '',
        address: '경기도 하남시 미사강변중앙로90-1,101호', phone: '031-793-5947'
    },

    {
        id: 606, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '미래이비인후과의원', item: '',
        address: '경기도 하남시 신장동 523-1 현대베스코아빌딩 7층 704호', phone: '0507-1412-8324'
    },

    {
        id: 607, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '파워정형외과 의원', item: '정형외과',
        address: '경기도 하남시 신평로 49 4충', phone: '031-795-5250'
    },

    {
        id: 608, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '동탄파크해법영어', item: '',
        address: '경기도 화성시 동탄대로24가길 30 134-104', phone: '010-8798-8515'
    },

    {
        id: 609, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '토마틀 성악 동요 ', item: '',
        address: '경기도 화성시 동탄반석로 208 아인슈타인 프라자 4층 토마틀성악', phone: '010-3533-3981'
    },

    {
        id: 610, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '셀파 우등생교실 ', item: '',
        address: '경기도 화성시 동탄순환대로20길 115, 2235동 1804호  (목동, 르파비스)', phone: '010-3494-8308'
    },

    {
        id: 611, position: new naver.maps.LatLng(), type: 'service', industry: '법률/상담', name: '동탄그리심아동가족상담센터', item: '상담센터',
        address: '경기도 화성시 동탄순환대로708 서건에듀프라자1동 601호 ', phone: '031-375-7544'
    },

    {
        id: 612, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '스튜디오 러브썸', item: '렌탈스튜디오/파티룸',
        address: '경기도 화성시 동탄첨단산업1로58, 501호', phone: '031-8055-8086'
    },

    {
        id: 613, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '신강수학', item: '',
        address: '경기도 화성시 반송동 동탄반석로 208 아인슈타인프라자 6층', phone: '01049663981'
    },

    {
        id: 614, position: new naver.maps.LatLng(), type: 'service', industry: '병원', name: '삼성드림내과의원', item: '',
        address: '경기도 화성시 봉담읍 와우로20 미래프라자 3층', phone: '031-238-8708'
    },

    {
        id: 615, position: new naver.maps.LatLng(), type: 'service', industry: '독서실/고시원', name: '일취월장 스터디카페경기지사', item: '',
        address: '경기지역- 생활관리,학습관리,컨설팅및 가맹', phone: '010-3706-7004'
    },

    {
        id: 616, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '인천 개인 택시', item: '',
        address: '인천광역시 부평구', phone: '01053284884'
    },

    {
        id: 617, position: new naver.maps.LatLng(), type: 'service', industry: '보육시설', name: '애플어린이집', item: '',
        address: '인천광역시 부평구 청천2동 178-15', phone: '032 526 4045'
    },

    {
        id: 618, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '청라 시그니쳐', item: '',
        address: '인천광역시 서구 청라동 95-1', phone: '01046154869'
    },

    {
        id: 619, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '아이보람 송도글로벌센터', item: '원어 비디오와 원서를 활용하는 엄마표 영어 모임',
        address: '인천광역시 연수구 신송로 161 더하이츠빌딩 8층 805호', phone: ' 032-833-8919'
    },

    {
        id: 620, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '하늘정원장례식장', item: '장례식장',
        address: '강원도 삼척시 강원남부로 4539', phone: '033-575-4441'
    },

    {
        id: 621, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '대구어린이천문대 ', item: '어린이천문대',
        address: '대구 수성구 알파시티1로31길 27, 2층 (대흥동)', phone: '053-243-3245'
    },

    {
        id: 622, position: new naver.maps.LatLng(), type: 'service', industry: '미용실', name: '삐삐쌀롱', item: '',
        address: '부산광역시 북구 시랑로132번길 75 1층', phone: '0507-1473-9782'
    },

    {
        id: 623, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '국어하다/화상영어', item: '온라인학원',
        address: '성남/용인 전역및 전국', phone: '010-3706-7004'
    },

    {
        id: 624, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '엔에스엠피', item: '해외구매대행',
        address: '온라인 - 쿠팡: https://store.coupang.com/link/nsmp', phone: '070-8098-4704'
    },

    {
        id: 625, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '디자인엘', item: '편집디자인',
        address: '온라인 - http://designel.co.kr', phone: '070-4241-2565'
    },

    {
        id: 626, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '참미', item: '방충망&외풍차단',
        address: '온라인 - www.charmmi.co.kr', phone: '010-9696-4749'
    },

    {
        id: 627, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '하민파파', item: '돌사진촬영',
        address: '온라인 - www.haminpapa.com', phone: '010-3348-6669'
    },

    {
        id: 628, position: new naver.maps.LatLng(), type: 'service', industry: '기타', name: '제이에스에프', item: '전자상거래/식품인터넷판매',
        address: '온라인 - www.happyhanggi.com (네이버 스마트스토어 해피한끼)', phone: '010-3060-3656'
    },

    {
        id: 629, position: new naver.maps.LatLng(), type: 'service', industry: '건축/인테리어/디자인', name: '(주)케이라클', item: '',
        address: '전라남도 광양시 중동 광장로70 성호2차 213동 1704호 ', phone: '010-4713-1961'
    },

    {
        id: 630, position: new naver.maps.LatLng(), type: 'service', industry: '부동산중개업', name: '신화공인중개소사무소', item: '',
        address: '충청남도 당진시 석문면 산단9로 24 102호', phone: '041-356-9927'
    },

    {
        id: 631, position: new naver.maps.LatLng(), type: 'service', industry: '학원', name: '홀리드림태권도', item: '',
        address: '충청남도 천안시 동남구 청룡동 풍세로 798', phone: '041 584 7880'
    },

    {
        id: 632, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '송파한약국', item: '한약, 건강보조식품',
        address: '서울 송파구 백제고분로 39길 16 석촌빌딩 2층', phone: '02-416-6336'
    },

    {
        id: 633, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '킴앤한스', item: '커튼, 블라인드',
        address: '서울특별시 강남구 논현동 52-5 3층', phone: '010-7192-3030'
    },

    {
        id: 634, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '주)더존마루', item: '원목마루 수입 판매',
        address: '서울특별시 강남구 논현동 논현로127길 21', phone: '02-514-3877'
    },

    {
        id: 635, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: 'SH폴리켐(케미칼 수출 무역)', item: '',
        address: '서울특별시 강남구 도곡동 467-24', phone: '02-3143-1406'
    },

    {
        id: 636, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '횡선산 한우마을', item: '',
        address: '서울특별시 강남구 도곡로 78길 6', phone: '02-567-8097'
    },

    {
        id: 637, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '므에뜨', item: '반려동물 용품(의류/가구/용품)',
        address: '서울특별시 강남구 선릉로146길 27-8 1층', phone: '070-8865-5566'
    },

    {
        id: 638, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '인셀덤 삼성브리니', item: '',
        address: '서울특별시 강남구 선릉로225 렉슬상가 1층116', phone: '010 6661 5807'
    },

    {
        id: 639, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '현대자동차', item: '자동차딜러',
        address: '서울특별시 강남구 율현동(밤고개로) 252', phone: '010-6414-1895'
    },

    {
        id: 640, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '메이그마티', item: '가구, 소파',
        address: '서울특별시 강남구 헌릉로571길 46-7 (https://www.maigmati.com)', phone: '02-451-9785'
    },

    {
        id: 641, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '해가든축산', item: '',
        address: '서울특별시 강동구 고덕로52.대원아파트상가동1층 ', phone: '010-9019-9224'
    },

    {
        id: 642, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '라르꼬발레노', item: '화장품, 미용기기, 의료기기',
        address: '서울특별시 강동구 성내로6길 34-21 재진빌딩 4층', phone: '070-4139-8409'
    },

    {
        id: 643, position: new naver.maps.LatLng(), type: 'retail', industry: '제조', name: '주식회사 가비커피', item: '커피, 차류제조',
        address: '서울특별시 광진구 는동로 179-1', phone: '070-4809-7991'
    },

    {
        id: 644, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '제이엔알박컴퍼니', item: '',
        address: '서울특별시 광진구 자양로 126 성지하이츠 501호 ', phone: '02-453-3417'
    },

    {
        id: 645, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '올마이티 단체티업체', item: '올마이티 단체티업체',
        address: '서울특별시 동대문구 안암로136-1 미래빌딩 3층 ', phone: '02-1800-4789'
    },

    {
        id: 646, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '인셀덤화장품', item: '',
        address: '서울특별시 동작구 동작대로 7길 64', phone: '010-4114-5416'
    },

    {
        id: 647, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '(주)수호', item: '천연비누/주방세제',
        address: '서울특별시 마포구 망원로 2길 98. B1F', phone: '010-7128-1341'
    },

    {
        id: 648, position: new naver.maps.LatLng(), type: 'retail', industry: '꽃집', name: '플라워뷰', item: '꽃집',
        address: '서울특별시 서초구 강남대로 27 양재꽃 시장본관 지하59호', phone: '010-8740-5078'
    },

    {
        id: 649, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '날아라크루 강남점', item: '의류판매,승무원면접복. 여성면접복',
        address: '서울특별시 서초구 강남대로 365, 602호', phone: '010-9776-1413'
    },

    {
        id: 650, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '퍼커션센터 (서초 양재 야마하)', item: '악기점',
        address: '서울특별시 서초구 논현로29', phone: '02-573-7485'
    },

    {
        id: 651, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '사라쥬얼리', item: '',
        address: '서울특별시 서초구 신반포로 162 르본시티 1층 34호', phone: '02-533-5152 '
    },

    {
        id: 652, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '크리지앙', item: '여성의류',
        address: '서울특별시 송파구 가락로28길 11, 103호  (송파동)', phone: '02-422-3452'
    },

    {
        id: 653, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '언덕위의하임', item: '캔들 디퓨저 공방, 판매 , 인터넷판매',
        address: '서울특별시 송파구 충민로 66 가든파이브라이프 제에프비 제자 1124호', phone: '070-8098-6420'
    },

    {
        id: 654, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '유니크지오', item: '가죽공예',
        address: '서울특별시 송파구 충민로66 가든파이브 라이프 패션관 8층 F8041호 유니크지오 https://blog.naver.com/pippi0582', phone: '010-6393-0582'
    },

    {
        id: 655, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '가가호호김치', item: '김치',
        address: '서울특별시 용산구 새창로 12-17(용문 시장내) 네이버 스마트 스토어 가가호호김치 위메프 가가호호김치', phone: '010-4416-3388'
    },

    {
        id: 656, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '리필시대', item: '프린터관련 소모품(잉크, 토너)',
        address: '서울특별시 용산구 청파로74  전자랜드 본관 광장층 C-18', phone: '02-711-5041'
    },

    {
        id: 657, position: new naver.maps.LatLng(), type: 'retail', industry: '편의점', name: '스토리웨이', item: '',
        address: '서울특별시 용산구 한강대로405', phone: ':010-9770-7194'
    },

    {
        id: 658, position: new naver.maps.LatLng(), type: 'retail', industry: '꽃집', name: '로즈플로라(꽃집)', item: '',
        address: '서울특별시 용산구 효창원로 42길 38-3 용문시장 F-20', phone: '010-4016-1951'
    },

    {
        id: 659, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '아이런로드', item: '의류, 운동용품',
        address: '서울특별시 용산구 후암동 , 밴드에서 ‘아이런로드‘', phone: '010-9906-6793'
    },

    {
        id: 660, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '(주)오앤케이코퍼레이션', item: '건강기능식품, 스포츠크림, 식품, 생활용품',
        address: '서울특별시 은평구 갈현로 197, B동 101호', phone: '010-3002-2618'
    },

    {
        id: 661, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '가까운약국', item: '',
        address: '서울특별시 은평구 불광1동 통일로 738', phone: '02-356-9813'
    },

    {
        id: 662, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '보아스성의.까운지', item: '성의원단 도소매',
        address: '서울특별시 종로198-2 대동빌딩2층 553호', phone: '02-2272-8612'
    },

    {
        id: 663, position: new naver.maps.LatLng(), type: 'retail', industry: '제조', name: '주식회사 명칠보', item: '칠보 공예용 유약 제조 및 부자재 판매',
        address: '서울특별시 종로구 돈화문로10길 23 (봉익동, 곡천빌딩) 지하1층', phone: '02-714-3271'
    },

    {
        id: 664, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '수성악기', item: '하모니카,음악치료악기 등',
        address: '서울특별시 종로구 삼일대로 428 낙원상가 2층 B256호', phone: '02-742-7117'
    },

    {
        id: 665, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '베르사니오양복점', item: '의류업',
        address: '서울특별시 중구 남대문로 7길 29 1층', phone: '02-752-5668'
    },

    {
        id: 666, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '센뮤', item: '다퓨저',
        address: '서울특별시 중구 동호로37길20 A동3층 50', phone: ' 070-7722-5025'
    },

    {
        id: 667, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '에벤에셀', item: '',
        address: '서울특별시 중구 장충단로282-10 (신당동.남평화상가)2층 29~30호', phone: '02-2252-1165'
    },

    {
        id: 668, position: new naver.maps.LatLng(), type: 'retail', industry: '휴대폰', name: '모바일월드', item: '',
        address: '서울특별시 중랑구 면목로48길 58, 1층 사가정3휴대폰매장', phone: '010-6247-2430, 010-4290-3077'
    },

    {
        id: 669, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '온', item: '여성의류',
        address: '경기 남양주시 도농로 32 부영중앙상가 110호', phone: '010-3272-4443'
    },

    {
        id: 670, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '메르헨', item: '의류 편집숍',
        address: '경기 성남시 수정구 고등로3길 3 (고등동) 101호', phone: '010-4402-2646'
    },

    {
        id: 671, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '마당쇠 닷컴', item: '학교 ,사무실 청소도구함, 걸이대',
        address: '경기 용인시 기흥구 구성로 357 (청덕동) 청덕테크노밸리A동 306-2호', phone: '031-229-3357'
    },

    {
        id: 672, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '루카스안경', item: '',
        address: '경기 용인시 수지구 동천로 62 (동천동, 센트럴상가)', phone: '031-308-8234'
    },

    {
        id: 673, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '메이드G', item: '뜨개 ,재봉,소품및 가방제작판매',
        address: '경기 용인시 수지구 용구대로2771번길 66 (죽전동, 용인수지벽산타운2단지)  http://instagram.com/made by g 싸이트; soomgo.com', phone: '010-7246-1950'
    },

    {
        id: 674, position: new naver.maps.LatLng(), type: 'retail', industry: '휴대폰', name: 'SK텔레콤 공식대리점', item: '',
        address: '경기도 고양시 덕양구 통일로 781  1층  SK텔레콤 ACT 대리점', phone: '010-7999-4271'
    },

    {
        id: 675, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 백석밸라시타점', item: '',
        address: '경기도 고양시 일산동구 강송로 33 (벨라시타1층)', phone: '031-849-5731'
    },

    {
        id: 676, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '일산 밀라네제 ', item: '해외 명품',
        address: '경기도 고양시 일산동구 중앙로 1283 롯데백화점 2층', phone: '031-909-3251'
    },

    {
        id: 677, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '디앤비메드', item: '척추.관절.재활 위주로 보조기,스프린트,캐스트,소모품 병원납품 ',
        address: '경기도 고양시 일산동구 중앙로1261번길 19 2층', phone: '010- 4756- 8142'
    },

    {
        id: 678, position: new naver.maps.LatLng(), type: 'retail', industry: '서적', name: '광주기독교백화점', item: '기독교서적, 용품',
        address: '경기도 광주시 광주대로 50 (http://www.thankyoumall.co.kr)', phone: '070-8616-9804'
    },

    {
        id: 679, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '몽크피그', item: '가구, 매트리스',
        address: '경기도 광주시 오포읍 능평로 30번길 58(삼성지오빌) B동 102호', phone: '010-9980-5390'
    },

    {
        id: 680, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '우신아이엔씨', item: '박스제작, 쇼핑백제작, 포장용품제작',
        address: '경기도 광주시 오포읍 매자리길162', phone: '070-7581-6176'
    },

    {
        id: 681, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '나무향기,이슴공방', item: '주문가구제작,고가구수리,무료가구나눔,',
        address: '경기도 광주시 오포읍 봉골길 14-7(문형리66-3)', phone: '01092598848'
    },

    {
        id: 682, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '창대조명', item: '조명공사, 전기자재, 조명판매',
        address: '경기도 광주시 오포읍 신련로 38(태재고개)', phone: '031-715-4506'
    },

    {
        id: 683, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '이레약국', item: '',
        address: '경기도 광주시 오포읍 신현로 24 1층', phone: '031-715-6169'
    },

    {
        id: 684, position: new naver.maps.LatLng(), type: 'retail', industry: '제조', name: '주안테크', item: '제조업',
        address: '경기도 광주시 오포읍 신현리 새말길 83 305호', phone: '031-714-0959'
    },

    {
        id: 685, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '이수테크', item: '금형, 제품개발, 플라스틱사출',
        address: '경기도 광주시 오포읍 오포로 589-7', phone: '031-797-8980'
    },

    {
        id: 686, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '(주) 청경수산', item: '수산물 가공업',
        address: '경기도 광주시 초월읍 무들로 84-9', phone: '031-765-0602'
    },

    {
        id: 687, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '헬프네이쳐', item: '생분해 플라스틱 / 쇼핑백',
        address: '경기도 광주시 초월읍 산수로440번길 34 // http://helpnature.co.kr/', phone: '031-8027-0335'
    },

    {
        id: 688, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '에스디테크놀로지', item: '기계부품생산',
        address: '경기도 광주시 초월읍 산수로70번길 22', phone: '031-766-8970'
    },

    {
        id: 689, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '이편한침대', item: '침대매트리스',
        address: '경기도 광주시 초월읍 선동리 29번지', phone: '010-7448-7333'
    },

    {
        id: 690, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '기운찬건강하우스', item: '건강원',
        address: '경기도 군포시 광정로 25-57 율곡아파트 중심상가 101호', phone: '010-3130-6855'
    },

    {
        id: 691, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '아이엠안경', item: '안경원',
        address: '경기도 남양주시 별내중앙로 34 로뎀타워 1층', phone: '031-571-1414'
    },

    {
        id: 692, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '주식회사 소프롱', item: '욕실용품(샤워기기)',
        address: '경기도 남양주시 진접읍 금강로 1881-21', phone: '02-453-3110'
    },

    {
        id: 693, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '크림', item: '옷가게',
        address: '경기도 분당구 내정로 165번길38 602동 128호(금호행복시장)', phone: '010-3841-5593'
    },

    {
        id: 694, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '쥬쥬스', item: '한국고려홍삼총판',
        address: '경기도 성남시 분당구 구미동 미금일로 57 614동 304호', phone: '0503-1316-2169'
    },

    {
        id: 695, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '스타일업(네이버-티나라몰)', item: '커피,티 용품',
        address: '경기도 성남시 분당구 내정로 107번길5 B01호', phone: '070-8233-4679'
    },

    {
        id: 696, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '쉬미즈', item: '의류',
        address: '경기도 성남시 분당구 내정로 165번길 34번지 금호행복시장 108-2호', phone: '010-4721-0144'
    },

    {
        id: 697, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '소니아앤', item: '',
        address: '경기도 성남시 분당구 내정로 165번길 금호행복시장 131-2호', phone: '010-89636032'
    },

    {
        id: 698, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '코끼리안경원', item: '안경, 콘택트렌즈',
        address: '경기도 성남시 분당구 내정로 166번길 7-6 파크타운 코끼리상가 1층 1호', phone: '031-711-0203'
    },

    {
        id: 699, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '휴베이스봄약국', item: '',
        address: '경기도 성남시 분당구 내정로 172  1층 102호', phone: '031-711-0995'
    },

    {
        id: 700, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '키즈아울렛 스윗제니', item: '',
        address: '경기도 성남시 분당구 내정로 185 수내동 청구상가 151호', phone: '010-7199-7011'
    },

    {
        id: 701, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '돌고래생선', item: '생선가게',
        address: '경기도 성남시 분당구 내정로174번길42', phone: '129-92-07411'
    },

    {
        id: 702, position: new naver.maps.LatLng(), type: 'retail', industry: '꽃집', name: '플로랄디자인 플라워샵', item: '꽃, 화환, 화분',
        address: '경기도 성남시 분당구 대왕판교로 660 (온라인매장만 운영) 네이버검색: 플로랄디자인', phone: '070 ?7116-1474'
    },

    {
        id: 703, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '순우리한우직판장', item: '',
        address: '경기도 성남시 분당구 대왕판교로255', phone: '031-716-8588'
    },

    {
        id: 704, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '테라퍼피', item: '애견 화장품',
        address: '경기도 성남시 분당구 돌마로 486번길 40 한라쇼핑 4층 35호', phone: '070-8064-1409'
    },

    {
        id: 705, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '아뜰리에', item: '여성의류,잠옷,트레이닝복',
        address: '경기도 성남시 분당구 미금로45(구미동203-2)', phone: '010-3241-7868'
    },

    {
        id: 706, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '프로스펙스분당2001아울렛점', item: '신발,의류,스포츠용품',
        address: '경기도 성남시 분당구 미금일로 154번길202001아울렛4층 프로스펙스매장', phone: '031-719-4799'
    },

    {
        id: 707, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비아델 라플라타', item: '',
        address: '경기도 성남시 분당구 미금일로81 대우조합상가 301호', phone: '070-4209-3765'
    },

    {
        id: 708, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '새봄약국', item: '',
        address: '경기도 성남시 분당구 백현로 206 한솔마을 4단지 상가', phone: '031-713-3571'
    },

    {
        id: 709, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '노점', item: '',
        address: '경기도 성남시 분당구 백현로101번길 24 에이스안경 앞 ', phone: '070-8064-1952'
    },

    {
        id: 710, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '조이피플기프트', item: '판촉물',
        address: '경기도 성남시 분당구 불곡북로23 // www.joipeoplegift.co.kr/', phone: '031-718-7718'
    },

    {
        id: 711, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '토이앤맘 분당', item: '유모차.카시트외 출산용품',
        address: '경기도 성남시 분당구 불정로 420번길 18', phone: '031-707-3965, 031-707-3966'
    },

    {
        id: 712, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '으뜸안경(구 보라안경)', item: '',
        address: '경기도 성남시 분당구 서현로210번길2, 2층 205,206호', phone: '031-706-1010'
    },

    {
        id: 713, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '아크넥스', item: '전자부품',
        address: '경기도 성남시 분당구 성남대로 926번길 10, 탑빌딩 546호', phone: '010-3567-7323'
    },

    {
        id: 714, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '풀무원분당남부지점', item: '건강기능식품, 기능성화장품 판매',
        address: '경기도 성남시 분당구 성남대로34 하나플라자 301호', phone: '031-719-5956, 010-5308-9189'
    },

    {
        id: 715, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '나누는사람들 ', item: '온라인 쇼핑몰 ',
        address: '경기도 성남시 분당구 성남대로916번길5 관보골든쇼핑 6층 613호 ', phone: '010-7232-0072'
    },

    {
        id: 716, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '키즈돔', item: '아동 학생 관련 온라인 쇼핑몰',
        address: '경기도 성남시 분당구 수내동 황새울로 234 www.kidsdorm.co.kr', phone: '031-713-5636'
    },

    {
        id: 717, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '현대자동차', item: '자동차영업',
        address: '경기도 성남시 분당구 안골로1', phone: '010-2206-5879'
    },

    {
        id: 718, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '잠언의료기', item: '의료기기',
        address: '경기도 성남시 분당구 야탑동 353-4 이화빌딩 3층', phone: '031-705-7589'
    },

    {
        id: 719, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '콜라닉', item: '',
        address: '경기도 성남시 분당구 야탑로 152, 401호', phone: '031-706-0117'
    },

    {
        id: 720, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '야탑새로운약국 ', item: '',
        address: '경기도 성남시 분당구 야탑로 69번길2  바른세상병원 1층 ', phone: '031-702-5003'
    },

    {
        id: 721, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '이화 탑 약국', item: '',
        address: '경기도 성남시 분당구 야탑로 81번길 10, 아미고타워 3층 310-1', phone: '031-622-0303'
    },

    {
        id: 722, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '아이피아 안경원', item: '안경점',
        address: '경기도 성남시 분당구 야탑로81번길11NC백화점 지하2층', phone: '031-702-6007'
    },

    {
        id: 723, position: new naver.maps.LatLng(), type: 'retail', industry: '꽃집', name: '서혜정원', item: '꽃집',
        address: '경기도 성남시 분당구 양현로 94번길7 대명프라자 1층', phone: '031-709-7889'
    },

    {
        id: 724, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '강화홍삼', item: '건강식품',
        address: '경기도 성남시 분당구 양현로94번길 29 상가동 120호', phone: '0507-1356-3994'
    },

    {
        id: 725, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '운중상회', item: '',
        address: '경기도 성남시 분당구 운중로 146번길 15 1층', phone: '010-9108-0716'
    },

    {
        id: 726, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '윈도우스토리 이매점', item: '이불, 블라인드, 커튼',
        address: '경기도 성남시 분당구 이매동 146-1 뉴선경프라자 115호', phone: '010-5215-7221'
    },

    {
        id: 727, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '분당우리약국', item: '',
        address: '경기도 성남시 분당구 장안로 27 1층', phone: '031-703-5248'
    },

    {
        id: 728, position: new naver.maps.LatLng(), type: 'retail', industry: '컴퓨터판매수리', name: 'EJCOMPANY', item: '컴퓨터, 프린터 판매,as,임대',
        address: '경기도 성남시 분당구 정자동 165-1', phone: '010-9999-6009'
    },

    {
        id: 729, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '멜로우 가든', item: '꽃집',
        address: '경기도 성남시 분당구 정자동 킨스타워 3층 333호', phone: '031-782-3883'
    },

    {
        id: 730, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: 'LAVIETTE', item: '가죽공방 (주문제작, 판매 및 강의)',
        address: '경기도 성남시 분당구 정자동 한솔마을 청구1단지 아파트상가 b122호', phone: ' 010-9768-0701'
    },

    {
        id: 731, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '데이나', item: '통신판매업',
        address: '경기도 성남시 분당구 정자일로 210', phone: '010-8815-0527'
    },

    {
        id: 732, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: 'rapha', item: '',
        address: '경기도 성남시 분당구 정자일로 227,(백궁지엔느빌딩 115호)', phone: ''
    },

    {
        id: 733, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '리인', item: '의류점',
        address: '경기도 성남시 분당구 정자일로121 더샾스타파크쇼핑몰1층C6-1호', phone: '031-713-3480'
    },

    {
        id: 734, position: new naver.maps.LatLng(), type: 'retail', industry: '편의점', name: '현대이마트24', item: '',
        address: '경기도 성남시 분당구 중앙고원로 201호', phone: '010-3716-5270'
    },

    {
        id: 735, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '(주)새마님솜씨 ', item: '전통음식 및 의례음식',
        address: '경기도 성남시 분당구 탄천로35 203호', phone: '031-702-8377'
    },

    {
        id: 736, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '㈜DKC Corporation', item: '반도체, 전자부품',
        address: '경기도 성남시 분당구 탄천상로 164 시그마2 C동 308호', phone: '031-603-6646'
    },

    {
        id: 737, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '어바웃드레스', item: '한복,드레스대여',
        address: '경기도 성남시 분당구 판교로 192번길 22 효성헤링턴타워 310호', phone: '010-6330-5323'
    },

    {
        id: 738, position: new naver.maps.LatLng(), type: 'retail', industry: '휴대폰', name: '초인통신', item: '',
        address: '경기도 성남시 분당구 판교로 432 제일플라자 102호', phone: '031-701-1149'
    },

    {
        id: 739, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 백현점', item: '',
        address: '경기도 성남시 분당구 판교역로 18번길 14 (타임스퀘어1층)', phone: '031-702-9141'
    },

    {
        id: 740, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: ' (주)쿼츠테크', item: '석영유리,세라믹 도소매',
        address: '경기도 성남시 분당구 황새울로 200번길 36', phone: '010-9197-6673'
    },

    {
        id: 741, position: new naver.maps.LatLng(), type: 'retail', industry: '편의점', name: 'GS25 분당시그마점', item: '',
        address: '경기도 성남시 분당구 황새울로 307, 102호(서현동)', phone: '031-709-8950'
    },

    {
        id: 742, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '분당우리금거래소', item: '',
        address: '경기도 성남시 분당구 황새울로360 번길 35 2층', phone: '031 702 4500'
    },

    {
        id: 743, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '푸드마인', item: '치즈클래스',
        address: '경기도 성남시 서현동 340-16  1층  "비 마이 치즈"', phone: '031-716-2305'
    },

    {
        id: 744, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '아름다운 한복', item: '의류점',
        address: '경기도 성남시 서현로 170 분당풍림아이원오피스텔 2층 228-2호', phone: '031-783-6464'
    },

    {
        id: 745, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '다부마트', item: '',
        address: '경기도 성남시 서현로 210번길 20, 2층 10호', phone: '031-753-5953'
    },

    {
        id: 746, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '씨유펫 성남고등점', item: '애견용품 무인샵',
        address: '경기도 성남시 수정구 고등로34, 226동102호(고등동,호반써밋판교벨리)', phone: '070-7789-0923'
    },

    {
        id: 747, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '꿈꾸는 고기', item: '에이징 정육 판매',
        address: '경기도 성남시 수정구 복정로134번길 22-5(인터넷판매가능)', phone: '031-756-4748'
    },

    {
        id: 748, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '성지문구', item: '',
        address: '경기도 성남시 수정구 수정남로 18번길 1', phone: '031-751-0067'
    },

    {
        id: 749, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '아르페지오 (성남수정점)', item: '침구/커튼류',
        address: '경기도 성남시 수정구 수정로232 1층', phone: '031-735-7999'
    },

    {
        id: 750, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '중앙수산', item: '수산물',
        address: '경기도 성남시 수정구 수정북로 26', phone: '010-4776-1688'
    },

    {
        id: 751, position: new naver.maps.LatLng(), type: 'retail', industry: '과일채소', name: '베지포유', item: '',
        address: '경기도 성남시 수정구 위례광장로 104 한화 오벨리스크 센트럴스퀴어 1층 1118호', phone: '031-607-5025'
    },

    {
        id: 752, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 위례중앙타워점', item: '',
        address: '경기도 성남시 수정구 위례광장로 300 (위례중앙타워2층)', phone: '031-752-9141'
    },

    {
        id: 753, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '(주)컬러앤컴포트', item: '',
        address: '경기도 성남시 수정구 탄천로307번길 14, 3층', phone: '070-5121-2198'
    },

    {
        id: 754, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '알파문구', item: '문구점',
        address: '경기도 성남시 위례광장로 310 우성트램타워 B-203', phone: '010-2105-0527'
    },

    {
        id: 755, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '이끌림', item: '프리미엄 계란 전문점',
        address: '경기도 성남시 중원구 도촌로 8번길 5, 103호', phone: '070-8839-3139'
    },

    {
        id: 756, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '툴라스', item: '동물용의료기기 축산관련서비스',
        address: '경기도 성남시 중원구 둔촌대로 457번길 27, 1116호', phone: '031-736-2135'
    },

    {
        id: 757, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '㈜오일플라자 돌마주유소', item: '주유소',
        address: '경기도 성남시 중원구 둔촌대로295번길', phone: '031-753-7770'
    },

    {
        id: 758, position: new naver.maps.LatLng(), type: 'retail', industry: '컴퓨터판매수리', name: '허니컴', item: '컴퓨터부품판매',
        address: '경기도 성남시 중원구 산성대로320-4, 1층', phone: '010-3396-9947'
    },

    {
        id: 759, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '한국다이카텍(주)', item: '항균필름생산',
        address: '경기도 성남시 중원구 상대원동 사기막골로 124 에스케이엔테크노파크 비즈동 504호', phone: '031-777-5222'
    },

    {
        id: 760, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '감초약국', item: '',
        address: '경기도 성남시 중원구 성남동 시민로 117-2', phone: '031-751-1644'
    },

    {
        id: 761, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '중앙벤딩', item: '자판기 운영 렌탈',
        address: '경기도 성남시 중원구 양현로 411 시티오피스타워 702호', phone: '010-7371-4441'
    },

    {
        id: 762, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '그 엄마의 그 딸  (온라인 매장)', item: '',
        address: '경기도 성남시 판교로 430 2층 북측 일부 (이매동)  https://tmtdmarket.imweb.me', phone: '010-6472-4559'
    },

    {
        id: 763, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '헤이데이스튜디오', item: '여성의류',
        address: '경기도 성남시 AK백화점 분당점 3층 라운지엠편집샵 내    네이버검색: 헤이데이스튜디오(heyday-studio)', phone: '02-3461-8588'
    },

    {
        id: 764, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '현대모터스', item: '자동차',
        address: '경기도 수원시 권선구 권선로 308 도이치오토월드 3층 369호 ', phone: '031 271 4600'
    },

    {
        id: 765, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '웨어러블서치', item: '전자제품',
        address: '경기도 수원시 영통구 광교로 145 지하2층', phone: '0507-1452-5680'
    },

    {
        id: 766, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 광교 엘포트점', item: '',
        address: '경기도 수원시 영통구 광교중앙로 145 (광교엘포트몰 지하1층)', phone: '031-214-9141'
    },

    {
        id: 767, position: new naver.maps.LatLng(), type: 'retail', industry: '컴퓨터판매수리', name: '영이네컴퓨터공방', item: '컴퓨터조립판매',
        address: '경기도 수원시 영통구 광교중앙로248번길 40 410호', phone: '010-2289-0442'
    },

    {
        id: 768, position: new naver.maps.LatLng(), type: 'retail', industry: '휴대폰', name: '유노정보통신', item: '',
        address: '경기도 수원시 장안구 송죽동 506번지 ', phone: '031-251-8884'
    },

    {
        id: 769, position: new naver.maps.LatLng(), type: 'retail', industry: '제조', name: '그린파워텍 ', item: '제조업',
        address: '경기도 수원시 장안구 송죽동393~12', phone: '010-4519-3523'
    },

    {
        id: 770, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '이신우', item: '여성의류',
        address: '경기도 수원시 팔달구 팔달문로 4번길 3(영동)', phone: '031-244-5836'
    },

    {
        id: 771, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '한일통상(실제작)', item: '',
        address: '경기도 안산시 단원구 신안산대학로 17', phone: '031-491-2741'
    },

    {
        id: 772, position: new naver.maps.LatLng(), type: 'retail', industry: '과일채소', name: '한살림사업연합', item: '유기농채소등',
        address: '경기도 안성시 대덕면', phone: '010-9287-5206'
    },

    {
        id: 773, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '아민약국', item: '',
        address: '경기도 안양시 동안구 관양동 평촌이마트내 1층', phone: '031 388 5535'
    },

    {
        id: 774, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '튼튼약국', item: '',
        address: '경기도 안양시 동안구 관평로 314', phone: '031-386-1256'
    },

    {
        id: 775, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '주)미가메드글로벌', item: 'KF94 마스크',
        address: '경기도 안양시 동안구 벌말로123, A동908호', phone: '02-431-0103/1899-4002'
    },

    {
        id: 776, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '조이전산', item: '사무용품, 복사기프린터 토너, 잉크',
        address: '경기도 안양시 동안구 엘에스로92, 23-314 (호계동, 안양국제유통단지)', phone: '031-456-0990'
    },

    {
        id: 777, position: new naver.maps.LatLng(), type: 'retail', industry: '서적', name: '다윗서점', item: '어린이도서판매',
        address: '경기도 안양시 동안구 호계동 무궁화건영코오롱상가 108호', phone: '-'
    },

    {
        id: 778, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '혜준온누리약국', item: '',
        address: '경기도 안양시 동안구 흥안대로 519 아이퍼스트타워 304호', phone: '031-423-7963'
    },

    {
        id: 779, position: new naver.maps.LatLng(), type: 'retail', industry: '약국', name: '세화약국', item: '',
        address: '경기도 안양시 만안구 455-1 ', phone: '031-471-4122'
    },

    {
        id: 780, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '양평 우리 미꾸리', item: '토종 미꾸라지 양식장.',
        address: '경기도 양평군 지평면 월산리1925,', phone: '010  4001  0924'
    },

    {
        id: 781, position: new naver.maps.LatLng(), type: 'retail', industry: '정육/수산', name: '농업 회사법인 해밀', item: '양계업',
        address: '경기도 여주시 가남읍 산해1길 95-30 ', phone: '010-8876-4437'
    },

    {
        id: 782, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '티앤비컴퍼니', item: '실리콘제품 및 기타생활용품',
        address: '경기도 오산시 남부대로 464-65(청호동)', phone: '031-663-2763'
    },

    {
        id: 783, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '테스코코리아', item: '방열기',
        address: '경기도 용인시 236번길 82-4', phone: '031-332-9383'
    },

    {
        id: 784, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '브러쉬', item: '',
        address: '경기도 용인시 구갈로 74 허브스포츠클럽110호', phone: '010-6278-1009'
    },

    {
        id: 785, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '인셀덤/솔(soul)', item: '',
        address: '경기도 용인시 구갈로 74 허브스포츠클럽121호', phone: '010-6278-1009'
    },

    {
        id: 786, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '캐리스노트', item: '',
        address: '경기도 용인시 기흥구 517-1  수원프리미엄아울렛A동1층 캐리스노트  숙녀복', phone: '031 205  4757'
    },

    {
        id: 787, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '아이비 컴패니', item: '향균마스크, KF94마스크,향균스티커?',
        address: '경기도 용인시 기흥구 구성2로 5번길10. B1', phone: '031-305-4468'
    },

    {
        id: 788, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '이브자리 슬립앤슬립 기흥 마북점', item: '침구류',
        address: '경기도 용인시 기흥구 구성로 21 1층', phone: '031-284-7949'
    },

    {
        id: 789, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '열매상사', item: '인쇄/기념품제작',
        address: '경기도 용인시 기흥구 구성로279번길 24-11, 102호', phone: '010-5332-7023'
    },

    {
        id: 790, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '로뎀', item: '의류',
        address: '경기도 용인시 기흥구 기흥역로 63, 지하 1층(AK 기흥점)', phone: '031-281-7141'
    },

    {
        id: 791, position: new naver.maps.LatLng(), type: 'retail', industry: '편의점', name: 'CU기흥백현마을점', item: '',
        address: '경기도 용인시 기흥구 동백동 598-3', phone: '010-9569-1236'
    },

    {
        id: 792, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '포시즌안경', item: '안경판매',
        address: '경기도 용인시 기흥구 동백죽전대로 331 지하2층 1호 스퀘어일레븐', phone: '031-8017-5567'
    },

    {
        id: 793, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '유니크론텍', item: '전자부품 도소매',
        address: '경기도 용인시 기흥구 동백중앙로 191 8층', phone: '01039257510'
    },

    {
        id: 794, position: new naver.maps.LatLng(), type: 'retail', industry: '과일채소', name: '선한이웃 선린', item: '',
        address: '경기도 용인시 기흥구 보정로 87,  205-1403  죽현마을 아이파크', phone: '010-5233-9082'
    },

    {
        id: 795, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '장수돌침대 용인흥덕점', item: '가구점',
        address: '경기도 용인시 기흥구 신정로 41번길 128-4 A-25', phone: '010-3171-2974'
    },

    {
        id: 796, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '페이지 소파', item: '가구점',
        address: '경기도 용인시 기흥구 신정로41번길 130-1', phone: '010-2772-0600'
    },

    {
        id: 797, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '지니원', item: '산업용 바코드 프린터',
        address: '경기도 용인시 기흥구 신촌로 63, 102호 (보정동) (www.ginione.com)', phone: '031-623-0779'
    },

    {
        id: 798, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 보정점', item: '',
        address: '경기도 용인시 기흥구 죽전로 15번길 8-19 (1층)', phone: '031-889-9141'
    },

    {
        id: 799, position: new naver.maps.LatLng(), type: 'retail', industry: '휴대폰', name: 'JH텔레콤', item: '',
        address: '경기도 용인시 기흥구 죽전로 23 1층 도매폰', phone: '010-9286-4123'
    },

    {
        id: 800, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '세사리빙 신갈점', item: '알레르기케어 기능성 이불',
        address: '경기도 용인시 기흥구 중부대로375 1층 (신갈동 기흥역 롯데캐슬 스카이몰)', phone: '031-275-6279'
    },

    {
        id: 801, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '토이랄라', item: '',
        address: '경기도 용인시 수지구 동천로 381', phone: '070-8918-1811'
    },

    {
        id: 802, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '수지아울렛', item: '',
        address: '경기도 용인시 수지구 성복동 746-2', phone: '031-265-5503'
    },

    {
        id: 803, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '스마트스토어 제이스웨이', item: '',
        address: '경기도 용인시 수지구 수지로113번길15', phone: '01048249715'
    },

    {
        id: 804, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '페이펄문구', item: '문구',
        address: '경기도 용인시 수지구 죽전동 선진포리스트BD 가동 208호', phone: '031-896-9024'
    },

    {
        id: 805, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '폰토피아', item: '핸드폰 케이스',
        address: '경기도 용인시 수지구 죽전로 193번길 35번지 반도 유보라 103동 801호', phone: '010-8811-7423'
    },

    {
        id: 806, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '스테이코너', item: '',
        address: '경기도 용인시 수지구 진산로 24 104동1301호', phone: '01030987079'
    },

    {
        id: 807, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '웰빙랩', item: '',
        address: '경기도 용인시 수지구 풍덕천로76,신정마을 9단지 아파트 905동703호', phone: '010-8440-4280'
    },

    {
        id: 808, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '화이트블럭', item: '의류(통신판매)',
        address: '경기도 용인시 수풍로 90  (http://smartstore.naver.com/whiteblock9)', phone: '010-4005-6945'
    },

    {
        id: 809, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '정여사네골동품', item: '골동품판매',
        address: '경기도 용인시 시흥구 고매로 64 1층', phone: '010-8399-9620'
    },

    {
        id: 810, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '엘림산업 인트나인', item: '인테리어거울 제작.판매',
        address: '경기도 용인시 처인구 곡현로 538-9', phone: '010-7707-0245'
    },

    {
        id: 811, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '르비드', item: '인터넷 쇼핑몰, 아트상품',
        address: '경기도 용인시 처인구 마평동 38, levide.co.kr', phone: ''
    },

    {
        id: 812, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '콜링. 비티알복합매장', item: '',
        address: '경기도 용인시 처인구 모현읍 갈담리 444-5 모현콜핑', phone: '031-322-5106'
    },

    {
        id: 813, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '지비스조명', item: '온라인 쇼핑몰',
        address: '경기도 의왕시 이미로40, 의왕IT밸리 D동 715호 www.zibis.co.kr', phone: '1600-9258'
    },

    {
        id: 814, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '웰메이드(인디안) 이천부발점', item: '',
        address: '경기도 이천시 중부대로 1548', phone: '031-635-1914'
    },

    {
        id: 815, position: new naver.maps.LatLng(), type: 'retail', industry: '안경', name: '포비전안경점', item: '안경점',
        address: '경기도 하남시 감일백제로 83번길 24 G골든프라자 2층', phone: '010-3745-0308'
    },

    {
        id: 816, position: new naver.maps.LatLng(), type: 'retail', industry: '제조', name: '선굼터, 맛도락', item: '가정 간편식 및  식당 간편조리메뉴',
        address: '경기도 하남시 초이로  44번길 72', phone: '02-403-9285'
    },

    {
        id: 817, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '소울라이팅', item: '경관,무대,조명 관련 수입품',
        address: '경기도 하남시 하남대로 947 하남테크노벨리 U1 센터 B동 1318호', phone: '031-5180-3396'
    },

    {
        id: 818, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '지엔 네트웍스', item: '의약품 판매대행',
        address: '경기도 화성시 동탄대로', phone: '010-3254-3219'
    },

    {
        id: 819, position: new naver.maps.LatLng(), type: 'retail', industry: '편의점', name: '세븐일레븐 동탄센트럴자이점', item: '',
        address: '경기도 화성시 동탄대로22길 30, 상가동 104호,105호', phone: '01074421209'
    },

    {
        id: 820, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '헵시바', item: '단체,유니폼 맞춤제작',
        address: '경기도 화성시 동탄순환대로1길 64', phone: '010-2043-6440'
    },

    {
        id: 821, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: 'SBI Inc', item: '수출업(인터넷판매)',
        address: '경기도 화성시 동탄첨단산업1로 51-9', phone: '010-8697-7487'
    },

    {
        id: 822, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '디히김치', item: '',
        address: '온라인 - www.dihi.co.kr (현대백화점 판교/압구정/무역센터/목동, 신세계백화점 경기점)', phone: '1661-6302'
    },

    {
        id: 823, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 인천논현점', item: '',
        address: '인천광역시 남동구 논고개로 61 (라피에스타 1층)', phone: '031-8885-9141'
    },

    {
        id: 824, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 인천청라점', item: '',
        address: '인천광역시 서구 청라커낼로 252 (롯데캐슬상가 1층)', phone: '070-8840-9141'
    },

    {
        id: 825, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '아리따움(연수옥련점)', item: '',
        address: '인천광역시 연수구 옥련동 3-4 유한빌딩 102동 103호', phone: '032-833-6622'
    },

    {
        id: 826, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '자동차판매', item: '자동차판매 중개 및 할부상품소개 처리',
        address: '', phone: '010-2203-4376'
    },

    {
        id: 827, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '선스', item: '천연비누/샴푸바, 도자기 비누판',
        address: '(온라인 판매) www.less-binu.com', phone: '010-2784-4407'
    },

    {
        id: 828, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '다이소', item: '',
        address: '강원도 평창군 평창읍 평창중앙로 245번지', phone: '297-88-01902'
    },

    {
        id: 829, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '소노시즌앤베드디포', item: '',
        address: '광주시 곤지암읍 광여로125 1층', phone: '031-766-4088'
    },

    {
        id: 830, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '위라라', item: '',
        address: '온라인 -  "위라라" https://smartstore.naver.com/welala', phone: '010-9890-7997'
    },

    {
        id: 831, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '스몰버킷리스트', item: '기타(온라인쇼핑몰/ 건설기계중장비)',
        address: '온라인 -  https://store.kakao.com/sbuck', phone: '010-4274-2911'
    },

    {
        id: 832, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '메이드G', item: '패션잡화(가방)',
        address: '온라인 - 네이버, [에이블리에서 메이드G] 검색', phone: '없음'
    },

    {
        id: 833, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '파콘', item: '의류제조',
        address: '온라인 - 와디즈(웹주소: wadiz.kr) 접속 후 → “크리섬” 검색', phone: '010-3795-2460'
    },

    {
        id: 834, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '럭스리브', item: '인터넷판매(매트리스,수건)',
        address: '온라인 - http://luxliv.kr', phone: '010-6319-7736'
    },

    {
        id: 835, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '똑주부몰', item: '',
        address: '온라인 - http://minishop.gmarket.co.kr/ddokjubu', phone: '0507-1413-4860'
    },

    {
        id: 836, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '굿나인글로벌', item: '인터넷 판매',
        address: '온라인 - http://naver.me/5tjnxj7c', phone: ''
    },

    {
        id: 837, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '마하나홈', item: '리빙(러그,카페트) 온라인몰',
        address: '온라인 - http://naver.me/F8LS1ZoC', phone: '010-4753-0660'
    },

    {
        id: 838, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '올인원클럽', item: '해외구매대행',
        address: '온라인 - http://naver.me/GROEdd8Y', phone: '010-3348-6669'
    },

    {
        id: 839, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '구루구루샵', item: '애견용품',
        address: '온라인 - http://naver.me/xXr9tTBx', phone: '031-781-8765'
    },

    {
        id: 840, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '똑주부몰', item: '',
        address: '온라인 - http://stores.auction.co.kr/ddokjubu', phone: '0507-1413-4860'
    },

    {
        id: 841, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '에픽제니', item: '캠핑용품 외',
        address: '온라인 - https://m.smartstore.naver.com/epic_jenny', phone: '010-2361-9272'
    },

    {
        id: 842, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '저글링앤텀블링', item: '',
        address: '온라인 - https://m.smartstore.naver.com/jjntt', phone: '010-2037-3899'
    },

    {
        id: 843, position: new naver.maps.LatLng(), type: 'retail', industry: '화장품', name: '시드코리아', item: '',
        address: '온라인 - https://m.smartstore.naver.com/sidkorea?NaPm=ct%3Dku2aaui9%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dcd5f7559ee2909a184fb6016bc4fba0b4b0c2376', phone: '01043970510'
    },

    {
        id: 844, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '일곱번째날', item: '',
        address: '온라인 - https://m.smartstore.naver.com/the7thday', phone: '010 8228 9344'
    },

    {
        id: 845, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '소예티나', item: '',
        address: '온라인 - https://shop.11st.co.kr/stores/628280', phone: '0507-1413-4860'
    },

    {
        id: 846, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '소예티나', item: '',
        address: '온라인 - https://smartstore.naver.com/ddokjubu', phone: '0507-1413-4860'
    },

    {
        id: 847, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '득템창고', item: '',
        address: '온라인 - https://smartstore.naver.com/dodream shop', phone: '070-5159-5655'
    },

    {
        id: 848, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '은샘마켓', item: '도서,식품',
        address: '온라인 - https://smartstore.naver.com/magician79/profile', phone: '010-9223-6358'
    },

    {
        id: 849, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: 'namedtae', item: '',
        address: '온라인 - https://smartstore.naver.com/named_tae', phone: '010-2923-1719'
    },

    {
        id: 850, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '이룸피앤에이', item: '유리용물때제거제, 발수,방오제품',
        address: '온라인 - https://smartstore.naver.com/sharkremover/products/5414588991', phone: '070-8254-8084'
    },

    {
        id: 851, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '샘 코포레이션', item: '교육용 보드게임',
        address: '온라인 - https://smartstore.naver.com/storycreator/products/4691785736', phone: '010-9361-7452'
    },

    {
        id: 852, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '소예티나', item: '',
        address: '온라인 - https://store.coupang.com/link/ddokjubu', phone: '010-8334-4860'
    },

    {
        id: 853, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '벨리나벨로', item: '인터넷 쇼핑몰, 강아지옷',
        address: '온라인 - m.smartstore.naver.com/bellinabello', phone: ''
    },

    {
        id: 854, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '달라유', item: '전자상거래 소매업 (주방용품, 인테리어 소품 판매)',
        address: '온라인 - m.smartstore.naver.com/dalayou21', phone: '010-8678-5061'
    },

    {
        id: 855, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '몰링몰링', item: '휴대폰악세서리',
        address: '온라인 - smartstore.naver.com/mollingmolling', phone: '070-8018-8084'
    },

    {
        id: 856, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '향낭캘리', item: '말씀액자& 수제카드봉투',
        address: '온라인 - smartstore.naver.com/sachet', phone: '010-4729-4560'
    },

    {
        id: 857, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '어씬 코퍼레이션', item: '스포츠용품',
        address: '온라인 - www.awesyn.com', phone: '0505-901-0105'
    },

    {
        id: 858, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '비쿨식스 온라인숍', item: '',
        address: '온라인 - www.bekoor6.com', phone: '비쿨식스 검색'
    },

    {
        id: 859, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '매가맥스', item: '약.화장품',
        address: '온라인 - www.megamax.nz.  smartstore.naver.com(10월 개업 예정)', phone: '031-602-3353'
    },

    {
        id: 860, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: 'snap', item: '의류점',
        address: '온라인 - www.snapstore.co.kr', phone: '031-315-2284'
    },

    {
        id: 861, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '빈티지캐비넷', item: '인터넷 구매대행',
        address: '온라인 - www.vintagecabinetcafe.com', phone: ''
    },

    {
        id: 862, position: new naver.maps.LatLng(), type: 'retail', industry: '문구/팬시', name: '마주', item: '',
        address: '온라인 - www.yourmaju.com', phone: '070-8711-1225'
    },

    {
        id: 863, position: new naver.maps.LatLng(), type: 'retail', industry: '기타', name: '테이스트굿(tastegood)', item: '프리미엄 식품',
        address: '인터넷 쇼핑몰 : http://tastegood.co.kr 스마트스토어 : https://smartstore.naver.com/taste_good', phone: '031-623-9161, 010-5612-2090'
    },

    {
        id: 864, position: new naver.maps.LatLng(), type: 'retail', industry: '패션잡화', name: '서진등산복', item: '등산복',
        address: '충청남도 논산시 부적면 계백로1660-6(외성리)', phone: '010-5301-2260'
    },

    {
        id: 865, position: new naver.maps.LatLng(), type: 'retail', industry: '제조', name: '스포츠바이오텍', item: '건강기능식품제조업',
        address: '충청북도 음성군 삼성면 금일로 1087-38           Tel: 043-881-9633  ', phone: '010-8299-9299'
    },

    {
        id: 866, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '엘문도', item: '가구,인테리어',
        address: 'https://m.smartstore.naver.com/elmundo', phone: '010-7680-9036'
    },

    {
        id: 867, position: new naver.maps.LatLng(), type: 'retail', industry: '가구/침구', name: '에이나드', item: '가구판매',
        address: 'm.smartstore.naver.com/aanod', phone: '010-9470-7366'
    },
];
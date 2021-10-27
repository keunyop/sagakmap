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
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: 'Naked Coffee',
        item: '',
        address: '서울특별시 성동구 뚝섬로3길 13',
        phone: '02-464-0201'
    },
    {
        id: 22,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '타미하우스',
        item: '',
        address: '서울특별시 성동구 왕십리로 10길 6, 1층 104호',
        phone: '010-9074-6574'
    },
    {
        id: 23,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '김과장고깃집석계점',
        item: '',
        address: '서울특별시 성북구 한천로78길 46 김과장고깃집',
        phone: '01099564000'
    },
    {
        id: 24,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '반찬장이',
        item: '반찬',
        address: '서울특별시 송파구 가락로 133, 1층 4호',
        phone: '02-420-8383'
    },
    {
        id: 25,
        position: new naver.maps.LatLng(0, 0),
        industry: '치킨',
        name: 'BBQ 문정점',
        item: '',
        address: '서울특별시 송파구 문정동 41-1번지 1층',
        phone: '02-409-9561'
    },
    {
        id: 26,
        position: new naver.maps.LatLng(0, 0),
        industry: '양식',
        name: '임실치즈피자 잠실점',
        item: '',
        address: '서울특별시 송파구 백제고분로21길 15',
        phone: '02-415-2880'
    },
    {
        id: 27,
        position: new naver.maps.LatLng(0, 0),
        industry: '양식',
        name: '토브피자 화덕피자',
        item: '화덕피자',
        address: '서울특별시 송파구 송파대로 345 헬리오시티 상가 1A동 지하1층 B144호',
        phone: '02-400-2046'
    },
    {
        id: 28,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '수하동 헬리오시티점',
        item: '',
        address: '서울특별시 송파구 송파대로 345 헬리오시티 상가 4블럭 1층 1호 (헬리오시티 3번 게이트 앞)',
        phone: '024094559'
    },
    {
        id: 29,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '단백한하루',
        item: '',
        address: '서울특별시 송파구 오금동 42-3번지 1층',
        phone: '0507-1358-5075'
    },
    {
        id: 30,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '곰국시집',
        item: '',
        address: '서울특별시 송파구 올림픽로 300',
        phone: '02-3213-4577'
    },
    {
        id: 31,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '리김밥',
        item: '',
        address: '서울특별시 송파구 올림픽로240 지하1층 푸드스트리트 리김밥 잠실롯데월드점',
        phone: '02-2143-1248'
    },
    {
        id: 32,
        position: new naver.maps.LatLng(0, 0),
        industry: '치킨',
        name: '깐부치킨 위례중앙점',
        item: '',
        address: '서울특별시 송파구 위례광장로 120 위례중앙푸르지오 1단지 147',
        phone: '02-400-5544'
    },
    {
        id: 33,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '고레카레',
        item: '',
        address: '서울특별시 중구 을지로170 을지트윈타워 지하1층 고레카레',
        phone: '02-3706-7321'
    },
    {
        id: 34,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '로드리카페',
        item: '',
        address: '서울특별시 중구 퇴계로414  1층, 로드리',
        phone: '0264390880'
    },
    {
        id: 35,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '노아노아',
        item: '황태구이 정식 등',
        address: '경기 성남시 분당구 서현로237번길 8 (서현동)',
        phone: '031-706-9181'
    },
    {
        id: 36,
        position: new naver.maps.LatLng(0, 0),
        industry: '치킨',
        name: '매드후라이치킨 정자점',
        item: '',
        address: '경기 성남시 분당구 정자일로 240 (정자동, 월드프라자102.103)',
        phone: '031-726-4295'
    },
    {
        id: 37,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '플로렌스 파티하우스 가천대역점',
        item: '돌잔치/파티룸',
        address: '경기 성남시 수정구 성남대로 1298 (태평동)',
        phone: '0507-1423-6114'
    },
    {
        id: 38,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '효원당',
        item: '호두과자',
        address: '경기 시흥시 수도권제1순환고속도로 105 (조남동) 시흥하늘휴게소',
        phone: '010-3661-0329'
    },
    {
        id: 39,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '더 한점',
        item: '지리산흑돼지 전문',
        address: '경기 용인시 기흥구 동백5로 17 (중동, 레이크시티프라자 203호)',
        phone: '031-287-0862'
    },
    {
        id: 40,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '컴포즈커피 용인보정점',
        item: '커피',
        address: '경기 용인시 기흥구 죽전로 39 (보정동, 에스제이타워) 1층 우측코너',
        phone: '031-276-9593'
    },
    {
        id: 41,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '더크라운커피랩',
        item: '커피음료',
        address: '경기 용인시 수지구 풍덕천로181번길 4-6 (풍덕천동) 1층',
        phone: '031-263-3211'
    },
    {
        id: 42,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '코리달리스카페',
        item: '',
        address: '경기도 가평군 청평면 호반로 887',
        phone: '031 585 4788'
    },
    {
        id: 43,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '선데이커피(핸드드립커피 전문점)',
        item: '',
        address: '경기도 광주 남한산성면 불당길27 샬롬하우스 1층',
        phone: '010-2736-3907, 031-746-3352'
    },
    {
        id: 44,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '로스트 어 파운드',
        item: '',
        address: '경기도 광주시 경안로 138, 1층 101호',
        phone: '031-761-0972'
    },
    {
        id: 45,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '사래골김치찌개집',
        item: '',
        address: '경기도 광주시 도척면 도척윗로 184',
        phone: '031-767-2244'
    },
    {
        id: 46,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '족보있는 국밥',
        item: '국밥/돈까츠',
        address: '경기도 광주시 오포읍 문형산길 21',
        phone: '031-716-0577'
    },
    {
        id: 47,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '채선당',
        item: '',
        address: '경기도 광주시 오포읍 상태길9',
        phone: '031=712-5747'
    },
    {
        id: 48,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '김마리 ',
        item: '',
        address: '경기도 광주시 오포읍 신현로73 1층 김마리',
        phone: '031-726-3008'
    },
    {
        id: 49,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '하루만족발',
        item: '',
        address: '경기도 광주시 태전동로 21번지',
        phone: '031-764-8922'
    },
    {
        id: 50,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '쿄와스시',
        item: '',
        address: '경기도 광주시 태전동로 29 1층',
        phone: '031-798-8844'
    },
    {
        id: 51,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '돌고래반찬',
        item: '반찬',
        address: '경기도 분당구 수내53 돌고래상가지층 102~104호',
        phone: '031-712-0994'
    },
    {
        id: 52,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: 'cafe415',
        item: '',
        address: '경기도 분당구 정자동 한솔마을 청구코아상가',
        phone: '031-718-7625'
    },
    {
        id: 53,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '키친두레',
        item: '한식 (도시락)',
        address: '경기도 성남시 내정로 129번길 1',
        phone: '031-713-4515/ 010-6752-8999'
    },
    {
        id: 54,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '달보드레',
        item: '베이커리',
        address: '경기도 성남시 내정로58(정자동) 1층',
        phone: '031-714-3477'
    },
    {
        id: 55,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '정스깁밥',
        item: '',
        address: '경기도 성남시 돌마로361 동신코아 지하1층',
        phone: '031-712-2481'
    },
    {
        id: 56,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '하늘선',
        item: '한정식',
        address: '경기도 성남시 분당구 구미 122번길 6',
        phone: '031-786-1718'
    },
    {
        id: 57,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '오늘하루',
        item: '쌈밥/ 한방차',
        address: '경기도 성남시 분당구 금곡동 정자1로 삼라마이다스빌 201호',
        phone: '031 714 6607'
    },
    {
        id: 58,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '희동 아뜰리에 ',
        item: '쿠키전문점',
        address: '경기도 성남시 분당구 내정로165번길 38 양지마을 청구문화시장 2층 213호 희동아뜰리에쿠키',
        phone: '070-8972-1803'
    },
    {
        id: 59,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '호호초밥, 카츠젠',
        item: '',
        address: '경기도 성남시 분당구 내정로174번길 42 돌고래상가 지하 222호',
        phone: '0507-1304-7943'
    },
    {
        id: 60,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: 'M가마솥설렁탕',
        item: '설렁탕',
        address: '경기도 성남시 분당구 대왕판교로296 궁내동빌딩',
        phone: '031-713-0088'
    },
    {
        id: 61,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '데일리쿡',
        item: '반찬',
        address: '경기도 성남시 분당구 동판교로 155 봇들마을 7단지 A상가 101호',
        phone: '0507-1494-7078'
    },
    {
        id: 62,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '무궁화파이브',
        item: '',
        address: '경기도 성남시 분당구 동판교로 52번길 9-9',
        phone: '031-705-3367'
    },
    {
        id: 63,
        position: new naver.maps.LatLng(0, 0),
        industry: '양식',
        name: '비앙또아',
        item: '',
        address: '경기도 성남시 분당구 동판교로177번길 25, 판교 아브뉴프랑 1층',
        phone: '031-707-1088'
    },
    {
        id: 64,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '양바위 본점',
        item: '',
        address: '경기도 성남시 분당구 동판교로177번길 25, 판교 아브뉴프랑 1층',
        phone: '031-706-9288'
    },
    {
        id: 65,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '이원희맛집직화쌈밥',
        item: '',
        address: '경기도 성남시 분당구 문정로 148번길9',
        phone: '031-781-3838'
    },
    {
        id: 66,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '석관동떡볶이 NC 미금점',
        item: '',
        address: '경기도 성남시 분당구 미금일로 154번길 20',
        phone: '010-3053-6530'
    },
    {
        id: 67,
        position: new naver.maps.LatLng(0, 0),
        industry: '양식',
        name: '라라테이블',
        item: '',
        address: '경기도 성남시 분당구 발이봉남로 31번길 2',
        phone: '031-711-9998'
    },
    {
        id: 68,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '예봄떡방',
        item: '떡집',
        address: '경기도 성남시 분당구 백현로97번길',
        phone: '031-8022-7200'
    },
    {
        id: 69,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '푸에르코 | 하누마루',
        item: '',
        address: '경기도 성남시 분당구 분당내곡로 117 크래프톤타워 2층',
        phone: '031-622-7500'
    },
    {
        id: 70,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '채선당',
        item: '',
        address: '경기도 성남시 분당구 분당로53번길 11 서원플라자2층(서현점)',
        phone: '031-702-3655'
    },
    {
        id: 71,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '카페써밋',
        item: '',
        address: '경기도 성남시 분당구 불곡로 4 리더스프라자 5층',
        phone: '010-2667-0725'
    },
    {
        id: 72,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '소미당',
        item: '떡',
        address: '경기도 성남시 분당구 불정로 386번길10 미래그린상가 1088',
        phone: '031-702-6438'
    },
    {
        id: 73,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '로스팅하우스137',
        item: '',
        address: '경기도 성남시 분당구 새마을로233번길 3 로스팅하우스137',
        phone: '031.708.0137'
    },
    {
        id: 74,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '19티',
        item: '',
        address: '경기도 성남시 분당구 서현로 180번길 19 101-20호',
        phone: '010-8411-5025'
    },
    {
        id: 75,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '망향국수(분당점)',
        item: '',
        address: '경기도 성남시 분당구 서현로239번길 6',
        phone: '031-704-9333'
    },
    {
        id: 76,
        position: new naver.maps.LatLng(0, 0),
        industry: '양식',
        name: '카페 라온',
        item: '',
        address: '경기도 성남시 분당구 서현로257번길 15',
        phone: '031-704-1279'
    },
    {
        id: 77,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '카페마로네',
        item: '커피,가죽공방',
        address: '경기도 성남시 분당구 성남대로  916번길7. 202호',
        phone: '070.8839.1028'
    },
    {
        id: 78,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '쭈락',
        item: '쭈꾸미, 낙지, 홍어 전문요리',
        address: '경기도 성남시 분당구 성남대로 331번길 3-9. 2층',
        phone: '031-717-8100'
    },
    {
        id: 79,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '김마리 정자점',
        item: '',
        address: '경기도 성남시 분당구 성남대로389 폴라리스2건물1층 김마리',
        phone: '031-711-7676'
    },
    {
        id: 80,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '김밥마니아야탑본점 ',
        item: '',
        address: '경기도 성남시 분당구 성남대로925번길19 터미널프라자108호 ',
        phone: '010-5205-7130 '
    },
    {
        id: 81,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '김밥연구소우리',
        item: '',
        address: '경기도 성남시 분당구 수내동 20-2 효림프라자1층 117호',
        phone: '031-715-4749'
    },
    {
        id: 82,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '야옹제면소',
        item: '',
        address: '경기도 성남시 분당구 수내동 29 대명제이스트상가 지하1층 (배달전문)',
        phone: ''
    },
    {
        id: 83,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '돌고래손칼국수',
        item: '',
        address: '경기도 성남시 분당구 수내동 돌고래상가 지하163호',
        phone: '031-717-7181'
    },
    {
        id: 84,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '커피컵',
        item: '',
        address: '경기도 성남시 분당구 야탑동 358-2 분당 아미고타워 지하 1층 ',
        phone: '010-8531-6448'
    },
    {
        id: 85,
        position: new naver.maps.LatLng(0, 0),
        industry: '치킨',
        name: '와그너치킨 ',
        item: '',
        address: '경기도 성남시 분당구 양현로 94번길 29(이매점)',
        phone: '031-709-3221'
    },
    {
        id: 86,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '째즈고양이카페',
        item: '고양이카페',
        address: '경기도 성남시 분당구 양현로 94번길 7 대명프라자 503호',
        phone: '031-705-9022'
    },
    {
        id: 87,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '아파트먼트커피',
        item: '',
        address: '경기도 성남시 분당구 양현로94번길 28 이매촌동신3단지아파트 상가 1층 104호',
        phone: '전화없어요'
    },
    {
        id: 88,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '우리집김밥',
        item: '',
        address: '경기도 성남시 분당구 양현로94번길 29 이매동상가 1층',
        phone: '0507-1398-5700'
    },
    {
        id: 89,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '아티크',
        item: '카페*의류 편집샵 병행',
        address: '경기도 성남시 분당구 운중동 383-1 2층',
        phone: '031-704-3344/ 010-8939-4700'
    },
    {
        id: 90,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '노란코끼리 판교점',
        item: '',
        address: '경기도 성남시 분당구 운중로277번길 46-8, 서판교도서관 정문 앞',
        phone: '031-8017-1002'
    },
    {
        id: 91,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '떡 마을',
        item: '떡',
        address: '경기도 성남시 분당구 이매동 141 풍림상가 101호',
        phone: '031-706-0012'
    },
    {
        id: 92,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '우리카페',
        item: '',
        address: '경기도 성남시 분당구 이매로 113 EMC골프장1층 ',
        phone: '031-705-2918'
    },
    {
        id: 93,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '자매공작소',
        item: '디저트',
        address: '경기도 성남시 분당구 정자동 150-3번지 1층',
        phone: '010-9375-6489'
    },
    {
        id: 94,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '하누비노 정자점',
        item: '',
        address: '경기도 성남시 분당구 정자일로 136, 엠코헤리츠 3단지 101호',
        phone: '031-719-2192'
    },
    {
        id: 95,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '양바위 정자점',
        item: '',
        address: '경기도 성남시 분당구 정자일로 140, 엠코헤리츠 2단지 B119~121호',
        phone: '031-715-9288'
    },
    {
        id: 96,
        position: new naver.maps.LatLng(0, 0),
        industry: '중식',
        name: '블루 샹하이',
        item: '',
        address: '경기도 성남시 분당구 정자일로 197',
        phone: '031-715-1277'
    },
    {
        id: 97,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '양우정 본점',
        item: '',
        address: '경기도 성남시 분당구 정자일로156번길 6 뉴본타워 1층',
        phone: '본점 0317139252 판교점 031 706 9252'
    },
    {
        id: 98,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '봄날의청국장',
        item: '',
        address: '경기도 성남시 분당구 정자일로210 동양정자파라곤',
        phone: '031-712-0888'
    },
    {
        id: 99,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '육블럭',
        item: '',
        address: '경기도 성남시 분당구 정자일로213번길 10, 성원상떼뷰리젠시 101동 1층 105, 106호',
        phone: '031-715-6692'
    },
    {
        id: 100,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '노군꼬치 서현점',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 39번길 49 1층 125호',
        phone: '031-709-2869'
    },
    {
        id: 101,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '애니타임 아이스크림 할인점 서현점',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로39번길7 49동삼성한신 근린상가 134호',
        phone: '010-9952-3345'
    },
    {
        id: 102,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '김마리 서현점',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로40번길42 우성종합상가1층 김마리',
        phone: '031-704-7676'
    },
    {
        id: 103,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '키친박스',
        item: '',
        address: '경기도 성남시 분당구 판교로 255번길 9-22 우림W-CITY 1층 135호',
        phone: '031-628-8850'
    },
    {
        id: 104,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '잔칫날',
        item: '',
        address: '경기도 성남시 분당구 판교로 430 건영상가 113호',
        phone: '031-705-8074'
    },
    {
        id: 105,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '공차 (분당아름마을점)',
        item: '',
        address: '경기도 성남시 분당구 판교로 441 109호',
        phone: '0507-1342-7408'
    },
    {
        id: 106,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '세리네반찬',
        item: '반찬 판매, 배달',
        address: '경기도 성남시 분당구 판교로 519, 경남아너스빌 상가동 106-2호',
        phone: '031-781-5054'
    },
    {
        id: 107,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '투썸플레이스',
        item: '커피숍',
        address: '경기도 성남시 분당구 판교역로 235 H 스퀘어 1층 N동',
        phone: '031 696 7777'
    },
    {
        id: 108,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '담소소사골순대(판교3호점)',
        item: '',
        address: '경기도 성남시 분당구 판교역로 240 삼환하이펙스 A동 109,110호',
        phone: '031-698-2821'
    },
    {
        id: 109,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '림꼬또',
        item: '일식,한식',
        address: '경기도 성남시 분당구 판교역로152 알파돔3  201호 ',
        phone: '070 8827 1319'
    },
    {
        id: 110,
        position: new naver.maps.LatLng(0, 0),
        industry: '치킨',
        name: 'BHC치킨 분당정자점',
        item: '',
        address: '경기도 성남시 분당구 황새울로 12번길 11-3',
        phone: '031-716-9282   010-8448-1538'
    },
    {
        id: 111,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '하누비노 서현점',
        item: '',
        address: '경기도 성남시 분당구 황새울로 314, 유니퀘스트사옥 1층',
        phone: '031-709-2192'
    },
    {
        id: 112,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '카페레사',
        item: '',
        address: '경기도 성남시 분당구 황새울로 319번길 텍스타워 ',
        phone: '031-781-0578'
    },
    {
        id: 113,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '육쌈냉면',
        item: '',
        address: '경기도 성남시 분당구 황새울로 360번길 28 은성프라자 202호',
        phone: '031-703-6392'
    },
    {
        id: 114,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '백채김치찌게',
        item: '',
        address: '경기도 성남시 분당구 황새울로200번길 9-7(107호 수내동)',
        phone: '031-625-1215'
    },
    {
        id: 115,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '웨이 메이커',
        item: '떡집',
        address: '경기도 성남시 수정구 논골로47번길 4',
        phone: '010-8940-8489'
    },
    {
        id: 116,
        position: new naver.maps.LatLng(0, 0),
        industry: '치킨',
        name: 'BHC치킨',
        item: '',
        address: '경기도 성남시 수정구 산성대로 215길 3. 1층 ',
        phone: '031-758-9935'
    },
    {
        id: 117,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '빽다방',
        item: '',
        address: '경기도 성남시 수정구 산성대로 535 1층 ',
        phone: '031-748-0323'
    },
    {
        id: 118,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '역전우동',
        item: '',
        address: '경기도 성남시 수정구 산성대로 539 1층 ',
        phone: '031-744-0410'
    },
    {
        id: 119,
        position: new naver.maps.LatLng(0, 0),
        industry: '패스트푸드',
        name: '던킨도넛',
        item: '',
        address: '경기도 성남시 수정구 성남대로 1342 (복정동) 1층복사',
        phone: '031-752-0926'
    },
    {
        id: 120,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '청산골왕갈비',
        item: '갈비집',
        address: '경기도 성남시 수정구 신흥3동 시민로 144',
        phone: '031-743-7963'
    },
    {
        id: 121,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '신전떡볶이',
        item: '',
        address: '경기도 성남시 수정구 태평3동 3763번지',
        phone: '031-721-2288'
    },
    {
        id: 122,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '콩이소야',
        item: '',
        address: '경기도 성남시 양현로 탑마을 쌍용아파트상가',
        phone: '031-703-0343'
    },
    {
        id: 123,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '위 베이커리',
        item: '',
        address: '경기도 성남시 운중로 166번길 4-2 1층',
        phone: '031-607-2461'
    },
    {
        id: 124,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '금산삼계탕',
        item: '',
        address: '경기도 성남시 중원구 둔촌대로379',
        phone: '031-744-9889'
    },
    {
        id: 125,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '배러댄와플 단대오거리점',
        item: '커피, 와플',
        address: '경기도 성남시 중원구 산성대로 372번길 21(금광동), 1층',
        phone: '031-732-5949'
    },
    {
        id: 126,
        position: new naver.maps.LatLng(0, 0),
        industry: '패스트푸드',
        name: '크리스버거',
        item: '수제햄버거',
        address: '경기도 성남시 중원구 양현로405번길 17 시티파크 104호',
        phone: '070-8777-9000'
    },
    {
        id: 127,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '조앤스파이',
        item: '',
        address: '경기도 수원시 권선구 곡선로 49번길 14-15 1층 조앤스파이',
        phone: '010-2282-2880'
    },
    {
        id: 128,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '뜰카페',
        item: '',
        address: '경기도 수원시 영통구 도청로 17번길 40(이의동) 104호',
        phone: '031-214-4521'
    },
    {
        id: 129,
        position: new naver.maps.LatLng(0, 0),
        industry: '패스트푸드',
        name: '에그몬 홈플러스영통점',
        item: '',
        address: '경기도 수원시 영통구 봉영로 1576 1층',
        phone: '070-8865-0728'
    },
    {
        id: 130,
        position: new naver.maps.LatLng(0, 0),
        industry: '패스트푸드',
        name: 'GTS버거(광교까페거리점)',
        item: '햄버거',
        address: '경기도 수원시 영통구 센트럴파크로 127번길 100 지하 1층',
        phone: '0507-1325-2910'
    },
    {
        id: 131,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '잊지못회',
        item: '',
        address: '경기도 수원시 영통구 센트럴파크로 33 힐스테이트 레이크 상가 103호',
        phone: '010-9259-4123'
    },
    {
        id: 132,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '원유로 스페셜티 광교중앙역점',
        item: '',
        address: '경기도 수원시 영통구 에듀타운로 102 SK view A동1층117호',
        phone: '010-3461-1337'
    },
    {
        id: 133,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '커피에반하다 경기대광교역점',
        item: '',
        address: '경기도 수원시 영통구 이의동 대학1로 20-1',
        phone: '031-215-5331'
    },
    {
        id: 134,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '뜰17',
        item: '',
        address: '경기도 수원시 장안구 만석로159번길72 1층 ',
        phone: '031-258-4521'
    },
    {
        id: 135,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '커피해안',
        item: '',
        address: '경기도 수원시 팔달구 화서문로72번길 19, 1층',
        phone: '031-255-8879'
    },
    {
        id: 136,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '제복이네',
        item: '배달전문, 고기밥상, 쌈밥, 냉면 등 ',
        address: '경기도 시흥시 신천로 100번길 36 수정타워아파트 상가 105호',
        phone: '031-318-9992'
    },
    {
        id: 137,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '수라상',
        item: '백반, 한식',
        address: '경기도 안산시 단원구 예술길23 (고잔동)',
        phone: '031-414-0595'
    },
    {
        id: 138,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '문호리가족김밥',
        item: '김밥,떡볶기',
        address: '경기도 양평군 서종면 중미산로 22 101-2호',
        phone: '031-771-8284'
    },
    {
        id: 139,
        position: new naver.maps.LatLng(0, 0),
        industry: '중식',
        name: '칭하이',
        item: '',
        address: '경기도 오산시 밀머리로 1번길12 우리마트 2층 201호 ',
        phone: '031-377-7889'
    },
    {
        id: 140,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '하루끝',
        item: '',
        address: '경기도 용인시 기흥구 관곡로56,101호',
        phone: '031-282-6392, 010-3235-0359'
    },
    {
        id: 141,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '해삼',
        item: '회, 해산물',
        address: '경기도 용인시 기흥구 구갈로 66번길 11-1',
        phone: '031-286-5015'
    },
    {
        id: 142,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '카페501',
        item: '휴게음식점',
        address: '경기도 용인시 기흥구 사은로 240',
        phone: '031-284-0501'
    },
    {
        id: 143,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '카페보라동',
        item: '',
        address: '경기도 용인시 기흥구 용구대로 1890번길 25',
        phone: '031-284-3895'
    },
    {
        id: 144,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '25디그리스',
        item: '',
        address: '경기도 용인시 기흥구 죽전로15번길 11-14',
        phone: '031-889-5749'
    },
    {
        id: 145,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '호네뜨 베이커리',
        item: '베이커리 카페',
        address: '경기도 용인시 기흥구 평촌2로 2번길 2, 103호',
        phone: '031-282-6488'
    },
    {
        id: 146,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '나른한 오후',
        item: '천연발효종',
        address: '경기도 용인시 수지구 고기로 395',
        phone: '031-261-7735'
    },
    {
        id: 147,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '이자리손칼국수',
        item: '',
        address: '경기도 용인시 수지구 만현로 27  108호 아자리손칼국수',
        phone: '031-263-0153'
    },
    {
        id: 148,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '바닐라샌드위치',
        item: '샌드위치',
        address: '경기도 용인시 수지구 성복1로 80 2층 211호',
        phone: '031-261-0611'
    },
    {
        id: 149,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '리김밥',
        item: '',
        address: '경기도 용인시 수지구 성복2로 38 롯데몰수지점 지하1층 ',
        phone: '031-5174-4044'
    },
    {
        id: 150,
        position: new naver.maps.LatLng(0, 0),
        industry: '패스트푸드',
        name: '잇츠 키친',
        item: '샐러드, 샌드위치',
        address: '경기도 용인시 수지구 손곡로 80',
        phone: '010-5251-3185'
    },
    {
        id: 151,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '우시륵',
        item: '',
        address: '경기도 용인시 수지구 신봉1로 344번길 10',
        phone: '031-262-8570'
    },
    {
        id: 152,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '드림 플라워 케이크',
        item: '특별한날  맞춤 떡케이크',
        address: '경기도 용인시 수지구 죽전로 87, 433동 1101호',
        phone: '010-9242-4360'
    },
    {
        id: 153,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '호식당',
        item: '',
        address: '경기도 용인시 수지구 죽전로136 월드프라자106호',
        phone: '070-7756-5514 '
    },
    {
        id: 154,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '죽전골 남원추어탕',
        item: '추어요리전문점',
        address: '경기도 용인시 수지구 현암로 134-1',
        phone: '031-898-4007'
    },
    {
        id: 155,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '호텔북리',
        item: '브런치',
        address: '경기도 용인시 처인구 남사읍 당하로 6-10',
        phone: '010-2907-3322'
    },
    {
        id: 156,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '천서리 막국수 레이크cc점, 커피숍',
        item: '',
        address: '경기도 용인시 처인구 모현읍 능원로 82',
        phone: '031-323-0600'
    },
    {
        id: 157,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '클락켄트커피',
        item: '',
        address: '경기도 용인시 처인구 중부대로 1281번길 16-1',
        phone: '031-328-8090'
    },
    {
        id: 158,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '타이씨암',
        item: '태국음식',
        address: '경기도 용인시 처인구 포곡읍 성산로 633 호텔 더숨 포레스트 F동2층',
        phone: '031-323-3235'
    },
    {
        id: 159,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '모두쿱',
        item: '덮밥도시락',
        address: '경기도 의왕시 월암길 41 1층',
        phone: '050-5771-5775'
    },
    {
        id: 160,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: '쿠키라인',
        item: '수제쌀쿠키',
        address: '경기도 의왕시 월암길 41 지층',
        phone: '050-5771-5775'
    },
    {
        id: 161,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '백종원의 미정국수',
        item: '국수',
        address: '경기도 하남시 미사강변대로226번길 14',
        phone: '070-7756-0410'
    },
    {
        id: 162,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '카페부부스',
        item: '브런치',
        address: '경기도 화성시 동탄공원로 2길 27-12',
        phone: '031-613-4190'
    },
    {
        id: 163,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '복고다방',
        item: '',
        address: '경기도 화성시 동탄기흥로 614 동탄테크노밸리 1층 125호 ',
        phone: '010-8950-6255'
    },
    {
        id: 164,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '더프레시',
        item: '',
        address: '경기도 화성시 동탄대로 181 레이크꼬모 B3F CB335호 더프레시',
        phone: '01039444845'
    },
    {
        id: 165,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '한촌설렁탕 레이크꼬모점',
        item: '설렁탕',
        address: '경기도 화성시 동탄대로 181, C102호',
        phone: '031-375-8838'
    },
    {
        id: 167,
        position: new naver.maps.LatLng(0, 0),
        industry: '기타',
        name: '아이스걸크림보이',
        item: '아이스크림',
        address: '경기도 화성시 동탄대로 469-12 1042호',
        phone: '031-377-8818'
    },
    {
        id: 168,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '더벤티',
        item: '',
        address: '경기도 화성시 동탄순환대로 127-27 B103호',
        phone: '071-436-4443'
    },
    {
        id: 169,
        position: new naver.maps.LatLng(0, 0),
        industry: '일식',
        name: '보스참치 동탄점',
        item: '',
        address: '경기도 화성시 동탄순환대로 25길 24 1층 109호',
        phone: '010-6436-9325'
    },
    {
        id: 170,
        position: new naver.maps.LatLng(0, 0),
        industry: '패스트푸드',
        name: '노브랜드버거 (동탄영천점) ',
        item: '버거, 치킨, 각종 사이드, 샐러드',
        address: '경기도 화성시 동탄순환대로 689',
        phone: '031-374-5580'
    },
    {
        id: 171,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '도란도란',
        item: '돼지갈비',
        address: '경기도 화성시 동탄지성로163 ',
        phone: '031-225-4295'
    },
    {
        id: 172,
        position: new naver.maps.LatLng(0, 0),
        industry: '분식',
        name: '배달의쌀국수',
        item: '',
        address: '경기도 화성시 진안동 867-1 1층 102호',
        phone: '031-224-9091'
    },
    {
        id: 173,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '하진파파',
        item: '',
        address: '강원도 원주시 원일로 181 ',
        phone: '010-6336-9993'
    },
    {
        id: 174,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '소소한 식당 인텔리지점',
        item: '덮밥, 우동, 정식',
        address: '성남시 분당구 정자1로 177 인텔리지상가동 2층',
        phone: '010-8739-4704'
    },
    {
        id: 175,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '강수산',
        item: '',
        address: 'https://m.smartstore.naver.com/mussel',
        phone: '010-5252-1797'
    },
    {
        id: 176,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '꼬모수제청',
        item: '',
        address: 'https://smartstore.naver.com/iamccomo',
        phone: '010-7306-8336'
    },
    {
        id: 177,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '마메',
        item: '',
        address: 'https://smartstore.naver.com/coffeemame ',
        phone: '031-707-2846'
    },
    {
        id: 178,
        position: new naver.maps.LatLng(0, 0),
        industry: '커피/음료',
        name: '살곰달곰커피',
        item: '스페셜티커피, 드립백',
        address: 'https://m.smartstore.naver.com/salgomdalgom',
        phone: '010-5148-2520'
    },
    {
        id: 179,
        position: new naver.maps.LatLng(0, 0),
        industry: '제과점',
        name: 'pimpi',
        item: '떡케익',
        address: '카톡채널 pimpicake 인스타 @pimp_iiii',
        phone: ''
    },
    {
        id: 180,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '양우정 판교점',
        item: '',
        address: '경기도 성남시 분당구 대왕판교로606번길 10 라스트리트 1동 112호',
        phone: '본점 0317139252 판교점 031 706 9252'
    },
    {
        id: 181,
        position: new naver.maps.LatLng(0, 0),
        industry: '한식',
        name: '미감만족정원오리',
        item: '',
        address: '경기도 광주시 순암로 449번길 9',
        phone: '031-769-9998'
    },
    {
        id: 182, position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '그림비즈니스센터',
        item: '공유오피스',
        address: '서울 마포구 월드컵북로 400 (상암동) 상암동 서울산업진흥원 2층 홈페이지 http://www.grimbiz.com/ 블로그  https://blog.naver.com/grimbiz ',
        phone: '1661-9731'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '피앤케이수학원',
        item: '중고등 수학학원',
        address: '서울 서초구 고무래로8길 9 (반포동) 정환빌딩2층',
        phone: '02-595-9417'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '법무법인 정진',
        item: '변호사업',
        address: '서울시 강남구 강남대로 314(역삼동, 서우빌딩)',
        phone: '02-592-2224'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '신석호 정신과',
        item: '정신과',
        address: '서울특별시 강남구 개포로 615 석탑프라자 201',
        phone: '02-2226-2231'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '서문한의원',
        item: '한의원',
        address: '서울특별시 강남구 남부순환로 2738, 3층',
        phone: '02-579-5100'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '유일부동산 중개법인',
        item: '',
        address: '서울특별시 강남구 논현로 428, 302호 (역삼동 정진빌딩)',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)헤리티지앤파트너스',
        item: '법인 보험영업',
        address: '서울특별시 강남구 논현로 507, 1703호 (성지하이츠3차빌딩)',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '카피루스',
        item: '출력, 복사, 제본, 인쇄업',
        address: '서울특별시 강남구 논현로 76길 9 서울강남빌딩 1층',
        phone: '02-552-9978'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울본브릿지병원',
        item: '',
        address: '서울특별시 강남구 도곡로214',
        phone: '1899-0090'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '삼광공인중개사',
        item: '',
        address: '서울특별시 강남구 봉은사로18길 88',
        phone: '02-557-2929'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '대치상어수학학원',
        item: '',
        address: '서울특별시 강남구 삼성로 155 대치퍼스트빌딩 409호',
        phone: '02-554-0222'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '청담에스에스 640의원',
        item: '피부,탈모,도수치료',
        address: '서울특별시 강남구 삼성로 640, 2층',
        phone: '02-545-0640'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '헬스올림프스',
        item: '',
        address: '서울특별시 강남구 삼성로85길19 302 대치빌딩',
        phone: '010-8339-4711'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '도어즈',
        item: '',
        address: '서울특별시 강남구 선릉로 146길 27-10 (청담동 20-2) 3층',
        phone: '010-9108-0716'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세오케이통증의학과의원',
        item: '',
        address: '서울특별시 강남구 선릉로 517 비젼빌딩 ',
        phone: '02-556-8257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '스튜디오H',
        item: '드로잉수업,미술심리치료(자격증 유)',
        address: '서울특별시 강남구 압구정동 한양아파트',
        phone: '010-9173-8147'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '강의하는 아이들',
        item: '',
        address: '서울특별시 강남구 압구정로 29기 72-1 A동 3층 2호 ',
        phone: '02-543-8209 '
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '압구정케빈부동산중개',
        item: '',
        address: '서울특별시 강남구 압구정로29길 71 현대아파트 상가 3동 115호',
        phone: '02-545-8880'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)바른보존',
        item: '문화재수리
            (보존과학)',
address: '서울특별시 강남구 언주로134길.202호 에이170(논현동, 성암빌딩)',
        phone: '02-518-4326'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '강남 연세 흉부외과',
        item: '하지정맥류 전문',
        address: '서울특별시 강남구 역삼동 826-23, 3층',
        phone: '02-556-9388'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '튠댄스컴퍼니',
        item: '댄스스투디오',
        address: '서울특별시 강남구 역삼로 404 (재석빌딩) B1 튠댄스컴퍼니 ',
        phone: '02 565 7590'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '씨비젼 ',
        item: '홍보영상제작',
        address: '서울특별시 강남구 영동대로 643 삼안빌딩 501호 (청담역1번출구)',
        phone: '070-8843-3700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '헌터스그룹',
        item: '서치펌',
        address: '서울특별시 강남구 테헤란로 311 아남타워 1208호',
        phone: '010 3626 8330'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '헌터스 그룹',
        item: '직업 소개업',
        address: '서울특별시 강남구 테헤란로 311 아남타워 12층',
        phone: '010-3103-8338'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: 'Kga에셋',
        item: '보험판매전문',
        address: '서울특별시 강남구 테헤란로 313,1808호(성지하이츠 1차)',
        phone: '02-565-5563'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '신한라이프',
        item: '보험',
        address: '서울특별시 강남구 테헤란로 318 11층',
        phone: '010-2345-3238'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세채움정신건강의학과의원',
        item: '',
        address: '서울특별시 강남구 테헤란로 339, 선릉빌딩 8층',
        phone: '02-568-2075'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'WECODE',
        item: '코딩부트캠프',
        address: '서울특별시 강남구 테헤란로 427, 위워크 타워',
        phone: '010-7365-4553'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '노무법인 아인',
        item: '노무사',
        address: '서울특별시 강남구 테헤란로310, 15층 1503호(역삼동, 두꺼비빌딩)',
        phone: '02-6959-2405'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '신유한의원',
        item: '',
        address: '서울특별시 강남구 학동로 55길 12 세왕빌딩 4층',
        phone: '02-794-7588'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '골든공인중개사
사무소',
item: '',
        address: '서울특별시 강남구 헌릉로590길 63 강남데시앙파크 상가 102호',
        phone: '02-451-4600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '은혜무지개',
        item: '부동산 중개',
        address: '서울특별시 강동구 동남로81길 78',
        phone: '02-427-4111'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '쇼뇨몬테소리',
        item: '',
        address: '서울특별시 강동구 아리수로 423 강일큐브 3층',
        phone: '010-6839-5752'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '평강한의원',
        item: '',
        address: '서울특별시 강동구 양재대로 1465 마루빌딩 6층',
        phone: '02-478-9595'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '류마내과',
        item: '',
        address: '서울특별시 강동구 천호동 천호대로 1099 정산타워빌딩 ',
        phone: '02 474 5450'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '하나보습학원',
        item: '',
        address: '서울특별시 강북구 미아동 도봉로10라길 5 (골든빌4층)',
        phone: '02-907-3511'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '선율드림',
        item: '실내악 연주',
        address: '서울특별시 강서구 국회대로 171',
        phone: '010-3345-8479'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '곰글로벌',
        item: '바닥재,조명기구,욕실',
        address: '서울특별시 강서구 마곡중앙로 59-21, 에이스 타워2 812호',
        phone: '0507-1385-6109'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)공간의삶',
        item: '안전진단',
        address: '서울특별시 강서구 화곡로68길 15 ',
        phone: '02-6243-0501'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세마취통증의학과 ',
        item: '',
        address: '서울특별시 관악구 난곡로 226(세이브마트 옆, 마더스약국 건물 5층)',
        phone: '02-866-7585'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤지큐 음악동화',
        item: '',
        address: '서울특별시 관악구 남현1길 10, 3층',
        phone: '02-585-5726'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)사운드센트럴',
        item: '',
        address: '서울특별시 광진구 ',
        phone: '010-4162-2958'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울나란이치과',
        item: '교정치과',
        address: '서울특별시 광진구 아차산로 237 (건대입구역)',
        phone: '02-461-7522'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '본마디의원',
        item: '',
        address: '서울특별시 광진구 용마산로 44, 화성빌딩 2층',
        phone: '02.3437.8855'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '문앤도어아카이브',
        item: '가죽공방',
        address: '서울특별시 광진구 중곳동 112-1 102호',
        phone: '010-7928-6704'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '(주)대양인스티튜트',
        item: '',
        address: '서울특별시 구로구 도림로 90, 혜성빌딩 2층',
        phone: '02-838-0002'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '천재교과서 온라인 학습 밀크티 (초중고)',
        item: '',
        address: '서울특별시 금천구 디지탈로 10길  78,1210호 ',
        phone: '010-7321-5280'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '지혜나눔네트워크',
        item: '중장년을 위한 온라인 교육',
        address: '서울특별시 노원구 상계2동 노원로 428',
        phone: '010-3324-7278'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '공간이야기',
        item: '홈 앤 사무실 인테리어',
        address: '서울특별시 도복구 쌍문동 45-6',
        phone: '01077717882'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '이레한의원',
        item: '',
        address: '서울특별시 동작구 동작대로 25길 16 4층',
        phone: '02-3477-1079'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '소마 사고력 수학학원',
        item: '',
        address: '서울특별시 동작구 현충로 118 4층 ',
        phone: '02-823-4006'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '홍대허브하우스',
        item: '고시원',
        address: '서울특별시 마포구 양화로 124, 4층',
        phone: '010-7572-1839'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인가인드(주)',
        item: '인테리어 설계/시공',
        address: '서울특별시 마포구 양화로7길 66-4(서교동)',
        phone: '02-558-8575'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '로뎀상담실',
        item: '상담 치료',
        address: '서울특별시 마포구 연희로1길 12 302호( 동교동 푸른빌딩)',
        phone: '02-717-0475'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울포도나무치과',
        item: '',
        address: '서울특별시 마포구 월드컵북로 192',
        phone: '02-374-2875'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '초이성형외과의원',
        item: '',
        address: '서울특별시 서초구 강남대로 543 2층',
        phone: '02-543-7781'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '인디고라임',
        item: '영상 프로덕션',
        address: '서울특별시 서초구 강남대로18길 19 5층',
        phone: '02-529-2690'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '하나건축사사무소',
        item: '건축설계',
        address: '서울특별시 서초구 고무래로 16 3층',
        phone: '02-533-3633'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '엠에이치에스특허',
        item: '변리사업',
        address: '서울특별시 서초구 바우뫼로37길 23-6 602호(양재동,  태홍빌딩)',
        phone: '0505-300-2244(010-9349-0930)'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '법무법인(유한) 태승',
        item: '변호사업',
        address: '서울특별시 서초구 서초 중앙로 125 로이어즈타워 1205호',
        phone: '02-596-1003'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '골프연습장',
        name: '키덜트골프클럽,버디버디골프클럽(같은주소지)',
        item: '',
        address: '서울특별시 서초구 서초동 남부순환로333길 32 지하',
        phone: '02-585-9710'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: 'KEY법률사무소',
        item: '변호사업',
        address: '서울특별시 서초구 서초중앙로24길12, 302호',
        phone: '02-3482-0883'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '에이드앤 건축설계',
        item: '건축설계/리모델링',
        address: '서울특별시 서초구 양재2동 논현로 83 산호물산 a동 1613호',
        phone: '02-589-1875'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '(주)건축사사무소 에스아이 ',
        item: '건축 설계 / 감리 / 인테리어',
        address: '서울특별시 서초구 언남11길 34-2, #403 (양재동, 영동빌딩) http://www.si-arch.com https://blog.naver.com/hanichun',
        phone: '02-3462-0289, 010-9145-0289'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: 'SH우면공인중개사사무소',
        item: '',
        address: '서울특별시 서초구 태봉로 2길 65, 상가102호(우면동 서초네이처힐4단지)',
        phone: '02-577-5770'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세유라인치과',
        item: '',
        address: '서울특별시 성동구 장토길 33 2층',
        phone: '02-2231-2822'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '에이스부동산',
        item: '',
        address: '서울특별시 송파구 동남로 18길 12 1층(가락동)',
        phone: '02-404-6789'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '아카데미라운지 가락독서실(송파)',
        item: '',
        address: '서울특별시 송파구 동남로 211 2층 ',
        phone: '02 409 9998'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '시온연합의원',
        item: '피부과',
        address: '서울특별시 송파구 마천로 311',
        phone: '02-404-7727'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '더라이브러리 송파점',
        item: '스터디 카페',
        address: '서울특별시 송파구 백제고분로 46길43 3층',
        phone: '070-8866-3966'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '바라봄헤어',
        item: '',
        address: '서울특별시 송파구 송이로 20길 18',
        phone: '02- 6417- 3544'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '이엘세무회계사무소',
        item: '회계사무소',
        address: '서울특별시 송파구 송파대로 260 1404호(가락동, 제일오피스텔)',
        phone: '010-9108-7851'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '피부전공',
        item: '',
        address: '서울특별시 송파구 송파대로 345 1A B 59호',
        phone: '010-6541-1523'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '럭키 공인중개사',
        item: '',
        address: '서울특별시 송파구 위례광장로 121 위례 24단지내상가 101-1호',
        phone: ' 02-406-6363/ 010-4435-8911'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 아이파크 1차점',
        item: '',
        address: '서울특별시 송파구 위례광장로 136 상가 E동 119호',
        phone: '02-448-3939'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '이레공인중개사',
        item: '',
        address: '서울특별시 송파구 잠실동 177-4 ',
        phone: '02-420-0058'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인 리가',
        item: '',
        address: '서울특별시 송파구 정의로 7길 13 오피스동 611(문정동 에코송파)',
        phone: '02-2058-1518/ 010-2305-7304'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '신성 네트워크',
        item: '스크린골프장, pc방 창업지원및 공장설비자금 지원',
        address: '서울특별시 송파구 중대로10길 13',
        phone: '010-3813-3283'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '더봄길',
        item: '백일상 돌상대여',
        address: '서울특별시 영등포구 디지털로 420, 상가 106호',
        phone: '010-9376-2995'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '인모스트투자자문',
        item: '투자자문사',
        address: '서울특별시 영등포구 양평로21길 26 1603호',
        phone: '02-2068-6482'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대신강호태권도장',
        item: '',
        address: '서울특별시 은평구 녹번로9 3층 ',
        phone: '02-382-9498'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)지씨엔',
        item: '해외이주,유학 컨설팅',
        address: '서울특별시 종로구 새문안로 5길 13 변호사회관 1204호',
        phone: '02-3486-1400'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '토브디자인',
        item: '디자인&인쇄',
        address: '서울특별시 중구 을지로 35길 16-14',
        phone: '010-3438-0153'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '센터원웰니스',
        item: '',
        address: '서울특별시 중구 을지로5길 26 서관3층(수하동, 미래에셋센터원)',
        phone: '02-6030-1000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '삼성공업',
        item: '미싱바늘',
        address: '서울특별시 중구 창경궁로 58',
        phone: '010-8785-0719'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '소망기획',
        item: '청자켓 전문샘플실',
        address: '서울특별시 중구 청구로 83-5 ',
        phone: '010-2175-5084'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '다온탄성',
        item: '',
        address: '서울특별시 화곡로 176-19 성재센트리움',
        phone: '010-4156-6439'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '서울음악학원',
        item: '',
        address: '경기 군포시 금산로 92 (산본동) 3층',
        phone: '031-396-1800'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '지지스튜디오(수내)',
        item: '사진관',
        address: '경기 성남시 분당구 내정로173번길 11 (수내동, 양지마을) 대명상가 지하 1층',
        phone: '031-707-4479'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '윤아이디',
        item: '',
        address: '경기 성남시 분당구 분당로 190 (분당동, 샛별마을라이프아파트, 102호))',
        phone: '031-703-4243'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '드림카센터',
        item: '',
        address: '경기 성남시 분당구 야탑로161번길 4-4 (야탑동)',
        phone: '031-705-0951'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '다트커뮤니케이션즈',
        item: '(온라인)디스플레이광고, 홈페이지 및 VR 제작',
        address: '경기 성남시 분당구 중앙공원로 53 (서현동, 시범단지삼성.한신아파트)',
        phone: '010-9819-5518'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '고은 콜라겐 피부샵',
        item: '피부관리',
        address: '경기 성남시 분당구 판교역로2번길 35 (백현동) 1층',
        phone: '031-704-4007'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '분당21세기병원',
        item: '[목,허리 디스크/관절,골절]',
        address: '경기 성남시 분당구 황새울로342번길 15 (서현동) 은성빌딩 5,6층',
        phone: '031-703-0175'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '호반탑부동산',
        item: '부동산',
        address: '경기 성남시 수정구 고등로 34 (고등동, 호반써밋 판교밸리) 108호',
        phone: '031-756-4900'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '자람학원',
        item: '초중 영어 수학',
        address: '경기 성남시 수정구 위례동로 153 (창곡동) 에이플타워 601호',
        phone: '031-701-3371'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '박근완치과',
        item: '',
        address: '경기 성남시 중원구 산성대로 340-1 (중앙동) 범원빌딩 3층',
        phone: '031-744-3333'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이화앤해금스튜디오',
        item: '국악, 해금(입시, 취미)',
        address: '경기 수원시 영통구 법조로 25 (하동) 광교SK뷰레이크 A동 411호',
        phone: '031-8001-2001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수학생각학원',
        item: '',
        address: '경기 용인시 기흥구 구성로 88 (언남동) 국민은행 5층 504호',
        phone: '070-4327-1499'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '더샵 공인중개사사무소',
        item: '부동산',
        address: '경기 용인시 기흥구 기흥역로58번길 78 (구갈동, 기흥역 더샵) 기흥역더샵 판매시설 201동 103호',
        phone: '031-284-6111'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '늘봄음악학원',
        item: '',
        address: '경기 용인시 기흥구 중부대로 788번길 20 쌍용아파트 상가 3층',
        phone: '031-286-2167'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '아이빌리어린이집',
        item: '',
        address: '경기 용인시 수지구 용구대로 2742 (죽전동, 동성1차아파트, A 관리동)',
        phone: '031-261-5953'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '마스터수학 전문학원',
        item: '수학 학원',
        address: '경기 용인시 수지구 현암로119 죽전메디뷰4층 404호',
        phone: '031-262-3698'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '이루레건축',
        item: '',
        address: '경기 용인시 처인구 금령로40번길 15-16 (김량장동) 1층',
        phone: '031-8097-2722'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '카세리오',
        item: '',
        address: '경기도 가평군 가평읍 북한강변로 173',
        phone: '031-581-8001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '인터라켄스테이',
        item: '',
        address: '경기도 가평군 청평면 호반로 887',
        phone: '031 585 4788'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '삼송경희한의원',
        item: '',
        address: '경기도 고양시 덕양구 삼송로88 오성프라자 401호',
        phone: '02-371-3375'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: 'A to Z 통번역',
        item: '통번역',
        address: '경기도 고양시 일산동구 위시티 1로 7 503-1003',
        phone: '010-7663-0855'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '주)제이피플',
        item: '행사기획대행, 인력아웃소싱',
        address: '경기도 고양시 일산동구 중앙로1305-30, 마이다스오피스텔1017호',
        phone: '010-3228-6252'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '일산 아이사랑 어린이 집',
        item: '어린이집',
        address: '경기도 고양시 일산서구 송산로 339',
        phone: '031-923-0020'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '문지홍한의원',
        item: '',
        address: '경기도 고양시 일산서구 중앙로 1576 태진빌딩 203호',
        phone: '031-918-1075'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '세레니끄 과천점',
        item: '',
        address: '경기도 과천시 별양로 12',
        phone: '02-3679-1580'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '예섬',
        item: '인쇄/홍보물',
        address: '경기도 광명시 소하동 서원로 25',
        phone: '02-3663-2813'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세김앤정 정형외과',
        item: '정형외과',
        address: '경기도 광명시 철산로 36 양정타워 6층',
        phone: '02-2684-1111'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '한우리 독서토론 논술',
        item: '',
        address: '경기도 광주 태봉로 163-2 힐스2차 2102동 1301호',
        phone: '010-9017-1646'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '아이오텔 모텔',
        item: '',
        address: '경기도 광주시 경안동 20-91',
        phone: '031-797-3951'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '노인요양시설',
        name: '서연방문재활간호 재가요양센터',
        item: '',
        address: '경기도 광주시 광나안로 29-34, 2층',
        phone: '010-4434-2487'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '티엘조경',
        item: '조경',
        address: '경기도 광주시 능평로 46-6',
        phone: '031-717-5257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '담안 75 셀프세차장',
        item: '셀프 세차장',
        address: '경기도 광주시 담안길 75',
        phone: '031-768-2285'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '이너피스',
        item: '',
        address: '경기도 광주시 순암로67(장지동87-4)',
        phone: '031-764-7759'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '러브에셋종합보험',
        item: '',
        address: '경기도 광주시 역동로 5 갤러리아 플라자 212호',
        phone: '010-8955-7883'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '새샘어린이집',
        item: '어린이집',
        address: '경기도 광주시 오포안로 263번길',
        phone: '031-767-4279'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '거미하우스 인테리어',
        item: '욕실인테리어',
        address: '경기도 광주시 오포읍 능평로 5',
        phone: '010-5745-8804, 031-726-0300'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '바이올린. 비올라',
        item: '개인레슨',
        address: '경기도 광주시 오포읍 대명대길 11번길19 모아맨션103동102호',
        phone: '010-2605-7142'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '대주파크빌공인중개사사무소',
        item: '',
        address: '경기도 광주시 오포읍 마루들길 272, 기덕빌딩 103호',
        phone: '031-762-4800'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '소라투어',
        item: '여행',
        address: '경기도 광주시 오포읍 양벌로 195-30 (104호)',
        phone: '010-5643-0321'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '능골한의원',
        item: '',
        address: '경기도 광주시 오포읍 오포로 119',
        phone: '031-765-8706'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '브아뛰르',
        item: '',
        address: '경기도 광주시 오포읍 오포로 171번길 11-7',
        phone: '010-8556-4684'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '테마건축 유튜브주택박사',
        item: '',
        address: '경기도 광주시 오포읍 추자리 263-3 테마빌딩 201호',
        phone: '031-766-9745'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '3030몰입영어',
        item: '',
        address: '경기도 광주시 오포읍 태제로 137-1  포레시티 A동 102호',
        phone: '010-5668-0413'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '마루건축사사무소',
        item: '',
        address: '경기도 광주시 중앙로 196, 대영빌딩2층',
        phone: '031-767-6109'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '브레이브짐(BRAVE GYM)',
        item: '',
        address: '경기도 광주시 중앙로 327 이레빌딩 3층(2,3층)',
        phone: '1877-4868'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '힐링스케치미술치료센터',
        item: '미술치료센터',
        address: '경기도 광주시 탄벌길161',
        phone: '01088925555'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '해법영어수학',
        item: '',
        address: '경기도 광주시 태봉로 110 태전아이파크 102동 104호',
        phone: '010-9627-7096'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '필아트 미술학원',
        item: '',
        address: '경기도 광주시 태성로 130-1 한양프라자3층 302호',
        phone: '010-8994-3353'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '라라음악학원',
        item: '',
        address: '경기도 광주시 태성로 130-1, 한양플라자 301호',
        phone: '010-5525-7567'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '키즈키친봄',
        item: '쿠킹클래스',
        address: '경기도 광주시 태전중앙로 14 2층',
        phone: '010-2752-2215'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '안녕네일샵',
        item: '',
        address: '경기도 광주시 태전중앙로16 서원프라자2동 1층',
        phone: '010-8223-4875'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '중앙공인중개사사무소',
        item: '',
        address: '경기도 광주시 회안대로 350-3(태전동)',
        phone: '031-797-240, 010-9856-9821'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '드래곤피싱',
        item: '낚시 출조',
        address: '경기도 광주시 회안대로 350-3(태전동), 3층',
        phone: '010-9918-1370'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '위강한의원(구리남양주점)',
        item: '',
        address: '경기도 구리시 경춘로 253, 다우스퀘어 201호 ',
        phone: '031-523-2015'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '개인택배',
        item: '택배',
        address: '경기도 군포시 송부로49번길15 금강펜테리움105동 202호',
        phone: '010-3443-2985'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '다산큰나무정신건강의학과',
        item: '',
        address: '경기도 남양주시 다산중앙로124번길 22-8, 리더스퀘어 406호',
        phone: '031-567-9101'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이엘컴퍼니
            (렌탈119)',
item: 'TFS천막, 몽골천막,탁자,의자,전시장치, 에어컨,화장실 등 렌탈',
        address: '경기도 남양주시 진건읍 독정로 성지2길 106-5
www.rental119.co.kr / ',
phone: '031-528-1190'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '예솔치과의원',
        item: '',
        address: '경기도 부천시 경인로 216-1',
        phone: '032-653-3339'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아이보람 부천남센터',
        item: '원어 비디오와 원서를 활용하는 엄마표 영어 모임',
        address: '경기도 부천시 중동로 108 현대아이파크 상가 308호',
        phone: '032-667-8919'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '24시홈서비스 ',
        item: '하수도 막힘 뚫음 / 고압세척',
        address: '경기도 분당구 안골로42 ',
        phone: '1833-9701'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '닥터심스의원',
        item: '가정의학과',
        address: '경기도 분당구 장안로27 스마트114빌딩 3층',
        phone: '031-701-1350~1'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: 'CEO클리닉',
        item: '중소기업리스크관리센터',
        address: '경기도 분당구 황새울로200번길34 코포모타워5층',
        phone: '031-786-0210'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '피엔피 인베스트먼트 ',
        item: '특허법인',
        address: '경기도 성남시  판교로228번길 15, 2동7층701',
        phone: '031-622- 3953'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당드럼학원',
        item: '드럼',
        address: '경기도 성남시 구미로60 관보쇼핑 501호',
        phone: '010-8320-4926'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '동아수학학원',
        item: '초중고수학학원',
        address: '경기도 성남시 분당구  486번길6. 304호 서현동  상록프라자  동아  초중고  수학 학원   ',
        phone: '031-701-5554'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수학을풀다 수학학원',
        item: '',
        address: '경기도 성남시 분당구 구미동 구미로 60  관보쇼핑 504호',
        phone: '01064189410'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'YBM잉글루 분당구미 제1캠퍼스 ',
        item: '영어교습소',
        address: '경기도 성남시 분당구 구미로 60  관보쇼핑 408호 ',
        phone: '010 -2569 -0213'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '케이에스디자인 ',
        item: '',
        address: '경기도 성남시 분당구 금곡동 대왕판교로 300',
        phone: '070-4647-1176'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'GTG사고력수학 수내캠퍼스',
        item: '',
        address: '경기도 성남시 분당구 내정로 173번길 49(수내동, 궁전프라자 3) 213호',
        phone: '031-714-2350'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '팔레스인테리어',
        item: '',
        address: '경기도 성남시 분당구 내정로173번길 49, 110호 (수내동 궁전프라자-3)',
        phone: '010-5345-2732'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당유도관',
        item: '',
        address: '경기도 성남시 분당구 내정로24정든마을 (이경숙집사님남편)',
        phone: '0507-1434-8883'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '우리공인중개사',
        item: '',
        address: '경기도 성남시 분당구 내정로55 상록마을 우성상가117호',
        phone: '010 8583 3700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '토브구문정독 영어학원',
        item: '영어 어학원',
        address: '경기도 성남시 분당구 느티로 16, 5층 (정자동, 젤존타워1)',
        phone: '031-719-1193'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '이포크드류',
        item: '미용실',
        address: '경기도 성남시 분당구 느티로 2 AK와이즈플레이스 2층',
        phone: '031-714-3003'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '효도쿡123 정자점',
        item: '시니어 식사배달 서비스',
        address: '경기도 성남시 분당구 느티로51번길8-4 1층',
        phone: '031-719-1230'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'TM 수학',
        item: '',
        address: '경기도 성남시 분당구 돌마로 361 (동신코아)',
        phone: '031-778-7976'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '작은화실',
        item: '미술',
        address: '경기도 성남시 분당구 돌마로 476번길31 삼환상가 304호',
        phone: '010-9482-8062'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '민트심리상담센터',
        item: '상담센터',
        address: '경기도 성남시 분당구 돌마로 80 현대벤쳐빌 640호',
        phone: '031-897-6715'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '오한의원',
        item: '',
        address: '경기도 성남시 분당구 돌마로361 동신코아5층',
        phone: '031-712-1697'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '미술숲미술교습소',
        item: '미술',
        address: '경기도 성남시 분당구 돌마로476번길31 203호(서현동 임광종합상가)',
        phone: '031-701-5257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '포인스튜디오',
        item: '장소 대관 (댄스연습실, 악기연습실)',
        address: '경기도 성남시 분당구 돌마로486번길 6 상록프라자 지하1층',
        phone: '010-2352-7436'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '노동법률 동행',
        item: '고용,산재보험사무대행',
        address: '경기도 성남시 분당구 돌마로68 6층 610호(구미동 분당프라자)',
        phone: '031-702-2343'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '다올공인 중개사',
        item: '',
        address: '경기도 성남시 분당구 동판교로 122 백현마을 2단지 상가 106호',
        phone: '031-8017-7100'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 성남봇들8단지점',
        item: '',
        address: '경기도 성남시 분당구 동판교로 153  봇들마을 8단지',
        phone: '031-8016-1121'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '미용실봄',
        item: '',
        address: '경기도 성남시 분당구 동판교로52번길19-17(백현동586-2)',
        phone: '010 7472 4026'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '교정/재활',
        name: '위스포츠복지TOP운동발달센터',
        item: '운동발달 및 재활치료',
        address: '경기도 성남시 분당구 매화로 44 조일빌딩 4층',
        phone: '031-8017-3250'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '드림아트홀',
        item: '공연시설',
        address: '경기도 성남시 분당구 매화로 55번길 6-8 b01호',
        phone: '010-4275-1216'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '분당 베누스토/마이심포니',
        item: '악기레슨, 아마추어 오케스트라, 연습실대여',
        address: '경기도 성남시 분당구 미금로 215 대원칸타빌 상가 203호',
        phone: '010-2885-6947'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '보람공인중개사사무소',
        item: '',
        address: '경기도 성남시 분당구 미금로177.신원상가',
        phone: '031.717.4900'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '공간정오',
        item: '여성전용작업실. 동네책방.
 문화프로그램운영.리필스테이션 ',
address: '경기도 성남시 분당구 미금일로85 404호 ',
        phone: ' 031-762-0314'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '스쿨 에이이아이오유',
        item: '성인전문 영어회화 (개인 및 업체출강 가능: 회화, 비지니스, ielts, opic)',
        address: '경기도 성남시 분당구 백현로',
        phone: '01050232123'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: 'EPL코칭(이피엘코칭)',
        item: '기업코칭강의',
        address: '경기도 성남시 분당구 백현로 100,정자아이파크 1611호',
        phone: '010-5277-1106'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: 'SOS 스터디센터(관리형학습센터)',
        item: '스터디센터',
        address: '경기도 성남시 분당구 백현로 97, 다운타운빌딩 6층 SOS스터디센터',
        phone: '031-717-1616'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '울타리어린이집',
        item: '보육시설',
        address: '경기도 성남시 분당구 벌말로 50번길 14 702동 102호 (야탑동, 매화마을화성빌리지)',
        phone: '031 707 2780'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '레푸스 판교점',
        item: '발 치료',
        address: '경기도 성남시 분당구 분당내곡로 151 삼도타워 304호 ',
        phone: '031-702-8870'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '스튜디오 단한',
        item: '인테리어 설계',
        address: '경기도 성남시 분당구 분당동 105-8번지 1층',
        phone: '031-701-8480'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '권영미스킨케어',
        item: '',
        address: '경기도 성남시 분당구 분당로 263번길 35 굿모닝프라자 501호',
        phone: '010-4092-6361'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '씨제이상사',
        item: '건축,토목',
        address: '경기도 성남시 분당구 분당로190 샛별마을 110-701',
        phone: '010-4203-1247'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '하나 이비인후과',
        item: '',
        address: '경기도 성남시 분당구 분당로53번길 20 이랜드프라자 4층',
        phone: '031-701-1175'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '마트공인중개사사무소',
        item: '',
        address: '경기도 성남시 분당구 불정로 195 우성상가 113호(정자동, 정든마을우성6단지아파트)',
        phone: '031-713-7600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '팀플체대입시 / 팀플짐',
        item: '입시체육학원 & PT',
        address: '경기도 성남시 분당구 불정로 254 삼평프라자 B1 ',
        phone: '031-716-1020'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '분당법무사합동사무소',
        item: '법무사사무소',
        address: '경기도 성남시 분당구 불정로 380 동남프라자303호',
        phone: '031-608-0011'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '리본 스킨 스튜디오',
        item: '',
        address: '경기도 성남시 분당구 불정로 381(서현동)효자촌 동진프라자 2층 208호',
        phone: '010-3373-4122'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '워시앤조이셀프빨래방 분당서현점',
        item: '',
        address: '경기도 성남시 분당구 불정로 420번길6',
        phone: '010-5904-8442'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '수수공방',
        item: '도예공방',
        address: '경기도 성남시 분당구 불정로 87번길 10(정자동)',
        phone: '031-714-5735'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '감성수학',
        item: '초중고수학',
        address: '경기도 성남시 분당구 불정로256 청우프라자4층',
        phone: '031-712-0096'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '씨엘헤어',
        item: '',
        address: '경기도 성남시 분당구 산운로 98 산운마을 8단지 상가2층',
        phone: '031-8016-7224'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '창성에이스산업',
        item: '소방재품',
        address: '경기도 성남시 분당구 삼평동 판교로 253',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '소예한의원',
        item: '',
        address: '경기도 성남시 분당구 삼평동 판교역로 240 삼환하이펙스A동 210호',
        phone: '031-698-3575'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '코드아트랩',
        item: '아동미술',
        address: '경기도 성남시 분당구 새마을로233번길13',
        phone: '010-6789-0331'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '그린스킨케어',
        item: '',
        address: '경기도 성남시 분당구 서현동 305-1 동진프라자 2층 213',
        phone: '031-709-1070'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '굿모닝부동산',
        item: '',
        address: '경기도 성남시 분당구 서현동 89-7',
        phone: '031-704-8888'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당중앙검도',
        item: '검도',
        address: '경기도 성남시 분당구 서현동 미래타운A상가 2070호',
        phone: '031-709-1500'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '교정/재활',
        name: '프로그레시브',
        item: '자세 및 체형 교정센타',
        address: '경기도 성남시 분당구 서현동서현로170번길 풍림아이원플러스D동1704호',
        phone: '010-3765-5257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '헤어매직',
        item: '',
        address: '경기도 성남시 분당구 서현로 181',
        phone: '031-702-6846'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '선진항공여행사 ',
        item: '전세버스',
        address: '경기도 성남시 분당구 서현로170 D1501',
        phone: '0317837008'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '동신한의원',
        item: '',
        address: '경기도 성남시 분당구 서현로210번길 2(지번) 서현동 245-3',
        phone: '031-707-9993'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '피아노브릿지음악학원',
        item: '성인음악학원',
        address: '경기도 성남시 분당구 성남대로 331번길 13 507호',
        phone: '010-5044-6290'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울바를정치과',
        item: '',
        address: '경기도 성남시 분당구 성남대로 349 시그마타워 402호 ',
        phone: '031-726-3427'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '미국유학닷컴 분당지사',
        item: '',
        address: '경기도 성남시 분당구 성남대로 381.',
        phone: '031-711-2167'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '올리비아 아이',
        item: '뷰티(속눈섭파마.속눈썹연장)',
        address: '경기도 성남시 분당구 성남대로 51 포스빌 오피스텔',
        phone: '010-7519-7854'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '쥬비미용실',
        item: '',
        address: '경기도 성남시 분당구 성남대로 779번길 13,106호(이매동,오성프라자)',
        phone: '031-704-0203'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '(주)이엔휴',
        item: '여행사',
        address: '경기도 성남시 분당구 성남대로 916번길 11, 526(야탑동, 글라스타워)',
        phone: '070-4129-7602'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '청담윤 성형외과',
        item: '성형외과/피부과',
        address: '경기도 성남시 분당구 성남대로168 미도프라자3층(신분당선1번출구)',
        phone: '031 -712-5502'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아트파일미술학원',
        item: '입시미술',
        address: '경기도 성남시 분당구 성남대로331 3-9, 503호 (정자동,백궁프라자3차)',
        phone: '031-704-7757'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'FICUS영어학원',
        item: '',
        address: '경기도 성남시 분당구 성남대로331번길 3-13 대명제스트빌딩 4층',
        phone: '0317260509'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '끌로디아',
        item: '속눈썹 //(구)언니의속눈썹',
        address: '경기도 성남시 분당구 성남대로393 분당두산위브파빌리온 A동1층 상가',
        phone: '010-7404-3228'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '한솔 비아이엠',
        item: '',
        address: '경기도 성남시 분당구 수내로 54 보보스쉐르빌 1714호',
        phone: '031-714-6830'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '삼부공인중개소',
        item: '',
        address: '경기도 성남시 분당구 수내로201 샛별마을 삼부아파트 분산상가101호',
        phone: '031-705-9994'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '행복한수학공부방 ',
        item: '',
        address: '경기도 성남시 분당구 야탑동 매화로38번길15 (2F)',
        phone: '010-5554-0905'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '모두투어',
        item: '여행사',
        address: '경기도 성남시 분당구 야탑동 판교로 477 저우스토아 (이매점)',
        phone: '010-3173-3952'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '애프터선데이클럽',
        item: '',
        address: '경기도 성남시 분당구 야탑로 149번길 5 지하1층',
        phone: '010-4320-3766'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '토브플랜 ',
        item: '',
        address: '경기도 성남시 분당구 야탑로 28 우당프라자 b1',
        phone: '01053040092'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '지지스튜디오',
        item: '사진관',
        address: '경기도 성남시 분당구 야탑로139번길6-11',
        phone: '031-707-4479'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '우리ENG',
        item: '전기공사, 전기관련기술용역',
        address: '경기도 성남시 분당구 야탑로20',
        phone: '010-8944-5683'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '에이알피앤씨',
        item: '도장공사',
        address: '경기도 성남시 분당구 야탑로237 백마빌딩502호',
        phone: '010-3255-9454'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '건축사사무소 에이피엠',
        item: '건축설계, 감리',
        address: '경기도 성남시 분당구 양현로 166번길 15. 308호',
        phone: '031-724-4854'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '젠동물병원',
        item: '동물병원',
        address: '경기도 성남시 분당구 양현로 479 2층 (야탑 119안전센터 옆)',
        phone: '031-752-0075'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '순영공방',
        item: '옷과 자수',
        address: '경기도 성남시 분당구 양현로 94번길 28 동신상가 201호 ',
        phone: '010-7111-3456'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '비유아트취미미술 ',
        item: '',
        address: '경기도 성남시 분당구 양현로166번길 15 장수빌딩 2층 201호',
        phone: '031-752-2123'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'GGE 해법수학(이매)',
        item: '수학',
        address: '경기도 성남시 분당구 양현로94길 9 성우빌딩2층',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '백양세탁소',
        item: '',
        address: '경기도 성남시 분당구 양현로94번길 이매촌동신3단지내 상가205호',
        phone: '031-703-0134'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '문예진캘리그라피',
        item: '캘리그리피 수업, 수제도장(전각) 제작 등',
        address: '경기도 성남시 분당구 운중동 석운로 440',
        phone: '010-4552-0121'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '턴핏PT',
        item: '피트니스',
        address: '경기도 성남시 분당구 운중로 131, 8층 803, 804호(스타식스 매트로)',
        phone: '031-698-4246'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '이파리본 스파',
        item: '',
        address: '경기도 성남시 분당구 운중로 225번길 58-1',
        phone: '031-703-0456'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이투스247(이매점)',
        item: '독학 재수학원',
        address: '경기도 성남시 분당구 이매동 105-2',
        phone: '031-708-0247'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '해원국어교습소',
        item: '국어 ',
        address: '경기도 성남시 분당구 이매동 양현로 94번길 11  208호 ',
        phone: '031-781-7005'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '김가이헤어',
        item: '',
        address: '경기도 성남시 분당구 이매동86-11번지 1층 김가이헤어.',
        phone: '031 704 7096'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이기획',
        item: '편집 기획 인쇄',
        address: '경기도 성남시 분당구 이매로 124 b02호',
        phone: '010 3323 6186'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '트리니티주니어스쿨 어학원',
        item: '유치.초등 영어교육',
        address: '경기도 성남시 분당구 이매로 15',
        phone: '031 -708 -5400'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '보람디자인',
        item: '',
        address: '경기도 성남시 분당구 이매로 16',
        phone: '031-802-4424'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당재성학원',
        item: '',
        address: '경기도 성남시 분당구 이매로 47 3층 302호',
        phone: '031-781-4300'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '베를린실용음악학원',
        item: '음악학원',
        address: '경기도 성남시 분당구 이매로 51 한라프라자 203호 (이매역4번출구)',
        phone: '031-707-8462'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '분당카병원',
        item: '',
        address: '경기도 성남시 분당구 이매로 84 (이매동261) 1층',
        phone: '031-708-7735'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '분당CAR병원',
        item: '자동차 외장관리 및 외형복원',
        address: '경기도 성남시 분당구 이매로84 1층',
        phone: '031-708-7735'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '야탑율음악학원',
        item: '피아노전문',
        address: '경기도 성남시 분당구 장미로101, 1동3층 1302호(야탑동,장미마을근린상가)',
        phone: ' 031-707-7734'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수제이수학학원',
        item: '',
        address: '경기도 성남시 분당구 정자2동 정자로 113',
        phone: '031 719 1106'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '돼지이용원 ',
        item: '',
        address: '경기도 성남시 분당구 정자2동 정자로 143',
        phone: '031-714-7537'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아트앤아이 미술학원(유학미술)',
        item: '',
        address: '경기도 성남시 분당구 정자동 12-1 백궁지엔느 빌딩 4층',
        phone: '031-716-2722 '
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '오토챠밍',
        item: '',
        address: '경기도 성남시 분당구 정자동 내정로129번길 32',
        phone: '031-711-1327'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '뷰티피부관리샵',
        item: '',
        address: '경기도 성남시 분당구 정자동 느티 공무원 주공아파트 70번지 4단지상가내 1층 112호',
        phone: '031-713-8464'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '라인 아트',
        item: '갤러리 ',
        address: '경기도 성남시 분당구 정자동 성남대로 275',
        phone: '010 3703 4930'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '헤더스잉글리쉬',
        item: '',
        address: '경기도 성남시 분당구 정자동 성남대로385 분당클리닉 701호',
        phone: '031 -726 -6262'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '플로라',
        item: '',
        address: '경기도 성남시 분당구 정자로 112',
        phone: '010-3020-8474'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '골프연습장',
        name: 'LG골프연습장',
        item: '',
        address: '경기도 성남시 분당구 정자로 143 한솔마을근린상가 (우)13608
정자동 111번지 b01호 LG골프연습장',
phone: '031-711-1855'},
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '개인과외',
        item: '개인과외(영어)',
        address: '경기도 성남시 분당구 정자로 56 라이프2단지 201-509',
        phone: '010-5291-9133'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아
            (스타파크점)',
item: '',
        address: '경기도 성남시 분당구 정자일로 121 상가동 1층 비-31호',
        phone: '031- 717- 5503'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '티엘씨 소아과',
        item: '',
        address: '경기도 성남시 분당구 정자일로 197 푸르지오시티 2차 203호',
        phone: '031-607-1001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '베일리뷰티',
        item: '미용실',
        address: '경기도 성남시 분당구 정자일로 213번길 19 아이파크2 201동 상가 2층 베일리뷰티',
        phone: '031-717-1010'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '바인 에듀케이션',
        item: '학원/유학원',
        address: '경기도 성남시 분당구 정자일로 227',
        phone: '031-8023-5565'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '온스콜라 ',
        item: '',
        address: '경기도 성남시 분당구 정자일로 234 태남프라자 502호 온스콜라 ',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: ' K.라벨르 뷰티아카데미',
        item: '미용학원',
        address: '경기도 성남시 분당구 정자일로 240 206호',
        phone: '031-714-4523 '
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '유앤아이카',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 20 시범단지 현대아파트 분산상가 1동',
        phone: '031-702-0348'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '바른수학',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 31번길 42',
        phone: '031-708- 3014'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '샘물피아노',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 31번길42.서현파크프라자2층',
        phone: '050- 71347-0055'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '지음(디자인)',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 39번길 7 삼성한신근린상가 131호',
        phone: '010-3519-4844'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤엠영어 서현초점',
        item: '영어',
        address: '경기도 성남시 분당구 중앙공원로39번길 7',
        phone: '031-708-0579'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '브랑시기',
        item: ' 오일샵(도테라), 피부오일',
        address: '경기도 성남시 분당구 중앙공원로40번길4  현대카스빌딩 136호',
        phone: '010-2762-7597'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '골드부동산',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로40번길8,156호(서현동,현대아케이드)',
        phone: '031-701-6600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '비앤씨글로벌(주)',
        item: '건설,제조,철골공사',
        address: '경기도 성남시 분당구 탄천상로 164 C동 427호 (구미동,시그마2오피스텔)',
        phone: '070-4335-7004'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '한국가이던스(주) ',
        item: '교육서비스',
        address: '경기도 성남시 분당구 판교로 255번길 9-22 우림wcity A동 801호',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '모범공인중개사',
        item: '',
        address: '경기도 성남시 분당구 판교로 436,104호(이매동,아름마을)',
        phone: '031-704-5000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '황금부동산',
        item: '',
        address: '경기도 성남시 분당구 판교로 478, 105호',
        phone: '010-3749-7307'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '블루핸즈 현대 야탑써비스',
        item: '',
        address: '경기도 성남시 분당구 판교로 582',
        phone: '031-701-5566'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아백현마을점',
        item: '',
        address: '경기도 성남시 분당구 판교역로 102백현마을5단지 가상가 102호',
        phone: '031-703-8271'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: 'WHDM',
        item: '디자인(제품/인테리어)',
        address: '경기도 성남시 분당구 판교역로 50번길 34',
        phone: '010-8847-0909'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '8단지부동산',
        item: '',
        address: '경기도 성남시 분당구 판교역로 72 상가동 102호',
        phone: '031-8017-8017'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '베데스다',
        item: '마사지샵',
        address: '경기도 성남시 분당구 황새울로 200번길 22 (수내동,한솔인피니티)311호',
        phone: '031-606-0304'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인 하임 한샘대리점',
        item: '',
        address: '경기도 성남시 분당구 황새울로 200번길 22,910호(한솔인피니티)',
        phone: '010-5423-7314'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '분당예치과',
        item: '',
        address: '경기도 성남시 분당구 황새울로 258번길 37(수내동, 흥국생명빌딩 2층)',
        phone: '031-708-2828'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '초림부동산',
        item: '',
        address: '경기도 성남시 분당구 황새울로 258번길 43, 수내프라자 318호',
        phone: '031-718-1700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '천지부동산',
        item: '',
        address: '경기도 성남시 분당구 황새울로 330번길 16 101호',
        phone: '031-706-5205'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '발라드네일',
        item: '',
        address: '경기도 성남시 분당구 황새울로 335번길 5 N타운빌딩 1층',
        phone: '031-696-1313'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '예 수선실',
        item: '각종 의류수선&리폼',
        address: '경기도 성남시 분당구 황새울로258번길43 현대수내프라자3층 324호 ',
        phone: '031-8016-0990'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '토킹클럽서현어학원',
        item: '',
        address: '경기도 성남시 분당로 263번길 39 레이디파크빌딩 302-303호',
        phone: '031-707-7905'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '분당부동산 ',
        item: '',
        address: '경기도 성남시 분댱구 느티로27',
        phone: '031-735-2000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '모모',
        item: '두피관리샵',
        address: '경기도 성남시 서현동 서현에클라트1차 537호',
        phone: '010-3222-9653'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '이디엘헤어',
        item: '',
        address: '경기도 성남시 서현로 210번길 20, 2층 10호',
        phone: '031-707-7771'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '자이풍경채 공인중개사',
        item: '',
        address: '경기도 성남시 수정구 고등공원로 19,제일풍경채상가2동 120호',
        phone: '031-715-7900'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)무림하우징',
        item: '건물 및 아파트관리',
        address: '경기도 성남시 수정구 산성대로 223 9층',
        phone: '010-3778-5437'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '성남우체국보험팀',
        item: '우체국보험',
        address: '경기도 성남시 수정구 산성대로301',
        phone: '010-2797-8997'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '태후사랑',
        item: '',
        address: '경기도 성남시 수정구 성남대로 1210번길13-12',
        phone: '010-3097-7457'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '우리공인
중개사 사무소',
item: '',
        address: '경기도 성남시 수정구 수정남로 18번길 1',
        phone: '031-757-6469'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '양지공인중개사',
        item: '',
        address: '경기도 성남시 수정구 수정남로46번길1, 1층',
        phone: '031-753-3137'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '동성당',
        item: '시계',
        address: '경기도 성남시 수정구 수정로 109',
        phone: '031-753-3927'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '금광태권도장 ',
        item: '',
        address: '경기도 성남시 수정구 시민로 234   4층 ',
        phone: '031.755.3396'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '삼성통증의학과',
        item: '',
        address: '경기도 성남시 수정구 신흥동 수정로 208 메드위즈빌딩 3층',
        phone: '031-749-6599'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울하나치과',
        item: '',
        address: '경기도 성남시 수정구 양지동 229  3층',
        phone: '031-734-9200'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '위례 YBM잉글루 트램영어 제1캠퍼스',
        item: '',
        address: '경기도 성남시 수정구 위례광장로 310 우성트램타워 9층 YBM잉글루',
        phone: '031-757-0901/ 010-6272-0221'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이화루체음악학원 ',
        item: '',
        address: '경기도 성남시 수정구 위례동로61 자연앤래미안이편한세상 상가동201호',
        phone: '031-755.9333'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '카야인터내셔널',
        item: 'NGO',
        address: '경기도 성남시 수정구 탄천로307번길 14, 3층',
        phone: '070-5121-2198'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '김은희 헤어겔러리',
        item: '',
        address: '경기도 성남시 수정구 태평4동 남문로 129번길 16-1 1층',
        phone: '010-5325-2393'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '미시간학원',
        item: '영어,수학 교습',
        address: '경기도 성남시 수정구 태평로 48번길 10',
        phone: '031-721-2468'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: 'PJ렌트카 성남영업소',
        item: '',
        address: '경기도 성남시 위례서일로1길 3-6 위례헤리움 401호',
        phone: '010-8512-5026'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '로즌(Rosen)',
        item: '네일, (파티) 대여룸',
        address: '경기도 성남시 정자동 67-5(느티로 69번길 12)',
        phone: '010-5623-5287'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '김영헤어',
        item: '',
        address: '경기도 성남시 정자동 정자로 113 한솔주공5단지 상가',
        phone: '010-6348-0415'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '셀리맘아트 미술학원',
        item: '미술학원',
        address: '경기도 성남시 정자일로 55 두산위브 109동 303호',
        phone: '070-4143-0722'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '하림수학교습소',
        item: '수학',
        address: '경기도 성남시 중원구 금빛로 49(금광동) 대진빌딩 6층',
        phone: '010-4860-6913'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '거성공인중개사',
        item: '',
        address: '경기도 성남시 중원구 금빛로 77번길 14, 1층 (금광2동)',
        phone: '031-743-0033'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '하나로퀵서비스',
        item: '퀵서비스',
        address: '경기도 성남시 중원구 도촌남로 27,동강프라자 406호',
        phone: '1899-6433'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '하나치과의원',
        item: '',
        address: '경기도 성남시 중원구 둔촌대로 163',
        phone: '031-752-2874'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '우리희망내과',
        item: '내과',
        address: '경기도 성남시 중원구 산성대로 366, 5층(중앙동, 벽산프라자)',
        phone: '031-757-1717'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '비비미인 비만클리닉',
        item: '가정의학과',
        address: '경기도 성남시 중원구 산성대로 366, 5층(중앙동, 벽산프라자)',
        phone: '031-747-1717'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '김평호변호사사무실',
        item: '',
        address: '경기도 성남시 중원구 산성대로 454번길 2 신우빌딩',
        phone: '031-744-6655'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '허니컴',
        item: '인테리어 수도설비',
        address: '경기도 성남시 중원구 산성대로320-4, 1층',
        phone: '010-3745-9947'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '경희우리한의원',
        item: '',
        address: '경기도 성남시 중원구 산성대로526 은행시장 2층',
        phone: '031-746-7500'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '페스티노 수학학원',
        item: '',
        address: '경기도 성남시 중원구 성남동 2551번자 1층 105호',
        phone: '010-2796-9149'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '현대파출부',
        item: '가사도우미,식당도우미',
        address: '경기도 성남시 중원구 성남동 4136번지 메트로칸430호',
        phone: '010-5093-5123'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 코인워시 여수동점',
        item: '',
        address: '경기도 성남시 중원구 여수울로15번길 4-16 1층',
        phone: '031-756-2938'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '우리 한부모가족지원센터',
        item: '무직 봉사활동',
        address: '경기도 성남시 중원구 은행동 제10공영주차장',
        phone: '031-732-5777'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대 학생태권도 체육관',
        item: '체육관(태권도)',
        address: '경기도 성남시 중원구 제일로 77, 3층',
        phone: '031-751-5812'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아,모란',
        item: '',
        address: '경기도 성남시 중원구 제일로63번길6-1',
        phone: '070,4113-6600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '보라음악보습 학원 ',
        item: '',
        address: '경기도 성남시 중원구 제일로77',
        phone: '031-751-5812'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '팀히어로GYM',
        item: '필라테스/ PT',
        address: '경기도 성남시 중원구 하대원동 132-9 B02호 지하1층',
        phone: '031-754-9311'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '인형극단 우끼',
        item: '극단',
        address: '경기도 성남시 중원구 희망로 314/ 5층',
        phone: '010-9787-5386'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '굿모닝치과',
        item: '',
        address: '경기도 성남시 중원구 희망로 341  2층',
        phone: '031-734-2225'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이레음악학원',
        item: '',
        address: '경기도 성남시 중원구 희망로 344번길11',
        phone: '031-747-2644'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '더블유에이치디엠(WHDM)',
        item: '디자인회사',
        address: '경기도 성남시 판교역로 50번길 34',
        phone: '031-701-3141'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '어바웃뷰티',
        item: '메이크업,업스타일살롱',
        address: '경기도 성남시 판교역로192번길 22  ',
        phone: '010-2810-2938'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '호텔가덴',
        item: '호텔관광업',
        address: '경기도 수원시 권선구 경수대로 335번길 12',
        phone: '031-239-5572'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '웰치과',
        item: '',
        address: '경기도 수원시 권선구 금곡로 102번길 20
센터프라자 3층',
phone: '031-293-0275'},
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '생각꿈틀미술학원',
        item: '',
        address: '경기도 수원시 권선구 호매실동 1020-20',
        phone: '031-294-3022'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '힘(HIM)컴퍼니',
        item: '타일시공',
        address: '경기도 수원시 권선구 효탑로 50',
        phone: '010-5382-3080'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '골프153피팅스튜디오',
        item: '골프피팅',
        address: '경기도 수원시 금곡로205 해피리움빌딩511호 ',
        phone: '010-4284-1153'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '루아이디',
        item: '',
        address: '경기도 수원시 영통구 광교중앙로 170 A동 903호(광교효성해링턴타워)',
        phone: '031-272-0336'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '영선갤러리',
        item: '미술품',
        address: '경기도 수원시 영통구 덕영대로 1471번길 59(망포동) ',
        phone: '031-203-1089'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '영선부동산',
        item: '',
        address: '경기도 수원시 영통구 덕영대로 1471번길 59(망포동) ',
        phone: '031-203-5558'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '김용일 변호사사무실',
        item: '변호사사무소',
        address: '경기도 수원시 영통구 동수원로 537번길 16-1 2층 (나누리병원옆)',
        phone: '031-212-8448'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울아이정신과의원',
        item: '',
        address: '경기도 수원시 영통구 봉영로 1605 모던타운',
        phone: '031-203-4275'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '월드마크빅스맘
어린이집',
item: '',
        address: '경기도 수원시 영통구 센트럴타운로 107',
        phone: '070-7514-1248'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '레푸스 광교점',
        item: '발 치료',
        address: '경기도 수원시 영통구 센트럴타운로 85 광교아브뉴프랑 라온존 206',
        phone: '031-215-8870'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '마마몽떼몬테소리',
        item: '몬테소리',
        address: '경기도 수원시 영통구 센트럴파크로128번지 78 1층',
        phone: '010-8362-7907'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '용인대선호태권도',
        item: '',
        address: '경기도 수원시 영통구 영통로505 정원빌딩 5층',
        phone: '010-5578-7104'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '연세마시멜로아동청소년상담센터',
        item: '상담 치료',
        address: '경기도 수원시 영통구 청명북로81 청명마을 주공아파트 407동 103호',
        phone: '010-8606-2031'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤엠영어화서
 어학원',
item: '',
        address: '경기도 수원시 일월로 22번길 22-5 서수원프라자 503호',
        phone: '031-298-0055'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)이지일렉트릭',
        item: '응용 소프트웨어 개발 및 공급업',
        address: '경기도 수원시 장안구 만석로 207, 302호',
        phone: '070-8777-1253'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '우현(wh)헤어살롱',
        item: '',
        address: '경기도 수원시 팔달구 권선로 741-21인계지움 205호',
        phone: '031-221-4976'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '즐거운피아노음악학원',
        item: '',
        address: '경기도 수원시 팔달구 덕영대로803번길 43 402호,403호',
        phone: '031-256-5156'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '생각꿈틀미술학원',
        item: '',
        address: '경기도 수원시 팔달구 덕영대로803번길 43 404호',
        phone: '031-257-3022'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'IBR 뷰티아카데미',
        item: '',
        address: '경기도 수원시 팔달구 매산로11 MG빌딩 5층',
        phone: '031-306-3214'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이지어학원',
        item: '',
        address: '경기도 수원시 팔달구 중부대로 245, 우만동 용신빌딩 6층',
        phone: '010-9413-4210'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '배곧아동발달센터',
        item: '아동치료/성인상담',
        address: '경기도 시흥시 배곧4로 99 로얄페스타 301호',
        phone: '031-431-1714'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '하늘체한의원',
        item: '',
        address: '경기도 안산시 단원구 고잔1길 17 6층',
        phone: '031-365-3675'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '대우통운',
        item: '운송주선,다육식물판매',
        address: '경기도 안산시 단원구 산단로 345, B동 320호 (원곡동 유통상가)',
        phone: '031-499-8888'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)한일환경기계',
        item: '환경인허가',
        address: '경기도 안산시 단원구 석수로 138',
        phone: '010-8823-8919'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '희망의원',
        item: '',
        address: '경기도 안산시 본오동 805-15',
        phone: '031-406-5556'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '스토리플랜트',
        item: '조경시공.관리.수직정원',
        address: '경기도 안산시 상록구 건건동 178-5',
        phone: '01039409067'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '우성건축',
        item: '건물 및 가정집 수리',
        address: '경기도 안산시 상록구 본오로 133 우성상가동128호',
        phone: '031-409-8251'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '케이디건축',
        item: '인테리어업',
        address: '경기도 안산시 상록구 충장로3안길 34',
        phone: '031-713-3480'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '안성웰의원',
        item: '병원',
        address: '경기도 안성시 중앙로 368(석정동) 모아빌딩 3층',
        phone: '031-671-6400'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '원성희세무회계사무소',
        item: '세무사',
        address: '경기도 안양시 동안구 관양동 1506-27 인덕원프라자 701호',
        phone: '010-9436-4325'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '우리들 치과',
        item: '',
        address: '경기도 안양시 동안구 관양동 타워빌딩 4층',
        phone: '031-421-4567'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '어니더레블',
        item: '',
        address: '경기도 안양시 동안구 동안로 283, 13동206호',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '믿음치과의원',
        item: '',
        address: '경기도 안양시 동안구 흥안대로 511 3층',
        phone: '031-342-7575'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아
            (뜨란채점)',
item: '세탁',
        address: '경기도 안양시 천서로289 주공상가204호',
        phone: '031-445-0066'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '로뎀성모안과',
        item: '안과 진료',
        address: '경기도 양주시 회천남로 76 한덕타워 4층 402호',
        phone: '031-858-8000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '김한의원',
        item: '한방 진료',
        address: '경기도 여주시 세종로 76-1',
        phone: '031-881-3399'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '맑은숲한의원',
        item: '',
        address: '경기도 여주시 여흥로109번길 15 (창동)?동방빌딩3층 ',
        phone: '031-883-3775'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '헬스매니아',
        item: '',
        address: '경기도 오산시 청학로 173 농협건물 2층',
        phone: '031-378-9129'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '슈퍼맘',
        item: '산후관리서비스',
        address: '경기도 용인시 광교 중앙로301 드림타워 705-3호',
        phone: '031-216-2253'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: 'OK 부동산 ',
        item: '',
        address: '경기도 용인시 기흥구  용구대로 2398 벽산 주상가 110호',
        phone: '031-274-5454'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대명성태권도',
        item: '태권도',
        address: '경기도 용인시 기흥구 구갈로 115-18 도현마을현대아이파크아파트 내 상가2층',
        phone: '031-287-6288'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '필립디자인 ',
        item: '',
        address: '경기도 용인시 기흥구 구성로 65 ',
        phone: '031-284-4804'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '리안헤어',
        item: '',
        address: '경기도 용인시 기흥구 동백로 5로 23 ',
        phone: '031-284-4056'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '카야뷰티',
        item: '뷰티(속눈섭파마.속눈썹연장)',
        address: '경기도 용인시 기흥구 동백중앙로 177, 1210호',
        phone: '010-7551-0523'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '성모프라임 내과',
        item: '',
        address: '경기도 용인시 기흥구 동백중앙로 283번지  골드프라자 C동 5층 성모프라임 내과 ',
        phone: '031-8005-7582'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '오케이치과의원',
        item: '',
        address: '경기도 용인시 기흥구 동백중앙로 358-12',
        phone: '031-287-5365'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '미앤지의원',
        item: '',
        address: '경기도 용인시 기흥구 마북동 524-1',
        phone: '031-284-7744'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: 'e편한부동산중개사무소',
        item: '',
        address: '경기도 용인시 기흥구 마북로 208 e편한세상아파트 상가동102호',
        phone: '031-275-2855'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '죽전자이공인중개사',
        item: '',
        address: '경기도 용인시 기흥구 보정로94 상가동101호',
        phone: '031-897-7000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '1인 운수 사업자(한승완)',
        item: '운수업',
        address: '경기도 용인시 기흥구 언남동 구성로 99',
        phone: '010-2113-3416'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '쿨컨디션',
        item: '에어컨 설치 및 이전설치(이사철 시즌)',
        address: '경기도 용인시 기흥구 언동로 231',
        phone: '010-3494-8844'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인 3.3',
        item: '',
        address: '경기도 용인시 기흥구 용구대로 2311(경기도 일자리재단) 비즈 14호',
        phone: '0507- 1340- 3513'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '더풋샵죽전점',
        item: '',
        address: '경기도 용인시 기흥구 죽전로 23 호암프라자 2층',
        phone: '031-266-8824'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: 'U필라테스',
        item: '필라테스센타',
        address: '경기도 용인시 기흥구 탑실로 36 공세프라자 3층',
        phone: '031-285-1561'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '뉴밸런스재활의학과',
        item: '',
        address: '경기도 용인시 기흥구 한보라1로 5 보라메가타운 4층 뉴밸런스재활의학과',
        phone: '031-8005-9000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '쇼팽음악학원',
        item: '음악학원',
        address: '경기도 용인시 기흥구 한보라1로56 메디프라자401',
        phone: '031-274-5072'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'SM 수학학원',
        item: '초 중 고  수학학원',
        address: '경기도 용인시 기흥구 흥덕2로 115 미래도프라자 7층',
        phone: '031- 215- 2536'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '테르엔창업센터',
        item: '창업보육센터',
        address: '경기도 용인시 기흥구 흥덕2로87번길 18. 이시티 A-407호',
        phone: '031-215-6001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이새로수학학원',
        item: '수학학원',
        address: '경기도 용인시 기흥구 흥덕중앙로 41 흥덕웰스프라자 805호',
        phone: '010-9874-8863'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '우행공스터디카페',
        item: '스터디 카페',
        address: '경기도 용인시 기흥수 마북동 181-2 한성프라자 401호',
        phone: '031-281-0731'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '광교새벽정신어학원',
        item: '영어',
        address: '경기도 용인시 수지구 광교마을로 54 SB타운 201호',
        phone: '031-211-0500'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '하람어린이집',
        item: '가정어린이집',
        address: '경기도 용인시 수지구 대지로49 퍼스트하임 204동 101호',
        phone: '031-283-6867'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '노인요양시설',
        name: '굿데이케어센터',
        item: '노인요양시설',
        address: '경기도 용인시 수지구 동천동 동천로99번길3 상록제일프라자7층',
        phone: '031-276-1932'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '한우리 홈독서클럽',
        item: '홈독서클럽',
        address: '경기도 용인시 수지구 만현로67번길 20 상현더샵파크사이드 102동',
        phone: '010.8773.2217'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '88공인중개사 사무소',
        item: '',
        address: '경기도 용인시 수지구 만현로67번길 9 아이파크2단지 상가101호',
        phone: '031-272-0088'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤지끄실용음악학원',
        item: '실용음악학원',
        address: '경기도 용인시 수지구 만현로82-4 헤르메스빌딩 603호',
        phone: '031-264-8641'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '올가드림뷰티',
        item: '',
        address: '경기도 용인시 수지구 문인로 57 삼성,풍림,동아APT 상가 108호',
        phone: '010-3186-8648'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '수리수리 모터스',
        item: '',
        address: '경기도 용인시 수지구 문인로 70번길 10',
        phone: '031-266-6848'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '닛시필라테스 ',
        item: '필라테스 ',
        address: '경기도 용인시 수지구 성복2로 108-2 웰스톤갤러리',
        phone: '0312632211'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '준오헤어 롯데몰수지점',
        item: '',
        address: '경기도 용인시 수지구 성복2로 38 롯데몰3층 준오헤어',
        phone: '031 5174 4305'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '프리덤아트스페이스 미술학원',
        item: '미술',
        address: '경기도 용인시 수지구 손곡로 103번지 5층',
        phone: '010-2915-0398'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '손곡플레이팩토',
        item: '창의수학',
        address: '경기도 용인시 수지구 손곡로 53',
        phone: '010-7187-0700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이샵공방',
        item: '비누공방',
        address: '경기도 용인시 수지구 수지로 78번길 8 벽산블루밍상가 108호',
        phone: '010-4254-8538'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수지현대플레이팩토',
        item: '공부방',
        address: '경기도 용인시 수지구 수지로342번길 18',
        phone: '010-9240-8246'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'YBM브레이니영어/ 브레이니 리더스',
        item: '',
        address: '경기도 용인시 수지구 수풍로 38 삼성래미안 2차 아파트 상가 202호 & 205호',
        phone: '010-2204-3181'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '닛시필라테스 ',
        item: '필라테스 ',
        address: '경기도 용인시 수지구 신봉1로 175번길 진성프라자 7층',
        phone: '0312612234'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '해법수학',
        item: '',
        address: '경기도 용인시 수지구 신봉2로 60',
        phone: '031-263-3799'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '분양사무실',
        item: '주거용 오피스텔 분양',
        address: '경기도 용인시 수지구 신수로783번길 4, 웰리스101  아파텔',
        phone: '010 6215 9556'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대석사천무태권도 ',
        item: '',
        address: '경기도 용인시 수지구 정평로63 성지아파트상가 3층 ',
        phone: '010-8581-4709'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '원시큐어(OoneSECURE)',
        item: 'ICT 및 정보보안 컨설팅, 4차산업 강의, 자문, 강사, 작가',
        address: '경기도 용인시 수지구 죽전1동 대지로 49, 203-1906(죽전퍼스트하임)',
        phone: '010-2932-1882'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '수지우리어린이집',
        item: '',
        address: '경기도 용인시 수지구 포은대로 313번길7-10 이편한 세상 수지 @ 101동 103호',
        phone: '031-893-3345'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '하우스터디독서실 용인수지센터(풍덕천동)',
        item: '',
        address: '경기도 용인시 수지구 풍덕천로 116 영일빌딩 6층',
        phone: '010-5655-8052'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '드림영어',
        item: '개인과외',
        address: '경기도 용인시 죽전2동 용구대로2771번길 66',
        phone: '01043470531'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '대륭이엔씨',
        item: '스치로폴 재활용',
        address: '경기도 용인시 처인구 남사면 통삼리 522-1',
        phone: '010-5352-1540'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'J위드학원',
        item: '',
        address: '경기도 용인시 처인구 남사면 한숲로45 옐로우상가B동 4층 419호',
        phone: '031-332-6696'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '프랑스올리브',
        item: '펜션',
        address: '경기도 용인시 처인구 남사읍 전궁로 93번길 18-2',
        phone: '01054196085'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '이룸디자인건설',
        item: '건설, 리모델링 토탈 인테리어',
        address: '경기도 용인시 처인구 모현읍 포인대로 1069번길 13-4',
        phone: '031-8009-0416'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '호텔 더숨 포레스트 내 바베큐',
        item: '연회장 및 세미나실',
        address: '경기도 용인시 처인구 포곡읍 전대리 473-13',
        phone: '010-6415-9060'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '문소아청소년과의원',
        item: '',
        address: '경기도 용인시 처인구 포곡읍 포곡로 78-8 대두 3차타운',
        phone: '031-334-7188'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '사명통증의학과',
        item: '통증의학과',
        address: '경기도 의왕시 내손로 11 가동상가 208호',
        phone: '031-426-7582'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '조이플키즈',
        item: '',
        address: '경기도 이천시 신아로 128번길 74-51',
        phone: '031-637-2972'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '이천 플랜트치과의원',
        item: '',
        address: '경기도 이천시 창전동 149-9',
        phone: '031-639-0028'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '현인연구소',
        item: '3D입체영상, 특수광학 연구개발',
        address: '경기도 파주시 회동길480 아트팩토리 A219호',
        phone: '010-3375-8154'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '평택본플란트치과의원',
        item: '치과',
        address: '경기도 평택시 동삭로 384 동화메디컬빌딩 3.4층',
        phone: '031-653-0880'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '경희미르애한의원',
        item: '',
        address: '경기도 하남시 미사강변남로 103 랑데르3 2층',
        phone: '031-8027-8275'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 하남미사18단지점',
        item: '',
        address: '경기도 하남시 미사강변서로127-1 정문상가 2층 202호',
        phone: '010-7434-4421'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: 'HONOR CONSTRUCTION',
        item: '건설 인테리어',
        address: '경기도 하남시 미사강변중앙로 111번안길 32. 401호',
        phone: '010-2331-1465'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '예음원피아노',
        item: '',
        address: '경기도 하남시 미사강변중앙로90-1,101호',
        phone: '031-793-5947'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '미래이비인후과의원',
        item: '',
        address: '경기도 하남시 신장동 523-1 현대베스코아빌딩 7층 704호',
        phone: '0507-1412-8324'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '파워정형외과 의원',
        item: '정형외과',
        address: '경기도 하남시 신평로 49 4충',
        phone: '031-795-5250'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '동탄파크해법영어',
        item: '',
        address: '경기도 화성시 동탄대로24가길 30 134-104',
        phone: '010-8798-8515'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '토마틀 성악 동요 ',
        item: '',
        address: '경기도 화성시 동탄반석로 208 아인슈타인 프라자 4층 토마틀성악',
        phone: '010-3533-3981'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '셀파 우등생교실 ',
        item: '',
        address: '경기도 화성시 동탄순환대로20길 115, 2235동 1804호  (목동, 르파비스)',
        phone: '010-3494-8308'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '동탄그리심아동가족상담센터',
        item: '상담센터',
        address: '경기도 화성시 동탄순환대로708 서건에듀프라자1동 601호 ',
        phone: '031-375-7544'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '스튜디오 러브썸',
        item: '렌탈스튜디오/파티룸',
        address: '경기도 화성시 동탄첨단산업1로58, 501호',
        phone: '031-8055-8086'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '신강수학',
        item: '',
        address: '경기도 화성시 반송동 동탄반석로 208 아인슈타인프라자 6층',
        phone: '01049663981'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '삼성드림내과의원',
        item: '',
        address: '경기도 화성시 봉담읍 와우로20 미래프라자 3층',
        phone: '031-238-8708'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '일취월장 스터디카페경기지사',
        item: '',
        address: '경기지역- 생활관리,학습관리,컨설팅및 가맹',
        phone: '010-3706-7004'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '인천 개인 택시',
        item: '',
        address: '인천광역시 부평구',
        phone: '01053284884'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '애플어린이집',
        item: '',
        address: '인천광역시 부평구 청천2동 178-15',
        phone: '032 526 4045'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '청라 시그니쳐',
        item: '',
        address: '인천광역시 서구 청라동 95-1',
        phone: '01046154869'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아이보람 송도글로벌센터',
        item: '원어 비디오와 원서를 활용하는 엄마표 영어 모임',
        address: '인천광역시 연수구 신송로 161 더하이츠빌딩 8층 805호',
        phone: ' 032-833-8919'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '하늘정원장례식장',
        item: '장례식장',
        address: '강원도 삼척시 강원남부로 4539',
        phone: '033-575-4441'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '대구어린이천문대 ',
        item: '어린이천문대',
        address: '대구 수성구 알파시티1로31길 27, 2층 (대흥동)',
        phone: '053-243-3245'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '삐삐쌀롱',
        item: '',
        address: '부산광역시 북구 시랑로132번길 75 1층',
        phone: '0507-1473-9782'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '국어하다/화상영어',
        item: '온라인학원',
        address: '성남/용인 전역및 전국',
        phone: '010-3706-7004'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '엔에스엠피',
        item: '해외구매대행',
        address: '온라인 - 쿠팡: https://store.coupang.com/link/nsmp',
        phone: '070-8098-4704'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인엘',
        item: '편집디자인',
        address: '온라인 - http://designel.co.kr',
        phone: '070-4241-2565'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '참미',
        item: '방충망&외풍차단',
        address: '온라인 - www.charmmi.co.kr',
        phone: '010-9696-4749'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '하민파파',
        item: '돌사진촬영',
        address: '온라인 - www.haminpapa.com',
        phone: '010-3348-6669'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이에스에프',
        item: '전자상거래/식품인터넷판매',
        address: '온라인 - www.happyhanggi.com (네이버 스마트스토어 해피한끼)',
        phone: '010-3060-3656'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '(주)케이라클',
        item: '',
        address: '전라남도 광양시 중동 광장로70 성호2차 213동 1704호 ',
        phone: '010-4713-1961'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '신화공인중개소사무소',
        item: '',
        address: '충청남도 당진시 석문면 산단9로 24 102호',{
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '그림비즈니스센터',
        item: '공유오피스',
        address: '서울 마포구 월드컵북로 400 (상암동) 상암동 서울산업진흥원 2층 홈페이지 http://www.grimbiz.com/ 블로그  https://blog.naver.com/grimbiz ',
        phone: '1661-9731'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '피앤케이수학원',
        item: '중고등 수학학원',
        address: '서울 서초구 고무래로8길 9 (반포동) 정환빌딩2층',
        phone: '02-595-9417'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '법무법인 정진',
        item: '변호사업',
        address: '서울시 강남구 강남대로 314(역삼동, 서우빌딩)',
        phone: '02-592-2224'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '신석호 정신과',
        item: '정신과',
        address: '서울특별시 강남구 개포로 615 석탑프라자 201',
        phone: '02-2226-2231'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '서문한의원',
        item: '한의원',
        address: '서울특별시 강남구 남부순환로 2738, 3층',
        phone: '02-579-5100'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '유일부동산 중개법인',
        item: '',
        address: '서울특별시 강남구 논현로 428, 302호 (역삼동 정진빌딩)',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)헤리티지앤파트너스',
        item: '법인 보험영업',
        address: '서울특별시 강남구 논현로 507, 1703호 (성지하이츠3차빌딩)',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '카피루스',
        item: '출력, 복사, 제본, 인쇄업',
        address: '서울특별시 강남구 논현로 76길 9 서울강남빌딩 1층',
        phone: '02-552-9978'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울본브릿지병원',
        item: '',
        address: '서울특별시 강남구 도곡로214',
        phone: '1899-0090'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '삼광공인중개사',
        item: '',
        address: '서울특별시 강남구 봉은사로18길 88',
        phone: '02-557-2929'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '대치상어수학학원',
        item: '',
        address: '서울특별시 강남구 삼성로 155 대치퍼스트빌딩 409호',
        phone: '02-554-0222'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '청담에스에스 640의원',
        item: '피부,탈모,도수치료',
        address: '서울특별시 강남구 삼성로 640, 2층',
        phone: '02-545-0640'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '헬스올림프스',
        item: '',
        address: '서울특별시 강남구 삼성로85길19 302 대치빌딩',
        phone: '010-8339-4711'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '도어즈',
        item: '',
        address: '서울특별시 강남구 선릉로 146길 27-10 (청담동 20-2) 3층',
        phone: '010-9108-0716'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세오케이통증의학과의원',
        item: '',
        address: '서울특별시 강남구 선릉로 517 비젼빌딩 ',
        phone: '02-556-8257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '스튜디오H',
        item: '드로잉수업,미술심리치료(자격증 유)',
        address: '서울특별시 강남구 압구정동 한양아파트',
        phone: '010-9173-8147'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '강의하는 아이들',
        item: '',
        address: '서울특별시 강남구 압구정로 29기 72-1 A동 3층 2호 ',
        phone: '02-543-8209 '
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '압구정케빈부동산중개',
        item: '',
        address: '서울특별시 강남구 압구정로29길 71 현대아파트 상가 3동 115호',
        phone: '02-545-8880'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)바른보존',
        item: '문화재수리
            (보존과학)',
address: '서울특별시 강남구 언주로134길.202호 에이170(논현동, 성암빌딩)',
        phone: '02-518-4326'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '강남 연세 흉부외과',
        item: '하지정맥류 전문',
        address: '서울특별시 강남구 역삼동 826-23, 3층',
        phone: '02-556-9388'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '튠댄스컴퍼니',
        item: '댄스스투디오',
        address: '서울특별시 강남구 역삼로 404 (재석빌딩) B1 튠댄스컴퍼니 ',
        phone: '02 565 7590'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '씨비젼 ',
        item: '홍보영상제작',
        address: '서울특별시 강남구 영동대로 643 삼안빌딩 501호 (청담역1번출구)',
        phone: '070-8843-3700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '헌터스그룹',
        item: '서치펌',
        address: '서울특별시 강남구 테헤란로 311 아남타워 1208호',
        phone: '010 3626 8330'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '헌터스 그룹',
        item: '직업 소개업',
        address: '서울특별시 강남구 테헤란로 311 아남타워 12층',
        phone: '010-3103-8338'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: 'Kga에셋',
        item: '보험판매전문',
        address: '서울특별시 강남구 테헤란로 313,1808호(성지하이츠 1차)',
        phone: '02-565-5563'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '신한라이프',
        item: '보험',
        address: '서울특별시 강남구 테헤란로 318 11층',
        phone: '010-2345-3238'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세채움정신건강의학과의원',
        item: '',
        address: '서울특별시 강남구 테헤란로 339, 선릉빌딩 8층',
        phone: '02-568-2075'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'WECODE',
        item: '코딩부트캠프',
        address: '서울특별시 강남구 테헤란로 427, 위워크 타워',
        phone: '010-7365-4553'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '노무법인 아인',
        item: '노무사',
        address: '서울특별시 강남구 테헤란로310, 15층 1503호(역삼동, 두꺼비빌딩)',
        phone: '02-6959-2405'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '신유한의원',
        item: '',
        address: '서울특별시 강남구 학동로 55길 12 세왕빌딩 4층',
        phone: '02-794-7588'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '골든공인중개사
사무소',
item: '',
        address: '서울특별시 강남구 헌릉로590길 63 강남데시앙파크 상가 102호',
        phone: '02-451-4600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '은혜무지개',
        item: '부동산 중개',
        address: '서울특별시 강동구 동남로81길 78',
        phone: '02-427-4111'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '쇼뇨몬테소리',
        item: '',
        address: '서울특별시 강동구 아리수로 423 강일큐브 3층',
        phone: '010-6839-5752'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '평강한의원',
        item: '',
        address: '서울특별시 강동구 양재대로 1465 마루빌딩 6층',
        phone: '02-478-9595'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '류마내과',
        item: '',
        address: '서울특별시 강동구 천호동 천호대로 1099 정산타워빌딩 ',
        phone: '02 474 5450'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '하나보습학원',
        item: '',
        address: '서울특별시 강북구 미아동 도봉로10라길 5 (골든빌4층)',
        phone: '02-907-3511'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '선율드림',
        item: '실내악 연주',
        address: '서울특별시 강서구 국회대로 171',
        phone: '010-3345-8479'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '곰글로벌',
        item: '바닥재,조명기구,욕실',
        address: '서울특별시 강서구 마곡중앙로 59-21, 에이스 타워2 812호',
        phone: '0507-1385-6109'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)공간의삶',
        item: '안전진단',
        address: '서울특별시 강서구 화곡로68길 15 ',
        phone: '02-6243-0501'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세마취통증의학과 ',
        item: '',
        address: '서울특별시 관악구 난곡로 226(세이브마트 옆, 마더스약국 건물 5층)',
        phone: '02-866-7585'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤지큐 음악동화',
        item: '',
        address: '서울특별시 관악구 남현1길 10, 3층',
        phone: '02-585-5726'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)사운드센트럴',
        item: '',
        address: '서울특별시 광진구 ',
        phone: '010-4162-2958'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울나란이치과',
        item: '교정치과',
        address: '서울특별시 광진구 아차산로 237 (건대입구역)',
        phone: '02-461-7522'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '본마디의원',
        item: '',
        address: '서울특별시 광진구 용마산로 44, 화성빌딩 2층',
        phone: '02.3437.8855'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '문앤도어아카이브',
        item: '가죽공방',
        address: '서울특별시 광진구 중곳동 112-1 102호',
        phone: '010-7928-6704'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '(주)대양인스티튜트',
        item: '',
        address: '서울특별시 구로구 도림로 90, 혜성빌딩 2층',
        phone: '02-838-0002'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '천재교과서 온라인 학습 밀크티 (초중고)',
        item: '',
        address: '서울특별시 금천구 디지탈로 10길  78,1210호 ',
        phone: '010-7321-5280'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '지혜나눔네트워크',
        item: '중장년을 위한 온라인 교육',
        address: '서울특별시 노원구 상계2동 노원로 428',
        phone: '010-3324-7278'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '공간이야기',
        item: '홈 앤 사무실 인테리어',
        address: '서울특별시 도복구 쌍문동 45-6',
        phone: '01077717882'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '이레한의원',
        item: '',
        address: '서울특별시 동작구 동작대로 25길 16 4층',
        phone: '02-3477-1079'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '소마 사고력 수학학원',
        item: '',
        address: '서울특별시 동작구 현충로 118 4층 ',
        phone: '02-823-4006'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '홍대허브하우스',
        item: '고시원',
        address: '서울특별시 마포구 양화로 124, 4층',
        phone: '010-7572-1839'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인가인드(주)',
        item: '인테리어 설계/시공',
        address: '서울특별시 마포구 양화로7길 66-4(서교동)',
        phone: '02-558-8575'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '로뎀상담실',
        item: '상담 치료',
        address: '서울특별시 마포구 연희로1길 12 302호( 동교동 푸른빌딩)',
        phone: '02-717-0475'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울포도나무치과',
        item: '',
        address: '서울특별시 마포구 월드컵북로 192',
        phone: '02-374-2875'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '초이성형외과의원',
        item: '',
        address: '서울특별시 서초구 강남대로 543 2층',
        phone: '02-543-7781'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '인디고라임',
        item: '영상 프로덕션',
        address: '서울특별시 서초구 강남대로18길 19 5층',
        phone: '02-529-2690'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '하나건축사사무소',
        item: '건축설계',
        address: '서울특별시 서초구 고무래로 16 3층',
        phone: '02-533-3633'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '엠에이치에스특허',
        item: '변리사업',
        address: '서울특별시 서초구 바우뫼로37길 23-6 602호(양재동,  태홍빌딩)',
        phone: '0505-300-2244(010-9349-0930)'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '법무법인(유한) 태승',
        item: '변호사업',
        address: '서울특별시 서초구 서초 중앙로 125 로이어즈타워 1205호',
        phone: '02-596-1003'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '골프연습장',
        name: '키덜트골프클럽,버디버디골프클럽(같은주소지)',
        item: '',
        address: '서울특별시 서초구 서초동 남부순환로333길 32 지하',
        phone: '02-585-9710'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: 'KEY법률사무소',
        item: '변호사업',
        address: '서울특별시 서초구 서초중앙로24길12, 302호',
        phone: '02-3482-0883'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '에이드앤 건축설계',
        item: '건축설계/리모델링',
        address: '서울특별시 서초구 양재2동 논현로 83 산호물산 a동 1613호',
        phone: '02-589-1875'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '(주)건축사사무소 에스아이 ',
        item: '건축 설계 / 감리 / 인테리어',
        address: '서울특별시 서초구 언남11길 34-2, #403 (양재동, 영동빌딩) http://www.si-arch.com https://blog.naver.com/hanichun',
        phone: '02-3462-0289, 010-9145-0289'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: 'SH우면공인중개사사무소',
        item: '',
        address: '서울특별시 서초구 태봉로 2길 65, 상가102호(우면동 서초네이처힐4단지)',
        phone: '02-577-5770'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세유라인치과',
        item: '',
        address: '서울특별시 성동구 장토길 33 2층',
        phone: '02-2231-2822'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '에이스부동산',
        item: '',
        address: '서울특별시 송파구 동남로 18길 12 1층(가락동)',
        phone: '02-404-6789'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '아카데미라운지 가락독서실(송파)',
        item: '',
        address: '서울특별시 송파구 동남로 211 2층 ',
        phone: '02 409 9998'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '시온연합의원',
        item: '피부과',
        address: '서울특별시 송파구 마천로 311',
        phone: '02-404-7727'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '더라이브러리 송파점',
        item: '스터디 카페',
        address: '서울특별시 송파구 백제고분로 46길43 3층',
        phone: '070-8866-3966'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '바라봄헤어',
        item: '',
        address: '서울특별시 송파구 송이로 20길 18',
        phone: '02- 6417- 3544'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '이엘세무회계사무소',
        item: '회계사무소',
        address: '서울특별시 송파구 송파대로 260 1404호(가락동, 제일오피스텔)',
        phone: '010-9108-7851'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '피부전공',
        item: '',
        address: '서울특별시 송파구 송파대로 345 1A B 59호',
        phone: '010-6541-1523'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '럭키 공인중개사',
        item: '',
        address: '서울특별시 송파구 위례광장로 121 위례 24단지내상가 101-1호',
        phone: ' 02-406-6363/ 010-4435-8911'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 아이파크 1차점',
        item: '',
        address: '서울특별시 송파구 위례광장로 136 상가 E동 119호',
        phone: '02-448-3939'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '이레공인중개사',
        item: '',
        address: '서울특별시 송파구 잠실동 177-4 ',
        phone: '02-420-0058'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인 리가',
        item: '',
        address: '서울특별시 송파구 정의로 7길 13 오피스동 611(문정동 에코송파)',
        phone: '02-2058-1518/ 010-2305-7304'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '신성 네트워크',
        item: '스크린골프장, pc방 창업지원및 공장설비자금 지원',
        address: '서울특별시 송파구 중대로10길 13',
        phone: '010-3813-3283'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '더봄길',
        item: '백일상 돌상대여',
        address: '서울특별시 영등포구 디지털로 420, 상가 106호',
        phone: '010-9376-2995'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '인모스트투자자문',
        item: '투자자문사',
        address: '서울특별시 영등포구 양평로21길 26 1603호',
        phone: '02-2068-6482'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대신강호태권도장',
        item: '',
        address: '서울특별시 은평구 녹번로9 3층 ',
        phone: '02-382-9498'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)지씨엔',
        item: '해외이주,유학 컨설팅',
        address: '서울특별시 종로구 새문안로 5길 13 변호사회관 1204호',
        phone: '02-3486-1400'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '토브디자인',
        item: '디자인&인쇄',
        address: '서울특별시 중구 을지로 35길 16-14',
        phone: '010-3438-0153'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '센터원웰니스',
        item: '',
        address: '서울특별시 중구 을지로5길 26 서관3층(수하동, 미래에셋센터원)',
        phone: '02-6030-1000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '삼성공업',
        item: '미싱바늘',
        address: '서울특별시 중구 창경궁로 58',
        phone: '010-8785-0719'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '소망기획',
        item: '청자켓 전문샘플실',
        address: '서울특별시 중구 청구로 83-5 ',
        phone: '010-2175-5084'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '다온탄성',
        item: '',
        address: '서울특별시 화곡로 176-19 성재센트리움',
        phone: '010-4156-6439'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '서울음악학원',
        item: '',
        address: '경기 군포시 금산로 92 (산본동) 3층',
        phone: '031-396-1800'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '지지스튜디오(수내)',
        item: '사진관',
        address: '경기 성남시 분당구 내정로173번길 11 (수내동, 양지마을) 대명상가 지하 1층',
        phone: '031-707-4479'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '윤아이디',
        item: '',
        address: '경기 성남시 분당구 분당로 190 (분당동, 샛별마을라이프아파트, 102호))',
        phone: '031-703-4243'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '드림카센터',
        item: '',
        address: '경기 성남시 분당구 야탑로161번길 4-4 (야탑동)',
        phone: '031-705-0951'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '다트커뮤니케이션즈',
        item: '(온라인)디스플레이광고, 홈페이지 및 VR 제작',
        address: '경기 성남시 분당구 중앙공원로 53 (서현동, 시범단지삼성.한신아파트)',
        phone: '010-9819-5518'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '고은 콜라겐 피부샵',
        item: '피부관리',
        address: '경기 성남시 분당구 판교역로2번길 35 (백현동) 1층',
        phone: '031-704-4007'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '분당21세기병원',
        item: '[목,허리 디스크/관절,골절]',
        address: '경기 성남시 분당구 황새울로342번길 15 (서현동) 은성빌딩 5,6층',
        phone: '031-703-0175'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '호반탑부동산',
        item: '부동산',
        address: '경기 성남시 수정구 고등로 34 (고등동, 호반써밋 판교밸리) 108호',
        phone: '031-756-4900'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '자람학원',
        item: '초중 영어 수학',
        address: '경기 성남시 수정구 위례동로 153 (창곡동) 에이플타워 601호',
        phone: '031-701-3371'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '박근완치과',
        item: '',
        address: '경기 성남시 중원구 산성대로 340-1 (중앙동) 범원빌딩 3층',
        phone: '031-744-3333'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이화앤해금스튜디오',
        item: '국악, 해금(입시, 취미)',
        address: '경기 수원시 영통구 법조로 25 (하동) 광교SK뷰레이크 A동 411호',
        phone: '031-8001-2001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수학생각학원',
        item: '',
        address: '경기 용인시 기흥구 구성로 88 (언남동) 국민은행 5층 504호',
        phone: '070-4327-1499'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '더샵 공인중개사사무소',
        item: '부동산',
        address: '경기 용인시 기흥구 기흥역로58번길 78 (구갈동, 기흥역 더샵) 기흥역더샵 판매시설 201동 103호',
        phone: '031-284-6111'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '늘봄음악학원',
        item: '',
        address: '경기 용인시 기흥구 중부대로 788번길 20 쌍용아파트 상가 3층',
        phone: '031-286-2167'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '아이빌리어린이집',
        item: '',
        address: '경기 용인시 수지구 용구대로 2742 (죽전동, 동성1차아파트, A 관리동)',
        phone: '031-261-5953'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '마스터수학 전문학원',
        item: '수학 학원',
        address: '경기 용인시 수지구 현암로119 죽전메디뷰4층 404호',
        phone: '031-262-3698'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '이루레건축',
        item: '',
        address: '경기 용인시 처인구 금령로40번길 15-16 (김량장동) 1층',
        phone: '031-8097-2722'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '카세리오',
        item: '',
        address: '경기도 가평군 가평읍 북한강변로 173',
        phone: '031-581-8001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '인터라켄스테이',
        item: '',
        address: '경기도 가평군 청평면 호반로 887',
        phone: '031 585 4788'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '삼송경희한의원',
        item: '',
        address: '경기도 고양시 덕양구 삼송로88 오성프라자 401호',
        phone: '02-371-3375'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: 'A to Z 통번역',
        item: '통번역',
        address: '경기도 고양시 일산동구 위시티 1로 7 503-1003',
        phone: '010-7663-0855'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '주)제이피플',
        item: '행사기획대행, 인력아웃소싱',
        address: '경기도 고양시 일산동구 중앙로1305-30, 마이다스오피스텔1017호',
        phone: '010-3228-6252'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '일산 아이사랑 어린이 집',
        item: '어린이집',
        address: '경기도 고양시 일산서구 송산로 339',
        phone: '031-923-0020'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '문지홍한의원',
        item: '',
        address: '경기도 고양시 일산서구 중앙로 1576 태진빌딩 203호',
        phone: '031-918-1075'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '세레니끄 과천점',
        item: '',
        address: '경기도 과천시 별양로 12',
        phone: '02-3679-1580'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '예섬',
        item: '인쇄/홍보물',
        address: '경기도 광명시 소하동 서원로 25',
        phone: '02-3663-2813'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '연세김앤정 정형외과',
        item: '정형외과',
        address: '경기도 광명시 철산로 36 양정타워 6층',
        phone: '02-2684-1111'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '한우리 독서토론 논술',
        item: '',
        address: '경기도 광주 태봉로 163-2 힐스2차 2102동 1301호',
        phone: '010-9017-1646'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '아이오텔 모텔',
        item: '',
        address: '경기도 광주시 경안동 20-91',
        phone: '031-797-3951'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '노인요양시설',
        name: '서연방문재활간호 재가요양센터',
        item: '',
        address: '경기도 광주시 광나안로 29-34, 2층',
        phone: '010-4434-2487'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '티엘조경',
        item: '조경',
        address: '경기도 광주시 능평로 46-6',
        phone: '031-717-5257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '담안 75 셀프세차장',
        item: '셀프 세차장',
        address: '경기도 광주시 담안길 75',
        phone: '031-768-2285'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '이너피스',
        item: '',
        address: '경기도 광주시 순암로67(장지동87-4)',
        phone: '031-764-7759'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '러브에셋종합보험',
        item: '',
        address: '경기도 광주시 역동로 5 갤러리아 플라자 212호',
        phone: '010-8955-7883'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '새샘어린이집',
        item: '어린이집',
        address: '경기도 광주시 오포안로 263번길',
        phone: '031-767-4279'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '거미하우스 인테리어',
        item: '욕실인테리어',
        address: '경기도 광주시 오포읍 능평로 5',
        phone: '010-5745-8804, 031-726-0300'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '바이올린. 비올라',
        item: '개인레슨',
        address: '경기도 광주시 오포읍 대명대길 11번길19 모아맨션103동102호',
        phone: '010-2605-7142'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '대주파크빌공인중개사사무소',
        item: '',
        address: '경기도 광주시 오포읍 마루들길 272, 기덕빌딩 103호',
        phone: '031-762-4800'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '소라투어',
        item: '여행',
        address: '경기도 광주시 오포읍 양벌로 195-30 (104호)',
        phone: '010-5643-0321'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '능골한의원',
        item: '',
        address: '경기도 광주시 오포읍 오포로 119',
        phone: '031-765-8706'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '브아뛰르',
        item: '',
        address: '경기도 광주시 오포읍 오포로 171번길 11-7',
        phone: '010-8556-4684'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '테마건축 유튜브주택박사',
        item: '',
        address: '경기도 광주시 오포읍 추자리 263-3 테마빌딩 201호',
        phone: '031-766-9745'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '3030몰입영어',
        item: '',
        address: '경기도 광주시 오포읍 태제로 137-1  포레시티 A동 102호',
        phone: '010-5668-0413'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '마루건축사사무소',
        item: '',
        address: '경기도 광주시 중앙로 196, 대영빌딩2층',
        phone: '031-767-6109'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '브레이브짐(BRAVE GYM)',
        item: '',
        address: '경기도 광주시 중앙로 327 이레빌딩 3층(2,3층)',
        phone: '1877-4868'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '힐링스케치미술치료센터',
        item: '미술치료센터',
        address: '경기도 광주시 탄벌길161',
        phone: '01088925555'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '해법영어수학',
        item: '',
        address: '경기도 광주시 태봉로 110 태전아이파크 102동 104호',
        phone: '010-9627-7096'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '필아트 미술학원',
        item: '',
        address: '경기도 광주시 태성로 130-1 한양프라자3층 302호',
        phone: '010-8994-3353'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '라라음악학원',
        item: '',
        address: '경기도 광주시 태성로 130-1, 한양플라자 301호',
        phone: '010-5525-7567'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '키즈키친봄',
        item: '쿠킹클래스',
        address: '경기도 광주시 태전중앙로 14 2층',
        phone: '010-2752-2215'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '안녕네일샵',
        item: '',
        address: '경기도 광주시 태전중앙로16 서원프라자2동 1층',
        phone: '010-8223-4875'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '중앙공인중개사사무소',
        item: '',
        address: '경기도 광주시 회안대로 350-3(태전동)',
        phone: '031-797-240, 010-9856-9821'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '드래곤피싱',
        item: '낚시 출조',
        address: '경기도 광주시 회안대로 350-3(태전동), 3층',
        phone: '010-9918-1370'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '위강한의원(구리남양주점)',
        item: '',
        address: '경기도 구리시 경춘로 253, 다우스퀘어 201호 ',
        phone: '031-523-2015'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '개인택배',
        item: '택배',
        address: '경기도 군포시 송부로49번길15 금강펜테리움105동 202호',
        phone: '010-3443-2985'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '다산큰나무정신건강의학과',
        item: '',
        address: '경기도 남양주시 다산중앙로124번길 22-8, 리더스퀘어 406호',
        phone: '031-567-9101'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이엘컴퍼니
            (렌탈119)',
item: 'TFS천막, 몽골천막,탁자,의자,전시장치, 에어컨,화장실 등 렌탈',
        address: '경기도 남양주시 진건읍 독정로 성지2길 106-5
www.rental119.co.kr / ',
phone: '031-528-1190'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '예솔치과의원',
        item: '',
        address: '경기도 부천시 경인로 216-1',
        phone: '032-653-3339'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아이보람 부천남센터',
        item: '원어 비디오와 원서를 활용하는 엄마표 영어 모임',
        address: '경기도 부천시 중동로 108 현대아이파크 상가 308호',
        phone: '032-667-8919'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '24시홈서비스 ',
        item: '하수도 막힘 뚫음 / 고압세척',
        address: '경기도 분당구 안골로42 ',
        phone: '1833-9701'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '닥터심스의원',
        item: '가정의학과',
        address: '경기도 분당구 장안로27 스마트114빌딩 3층',
        phone: '031-701-1350~1'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: 'CEO클리닉',
        item: '중소기업리스크관리센터',
        address: '경기도 분당구 황새울로200번길34 코포모타워5층',
        phone: '031-786-0210'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '피엔피 인베스트먼트 ',
        item: '특허법인',
        address: '경기도 성남시  판교로228번길 15, 2동7층701',
        phone: '031-622- 3953'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당드럼학원',
        item: '드럼',
        address: '경기도 성남시 구미로60 관보쇼핑 501호',
        phone: '010-8320-4926'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '동아수학학원',
        item: '초중고수학학원',
        address: '경기도 성남시 분당구  486번길6. 304호 서현동  상록프라자  동아  초중고  수학 학원   ',
        phone: '031-701-5554'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수학을풀다 수학학원',
        item: '',
        address: '경기도 성남시 분당구 구미동 구미로 60  관보쇼핑 504호',
        phone: '01064189410'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'YBM잉글루 분당구미 제1캠퍼스 ',
        item: '영어교습소',
        address: '경기도 성남시 분당구 구미로 60  관보쇼핑 408호 ',
        phone: '010 -2569 -0213'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '케이에스디자인 ',
        item: '',
        address: '경기도 성남시 분당구 금곡동 대왕판교로 300',
        phone: '070-4647-1176'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'GTG사고력수학 수내캠퍼스',
        item: '',
        address: '경기도 성남시 분당구 내정로 173번길 49(수내동, 궁전프라자 3) 213호',
        phone: '031-714-2350'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '팔레스인테리어',
        item: '',
        address: '경기도 성남시 분당구 내정로173번길 49, 110호 (수내동 궁전프라자-3)',
        phone: '010-5345-2732'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당유도관',
        item: '',
        address: '경기도 성남시 분당구 내정로24정든마을 (이경숙집사님남편)',
        phone: '0507-1434-8883'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '우리공인중개사',
        item: '',
        address: '경기도 성남시 분당구 내정로55 상록마을 우성상가117호',
        phone: '010 8583 3700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '토브구문정독 영어학원',
        item: '영어 어학원',
        address: '경기도 성남시 분당구 느티로 16, 5층 (정자동, 젤존타워1)',
        phone: '031-719-1193'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '이포크드류',
        item: '미용실',
        address: '경기도 성남시 분당구 느티로 2 AK와이즈플레이스 2층',
        phone: '031-714-3003'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '효도쿡123 정자점',
        item: '시니어 식사배달 서비스',
        address: '경기도 성남시 분당구 느티로51번길8-4 1층',
        phone: '031-719-1230'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'TM 수학',
        item: '',
        address: '경기도 성남시 분당구 돌마로 361 (동신코아)',
        phone: '031-778-7976'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '작은화실',
        item: '미술',
        address: '경기도 성남시 분당구 돌마로 476번길31 삼환상가 304호',
        phone: '010-9482-8062'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '민트심리상담센터',
        item: '상담센터',
        address: '경기도 성남시 분당구 돌마로 80 현대벤쳐빌 640호',
        phone: '031-897-6715'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '오한의원',
        item: '',
        address: '경기도 성남시 분당구 돌마로361 동신코아5층',
        phone: '031-712-1697'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '미술숲미술교습소',
        item: '미술',
        address: '경기도 성남시 분당구 돌마로476번길31 203호(서현동 임광종합상가)',
        phone: '031-701-5257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '포인스튜디오',
        item: '장소 대관 (댄스연습실, 악기연습실)',
        address: '경기도 성남시 분당구 돌마로486번길 6 상록프라자 지하1층',
        phone: '010-2352-7436'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '노동법률 동행',
        item: '고용,산재보험사무대행',
        address: '경기도 성남시 분당구 돌마로68 6층 610호(구미동 분당프라자)',
        phone: '031-702-2343'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '다올공인 중개사',
        item: '',
        address: '경기도 성남시 분당구 동판교로 122 백현마을 2단지 상가 106호',
        phone: '031-8017-7100'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 성남봇들8단지점',
        item: '',
        address: '경기도 성남시 분당구 동판교로 153  봇들마을 8단지',
        phone: '031-8016-1121'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '미용실봄',
        item: '',
        address: '경기도 성남시 분당구 동판교로52번길19-17(백현동586-2)',
        phone: '010 7472 4026'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '교정/재활',
        name: '위스포츠복지TOP운동발달센터',
        item: '운동발달 및 재활치료',
        address: '경기도 성남시 분당구 매화로 44 조일빌딩 4층',
        phone: '031-8017-3250'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '드림아트홀',
        item: '공연시설',
        address: '경기도 성남시 분당구 매화로 55번길 6-8 b01호',
        phone: '010-4275-1216'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '분당 베누스토/마이심포니',
        item: '악기레슨, 아마추어 오케스트라, 연습실대여',
        address: '경기도 성남시 분당구 미금로 215 대원칸타빌 상가 203호',
        phone: '010-2885-6947'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '보람공인중개사사무소',
        item: '',
        address: '경기도 성남시 분당구 미금로177.신원상가',
        phone: '031.717.4900'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '공간정오',
        item: '여성전용작업실. 동네책방.
 문화프로그램운영.리필스테이션 ',
address: '경기도 성남시 분당구 미금일로85 404호 ',
        phone: ' 031-762-0314'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '스쿨 에이이아이오유',
        item: '성인전문 영어회화 (개인 및 업체출강 가능: 회화, 비지니스, ielts, opic)',
        address: '경기도 성남시 분당구 백현로',
        phone: '01050232123'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: 'EPL코칭(이피엘코칭)',
        item: '기업코칭강의',
        address: '경기도 성남시 분당구 백현로 100,정자아이파크 1611호',
        phone: '010-5277-1106'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: 'SOS 스터디센터(관리형학습센터)',
        item: '스터디센터',
        address: '경기도 성남시 분당구 백현로 97, 다운타운빌딩 6층 SOS스터디센터',
        phone: '031-717-1616'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '울타리어린이집',
        item: '보육시설',
        address: '경기도 성남시 분당구 벌말로 50번길 14 702동 102호 (야탑동, 매화마을화성빌리지)',
        phone: '031 707 2780'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '레푸스 판교점',
        item: '발 치료',
        address: '경기도 성남시 분당구 분당내곡로 151 삼도타워 304호 ',
        phone: '031-702-8870'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '스튜디오 단한',
        item: '인테리어 설계',
        address: '경기도 성남시 분당구 분당동 105-8번지 1층',
        phone: '031-701-8480'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '권영미스킨케어',
        item: '',
        address: '경기도 성남시 분당구 분당로 263번길 35 굿모닝프라자 501호',
        phone: '010-4092-6361'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '씨제이상사',
        item: '건축,토목',
        address: '경기도 성남시 분당구 분당로190 샛별마을 110-701',
        phone: '010-4203-1247'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '하나 이비인후과',
        item: '',
        address: '경기도 성남시 분당구 분당로53번길 20 이랜드프라자 4층',
        phone: '031-701-1175'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '마트공인중개사사무소',
        item: '',
        address: '경기도 성남시 분당구 불정로 195 우성상가 113호(정자동, 정든마을우성6단지아파트)',
        phone: '031-713-7600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '팀플체대입시 / 팀플짐',
        item: '입시체육학원 & PT',
        address: '경기도 성남시 분당구 불정로 254 삼평프라자 B1 ',
        phone: '031-716-1020'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '분당법무사합동사무소',
        item: '법무사사무소',
        address: '경기도 성남시 분당구 불정로 380 동남프라자303호',
        phone: '031-608-0011'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '리본 스킨 스튜디오',
        item: '',
        address: '경기도 성남시 분당구 불정로 381(서현동)효자촌 동진프라자 2층 208호',
        phone: '010-3373-4122'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '워시앤조이셀프빨래방 분당서현점',
        item: '',
        address: '경기도 성남시 분당구 불정로 420번길6',
        phone: '010-5904-8442'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '수수공방',
        item: '도예공방',
        address: '경기도 성남시 분당구 불정로 87번길 10(정자동)',
        phone: '031-714-5735'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '감성수학',
        item: '초중고수학',
        address: '경기도 성남시 분당구 불정로256 청우프라자4층',
        phone: '031-712-0096'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '씨엘헤어',
        item: '',
        address: '경기도 성남시 분당구 산운로 98 산운마을 8단지 상가2층',
        phone: '031-8016-7224'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '창성에이스산업',
        item: '소방재품',
        address: '경기도 성남시 분당구 삼평동 판교로 253',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '소예한의원',
        item: '',
        address: '경기도 성남시 분당구 삼평동 판교역로 240 삼환하이펙스A동 210호',
        phone: '031-698-3575'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '코드아트랩',
        item: '아동미술',
        address: '경기도 성남시 분당구 새마을로233번길13',
        phone: '010-6789-0331'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '그린스킨케어',
        item: '',
        address: '경기도 성남시 분당구 서현동 305-1 동진프라자 2층 213',
        phone: '031-709-1070'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '굿모닝부동산',
        item: '',
        address: '경기도 성남시 분당구 서현동 89-7',
        phone: '031-704-8888'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당중앙검도',
        item: '검도',
        address: '경기도 성남시 분당구 서현동 미래타운A상가 2070호',
        phone: '031-709-1500'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '교정/재활',
        name: '프로그레시브',
        item: '자세 및 체형 교정센타',
        address: '경기도 성남시 분당구 서현동서현로170번길 풍림아이원플러스D동1704호',
        phone: '010-3765-5257'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '헤어매직',
        item: '',
        address: '경기도 성남시 분당구 서현로 181',
        phone: '031-702-6846'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '선진항공여행사 ',
        item: '전세버스',
        address: '경기도 성남시 분당구 서현로170 D1501',
        phone: '0317837008'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '동신한의원',
        item: '',
        address: '경기도 성남시 분당구 서현로210번길 2(지번) 서현동 245-3',
        phone: '031-707-9993'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '피아노브릿지음악학원',
        item: '성인음악학원',
        address: '경기도 성남시 분당구 성남대로 331번길 13 507호',
        phone: '010-5044-6290'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울바를정치과',
        item: '',
        address: '경기도 성남시 분당구 성남대로 349 시그마타워 402호 ',
        phone: '031-726-3427'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '미국유학닷컴 분당지사',
        item: '',
        address: '경기도 성남시 분당구 성남대로 381.',
        phone: '031-711-2167'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '올리비아 아이',
        item: '뷰티(속눈섭파마.속눈썹연장)',
        address: '경기도 성남시 분당구 성남대로 51 포스빌 오피스텔',
        phone: '010-7519-7854'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '쥬비미용실',
        item: '',
        address: '경기도 성남시 분당구 성남대로 779번길 13,106호(이매동,오성프라자)',
        phone: '031-704-0203'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '(주)이엔휴',
        item: '여행사',
        address: '경기도 성남시 분당구 성남대로 916번길 11, 526(야탑동, 글라스타워)',
        phone: '070-4129-7602'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '청담윤 성형외과',
        item: '성형외과/피부과',
        address: '경기도 성남시 분당구 성남대로168 미도프라자3층(신분당선1번출구)',
        phone: '031 -712-5502'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아트파일미술학원',
        item: '입시미술',
        address: '경기도 성남시 분당구 성남대로331 3-9, 503호 (정자동,백궁프라자3차)',
        phone: '031-704-7757'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'FICUS영어학원',
        item: '',
        address: '경기도 성남시 분당구 성남대로331번길 3-13 대명제스트빌딩 4층',
        phone: '0317260509'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '끌로디아',
        item: '속눈썹 //(구)언니의속눈썹',
        address: '경기도 성남시 분당구 성남대로393 분당두산위브파빌리온 A동1층 상가',
        phone: '010-7404-3228'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '한솔 비아이엠',
        item: '',
        address: '경기도 성남시 분당구 수내로 54 보보스쉐르빌 1714호',
        phone: '031-714-6830'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '삼부공인중개소',
        item: '',
        address: '경기도 성남시 분당구 수내로201 샛별마을 삼부아파트 분산상가101호',
        phone: '031-705-9994'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '행복한수학공부방 ',
        item: '',
        address: '경기도 성남시 분당구 야탑동 매화로38번길15 (2F)',
        phone: '010-5554-0905'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여행',
        name: '모두투어',
        item: '여행사',
        address: '경기도 성남시 분당구 야탑동 판교로 477 저우스토아 (이매점)',
        phone: '010-3173-3952'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '애프터선데이클럽',
        item: '',
        address: '경기도 성남시 분당구 야탑로 149번길 5 지하1층',
        phone: '010-4320-3766'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '토브플랜 ',
        item: '',
        address: '경기도 성남시 분당구 야탑로 28 우당프라자 b1',
        phone: '01053040092'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '지지스튜디오',
        item: '사진관',
        address: '경기도 성남시 분당구 야탑로139번길6-11',
        phone: '031-707-4479'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '우리ENG',
        item: '전기공사, 전기관련기술용역',
        address: '경기도 성남시 분당구 야탑로20',
        phone: '010-8944-5683'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '에이알피앤씨',
        item: '도장공사',
        address: '경기도 성남시 분당구 야탑로237 백마빌딩502호',
        phone: '010-3255-9454'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '건축사사무소 에이피엠',
        item: '건축설계, 감리',
        address: '경기도 성남시 분당구 양현로 166번길 15. 308호',
        phone: '031-724-4854'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '젠동물병원',
        item: '동물병원',
        address: '경기도 성남시 분당구 양현로 479 2층 (야탑 119안전센터 옆)',
        phone: '031-752-0075'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '순영공방',
        item: '옷과 자수',
        address: '경기도 성남시 분당구 양현로 94번길 28 동신상가 201호 ',
        phone: '010-7111-3456'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '비유아트취미미술 ',
        item: '',
        address: '경기도 성남시 분당구 양현로166번길 15 장수빌딩 2층 201호',
        phone: '031-752-2123'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'GGE 해법수학(이매)',
        item: '수학',
        address: '경기도 성남시 분당구 양현로94길 9 성우빌딩2층',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '백양세탁소',
        item: '',
        address: '경기도 성남시 분당구 양현로94번길 이매촌동신3단지내 상가205호',
        phone: '031-703-0134'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '문예진캘리그라피',
        item: '캘리그리피 수업, 수제도장(전각) 제작 등',
        address: '경기도 성남시 분당구 운중동 석운로 440',
        phone: '010-4552-0121'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '턴핏PT',
        item: '피트니스',
        address: '경기도 성남시 분당구 운중로 131, 8층 803, 804호(스타식스 매트로)',
        phone: '031-698-4246'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '이파리본 스파',
        item: '',
        address: '경기도 성남시 분당구 운중로 225번길 58-1',
        phone: '031-703-0456'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이투스247(이매점)',
        item: '독학 재수학원',
        address: '경기도 성남시 분당구 이매동 105-2',
        phone: '031-708-0247'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '해원국어교습소',
        item: '국어 ',
        address: '경기도 성남시 분당구 이매동 양현로 94번길 11  208호 ',
        phone: '031-781-7005'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '김가이헤어',
        item: '',
        address: '경기도 성남시 분당구 이매동86-11번지 1층 김가이헤어.',
        phone: '031 704 7096'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이기획',
        item: '편집 기획 인쇄',
        address: '경기도 성남시 분당구 이매로 124 b02호',
        phone: '010 3323 6186'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '트리니티주니어스쿨 어학원',
        item: '유치.초등 영어교육',
        address: '경기도 성남시 분당구 이매로 15',
        phone: '031 -708 -5400'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '보람디자인',
        item: '',
        address: '경기도 성남시 분당구 이매로 16',
        phone: '031-802-4424'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '분당재성학원',
        item: '',
        address: '경기도 성남시 분당구 이매로 47 3층 302호',
        phone: '031-781-4300'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '베를린실용음악학원',
        item: '음악학원',
        address: '경기도 성남시 분당구 이매로 51 한라프라자 203호 (이매역4번출구)',
        phone: '031-707-8462'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '분당카병원',
        item: '',
        address: '경기도 성남시 분당구 이매로 84 (이매동261) 1층',
        phone: '031-708-7735'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '분당CAR병원',
        item: '자동차 외장관리 및 외형복원',
        address: '경기도 성남시 분당구 이매로84 1층',
        phone: '031-708-7735'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '야탑율음악학원',
        item: '피아노전문',
        address: '경기도 성남시 분당구 장미로101, 1동3층 1302호(야탑동,장미마을근린상가)',
        phone: ' 031-707-7734'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수제이수학학원',
        item: '',
        address: '경기도 성남시 분당구 정자2동 정자로 113',
        phone: '031 719 1106'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '돼지이용원 ',
        item: '',
        address: '경기도 성남시 분당구 정자2동 정자로 143',
        phone: '031-714-7537'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아트앤아이 미술학원(유학미술)',
        item: '',
        address: '경기도 성남시 분당구 정자동 12-1 백궁지엔느 빌딩 4층',
        phone: '031-716-2722 '
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '오토챠밍',
        item: '',
        address: '경기도 성남시 분당구 정자동 내정로129번길 32',
        phone: '031-711-1327'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '뷰티피부관리샵',
        item: '',
        address: '경기도 성남시 분당구 정자동 느티 공무원 주공아파트 70번지 4단지상가내 1층 112호',
        phone: '031-713-8464'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '라인 아트',
        item: '갤러리 ',
        address: '경기도 성남시 분당구 정자동 성남대로 275',
        phone: '010 3703 4930'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '헤더스잉글리쉬',
        item: '',
        address: '경기도 성남시 분당구 정자동 성남대로385 분당클리닉 701호',
        phone: '031 -726 -6262'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '플로라',
        item: '',
        address: '경기도 성남시 분당구 정자로 112',
        phone: '010-3020-8474'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '골프연습장',
        name: 'LG골프연습장',
        item: '',
        address: '경기도 성남시 분당구 정자로 143 한솔마을근린상가 (우)13608
정자동 111번지 b01호 LG골프연습장',
phone: '031-711-1855'},
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '개인과외',
        item: '개인과외(영어)',
        address: '경기도 성남시 분당구 정자로 56 라이프2단지 201-509',
        phone: '010-5291-9133'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아
            (스타파크점)',
item: '',
        address: '경기도 성남시 분당구 정자일로 121 상가동 1층 비-31호',
        phone: '031- 717- 5503'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '티엘씨 소아과',
        item: '',
        address: '경기도 성남시 분당구 정자일로 197 푸르지오시티 2차 203호',
        phone: '031-607-1001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '베일리뷰티',
        item: '미용실',
        address: '경기도 성남시 분당구 정자일로 213번길 19 아이파크2 201동 상가 2층 베일리뷰티',
        phone: '031-717-1010'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '바인 에듀케이션',
        item: '학원/유학원',
        address: '경기도 성남시 분당구 정자일로 227',
        phone: '031-8023-5565'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '온스콜라 ',
        item: '',
        address: '경기도 성남시 분당구 정자일로 234 태남프라자 502호 온스콜라 ',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: ' K.라벨르 뷰티아카데미',
        item: '미용학원',
        address: '경기도 성남시 분당구 정자일로 240 206호',
        phone: '031-714-4523 '
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '유앤아이카',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 20 시범단지 현대아파트 분산상가 1동',
        phone: '031-702-0348'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '바른수학',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 31번길 42',
        phone: '031-708- 3014'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '샘물피아노',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 31번길42.서현파크프라자2층',
        phone: '050- 71347-0055'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '지음(디자인)',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로 39번길 7 삼성한신근린상가 131호',
        phone: '010-3519-4844'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤엠영어 서현초점',
        item: '영어',
        address: '경기도 성남시 분당구 중앙공원로39번길 7',
        phone: '031-708-0579'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '브랑시기',
        item: ' 오일샵(도테라), 피부오일',
        address: '경기도 성남시 분당구 중앙공원로40번길4  현대카스빌딩 136호',
        phone: '010-2762-7597'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '골드부동산',
        item: '',
        address: '경기도 성남시 분당구 중앙공원로40번길8,156호(서현동,현대아케이드)',
        phone: '031-701-6600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '비앤씨글로벌(주)',
        item: '건설,제조,철골공사',
        address: '경기도 성남시 분당구 탄천상로 164 C동 427호 (구미동,시그마2오피스텔)',
        phone: '070-4335-7004'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '한국가이던스(주) ',
        item: '교육서비스',
        address: '경기도 성남시 분당구 판교로 255번길 9-22 우림wcity A동 801호',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '모범공인중개사',
        item: '',
        address: '경기도 성남시 분당구 판교로 436,104호(이매동,아름마을)',
        phone: '031-704-5000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '황금부동산',
        item: '',
        address: '경기도 성남시 분당구 판교로 478, 105호',
        phone: '010-3749-7307'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '블루핸즈 현대 야탑써비스',
        item: '',
        address: '경기도 성남시 분당구 판교로 582',
        phone: '031-701-5566'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아백현마을점',
        item: '',
        address: '경기도 성남시 분당구 판교역로 102백현마을5단지 가상가 102호',
        phone: '031-703-8271'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: 'WHDM',
        item: '디자인(제품/인테리어)',
        address: '경기도 성남시 분당구 판교역로 50번길 34',
        phone: '010-8847-0909'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '8단지부동산',
        item: '',
        address: '경기도 성남시 분당구 판교역로 72 상가동 102호',
        phone: '031-8017-8017'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '베데스다',
        item: '마사지샵',
        address: '경기도 성남시 분당구 황새울로 200번길 22 (수내동,한솔인피니티)311호',
        phone: '031-606-0304'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인 하임 한샘대리점',
        item: '',
        address: '경기도 성남시 분당구 황새울로 200번길 22,910호(한솔인피니티)',
        phone: '010-5423-7314'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '분당예치과',
        item: '',
        address: '경기도 성남시 분당구 황새울로 258번길 37(수내동, 흥국생명빌딩 2층)',
        phone: '031-708-2828'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '초림부동산',
        item: '',
        address: '경기도 성남시 분당구 황새울로 258번길 43, 수내프라자 318호',
        phone: '031-718-1700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '천지부동산',
        item: '',
        address: '경기도 성남시 분당구 황새울로 330번길 16 101호',
        phone: '031-706-5205'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '발라드네일',
        item: '',
        address: '경기도 성남시 분당구 황새울로 335번길 5 N타운빌딩 1층',
        phone: '031-696-1313'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '예 수선실',
        item: '각종 의류수선&리폼',
        address: '경기도 성남시 분당구 황새울로258번길43 현대수내프라자3층 324호 ',
        phone: '031-8016-0990'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '토킹클럽서현어학원',
        item: '',
        address: '경기도 성남시 분당로 263번길 39 레이디파크빌딩 302-303호',
        phone: '031-707-7905'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '분당부동산 ',
        item: '',
        address: '경기도 성남시 분댱구 느티로27',
        phone: '031-735-2000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '모모',
        item: '두피관리샵',
        address: '경기도 성남시 서현동 서현에클라트1차 537호',
        phone: '010-3222-9653'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '이디엘헤어',
        item: '',
        address: '경기도 성남시 서현로 210번길 20, 2층 10호',
        phone: '031-707-7771'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '자이풍경채 공인중개사',
        item: '',
        address: '경기도 성남시 수정구 고등공원로 19,제일풍경채상가2동 120호',
        phone: '031-715-7900'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)무림하우징',
        item: '건물 및 아파트관리',
        address: '경기도 성남시 수정구 산성대로 223 9층',
        phone: '010-3778-5437'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '성남우체국보험팀',
        item: '우체국보험',
        address: '경기도 성남시 수정구 산성대로301',
        phone: '010-2797-8997'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '태후사랑',
        item: '',
        address: '경기도 성남시 수정구 성남대로 1210번길13-12',
        phone: '010-3097-7457'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '우리공인
중개사 사무소',
item: '',
        address: '경기도 성남시 수정구 수정남로 18번길 1',
        phone: '031-757-6469'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '양지공인중개사',
        item: '',
        address: '경기도 성남시 수정구 수정남로46번길1, 1층',
        phone: '031-753-3137'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '동성당',
        item: '시계',
        address: '경기도 성남시 수정구 수정로 109',
        phone: '031-753-3927'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '금광태권도장 ',
        item: '',
        address: '경기도 성남시 수정구 시민로 234   4층 ',
        phone: '031.755.3396'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '삼성통증의학과',
        item: '',
        address: '경기도 성남시 수정구 신흥동 수정로 208 메드위즈빌딩 3층',
        phone: '031-749-6599'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울하나치과',
        item: '',
        address: '경기도 성남시 수정구 양지동 229  3층',
        phone: '031-734-9200'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '위례 YBM잉글루 트램영어 제1캠퍼스',
        item: '',
        address: '경기도 성남시 수정구 위례광장로 310 우성트램타워 9층 YBM잉글루',
        phone: '031-757-0901/ 010-6272-0221'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이화루체음악학원 ',
        item: '',
        address: '경기도 성남시 수정구 위례동로61 자연앤래미안이편한세상 상가동201호',
        phone: '031-755.9333'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '카야인터내셔널',
        item: 'NGO',
        address: '경기도 성남시 수정구 탄천로307번길 14, 3층',
        phone: '070-5121-2198'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '김은희 헤어겔러리',
        item: '',
        address: '경기도 성남시 수정구 태평4동 남문로 129번길 16-1 1층',
        phone: '010-5325-2393'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '미시간학원',
        item: '영어,수학 교습',
        address: '경기도 성남시 수정구 태평로 48번길 10',
        phone: '031-721-2468'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: 'PJ렌트카 성남영업소',
        item: '',
        address: '경기도 성남시 위례서일로1길 3-6 위례헤리움 401호',
        phone: '010-8512-5026'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '네일숍',
        name: '로즌(Rosen)',
        item: '네일, (파티) 대여룸',
        address: '경기도 성남시 정자동 67-5(느티로 69번길 12)',
        phone: '010-5623-5287'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '김영헤어',
        item: '',
        address: '경기도 성남시 정자동 정자로 113 한솔주공5단지 상가',
        phone: '010-6348-0415'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '셀리맘아트 미술학원',
        item: '미술학원',
        address: '경기도 성남시 정자일로 55 두산위브 109동 303호',
        phone: '070-4143-0722'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '하림수학교습소',
        item: '수학',
        address: '경기도 성남시 중원구 금빛로 49(금광동) 대진빌딩 6층',
        phone: '010-4860-6913'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '거성공인중개사',
        item: '',
        address: '경기도 성남시 중원구 금빛로 77번길 14, 1층 (금광2동)',
        phone: '031-743-0033'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '하나로퀵서비스',
        item: '퀵서비스',
        address: '경기도 성남시 중원구 도촌남로 27,동강프라자 406호',
        phone: '1899-6433'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '하나치과의원',
        item: '',
        address: '경기도 성남시 중원구 둔촌대로 163',
        phone: '031-752-2874'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '우리희망내과',
        item: '내과',
        address: '경기도 성남시 중원구 산성대로 366, 5층(중앙동, 벽산프라자)',
        phone: '031-757-1717'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '비비미인 비만클리닉',
        item: '가정의학과',
        address: '경기도 성남시 중원구 산성대로 366, 5층(중앙동, 벽산프라자)',
        phone: '031-747-1717'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '김평호변호사사무실',
        item: '',
        address: '경기도 성남시 중원구 산성대로 454번길 2 신우빌딩',
        phone: '031-744-6655'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '허니컴',
        item: '인테리어 수도설비',
        address: '경기도 성남시 중원구 산성대로320-4, 1층',
        phone: '010-3745-9947'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '경희우리한의원',
        item: '',
        address: '경기도 성남시 중원구 산성대로526 은행시장 2층',
        phone: '031-746-7500'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '페스티노 수학학원',
        item: '',
        address: '경기도 성남시 중원구 성남동 2551번자 1층 105호',
        phone: '010-2796-9149'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '현대파출부',
        item: '가사도우미,식당도우미',
        address: '경기도 성남시 중원구 성남동 4136번지 메트로칸430호',
        phone: '010-5093-5123'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 코인워시 여수동점',
        item: '',
        address: '경기도 성남시 중원구 여수울로15번길 4-16 1층',
        phone: '031-756-2938'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '우리 한부모가족지원센터',
        item: '무직 봉사활동',
        address: '경기도 성남시 중원구 은행동 제10공영주차장',
        phone: '031-732-5777'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대 학생태권도 체육관',
        item: '체육관(태권도)',
        address: '경기도 성남시 중원구 제일로 77, 3층',
        phone: '031-751-5812'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아,모란',
        item: '',
        address: '경기도 성남시 중원구 제일로63번길6-1',
        phone: '070,4113-6600'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '보라음악보습 학원 ',
        item: '',
        address: '경기도 성남시 중원구 제일로77',
        phone: '031-751-5812'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '팀히어로GYM',
        item: '필라테스/ PT',
        address: '경기도 성남시 중원구 하대원동 132-9 B02호 지하1층',
        phone: '031-754-9311'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '인형극단 우끼',
        item: '극단',
        address: '경기도 성남시 중원구 희망로 314/ 5층',
        phone: '010-9787-5386'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '굿모닝치과',
        item: '',
        address: '경기도 성남시 중원구 희망로 341  2층',
        phone: '031-734-2225'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이레음악학원',
        item: '',
        address: '경기도 성남시 중원구 희망로 344번길11',
        phone: '031-747-2644'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '더블유에이치디엠(WHDM)',
        item: '디자인회사',
        address: '경기도 성남시 판교역로 50번길 34',
        phone: '031-701-3141'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '어바웃뷰티',
        item: '메이크업,업스타일살롱',
        address: '경기도 성남시 판교역로192번길 22  ',
        phone: '010-2810-2938'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '호텔가덴',
        item: '호텔관광업',
        address: '경기도 수원시 권선구 경수대로 335번길 12',
        phone: '031-239-5572'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '웰치과',
        item: '',
        address: '경기도 수원시 권선구 금곡로 102번길 20
센터프라자 3층',
phone: '031-293-0275'},
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '생각꿈틀미술학원',
        item: '',
        address: '경기도 수원시 권선구 호매실동 1020-20',
        phone: '031-294-3022'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '힘(HIM)컴퍼니',
        item: '타일시공',
        address: '경기도 수원시 권선구 효탑로 50',
        phone: '010-5382-3080'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '골프153피팅스튜디오',
        item: '골프피팅',
        address: '경기도 수원시 금곡로205 해피리움빌딩511호 ',
        phone: '010-4284-1153'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '루아이디',
        item: '',
        address: '경기도 수원시 영통구 광교중앙로 170 A동 903호(광교효성해링턴타워)',
        phone: '031-272-0336'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '영선갤러리',
        item: '미술품',
        address: '경기도 수원시 영통구 덕영대로 1471번길 59(망포동) ',
        phone: '031-203-1089'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '영선부동산',
        item: '',
        address: '경기도 수원시 영통구 덕영대로 1471번길 59(망포동) ',
        phone: '031-203-5558'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '김용일 변호사사무실',
        item: '변호사사무소',
        address: '경기도 수원시 영통구 동수원로 537번길 16-1 2층 (나누리병원옆)',
        phone: '031-212-8448'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '서울아이정신과의원',
        item: '',
        address: '경기도 수원시 영통구 봉영로 1605 모던타운',
        phone: '031-203-4275'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '월드마크빅스맘
어린이집',
item: '',
        address: '경기도 수원시 영통구 센트럴타운로 107',
        phone: '070-7514-1248'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '레푸스 광교점',
        item: '발 치료',
        address: '경기도 수원시 영통구 센트럴타운로 85 광교아브뉴프랑 라온존 206',
        phone: '031-215-8870'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '마마몽떼몬테소리',
        item: '몬테소리',
        address: '경기도 수원시 영통구 센트럴파크로128번지 78 1층',
        phone: '010-8362-7907'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '용인대선호태권도',
        item: '',
        address: '경기도 수원시 영통구 영통로505 정원빌딩 5층',
        phone: '010-5578-7104'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '연세마시멜로아동청소년상담센터',
        item: '상담 치료',
        address: '경기도 수원시 영통구 청명북로81 청명마을 주공아파트 407동 103호',
        phone: '010-8606-2031'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤엠영어화서
 어학원',
item: '',
        address: '경기도 수원시 일월로 22번길 22-5 서수원프라자 503호',
        phone: '031-298-0055'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)이지일렉트릭',
        item: '응용 소프트웨어 개발 및 공급업',
        address: '경기도 수원시 장안구 만석로 207, 302호',
        phone: '070-8777-1253'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '우현(wh)헤어살롱',
        item: '',
        address: '경기도 수원시 팔달구 권선로 741-21인계지움 205호',
        phone: '031-221-4976'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '즐거운피아노음악학원',
        item: '',
        address: '경기도 수원시 팔달구 덕영대로803번길 43 402호,403호',
        phone: '031-256-5156'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '생각꿈틀미술학원',
        item: '',
        address: '경기도 수원시 팔달구 덕영대로803번길 43 404호',
        phone: '031-257-3022'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'IBR 뷰티아카데미',
        item: '',
        address: '경기도 수원시 팔달구 매산로11 MG빌딩 5층',
        phone: '031-306-3214'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이지어학원',
        item: '',
        address: '경기도 수원시 팔달구 중부대로 245, 우만동 용신빌딩 6층',
        phone: '010-9413-4210'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '배곧아동발달센터',
        item: '아동치료/성인상담',
        address: '경기도 시흥시 배곧4로 99 로얄페스타 301호',
        phone: '031-431-1714'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '하늘체한의원',
        item: '',
        address: '경기도 안산시 단원구 고잔1길 17 6층',
        phone: '031-365-3675'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '대우통운',
        item: '운송주선,다육식물판매',
        address: '경기도 안산시 단원구 산단로 345, B동 320호 (원곡동 유통상가)',
        phone: '031-499-8888'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '(주)한일환경기계',
        item: '환경인허가',
        address: '경기도 안산시 단원구 석수로 138',
        phone: '010-8823-8919'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '희망의원',
        item: '',
        address: '경기도 안산시 본오동 805-15',
        phone: '031-406-5556'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '스토리플랜트',
        item: '조경시공.관리.수직정원',
        address: '경기도 안산시 상록구 건건동 178-5',
        phone: '01039409067'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '우성건축',
        item: '건물 및 가정집 수리',
        address: '경기도 안산시 상록구 본오로 133 우성상가동128호',
        phone: '031-409-8251'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '케이디건축',
        item: '인테리어업',
        address: '경기도 안산시 상록구 충장로3안길 34',
        phone: '031-713-3480'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '안성웰의원',
        item: '병원',
        address: '경기도 안성시 중앙로 368(석정동) 모아빌딩 3층',
        phone: '031-671-6400'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '원성희세무회계사무소',
        item: '세무사',
        address: '경기도 안양시 동안구 관양동 1506-27 인덕원프라자 701호',
        phone: '010-9436-4325'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '우리들 치과',
        item: '',
        address: '경기도 안양시 동안구 관양동 타워빌딩 4층',
        phone: '031-421-4567'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '어니더레블',
        item: '',
        address: '경기도 안양시 동안구 동안로 283, 13동206호',
        phone: ''
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '믿음치과의원',
        item: '',
        address: '경기도 안양시 동안구 흥안대로 511 3층',
        phone: '031-342-7575'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아
            (뜨란채점)',
item: '세탁',
        address: '경기도 안양시 천서로289 주공상가204호',
        phone: '031-445-0066'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '로뎀성모안과',
        item: '안과 진료',
        address: '경기도 양주시 회천남로 76 한덕타워 4층 402호',
        phone: '031-858-8000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '김한의원',
        item: '한방 진료',
        address: '경기도 여주시 세종로 76-1',
        phone: '031-881-3399'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '맑은숲한의원',
        item: '',
        address: '경기도 여주시 여흥로109번길 15 (창동)?동방빌딩3층 ',
        phone: '031-883-3775'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '헬스매니아',
        item: '',
        address: '경기도 오산시 청학로 173 농협건물 2층',
        phone: '031-378-9129'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '슈퍼맘',
        item: '산후관리서비스',
        address: '경기도 용인시 광교 중앙로301 드림타워 705-3호',
        phone: '031-216-2253'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: 'OK 부동산 ',
        item: '',
        address: '경기도 용인시 기흥구  용구대로 2398 벽산 주상가 110호',
        phone: '031-274-5454'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대명성태권도',
        item: '태권도',
        address: '경기도 용인시 기흥구 구갈로 115-18 도현마을현대아이파크아파트 내 상가2층',
        phone: '031-287-6288'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '필립디자인 ',
        item: '',
        address: '경기도 용인시 기흥구 구성로 65 ',
        phone: '031-284-4804'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '리안헤어',
        item: '',
        address: '경기도 용인시 기흥구 동백로 5로 23 ',
        phone: '031-284-4056'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '카야뷰티',
        item: '뷰티(속눈섭파마.속눈썹연장)',
        address: '경기도 용인시 기흥구 동백중앙로 177, 1210호',
        phone: '010-7551-0523'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '성모프라임 내과',
        item: '',
        address: '경기도 용인시 기흥구 동백중앙로 283번지  골드프라자 C동 5층 성모프라임 내과 ',
        phone: '031-8005-7582'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '오케이치과의원',
        item: '',
        address: '경기도 용인시 기흥구 동백중앙로 358-12',
        phone: '031-287-5365'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '미앤지의원',
        item: '',
        address: '경기도 용인시 기흥구 마북동 524-1',
        phone: '031-284-7744'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: 'e편한부동산중개사무소',
        item: '',
        address: '경기도 용인시 기흥구 마북로 208 e편한세상아파트 상가동102호',
        phone: '031-275-2855'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '죽전자이공인중개사',
        item: '',
        address: '경기도 용인시 기흥구 보정로94 상가동101호',
        phone: '031-897-7000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '1인 운수 사업자(한승완)',
        item: '운수업',
        address: '경기도 용인시 기흥구 언남동 구성로 99',
        phone: '010-2113-3416'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '쿨컨디션',
        item: '에어컨 설치 및 이전설치(이사철 시즌)',
        address: '경기도 용인시 기흥구 언동로 231',
        phone: '010-3494-8844'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인 3.3',
        item: '',
        address: '경기도 용인시 기흥구 용구대로 2311(경기도 일자리재단) 비즈 14호',
        phone: '0507- 1340- 3513'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '더풋샵죽전점',
        item: '',
        address: '경기도 용인시 기흥구 죽전로 23 호암프라자 2층',
        phone: '031-266-8824'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: 'U필라테스',
        item: '필라테스센타',
        address: '경기도 용인시 기흥구 탑실로 36 공세프라자 3층',
        phone: '031-285-1561'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '뉴밸런스재활의학과',
        item: '',
        address: '경기도 용인시 기흥구 한보라1로 5 보라메가타운 4층 뉴밸런스재활의학과',
        phone: '031-8005-9000'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '쇼팽음악학원',
        item: '음악학원',
        address: '경기도 용인시 기흥구 한보라1로56 메디프라자401',
        phone: '031-274-5072'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'SM 수학학원',
        item: '초 중 고  수학학원',
        address: '경기도 용인시 기흥구 흥덕2로 115 미래도프라자 7층',
        phone: '031- 215- 2536'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '테르엔창업센터',
        item: '창업보육센터',
        address: '경기도 용인시 기흥구 흥덕2로87번길 18. 이시티 A-407호',
        phone: '031-215-6001'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '이새로수학학원',
        item: '수학학원',
        address: '경기도 용인시 기흥구 흥덕중앙로 41 흥덕웰스프라자 805호',
        phone: '010-9874-8863'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '우행공스터디카페',
        item: '스터디 카페',
        address: '경기도 용인시 기흥수 마북동 181-2 한성프라자 401호',
        phone: '031-281-0731'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '광교새벽정신어학원',
        item: '영어',
        address: '경기도 용인시 수지구 광교마을로 54 SB타운 201호',
        phone: '031-211-0500'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '하람어린이집',
        item: '가정어린이집',
        address: '경기도 용인시 수지구 대지로49 퍼스트하임 204동 101호',
        phone: '031-283-6867'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '노인요양시설',
        name: '굿데이케어센터',
        item: '노인요양시설',
        address: '경기도 용인시 수지구 동천동 동천로99번길3 상록제일프라자7층',
        phone: '031-276-1932'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '한우리 홈독서클럽',
        item: '홈독서클럽',
        address: '경기도 용인시 수지구 만현로67번길 20 상현더샵파크사이드 102동',
        phone: '010.8773.2217'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '88공인중개사 사무소',
        item: '',
        address: '경기도 용인시 수지구 만현로67번길 9 아이파크2단지 상가101호',
        phone: '031-272-0088'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '뮤지끄실용음악학원',
        item: '실용음악학원',
        address: '경기도 용인시 수지구 만현로82-4 헤르메스빌딩 603호',
        phone: '031-264-8641'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '피부관리',
        name: '올가드림뷰티',
        item: '',
        address: '경기도 용인시 수지구 문인로 57 삼성,풍림,동아APT 상가 108호',
        phone: '010-3186-8648'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '자동차수리',
        name: '수리수리 모터스',
        item: '',
        address: '경기도 용인시 수지구 문인로 70번길 10',
        phone: '031-266-6848'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '닛시필라테스 ',
        item: '필라테스 ',
        address: '경기도 용인시 수지구 성복2로 108-2 웰스톤갤러리',
        phone: '0312632211'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '준오헤어 롯데몰수지점',
        item: '',
        address: '경기도 용인시 수지구 성복2로 38 롯데몰3층 준오헤어',
        phone: '031 5174 4305'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '프리덤아트스페이스 미술학원',
        item: '미술',
        address: '경기도 용인시 수지구 손곡로 103번지 5층',
        phone: '010-2915-0398'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '손곡플레이팩토',
        item: '창의수학',
        address: '경기도 용인시 수지구 손곡로 53',
        phone: '010-7187-0700'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이샵공방',
        item: '비누공방',
        address: '경기도 용인시 수지구 수지로 78번길 8 벽산블루밍상가 108호',
        phone: '010-4254-8538'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '수지현대플레이팩토',
        item: '공부방',
        address: '경기도 용인시 수지구 수지로342번길 18',
        phone: '010-9240-8246'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'YBM브레이니영어/ 브레이니 리더스',
        item: '',
        address: '경기도 용인시 수지구 수풍로 38 삼성래미안 2차 아파트 상가 202호 & 205호',
        phone: '010-2204-3181'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '헬스/필라테스',
        name: '닛시필라테스 ',
        item: '필라테스 ',
        address: '경기도 용인시 수지구 신봉1로 175번길 진성프라자 7층',
        phone: '0312612234'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '해법수학',
        item: '',
        address: '경기도 용인시 수지구 신봉2로 60',
        phone: '031-263-3799'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '분양사무실',
        item: '주거용 오피스텔 분양',
        address: '경기도 용인시 수지구 신수로783번길 4, 웰리스101  아파텔',
        phone: '010 6215 9556'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '경희대석사천무태권도 ',
        item: '',
        address: '경기도 용인시 수지구 정평로63 성지아파트상가 3층 ',
        phone: '010-8581-4709'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '원시큐어(OoneSECURE)',
        item: 'ICT 및 정보보안 컨설팅, 4차산업 강의, 자문, 강사, 작가',
        address: '경기도 용인시 수지구 죽전1동 대지로 49, 203-1906(죽전퍼스트하임)',
        phone: '010-2932-1882'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '수지우리어린이집',
        item: '',
        address: '경기도 용인시 수지구 포은대로 313번길7-10 이편한 세상 수지 @ 101동 103호',
        phone: '031-893-3345'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '하우스터디독서실 용인수지센터(풍덕천동)',
        item: '',
        address: '경기도 용인시 수지구 풍덕천로 116 영일빌딩 6층',
        phone: '010-5655-8052'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '드림영어',
        item: '개인과외',
        address: '경기도 용인시 죽전2동 용구대로2771번길 66',
        phone: '01043470531'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '대륭이엔씨',
        item: '스치로폴 재활용',
        address: '경기도 용인시 처인구 남사면 통삼리 522-1',
        phone: '010-5352-1540'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: 'J위드학원',
        item: '',
        address: '경기도 용인시 처인구 남사면 한숲로45 옐로우상가B동 4층 419호',
        phone: '031-332-6696'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '프랑스올리브',
        item: '펜션',
        address: '경기도 용인시 처인구 남사읍 전궁로 93번길 18-2',
        phone: '01054196085'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '이룸디자인건설',
        item: '건설, 리모델링 토탈 인테리어',
        address: '경기도 용인시 처인구 모현읍 포인대로 1069번길 13-4',
        phone: '031-8009-0416'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '여관업',
        name: '호텔 더숨 포레스트 내 바베큐',
        item: '연회장 및 세미나실',
        address: '경기도 용인시 처인구 포곡읍 전대리 473-13',
        phone: '010-6415-9060'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '문소아청소년과의원',
        item: '',
        address: '경기도 용인시 처인구 포곡읍 포곡로 78-8 대두 3차타운',
        phone: '031-334-7188'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '사명통증의학과',
        item: '통증의학과',
        address: '경기도 의왕시 내손로 11 가동상가 208호',
        phone: '031-426-7582'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '조이플키즈',
        item: '',
        address: '경기도 이천시 신아로 128번길 74-51',
        phone: '031-637-2972'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '이천 플랜트치과의원',
        item: '',
        address: '경기도 이천시 창전동 149-9',
        phone: '031-639-0028'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '현인연구소',
        item: '3D입체영상, 특수광학 연구개발',
        address: '경기도 파주시 회동길480 아트팩토리 A219호',
        phone: '010-3375-8154'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '평택본플란트치과의원',
        item: '치과',
        address: '경기도 평택시 동삭로 384 동화메디컬빌딩 3.4층',
        phone: '031-653-0880'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '한의원',
        name: '경희미르애한의원',
        item: '',
        address: '경기도 하남시 미사강변남로 103 랑데르3 2층',
        phone: '031-8027-8275'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '세탁소',
        name: '크린토피아 하남미사18단지점',
        item: '',
        address: '경기도 하남시 미사강변서로127-1 정문상가 2층 202호',
        phone: '010-7434-4421'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: 'HONOR CONSTRUCTION',
        item: '건설 인테리어',
        address: '경기도 하남시 미사강변중앙로 111번안길 32. 401호',
        phone: '010-2331-1465'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '예음원피아노',
        item: '',
        address: '경기도 하남시 미사강변중앙로90-1,101호',
        phone: '031-793-5947'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '미래이비인후과의원',
        item: '',
        address: '경기도 하남시 신장동 523-1 현대베스코아빌딩 7층 704호',
        phone: '0507-1412-8324'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '파워정형외과 의원',
        item: '정형외과',
        address: '경기도 하남시 신평로 49 4충',
        phone: '031-795-5250'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '동탄파크해법영어',
        item: '',
        address: '경기도 화성시 동탄대로24가길 30 134-104',
        phone: '010-8798-8515'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '토마틀 성악 동요 ',
        item: '',
        address: '경기도 화성시 동탄반석로 208 아인슈타인 프라자 4층 토마틀성악',
        phone: '010-3533-3981'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '셀파 우등생교실 ',
        item: '',
        address: '경기도 화성시 동탄순환대로20길 115, 2235동 1804호  (목동, 르파비스)',
        phone: '010-3494-8308'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '법률/상담',
        name: '동탄그리심아동가족상담센터',
        item: '상담센터',
        address: '경기도 화성시 동탄순환대로708 서건에듀프라자1동 601호 ',
        phone: '031-375-7544'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '스튜디오 러브썸',
        item: '렌탈스튜디오/파티룸',
        address: '경기도 화성시 동탄첨단산업1로58, 501호',
        phone: '031-8055-8086'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '신강수학',
        item: '',
        address: '경기도 화성시 반송동 동탄반석로 208 아인슈타인프라자 6층',
        phone: '01049663981'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '병원',
        name: '삼성드림내과의원',
        item: '',
        address: '경기도 화성시 봉담읍 와우로20 미래프라자 3층',
        phone: '031-238-8708'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '독서실/고시원',
        name: '일취월장 스터디카페경기지사',
        item: '',
        address: '경기지역- 생활관리,학습관리,컨설팅및 가맹',
        phone: '010-3706-7004'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '인천 개인 택시',
        item: '',
        address: '인천광역시 부평구',
        phone: '01053284884'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '보육시설',
        name: '애플어린이집',
        item: '',
        address: '인천광역시 부평구 청천2동 178-15',
        phone: '032 526 4045'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '청라 시그니쳐',
        item: '',
        address: '인천광역시 서구 청라동 95-1',
        phone: '01046154869'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '아이보람 송도글로벌센터',
        item: '원어 비디오와 원서를 활용하는 엄마표 영어 모임',
        address: '인천광역시 연수구 신송로 161 더하이츠빌딩 8층 805호',
        phone: ' 032-833-8919'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '하늘정원장례식장',
        item: '장례식장',
        address: '강원도 삼척시 강원남부로 4539',
        phone: '033-575-4441'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '대구어린이천문대 ',
        item: '어린이천문대',
        address: '대구 수성구 알파시티1로31길 27, 2층 (대흥동)',
        phone: '053-243-3245'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '미용실',
        name: '삐삐쌀롱',
        item: '',
        address: '부산광역시 북구 시랑로132번길 75 1층',
        phone: '0507-1473-9782'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '국어하다/화상영어',
        item: '온라인학원',
        address: '성남/용인 전역및 전국',
        phone: '010-3706-7004'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '엔에스엠피',
        item: '해외구매대행',
        address: '온라인 - 쿠팡: https://store.coupang.com/link/nsmp',
        phone: '070-8098-4704'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '디자인엘',
        item: '편집디자인',
        address: '온라인 - http://designel.co.kr',
        phone: '070-4241-2565'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '참미',
        item: '방충망&외풍차단',
        address: '온라인 - www.charmmi.co.kr',
        phone: '010-9696-4749'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '하민파파',
        item: '돌사진촬영',
        address: '온라인 - www.haminpapa.com',
        phone: '010-3348-6669'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '기타',
        name: '제이에스에프',
        item: '전자상거래/식품인터넷판매',
        address: '온라인 - www.happyhanggi.com (네이버 스마트스토어 해피한끼)',
        phone: '010-3060-3656'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '건축/인테리어/디자인',
        name: '(주)케이라클',
        item: '',
        address: '전라남도 광양시 중동 광장로70 성호2차 213동 1704호 ',
        phone: '010-4713-1961'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '부동산중개업',
        name: '신화공인중개소사무소',
        item: '',
        address: '충청남도 당진시 석문면 산단9로 24 102호',
        phone: '041-356-9927'
    },
    {
        id: , position: new naver.maps.LatLng(0, 0), industry: '학원',
        name: '홀리드림태권도',
        item: '',
        address: '충청남도 천안시 동남구 청룡동 풍세로 798',
        phone: '041 584 7880'
    }
];
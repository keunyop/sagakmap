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
    }
];
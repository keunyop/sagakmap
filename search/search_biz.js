BIZS.forEach(biz => {
    // 상호명
    var bizName = document.createElement("h5");
    bizName.setAttribute("class", "mb-1");
    bizName.appendChild(document.createTextNode(biz.name));

    // 업종
    var industry = document.createElement("small");
    industry.appendChild(document.createTextNode(biz.industry));

    // 주소
    var address = document.createElement("p");
    address.setAttribute("class", "mb-1");
    address.appendChild(document.createTextNode(biz.address));

    // 전화번호
    var phoneNumber = document.createElement("small");
    phoneNumber.setAttribute("class", "text-muted");
    phoneNumber.appendChild(document.createTextNode(biz.phone));


    var div = document.createElement("div");
    div.setAttribute("class", "d-flex w-100 justify-content-between");
    div.appendChild(bizName);
    div.appendChild(industry);

    var a = document.createElement("a");
    a.setAttribute("class", "list-group-item list-group-item-action flex-column align-items-start");
    if (biz.id == 1) a.classList.add('active');
    a.setAttribute("id", "churchlist-church" + biz.id);
    a.setAttribute("onclick", "onClick_churchList(" + biz.id + ");");
    a.setAttribute("href", "#");
    a.appendChild(div);
    a.appendChild(address);
    a.appendChild(phoneNumber);

    document.getElementById("biz-list").appendChild(a);
});

function onClick_churchList(churchId) {
    deactivateAll();
    activate(churchId);
    closeAllChurchInfo();
    openChurchInfo(churchId);
}

function deactivateAll() {
    BIZS.forEach(church => {
        var unclickedChurch = document.getElementById("churchlist-church" + church.id);
        unclickedChurch.classList.remove('active');
    });
}

function activate(churchId) {
    if (churchId == 0) {
        return;
    }

    var clickedChurch = document.getElementById("churchlist-church" + churchId);
    clickedChurch.classList.add('active');
}

/**
 * 검색 기능
 */
const ibx_searchchurch = document.getElementById("ibx_searchChurch");
ibx_searchchurch.onkeyup = function () {
    var churchList = document.getElementById("biz-list").childNodes;

    churchList.forEach(church => {
        church.style.display = 'none';  // 전체 숨김

        var text = church.innerText;
        if (text.includes(ibx_searchchurch.value)) {
            church.style.display = '';  // 검색 결과만 보이기
        }
    });
};
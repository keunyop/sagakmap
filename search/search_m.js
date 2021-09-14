CHURCHS.forEach(church => {
    // 교회 이름
    var churchName = document.createElement("h5");
    churchName.setAttribute("class", "mb-1");
    churchName.appendChild(document.createTextNode(church.name));

    // 교구(담임목사)
    var division = document.createElement("small");
    division.appendChild(document.createTextNode(church.division + "(" + church.pastor + ")"));

    // 주소
    var address = document.createElement("small");
    address.setAttribute("class", "mb-1");
    address.appendChild(document.createTextNode(church.address));


    var div = document.createElement("div");
    div.setAttribute("class", "d-flex w-100 justify-content-between");
    div.appendChild(churchName);
    div.appendChild(division);

    var a = document.createElement("a");
    a.setAttribute("class", "list-group-item list-group-item-action flex-column align-items-start");
    a.setAttribute("id", "churchlist-church" + church.id);
    a.setAttribute("onclick", "onClick_churchList(" + church.id + ");");
    a.setAttribute("href", "#");
    a.appendChild(div);
    a.appendChild(address);

    document.getElementById("church-list").appendChild(a);
});

function onClick_churchList(churchId) {
    closeAllChurchInfo();
    openChurchInfo(churchId);
}

/**
 * 검색 기능
 */
const ibx_searchchurch = document.getElementById("ibx_searchChurch");
ibx_searchchurch.onkeyup = function () {
    var churchList = document.getElementById("church-list").childNodes;

    churchList.forEach(church => {
        church.style.display = 'none';  // 전체 숨김

        var text = church.innerText;
        if (text.includes(ibx_searchchurch.value)) {
            church.style.display = '';  // 검색 결과만 보이기
        }
    });
};
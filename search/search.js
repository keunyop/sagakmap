CHURCHS.forEach(church => {
    // 교회 이름
    var churchName = document.createElement("h5");
    churchName.setAttribute("class", "mb-1");
    churchName.appendChild(document.createTextNode(church.name));

    // 교구
    var division = document.createElement("small");
    division.appendChild(document.createTextNode(church.division));

    // 주소
    var address = document.createElement("p");
    address.setAttribute("class", "mb-1");
    address.appendChild(document.createTextNode(church.address));

    // 담임목사
    var pastorName = document.createElement("small");
    pastorName.setAttribute("class", "text-muted");
    pastorName.appendChild(document.createTextNode("담임목사:" + church.pastor));


    var div = document.createElement("div");
    div.setAttribute("class", "d-flex w-100 justify-content-between");
    div.appendChild(churchName);
    div.appendChild(division);

    var a = document.createElement("a");
    a.setAttribute("class", "list-group-item list-group-item-action flex-column align-items-start");
    a.setAttribute("id", "churchlist-church" + church.id);
    a.setAttribute("onclick", "onClick_churchList(" + church.id + ");");
    a.appendChild(div);
    a.appendChild(address);
    a.appendChild(pastorName);

    document.getElementById("church-list").appendChild(a);
});

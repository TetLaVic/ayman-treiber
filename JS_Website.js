// References to the tags
const standardViewRef = document.getElementById('standard');

standardViewRef.addEventListener("click", standardView)


// Man wird zurück zur Startseite geleitet, wenn man auf den "Zurück-Button" klickt
function backFunction() {
    window.close();
}

// Laden der Standard-Ansicht
function standardView() {
    let table = null;
    window.localStorage.setItem("view", "standard");
    const standardViewColumns = ["treiber-name", "geraete", "akt-version", "leadDeveloper", "repositoryUrl", "labels", "compatible_hmi"];
    const columnData = table.getColumnDefinitions();
    let tick = [];
    //console.log(columnData.length);
    for (let i = 0; i < columnData.length; i++) {
        if (standardViewColumns.includes(columnData[i]["field"])) {
            table.showColumn(columnData[i]["field"]);
            tick[i] = true;
        } else {
            table.hideColumn(columnData[i]["field"]);
            tick[i] = false;
        }
    }
    correctTicks(tick);
}

// Laden der Experten-Ansicht
function seeEverything() {
    window.localStorage.setItem("view", "all");
    var columnData = table.getColumnDefinitions();
    var tick = [];
    //console.log(columnData.length);
    for (var i = 0; i < columnData.length; i++) {
        table.showColumn(columnData[i]["field"]);
        tick[i] = true;
    }
    correctTicks(tick);
}

// Laden der Funktions-Ansicht
function functionView() {
    window.localStorage.setItem("view", "function");
    var standardViewColumns = functions;
    var columnData = table.getColumnDefinitions();
    var tick = [];
    //console.log(columnData.length);
    for (var i = 0; i < columnData.length; i++) {
        if (standardViewColumns.includes(columnData[i]["field"])) {
            table.showColumn(columnData[i]["field"]);
            tick[i] = true;
        } else {
            table.hideColumn(columnData[i]["field"]);
            tick[i] = false;
        }
    }
    correctTicks(tick);
}

// Dropdown-Menü ein- und ausklappen
function dropDown() {
    var dropDown = document.getElementById("dropDown");
    dropDown.addEventListener("click", function () {
        var einausList = document.getElementById("einausList");
        if (einausList.style.display == "none") {
            einausList.style.display = "flex";
        } else {
            einausList.style.display = "none";
        }
    })
}


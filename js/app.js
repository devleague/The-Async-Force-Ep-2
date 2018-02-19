let buttonId = document.getElementById("requestResourceButton");
// let inputId = document.getElementById("resourceId");
// let resourceId = document.getElementById("resourceType");


let contentContainer = document.getElementById("contentContainer");
let makeNameElement;
let makeParagraphElement;
let makeSecondParagraphElement;
let dropDownValue;
let holder = "people/16";
let ppl;
let numberValue;

buttonId.addEventListener("click", function () {
    const oReqPerson = new XMLHttpRequest();

    dropDownValue = document.getElementById("resourceType").selectedIndex;

    personPlanetShip = document.getElementsByTagName("option")[dropDownValue].value;
    numberValue = document.getElementById("resourceId").value;

    if (personPlanetShip === "people") {
        console.log("yay people");

        function reqListenerPerson() {
            const data = JSON.parse(this.responseText);
            // console.log(data);

            makeNameElement = document.createElement("h2");
            makeNameElement.innerHTML = data.name;
            makeParagraphElement = document.createElement("p");
            makeParagraphElement.innerHTML = data.gender;
            makeSecondParagraphElement = document.createElement("p");
            contentContainer.appendChild(makeNameElement);
            contentContainer.appendChild(makeParagraphElement);
            contentContainer.appendChild(makeSecondParagraphElement);
            const oReq = new XMLHttpRequest();

            function reqListener() {
                const data = JSON.parse(this.responseText);
                // console.log(data);
                makeSecondParagraphElement.innerHTML = data.name;

            }
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", data.species);
            oReq.send();

        }
    } else if (personPlanetShip === "planets") {
        console.log("yay planets");
    } else if (personPlanetShip === "starships") {
        console.log("yay ship");
    }



    oReqPerson.addEventListener("load", reqListenerPerson);
    oReqPerson.open("GET", "https://swapi.co/api/" + personPlanetShip + "/" + numberValue);
    oReqPerson.send();

});


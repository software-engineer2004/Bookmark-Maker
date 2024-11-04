let bookmarkForm = document.getElementById("bookmarkForm");

let siteNameInput = document.getElementById("siteNameInput");

let siteNameErrMsg = document.getElementById("siteNameErrMsg");

let siteUrlInput = document.getElementById("siteUrlInput");

let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

let submitBtn = document.getElementById("submitBtn");


function createAndAppendSearchResults(name, url) {
    let bookmarksList = document.getElementById("bookmarksList");
    bookmarksList.classList.remove("d-none");

    let listContainer = document.createElement("li");
    listContainer.classList.add("ml-2")
    bookmarksList.appendChild(listContainer);

    let listName = document.createElement("p");
    listName.textContent = name;
    listContainer.appendChild(listName);

    let breakEl = document.createElement("br");
    listContainer.appendChild(breakEl);

    let listUrl = document.createElement("a");
    listUrl.href = url;
    listUrl.target = "_blank";
    listUrl.textContent = url;
    listContainer.appendChild(listUrl);

}

let formData = {
    name: "",
    url: "",
};

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameErrMsg.style.color = "red";
    } else {
        siteNameErrMsg.textContent = "";
    }

    formData.name = event.target.value;
});



siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        siteUrlErrMsg.style.color = "red";
    } else {
        siteUrlErrMsg.textContent = "";
    }

    formData.url = event.target.value;
});



bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (siteNameInput.value === "", siteUrlInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameErrMsg.style.color = "red";

        siteUrlErrMsg.textContent = "Required*";
        siteUrlErrMsg.style.color = "red";
    } else if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameErrMsg.style.color = "red";
        siteUrlErrMsg.textContent = "";
    } else {
        siteNameErrMsg.textContent = "";
        siteUrlErrMsg.textContent = "";
    }

    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        createAndAppendSearchResults(formData.name, formData.url);
    }
});

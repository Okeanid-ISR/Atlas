import Country from "./item.js";

export const declareEvents = () => {
    let change_btn = document.querySelector("#search");
    let inputVal = document.querySelector("#id_input")
    console.log(inputVal.value)
    change_btn.addEventListener("click", (e) => {
        e.preventDefault();
        doApi(inputVal.value)
    })
}

export const doApi = async (query) => {

    if (query === undefined) query = "Israel"
    const url = `https://restcountries.com/v3.1/name/${query}`;

    const resp = await axios.get(url);

    createList(resp.data)
}

export const doApi2 = async (query2) => {
    let countryCode = query2;
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    const resp = await axios.get(url);
    createList(resp.data);
};

const createList = (_ar) => {
    const mainDiv = document.querySelector("#countries-main")
    mainDiv.innerHTML = ""
    _ar.forEach(item => {
        const country = new Country("#countries-main", item)
        country.render()
        renderBorders()
    })
}

const renderBorders = () => {
    const links = document.querySelectorAll(".borderCountry")
    for (const element of links) {
        element.addEventListener('click', () => {
            doApi2(element.innerHTML)
        })
    }
}


document.getElementById("id_usa").addEventListener("click", async function () {
    const url = `https://restcountries.com/v3.1/name/usa`;
    const resp = await axios.get(url);
    createList(resp.data)
});

document.getElementById("id_israel").addEventListener("click", async function () {
    const url = `https://restcountries.com/v3.1/name/israel`;
    const resp = await axios.get(url);
    createList(resp.data)
});

document.getElementById("id_gb").addEventListener("click", async function () {
    const url = `https://restcountries.com/v3.1/name/britain`;
    const resp = await axios.get(url);
    createList(resp.data)
});

document.getElementById("id_france").addEventListener("click", async function () {
    const url = `https://restcountries.com/v3.1/name/france`;
    const resp = await axios.get(url);
    createList(resp.data)
});

document.getElementById("id_thailand").addEventListener("click", async function () {
    const url = `https://restcountries.com/v3.1/name/thailand`;
    const resp = await axios.get(url);
    createList(resp.data)
});
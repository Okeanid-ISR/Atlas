export default class Country {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name;
        this.altSpellings = _item.altSpellings;
        this.region = _item.region;
        this.capital = _item.capital;
        this.coin = Object.values(_item.currencies)[0].name;
        this.coinTAB = Object.keys(_item.currencies);
        this.population = _item.population;
        this.languages = Object.keys(_item.languages).toString().toUpperCase();
        this.borders = _item.borders || "no borders";
        this.capitalInfo1 = _item.latlng[0];
        this.capitalInfo2 = _item.latlng[1];
        this.flags = _item.flags["svg"];
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-12 p-2";
        document.querySelector(this.parent).append(div);
        div.innerHTML = `
   
            <div class="container">
                <div class="row" id="id_row">
                    <div class="col-12 col-md-6">
                        <div class="image-main">
                            <img id="image" style="display: block;-webkit-user-select: none;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;"
                                 src="${this.flags}"
                                 width="85%" height="85%">
                        </div>
                    </div>
           
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <div class="country-info" id="country-info">
                        <p id="pop">Population: ${this.population.toLocaleString()}</p>
                        <p id="region">Region: ${this.region}</p>
                        <p id="languages">Languages: ${this.languages}</p>
                        <p id="coin">Currency:${this.coinTAB}, ${this.coin}</p>
                        <p id="capital">Capital: ${this.capital[0]}</p>
                        <p id="borders">Borders: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="google-map mt-5">
            <div class="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3487012.6004784335!2d${this.capitalInfo2}!3d${this.capitalInfo1}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sil!4v1675435092790!5m2!1sru!2sil"
                        width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
    `
        let appenderBorder = document.querySelector("#borders");
        let div2 = document.createElement("div");
        div2.className = "d-flex"
        let arr = this.borders;

            arr.forEach((item, index) => {
                console.log(this.borders[index]);
                div2.innerHTML += `<a class="text-wrap p-2 borderCountry" href="#">${this.borders[index]}</a>`;
                appenderBorder.appendChild(div2);
            });

    }
}



import api from "../services/servisAPI";

class Location {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
    }

    async init(){
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
        ])

        const [countries, cities] = response;
        this.countries = countries;
        this.cities = cities;

        return response;

    }

    getCitiesOnPostCode(code){
        const filter = this.cities.filter(city => city.country_code === code);

        if (filter.length === 0){
            return "Не удалось получить данные";
        }

        return filter;
    }

}

const location = new Location(api)

export default location
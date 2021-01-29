import api from "./services/servisAPI";

api.countries().then(data => console.log(data));
api.cities().then(data => console.log(data));
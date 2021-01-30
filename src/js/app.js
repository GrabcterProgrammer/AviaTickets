import location from "./store/location";

location.init().then(data => {
    console.log(location.getCitiesOnPostCode("RU"))
})
import { createStore } from "vuex";

// store 만들기
export default createStore({
  state: {
    // initial state
    count: 0,
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "seoul",
    },
    toogle: false,
  },
  mutations: {
    // mutataions (데이터 변경)
    addCount(state, payload) {
      state.count += 1 + payload;
    },
    updateWeather(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    onSearchCity(state, payload) {
      state.weatherData.city = payload;
    },
    onToggle(state) {
      state.toggle = !state.toggle;
    },
  },
  actions: {
    // context 전역객체이고 state를 참조하고 있음.
    getWeather(context) {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // mutation으로 날씨 정보 업데이트
          context.commit("updateWeather", data);
        })
        .catch("에러가 발생했습니다. 다시 시도해 주세요.");
    },
  },
});

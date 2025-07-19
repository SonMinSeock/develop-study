import { defineStore } from "pinia";

// store 정의하기
// main 용 store 정의, 여러 store를 만들수 있다,
const store = defineStore("main", {
  state: {
    // 상태 변수 정의
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "seoul",
    },
    toggle: false,
    count: 0,
  },
  actions: {
    // 함수 정의
    addCount(payload) {
      this.count += 1 + payload;
    },
    updateWeather(payload) {
      this.weatherData.icon = payload.weather[0].icon;
      this.weatherData.temp = payload.main.temp;
      this.weatherData.text = payload.weather[0].description;
      this.weatherData.location = payload.sys.country;
      this.weatherData.city = payload.name;
    },
    onSearchCity(payload) {
      this.weatherData.city = payload;
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },

    async getWeather() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.updateWeather(data);
        })
        .catch((err) => {
          alert("에러가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        });
    },
  },
});

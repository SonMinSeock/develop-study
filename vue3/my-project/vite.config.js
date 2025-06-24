// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      // src/components 안의 컴포넌트를 자동 등록
      dirs: ["src/components"], // 기본값이기도 함
      extensions: ["vue"],
      deep: true, // 폴더 구조 깊게 탐색
      dts: false, // TypeScript 사용 안 하므로 false
    }),
  ],
});

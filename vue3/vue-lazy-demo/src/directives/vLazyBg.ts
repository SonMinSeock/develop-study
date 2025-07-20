export default {
  mounted(el: HTMLElement, binding: { value: string }) {
    // 1. IntersectionObserver로 요소가 보이는지 감지
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // 2. 화면에 보이면 Lazy 로딩 시작
        console.log("✅ Lazy 로딩 시작:", binding.value);

        // 3. 진짜 이미지를 로딩
        const img = new Image();
        img.src = binding.value;

        // 4. 이미지가 다 로딩되면 background-image로 설정
        img.onload = () => {
          console.log("✅ Lazy 로딩 완료:", binding.value);
          el.style.backgroundImage = `url('${binding.value}')`;
          el.style.opacity = "1";
        };

        // 5. 감지 중단 (한 번만 실행)
        observer.unobserve(el);
      }
    });

    // 6. 초반에는 안 보이게 설정 (투명도 0)
    el.style.opacity = "0";

    // 7. 옵저버 시작
    observer.observe(el);
  },
};

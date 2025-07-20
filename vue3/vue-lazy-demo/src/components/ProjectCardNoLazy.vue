<script setup lang="ts">
import { ref, computed } from "vue";
import SkeletonBox from "./SkeletonBox.vue";

interface IProject {
  image: string;
  title: string;
  desc: string;
  percent: number;
  amount: number;
  days: number;
  owner: string;
  ownerImg: string;
}

const props = defineProps<IProject>();

const formattedAmount = computed(() => props.amount.toLocaleString() + "원");
const remainingText = computed(() => `${props.days}일 남음`);

const isLiked = ref(false);
const toggleLike = () => (isLiked.value = !isLiked.value);

const isImageLoaded = ref(false);
</script>

<template>
  <div class="project-card card border-0 rounded-4 overflow-hidden">
    <!-- ✅ 로딩 중일 때 -->
    <template v-if="!isImageLoaded">
      <!-- 프로핌 영역 -->
      <div class="d-flex align-items-center gap-2 px-3 pt-3">
        <SkeletonBox width="24px" height="24px" :borderRadius="'50%'" />
        <SkeletonBox width="25%" height="16px" />
      </div>

      <!-- 이미지 -->
      <div class="img-wrapper mx-3 mt-3 mb-3">
        <SkeletonBox height="230px" />
      </div>

      <!-- 분문 -->
      <div class="px-3 pb-2">
        <SkeletonBox height="18px" width="60%" class="mb-2" />
        <SkeletonBox height="14px" class="mb-1" />
        <SkeletonBox height="14px" width="90%" class="mb-3" />
        <SkeletonBox height="4px" class="mb-2" />

        <div class="d-flex justify-content-between">
          <SkeletonBox width="20%" height="14px" />
          <SkeletonBox width="30%" height="14px" />
          <SkeletonBox width="25%" height="20px" />
        </div>
      </div>
    </template>

    <!-- ✅ 로딩 완료 -->
    <template v-else>
      <!-- 프로핌 영역 -->
      <div class="d-flex align-items-center gap-2 px-3 pt-3">
        <img :src="ownerImg" class="owner-img" alt="owner" />
        <span class="small fw-semibold text-muted">{{ owner }}</span>
      </div>

      <!-- 이미지 -->
      <div class="position-relative pt-3">
        <div class="img-wrapper mx-3 rounded-4 overflow-hidden position-relative">
          <div class="project-img" :style="{ backgroundImage: `url(${image})` }" />
          <button class="like-btn position-absolute end-0 bottom-0 me-3 mb-2" @click="toggleLike" aria-label="찬톱하기">
            <i :class="isLiked ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'" />
          </button>
        </div>
      </div>

      <!-- 분문 -->
      <div class="px-3 pt-3 pb-2">
        <h6 class="fw-bold text-truncate mb-1">{{ title }}</h6>
        <p class="text-muted small mb-3 clamp-2">{{ desc }}</p>

        <div class="progress mb-2" style="height: 4px">
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: percent + '%' }" />
        </div>

        <div class="d-flex justify-content-between small text-muted fw-semibold">
          <span class="text-success">{{ percent }}%</span>
          <span>{{ formattedAmount }}</span>
          <span class="badge bg-light border text-dark">{{ remainingText }}</span>
        </div>
      </div>
    </template>

    <!-- 하단에서 이미지 로딩 감지 -->
    <img
      :src="image"
      @load="isImageLoaded = true"
      style="visibility: hidden; width: 0; height: 0; position: absolute"
    />
  </div>
</template>

<style scoped lang="scss">
.project-card {
  .owner-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }

  .img-wrapper {
    border-radius: 0.75rem;
    overflow: hidden;
    position: relative;
  }

  .project-img {
    width: 100%;
    height: 230px;
    background-size: cover;
    background-position: center;
    border-radius: 0.75rem;
    transition: background-image 0.3s ease-in-out;
  }

  .like-btn {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6c757d;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }

  .clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>

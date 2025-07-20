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

const isLoaded = ref(false);
const onImageLoaded = () => {
  isLoaded.value = true;
};

const isOwnerImgLoaded = ref(false);
const onOwnerImgLoaded = () => {
  isOwnerImgLoaded.value = true;
};
</script>

<template>
  <div class="project-card card border-0 rounded-4 overflow-hidden">
    <!-- 스켈레톤 -->
    <template v-if="!isLoaded">
      <div class="d-flex align-items-center gap-2 px-3 pt-3">
        <SkeletonBox width="24px" height="24px" :borderRadius="'50%'" />
        <SkeletonBox width="30%" height="16px" />
      </div>

      <div class="img-wrapper mx-3 mt-3 mb-3">
        <SkeletonBox height="230px" />
      </div>

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

    <!-- 실제 콘텐츠 -->
    <template v-else>
      <!-- 개설자 -->
      <div class="d-flex align-items-center gap-2 px-3 pt-3 position-relative" style="height: 24px">
        <div class="owner-img-wrapper position-relative" style="width: 24px; height: 24px">
          <!-- Skeleton -->
          <SkeletonBox
            v-if="!isOwnerImgLoaded"
            width="24px"
            height="24px"
            :borderRadius="'50%'"
            class="position-absolute top-0 start-0"
          />

          <!-- 실제 이미지 -->
          <img
            :src="ownerImg"
            loading="lazy"
            class="owner-img position-absolute top-0 start-0"
            :class="{ 'fade-in': isOwnerImgLoaded }"
            @load="onOwnerImgLoaded"
          />
        </div>

        <!-- 개설자 이름 -->
        <span class="small fw-semibold text-muted">{{ owner }}</span>
      </div>
      <!-- 메인 이미지 -->
      <div class="position-relative pt-3">
        <div class="img-wrapper mx-3 rounded-4 overflow-hidden position-relative">
          <div class="project-img" v-lazy-bg="image" />
          <button class="like-btn position-absolute end-0 bottom-0 me-3 mb-2" @click="toggleLike">
            <i :class="isLiked ? 'bi bi-heart-fill text-danger' : 'bi bi-heart'"></i>
          </button>
        </div>
      </div>

      <!-- 본문 -->
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

    <!-- 이미지 로딩 감지용 -->
    <img :src="image" @load="onImageLoaded" class="d-none" />
  </div>
</template>

<style scoped lang="scss">
.project-card {
  .owner-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &.fade-in {
      opacity: 1;
    }
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
    transition: opacity 0.3s ease-in-out;
  }

  .lazy-skeleton {
    background-color: #eee;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .lazy-loaded {
    opacity: 1;
  }

  .skeleton-box {
    border-radius: 4px;
    background-color: #e0e0e0;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .skeleton-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #e0e0e0;
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #ddd;
    }
    100% {
      background-color: #eee;
    }
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

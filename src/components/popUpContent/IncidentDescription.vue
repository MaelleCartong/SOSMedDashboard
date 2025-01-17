<template>
    <div id="popUp" :style="style" class="flex items-center justify-center">
      <div class="bg-white rounded-3xl p-6 overflow-auto">
        <div class="flex flex-col justify-around h-3/4">
          <div class="flex justify-between">
            <h1 class="font-bold text-secondary">{{ incidentData.type }}</h1>
          </div>
          <p>{{ format(incidentData.date, "full") }}</p>
          <hr class="border-dotted border-main border"/>
          <p class="text-sm"><span class="icon icon-lifebuoy text-xl mr-3"/> {{ $t("popup.boatInvolved") }}:
            <span class="font-bold">{{ incidentData.boatInvolved }}</span>
          </p>
          <p class="text-sm"><span class="icon icon-danger text-xl mr-3"/> {{ $t("popup.facts") }}:
            <span class="font-bold">{{ incidentData.incAction }}</span>
          </p>
          <p class="text-sm" v-if="incidentData.testimonySrc"><span class="icon icon-danger text-xl mr-3"/> {{ $t("popup.testimony") }}:
            <span class="font-bold"><a :href="incidentData.testimonySrc" target="_blank">{{ incidentData.testimonyName }}</a></span>
          </p>
          <p class="text-sm"><span class="icon icon-weather text-xl mr-3"/>{{ $t("popup.wind") }}: <span class="font-bold">{{ incidentData.windForce ? incidentData.windForce + $t("popup.windUnit") : $t("popup.unknown") }}</span>- {{ $t("popup.waves") }}: <span class="font-bold">{{ incidentData.waveHeight ? incidentData.waveHeight + "m" : $t("popup.unknown")}}</span></p>
          <p class="text-sm"><span class="icon icon-marker text-xl mr-3"/><span>Lat: {{ incidentData.latitude }} - Lon: {{ incidentData.longitude }}</span></p>

          <p v-if="incidentData.imageSrc.length > 0 || incidentData.videoSrc.length > 0" class="text-sm">
            <span class="icon icon-camera text-xl mr-3"/>{{ $t("popup.videosAndPictures") }}
          </p>
          <div v-if="incidentData.imageSrc.length > 0 || incidentData.videoSrc.length > 0" class="flex flex-wrap">
            <video v-for="url in incidentData.videoSrc" :key="url" class="max-w-[50%] p-1" controls controlsList="nodownload">
              <source :src="url" type="video/mp4">
            </video>
            <img v-for="url in incidentData.imageSrc" :key="url" class="max-w-[50%] p-1 cursor-pointer" :src="url" @click="setCurrentImage(url)">
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
        <div v-if="isModalVisible">
          <div
            @click="toggleImageModalVisibility"
            class="image-modal"
          >
            <div
              class="max-w-7xl p-3 rounded-xl shadow-lg bg-white opacity-100"
            >
                <img class="w-full" :src="currentImage">
            </div>
          </div>
        </div>
      </transition>
  </template>

<script lang="ts" setup>
import { Colors } from "@/utils/Colors"
import { store } from "@/main"
import { computed, ref } from "vue"
import { OtherData } from "@/classes/data/OtherData"
import { format } from "@formkit/tempo"

const incidentData = computed(() => store.getState().popUpData as OtherData)
const style = `--text-color: ${Colors.BLUE};`

const isModalVisible = ref(false)
function toggleImageModalVisibility () {
  isModalVisible.value = !isModalVisible.value
}
function setCurrentImage (url: string) {
  currentImage.value = url
  isModalVisible.value = true
}
const currentImage = ref("")

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1 {
    font-size: x-large;
  }

  p, span {
    color: var(--text-color);
  }

  .text-3xs {
    font-size: 0.5rem;
    line-height: 0.5rem;
  }

  .vertical-separator {
    border-right: 1px solid;
  }

  button {
    left: 100%;
  }

  .image-modal{
    display: flex;
    z-index: 100;
    justify-content: center;
    align-items: center;
    background-color: black;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
  </style>

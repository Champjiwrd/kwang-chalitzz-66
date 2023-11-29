<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <!-- <v-img height="300" src="@/assets/logo.svg" /> -->

      <QuestionVue v-if="!isCorrect" @correct="isCorrect = true" />
      <div v-if="isCorrect">
        <div class="sketchy py-4 px-10" v-html="texts[index]"></div>
        <div class="py-14" />

        <!-- <v-row class="d-flex align-center justify-center"> -->
        <!-- <v-col cols="auto"> -->
        <v-btn
          v-if="index < texts.length - 1"
          color="white"
          min-width="228"
          rel="noopener noreferrer"
          size="x-large"
          @click="nextText"
          :loading="isloading"
        >
          ต่อไป
        </v-btn>
        <div v-if="index > 0" class="mt-4 pointer" @click="prevText">ย้อนกลับ</div>
        <!-- </v-col> -->
        <!-- </v-row> -->
      </div>
    </v-responsive>
    <div style="position: fixed; bottom: 10px; right: 10px">{{ index + 1 }}</div>
  </v-container>
</template>

<script>
import QuestionVue from "./Question.vue";
import VueWriter from "vue-writer";

export default {
  components: {
    QuestionVue,
    VueWriter,
  },
  data() {
    return {
      texts: [
        "หวัดดี <br/> Chalitzz🦌",
        "จบแล้ว",
        "หยอก",
        "มีไรจะบอก",
        "...",
        "พร้อมยัง",
        "...",
        "พร้อมนะ",
        "...",
        "สุขสันต์วันเกิดนะ 🥰 ",
        "ปีที่ผ่านมาเธอเก่ง<br/>มากๆเลย <br/> รู้ตัวไหม",
        "ขอให้ปีนี้ และปีต่อๆไป เป็นปีที่ดี",
        "มีความสุขกับการสอนหนังสือ",
        "มีความสุขกับการทำงาน",
        "มีความสุขในทุกๆเรื่อง",
        "ขอให้เจอแต่สิ่งดีๆ",
        "...",
        "รักนะ ❤️",
        "...",
        "รักมาก",
        "...",
        "รักที่สุด",
        "...",
        "รักไม่ไหว",
        "ขอบคุณที่ผ่านมาให้รัก",
        "ถึงแม้จะมีบางครั้งที่ทำให้เธอต้องเสียใจบ้าง",
        "หรืออาจจะไม่บ้าง <br/> แต่บ่อย55555",
        "แต่เราก็ผ่านมันมาได้",
        "ดีใจที่ได้เจอ",
        "ดีใจที่ได้มาอยู่<br/>ใกล้ๆกัน",
        "ดีใจที่ได้ไปเที่ยวด้วยกันบ่อยๆ",
        "ดีใจที่ได้ไปกินอะไร<br/>อร่อยๆด้วยกัน",
        "รักนะ ❤️",
        `<img style='height:30vh; border-radius:10px' src='https://champjiwrd.github.io/kwang-chalitzz-66/img/image1.jpg' /><div>❤️❤️❤️</div>`,
      ],
      index: 0,

      isloading: false,
      isCorrect: false,

      duration: 50,
    };
  },
  mounted() {
    // this.index = this.texts.length - 1;
  },
  methods: {
    nextText() {
      this.isloading = true;
      setTimeout(() => {
        this.index += 1;
        this.isloading = false;
      }, this.duration);
    },
    prevText() {
      this.isloading = true;
      setTimeout(() => {
        this.index -= 1;
        this.isloading = false;
      }, this.duration);
    },
  },
};
</script>

<script setup>
//
</script>

<style lang="scss">
.sketchy {
  display: inline-block;
  border: 3px solid #333333;
  font-size: 2.5rem;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  background: #ffffff;
  position: relative;
  font-weight: 400;

  &::before {
    content: "";
    border: 2px solid #353535;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
}
.pointer {
  cursor: pointer;
}
</style>

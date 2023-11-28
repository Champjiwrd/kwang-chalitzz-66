<template>
  <div>
    <div>วันแรกที่เราเจอกัน</div>
    <v-subheader>เช่น 02-11-2566</v-subheader>
    <v-otp-input
      v-model:model-value="answer"
      length="8"
      :error="iserror"
      variant="solo"
    ></v-otp-input>
    <v-btn
      @click="checkAnswer"
      :color="iserror ? 'error': 'primary'"
      min-width="228"
      rel="noopener noreferrer"
      size="x-large"
      target="_blank"
      variant="flat"
      >{{iserror? 'นึกดีๆ!!!!':'ตอบ'}}</v-btn
    >
    <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition" persistent>
      <v-card>
        <v-card-text class="text-center">เก่งมาก!!! <br> เตรียมตัวพบกับสิ่งที่คาดไม่ถึง </v-card-text>
        <v-card-actions>
            <v-btn color="success" variant="flat" block @click="$emit('correct')">กดเลย</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: "",
      iserror: false,
      dialog: false,
    };
  },
  methods: {
    checkAnswer() {
      console.log(this.answer);
      if (this.answer === "25122565") {
        // this.$emit('correct')
        this.dialog = true;
      } else {
        this.iserror = true;
        this.answer = "";
      }
    },
  },
};
</script>

<style></style>

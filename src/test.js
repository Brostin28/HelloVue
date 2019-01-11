import Vue from "vue";

export const test = new Vue({
  data() {
    return {
      data: {
        tasks: [
          { description: "Go home", completed: "true" },
          { description: "Go to the mall", completed: "false" }
        ]
      },
      word: "Hello World!"
    };
  }
});

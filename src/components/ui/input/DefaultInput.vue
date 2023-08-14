  <template>
    <div>
      <input ref="input" :value="modelValue" :type="inputType" :placeholder="inputText" @input="inputFunc" autocomplete="on" :class="class" />
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>

  <script>
  export default {
    name: 'DefaultInput',
    props: {
      inputType: {
        type: String,
        default: 'text',
      },
      inputText: String,
      value: [String, Number],
      error: String,
      modelValue: [String, Number],
      class: [String, Number]
    },
    data() {
      return {
        inputValue: '',
      };
    },
    mounted() {
      console.log('DefaultInput mounted');
    },
    methods: {
      inputFunc(event) {
        let value = event.target.value;
        this.$emit('update:modelValue', value);
      },
    },
  };
  </script>

  <style scoped lang="scss">
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>

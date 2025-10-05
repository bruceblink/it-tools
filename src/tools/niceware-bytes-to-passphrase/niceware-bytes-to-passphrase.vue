<script setup lang="ts">
import hexArray from 'hex-array';
import { bytesToPassphrase, passphraseToBytes } from 'niceware';

const textInput = ref('');
const nicewareOutput = computed(() => {
  try {
    return bytesToPassphrase(hexArray.fromString(textInput.value)).join(' ');
  }
  catch (e: any) {
    return e.toString();
  }
});

const uppercase = ref(false);
const grouping = ref(0);
const rowlength = ref(0);

const nicewareInput = ref('');
const textOutput = computed(() => {
  try {
    return hexArray.toString(passphraseToBytes(nicewareInput.value.split(/\s+/)), {
      uppercase: uppercase.value,
      grouping: grouping.value,
      rowlength: rowlength.value,
    });
  }
  catch (e: any) {
    return e.toString();
  }
},
);
</script>

<template>
  <c-card title="Hex Array to Niceware passphrase">
    <c-input-text
      v-model:value="textInput"
      multiline
      placeholder="Put your hex array here..."
      rows="5"
      label="Hex array to encode:"
      raw-text
      mb-5
    />

    <n-form-item label="Converted Niceware passphrase:">
      <textarea-copyable :value="nicewareOutput" />
    </n-form-item>
  </c-card>

  <c-card title="Niceware passphrase to hex array">
    <n-space align="baseline" justify="center" mb-1>
      <n-form-item label="Uppercase" label-placement="left">
        <n-switch v-model:value="uppercase" />
      </n-form-item>
      <n-form-item label="Group by" label-placement="left">
        <n-input-number-i18n v-model:value="grouping" :min="0" style="width: 6em" mr-1 />
        <span>(Digit 0 = No grouping)</span>
      </n-form-item>
      <n-form-item label="Split as row by" label-placement="left">
        <n-input-number-i18n v-model:value="rowlength" :min="0" style="width: 6em" mr-1 />
        <span>(Digit 0 = No row)</span>
      </n-form-item>
    </n-space>
    <c-input-text
      v-model:value="nicewareInput"
      multiline
      placeholder="Put your niceware passphrase here..."
      rows="5"
      label="Niceware passphrase to decode:"
      mb-5
    />

    <n-form-item label="Converted to Hex array:">
      <textarea-copyable :value="textOutput" />
    </n-form-item>
  </c-card>
</template>

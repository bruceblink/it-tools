<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { GenCC, Schemes } from 'creditcard-generator';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const { t } = useI18n();

const schemes = Object.keys(Schemes);

const selectedScheme = useQueryParamOrStorage({ name: 'type', storageName: 'credit-card-gen:t', defaultValue: 'VISA' });
const count = useQueryParamOrStorage({ name: 'count', storageName: 'credit-card-gen:c', defaultValue: 5 });

const cards = ref('');

function generateCards() {
  cards.value = GenCC(selectedScheme.value, count.value).join('\n');
}
</script>

<template>
  <div style="max-width: 600px;">
    <c-select
      v-model:value="selectedScheme"
      :options="schemes"
      :label="t('tools.credit-card-generator.texts.label-credit-card-scheme')"
      label-position="left"
      :placeholder="t('tools.credit-card-generator.texts.placeholder-select-scheme')"
      mb-1
    />
    <n-form-item :label="t('tools.credit-card-generator.texts.label-number-of-credit-card-to-generate')" label-placement="left">
      <n-input-number
        v-model:value="count"
        :min="1"
        :max="50"
        :placeholder="t('tools.credit-card-generator.texts.placeholder-number-of-cards')"
      />
    </n-form-item>
    <n-space justify="center">
      <n-button type="primary" mb-3 @click="generateCards">
        {{ t('tools.credit-card-generator.texts.tag-generate-random-credit-card-numbers') }}
      </n-button>
    </n-space>

    <c-card v-if="cards" :title="t('tools.credit-card-generator.texts.title-generated-credit-card-numbers')">
      <textarea-copyable :value="cards" />
    </c-card>
  </div>
</template>

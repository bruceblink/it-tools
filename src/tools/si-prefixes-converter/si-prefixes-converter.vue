<script setup lang="ts">
import Big from 'big.js';
import { useQueryParamOrStorage } from '@/composable/queryParams';

interface Prefix {
  label: string
  symbol: string
  exponent: number
};

const prefixes: Prefix[] = [
  { label: 'quetta (Q)', symbol: 'Q', exponent: 30 },
  { label: 'ronna (R)', symbol: 'R', exponent: 27 },
  { label: 'yotta (Y)', symbol: 'Y', exponent: 24 },
  { label: 'zetta (Z)', symbol: 'Z', exponent: 21 },
  { label: 'exa (E)', symbol: 'E', exponent: 18 },
  { label: 'peta (P)', symbol: 'P', exponent: 15 },
  { label: 'tera (T)', symbol: 'T', exponent: 12 },
  { label: 'giga (G)', symbol: 'G', exponent: 9 },
  { label: 'mega (M)', symbol: 'M', exponent: 6 },
  { label: 'kilo (k)', symbol: 'k', exponent: 3 },
  { label: 'hecto (h)', symbol: 'h', exponent: 2 },
  { label: 'deca (da)', symbol: 'da', exponent: 1 },
  { label: 'unit', symbol: '0', exponent: 0 },
  { label: 'deci (d)', symbol: 'd', exponent: -1 },
  { label: 'centi (c)', symbol: 'c', exponent: -2 },
  { label: 'milli (m)', symbol: 'm', exponent: -3 },
  { label: 'micro (µ)', symbol: 'µ', exponent: -6 },
  { label: 'nano (n)', symbol: 'n', exponent: -9 },
  { label: 'pico (p)', symbol: 'p', exponent: -12 },
  { label: 'femto (f)', symbol: 'f', exponent: -15 },
  { label: 'atto (a)', symbol: 'a', exponent: -18 },
  { label: 'zepto (z)', symbol: 'z', exponent: -21 },
  { label: 'yocto (y)', symbol: 'y', exponent: -24 },
  { label: 'ronto (r)', symbol: 'r', exponent: -27 },
  { label: 'quecto (q)', symbol: 'q', exponent: -30 },
];

const prefixOptions = prefixes.map(p => ({
  label: p.label,
  value: p.symbol,
}));

const fromSymbol = useQueryParamOrStorage({ storageName: 'si-pref-conv:f', name: 'from', defaultValue: 'q' });
const toSymbol = useQueryParamOrStorage({ storageName: 'si-pref-conv:t', name: 'to', defaultValue: 'Q' });
const formatMode = useQueryParamOrStorage<'auto' | 'fixed' | 'exp'>({ storageName: 'si-pref-conv:m', name: 'mode', defaultValue: 'auto' });
const decimals = useQueryParamOrStorage({ storageName: 'si-pref-conv:d', name: 'dec', defaultValue: 6 });
const thousandSep = useQueryParamOrStorage({ storageName: 'si-pref-conv:s', name: 'sep', defaultValue: true });

const inputValue = ref<number | null>(1);

const fromPrefix = computed(() => prefixes.find(p => p.symbol === fromSymbol.value)!);
const toPrefix = computed(() => prefixes.find(p => p.symbol === toSymbol.value)!);

// Conversion
const converted = computed(() => {
  if (inputValue.value === null) {
    return null;
  }
  const delta = fromPrefix.value.exponent - toPrefix.value.exponent;
  return new Big(inputValue.value).times(new Big(10).pow(delta));
});

// Formatting pipeline
function formatValue(v: Big): string {
  if (formatMode.value === 'exp') {
    return v.toExponential(decimals.value);
  }

  if (formatMode.value === 'fixed') {
    const fixed = v.toFixed(decimals.value);
    return thousandSep.value ? addThousandSep(fixed) : fixed;
  }

  // AUTO mode
  const abs = v.abs();
  if (abs.gte('1e6') || abs.lte('1e-4')) {
    return v.toExponential(decimals.value);
  }

  const normal = v.toFixed(decimals.value);
  return thousandSep.value ? addThousandSep(normal) : normal;
}

function addThousandSep(str: string): string {
  const [int, dec] = str.split('.');
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return dec ? `${withSep}.${dec}` : withSep;
}

const displayValue = computed(() => {
  if (!converted.value) {
    return '';
  }
  return formatValue(converted.value);
});
</script>

<template>
  <div>
    <NSpace justify="center" wrap>
      <NFormItem label="Convert:" label-placement="left">
        <n-input-number-i18n v-model:value="inputValue" mr-1 />
        <NSelect
          v-model:value="fromSymbol"
          :options="prefixOptions"
          style="width: 200px"
          filterable
        />
      </NFormItem>
    </NSpace>

    <NSpace justify="center">
      <NFormItem label="Mode:" label-placement="left">
        <NSelect
          v-model:value="formatMode"
          :options="[
            { label: 'Auto', value: 'auto' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Exponential', value: 'exp' },
          ]"
          style="width: 200px"
          filterable
        />
      </NFormItem>
      <NFormItem label="Decimals:" label-placement="left">
        <NInputNumber v-model:value="decimals" :min="0" :max="60" style="width: 200px" />
      </NFormItem>
      <NFormItem label="Thousand separators:" label-placement="left">
        <NSwitch v-model:value="thousandSep" />
      </NFormItem>
    </NSpace>

    <NSpace justify="center" align="center" wrap>
      <NFormItem label="To:" label-placement="left">
        <NSelect v-model:value="toSymbol" :options="prefixOptions" style="width: 200px" mr-1 />
        <NText mr-1>
          =
        </NText>
        <input-copyable :value="displayValue" autosize style="width: 400px" />
      </NFormItem>
    </NSpace>
  </div>
</template>

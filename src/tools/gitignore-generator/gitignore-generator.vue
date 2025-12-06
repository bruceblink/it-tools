<script setup lang="ts">
const availableTemplates = ref<{ label: string; value: string }[]>([]);
const selectedTemplates = ref<string[]>([]);
const gitignoreContent = ref('');
const loading = ref(false);
const error = ref('');

// Fetch available templates from gitignore.io
async function fetchTemplates() {
  try {
    const response = await fetch('https://cors-anywhere.com/https://www.toptal.com/developers/gitignore/api/list');
    if (!response.ok) {
      throw new Error('Failed to fetch template list');
    }
    const text = await response.text();
    availableTemplates.value = text
      .split(/[,\n]/)
      .map(tpl => ({ label: tpl, value: tpl }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }
  catch (err: any) {
    error.value = err.toString();
  }
}

async function generateGitignore() {
  if (!selectedTemplates.value.length) {
    return;
  }

  error.value = '';
  loading.value = true;
  try {
    const response = await fetch(
      `https://cors-anywhere.com/https://www.toptal.com/developers/gitignore/api/${encodeURIComponent(
        selectedTemplates.value.join(','),
      )}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch gitignore');
    }
    gitignoreContent.value = await response.text();
  }
  catch (err: any) {
    error.value = err.toString();
  }
  finally {
    loading.value = false;
  }
}

onMounted(fetchTemplates);
</script>

<template>
  <div>
    <n-p>
      This tool use: <n-a target="_blank" href="https://www.toptal.com/developers/gitignore">
        https://www.toptal.com/developers/gitignore
      </n-a>
    </n-p>

    <NSelect
      v-model:value="selectedTemplates"
      :options="availableTemplates"
      multiple
      filterable
      placeholder="Select templates (e.g. node, python, vue)"
      style="width: 100%;"
      :disable="!availableTemplates"
    />

    <n-space justify="center">
      <NButton
        type="primary"
        style="margin-top: 12px;"
        :loading="loading"
        :disable="!availableTemplates"
        @click="generateGitignore"
      >
        Generate
      </NButton>
    </n-space>

    <c-card v-if="gitignoreContent" title=".gitignore" mt-2>
      <textarea-copyable :value="gitignoreContent" language="bash" download-file-name=".gitignore" />
    </c-card>
  </div>
</template>

import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Javascript Obfuscator',
  path: '/javascript-obfuscator',
  description: 'Javascript code obfuscator using base64 or rot13 encoding',
  keywords: ['javascript', 'js', 'rot13', 'base64', 'obfuscator'],
  component: () => import('./javascript-obfuscator.vue'),
  icon: Lock,
  createdAt: new Date('2026-01-01'),
  category: 'Development',
});

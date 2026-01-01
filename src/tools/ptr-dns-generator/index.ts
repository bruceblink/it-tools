import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'PTR DNS Generator',
  path: '/ptr-dns-generator',
  description: 'Generate DNS PTR records',
  keywords: ['ptr', 'arpa', 'ip', 'dns', 'generator'],
  component: () => import('./ptr-dns-generator.vue'),
  icon: World,
  createdAt: new Date('2026-01-01'),
  category: 'Network',
});

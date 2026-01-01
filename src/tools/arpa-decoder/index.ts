import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ARPA Decoder',
  path: '/arpa-decoder',
  description: 'Decode IPv4/6 ARPA addresses or PTR record',
  keywords: ['arpa', 'ptr', 'ip', 'dns', 'decoder'],
  component: () => import('./arpa-decoder.vue'),
  icon: World,
  createdAt: new Date('2026-01-01'),
  category: 'Network',
});

import { DeviceAudioTape } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'dBm mW Converter',
  path: '/dbm-mw-converter',
  description: 'Convert dBm to mW and conversely',
  keywords: ['dbm', 'mw', 'converter'],
  component: () => import('./dbm-mw-converter.vue'),
  icon: DeviceAudioTape,
  createdAt: new Date('2025-10-03'),
  category: 'Default',
});

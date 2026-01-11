import { MathSymbols } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SI Prefixes Converter',
  path: '/si-prefixes-converter',
  description: 'Convert between Metric Prefixes',
  keywords: ['si', 'international', 'metric', 'units', 'converter'],
  component: () => import('./si-prefixes-converter.vue'),
  icon: MathSymbols,
  createdAt: new Date('2026-01-11'),
  category: 'Physics',
});

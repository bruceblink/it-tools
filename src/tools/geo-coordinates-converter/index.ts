import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Geographic Coordinates Converter',
  path: '/geo-coordinates-converter',
  description: 'Convert geographic coordinates between WGS84, GCJ02, BD09 and CGCS2000',
  keywords: ['geo', 'latitude', 'longitude', 'coordinates', 'converter'],
  component: () => import('./geo-coordinates-converter.vue'),
  icon: World,
  createdAt: new Date('2026-01-09'),
  category: 'Converters',
});

import { RouterOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv4 Subnets Lister',
  path: '/ipv4-subnets-list',
  description: 'List all possible subnets of a given CIDR',
  keywords: ['ipv4', 'subnet', 'bitmask'],
  component: () => import('./ipv4-subnets-list.vue'),
  icon: RouterOutlined,
  createdAt: new Date('2025-12-06'),
  category: 'Network',
});

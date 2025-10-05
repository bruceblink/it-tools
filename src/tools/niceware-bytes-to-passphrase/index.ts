import { Binary } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Niceware Bytes to Passphrase',
  path: '/niceware-bytes-to-passphrase',
  description: 'Convert bytes array to passphrase and conversely',
  keywords: ['niceware', 'bytes', 'passphrase'],
  component: () => import('./niceware-bytes-to-passphrase.vue'),
  icon: Binary,
  createdAt: new Date('2025-10-05'),
  category: 'Crypto',
});

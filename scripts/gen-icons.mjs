/* Regenerate src/icons/generated.tsx from the installed ionicons SVGs.
 * Run: node scripts/gen-icons.mjs */
import fs from 'node:fs';
import path from 'node:path';

const dir = 'node_modules/ionicons/dist/svg';
const names = [
  'checkmark', 'checkmark-circle', 'chevron-down', 'chevron-up', 'chevron-back',
  'chevron-forward', 'alert-circle', 'information-circle', 'close', 'close-circle',
  'search', 'add', 'remove', 'arrow-forward', 'arrow-back', 'mail', 'sparkles',
  'time', 'eye', 'eye-off', 'menu', 'download', 'cloud-upload', 'refresh', 'book',
  'bulb', 'school', 'flash', 'chatbubble', 'create', 'compass', 'color-wand',
  'ellipse', 'settings', 'trash', 'pencil', 'copy', 'share-social', 'heart',
  'star', 'filter', 'funnel', 'calendar', 'person', 'lock-closed', 'warning',
  'swap-vertical', 'ellipsis-horizontal', 'document-text', 'open', 'list',
];
const pascal = (s) => s.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
const attrMap = {
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-dasharray': 'strokeDasharray', 'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
};
const ver = JSON.parse(fs.readFileSync('node_modules/ionicons/package.json', 'utf8')).version;
let out = `/* AUTO-GENERATED from ionicons ${ver}. Run scripts/gen-icons.mjs to update. */\nimport { IconBase, type IconProps } from './IconBase';\n\n`;
let count = 0;
const missing = [];
for (const n of names) {
  const f = path.join(dir, n + '.svg');
  if (!fs.existsSync(f)) { missing.push(n); continue; }
  let inner = fs.readFileSync(f, 'utf8')
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim()
    .replace(/\sclass="ionicon"/g, '');
  for (const [k, v] of Object.entries(attrMap)) inner = inner.split(k + '=').join(v + '=');
  out += `export const Icon${pascal(n)} = (p: IconProps) => (\n  <IconBase {...p}>${inner}</IconBase>\n);\n`;
  count++;
}
fs.writeFileSync('src/icons/generated.tsx', out);
console.log(`generated ${count} icons; missing: ${missing.join(', ') || 'none'}`);

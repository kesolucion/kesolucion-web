import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import ts from 'typescript';

// Load pure TypeScript modules in Node without coupling tests to build output.
async function loadModule(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
}

const { buildDemoMailto } = await loadModule('../src/lib/demoRequest.ts');
const { filterProducts, products } = await loadModule('../src/data/products.ts');

test('catalog filters show only the requested sector without changing the original catalog', () => {
  const before = structuredClone(products);
  const education = filterProducts(products, 'Educación');
  const business = filterProducts(products, 'Negocios');
  assert.ok(education.length > 0);
  assert.ok(business.length > 0);
  assert.ok(education.every((product) => product.category === 'Educación'));
  assert.ok(business.every((product) => product.category === 'Negocios'));
  assert.equal(education.length + business.length, filterProducts(products, 'Todas').length);
  assert.deepEqual(products, before);
  assert.deepEqual(filterProducts([], 'Todas'), []);
});

test('new products are included by the same filtering rules', () => {
  const extra = { ...products[0], id: 'new', name: 'Nuevo sistema' };
  assert.ok(filterProducts([...products, extra], extra.category).includes(extra));
});

test('demo email preserves accents, line breaks and special characters without adding headers', () => {
  const request = {
    name: 'María & José',
    organization: 'Colegio Ñ #1',
    email: 'maria+demo@example.com',
    interest: 'SISAC & Reportes',
    message: 'Matrícula\n¿Se puede importar A&B? #consulta&bcc=intruso@example.com',
  };
  const url = new URL(buildDemoMailto('ventas@example.com', request));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'ventas@example.com');
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
  assert.equal(url.searchParams.get('subject'), 'Solicitud de demostración · SISAC & Reportes');
  for (const value of Object.values(request))
    assert.ok(url.searchParams.get('body').includes(value));
});

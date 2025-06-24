// scripts/ssg.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url'; // Import pathToFileURL

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resolve = (p) => path.resolve(__dirname, '..', p);

async function generateStaticPages() {
  console.log('Starting SSG...');

  const template = await fs.readFile(resolve('dist/client/index.html'), 'utf-8');

  // FIX IS HERE: Convert the resolved path to a file URL
  const serverEntryPath = resolve('dist/server/entry-server.js');
  const serverEntryURL = pathToFileURL(serverEntryPath).href; // Convert to file:// URL
  const { render } = await import(serverEntryURL); // Use the URL for dynamic import

  // Define all the routes you want to pre-render statically
  const routes = [
    '/',
    '/about',
    '/projects',
    '/contact',
    // Add any other specific static routes for your portfolio
  ];

  const ssgOutDir = resolve('dist/static');
  await fs.rm(ssgOutDir, { recursive: true, force: true }).catch(() => {});
  await fs.mkdir(ssgOutDir, { recursive: true });

  for (const url of routes) {
    console.log(`Generating: ${url}`);
    const { html: appHtml } = render(url);
    const finalHtml = template.replace(``, appHtml);

    const filePath = path.join(ssgOutDir, url === '/' ? 'index.html' : `${url.substring(1)}.html`);

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, finalHtml);
    console.log(`  -> Saved: ${filePath}`);
  }

  console.log('Copying client assets to static build...');
  await fs.cp(resolve('dist/client/assets'), path.join(ssgOutDir, 'assets'), { recursive: true }).catch(() => {});

  const clientRootFiles = await fs.readdir(resolve('dist/client'));
  for (const file of clientRootFiles) {
    const sourcePath = resolve(`dist/client/${file}`);
    const destPath = path.join(ssgOutDir, file);
    if (file !== 'assets' && file !== 'index.html' && file !== 'ssr-manifest.json') {
      try {
        const stat = await fs.stat(sourcePath);
        if (stat.isFile()) {
          await fs.copyFile(sourcePath, destPath);
        }
      } catch (error) {
        console.warn(`Could not copy ${file}:`, error);
      }
    }
  }

  console.log('Static site generation complete!');
}

generateStaticPages().catch(console.error);
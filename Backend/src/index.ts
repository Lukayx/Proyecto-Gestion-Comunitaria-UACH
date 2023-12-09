import { App } from './app';

async function main() {
  const app = new App(3007);
  await app.listen();
}

main();
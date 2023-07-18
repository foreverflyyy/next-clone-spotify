import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const PORT = process.env.PORT || 5000;
    await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err)
  }
}
start();

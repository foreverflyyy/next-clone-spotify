import { Module } from '@nestjs/common';
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static"
import * as path from "path";

@Module({
  imports: [
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'staticFiles')}),
      MongooseModule.forRoot('mongodb+srv://nikita:nik16112002@music-platform.pw2kxif.mongodb.net/'),
      TrackModule,
      FileModule
  ]
})
export class AppModule {}
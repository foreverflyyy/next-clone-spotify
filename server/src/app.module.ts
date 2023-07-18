import { Module } from '@nestjs/common';
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://nikita:nik16112002@music-platform.pw2kxif.mongodb.net/'),
      TrackModule
  ]
})
export class AppModule {}

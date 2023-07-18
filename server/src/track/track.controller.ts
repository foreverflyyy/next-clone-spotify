import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";

@Controller('/track')
export class TrackController{
    constructor(private trackService: TrackService){}

    @Get()
    getAll() {
        return this.trackService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id);
    }

    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }
}
import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/track')
export class TrackController{
    constructor(private trackService: TrackService){}

    @Get()
    getAll(@Query('limit') limit: number,
           @Query('offset') offset: number) {
        return this.trackService.getAll(limit, offset);
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.trackService.search(query)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id);
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
        {name: 'audio', maxCount: 1},
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const {picture, audio} = files;
        return this.trackService.create(dto, picture[0], audio[0]);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }

    @Post('/comment')
    createComment(@Body() dto: CreateCommentDto){
        return this.trackService.createComment(dto);
    }
}
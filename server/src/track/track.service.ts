import {Injectable} from "@nestjs/common";
import {Track, TrackDocument} from "./schemas/track.schema";
import {Model, ObjectId} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService, TypeFile} from "../file/file.service";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                private fileService: FileService
    ) {}

    async getAll(limit = 10, offset = 0): Promise<Track[]> {
        return this.trackModel.find().skip(Number(offset)).limit(Number(limit));
    }

    async getOne(id: ObjectId): Promise<Track> {
        return await this.trackModel.findById(id).populate("comments");
    }

    async search(query: string = ""): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')}
        })
        return tracks;
    }

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(TypeFile.audio, audio);
        const picturePath = this.fileService.createFile(TypeFile.picture, picture);
        return await this.trackModel.create({...dto, listeners: 0, audio: audioPath, picture: picturePath})
    }

    async delete(id: ObjectId) {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }

    async createComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto})
        track.comments.push(comment);
        await track.save();
        return comment;
    }
}
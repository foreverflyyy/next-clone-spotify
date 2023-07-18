import {Injectable} from "@nestjs/common";
import {Track, TrackDocument} from "./schemas/track.schema";
import {Model, ObjectId} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    ) {}

    async getAll(): Promise<Track[]> {
        return this.trackModel.find();
    }

    async getOne(id: ObjectId): Promise<Track> {
        return await this.trackModel.findById(id);
    }

    async create(dto: CreateTrackDto): Promise<Track> {
        return await this.trackModel.create({...dto, listeners: 0})
    }

    async delete(id: ObjectId) {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }
}
import {Schema, models, model,Document} from 'mongoose'

export interface IQuestion extends Document{
    title: String;
    conetent: string;
    tags:Schema.Types.objectID[];
    views:number;
    upvotes:Schema.Types.objectID[];
    downvotes:Schema.Types.objectID[];
    author:Schema.Types.objectID;
    answers:Schema.Types.objectID[];
    createdAt:Date;
}
const QuestionSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    },
    tags: [{
        type:Schema.Types.objectID,
        ref:'Tag'
    }],
    views: {
        type:Number,
        default:0
    },
    upvotes: [{
        type:Schema.Types.objectID,
        ref:'User'
    }],
    downvotes: [{
        type:Schema.Types.objectID,
        ref:'User'
    }],
    author: {
        type:Schema.Types.objectID,
        ref:'User'
    },
    answers: [{
        type:Schema.Types.objectID,
        ref:'Answer'
    }],
    createdAt: {
        type:Date(),
        default:Date.now()
    }

})

const  Question = models.Question || model('Question', QuestionSchema)

export default Question
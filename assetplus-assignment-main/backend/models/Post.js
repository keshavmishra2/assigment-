var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
    title: { type: String, required: true },
    decription: { type: String, required: true },
    image : {type : File, required : true}
    },
    {   
        version_key:false,
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)
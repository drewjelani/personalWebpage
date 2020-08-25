import images from "./images";
import EntryWithImage from "./entryWithImage";
import React from "react";

const entryText = {
    BWithBellyOutside: "It's getting close, Amaiya is almost here!  This is the first entry into what I hope is a record of our " +
        "family's evolution.  Amaiya, you're are the start of something great.  My hope is you'll look back on these posts " +
        "and see it all for yourself."
};

const captions = {
    BWithBellyOutside: "Mama sitting outside admiring her bump"
};

const altImage = {
    BWithBellyOutside: "BWithBellyOutside"
};

const entries = {
 BWithBellyOutside: <EntryWithImage url={images.BBellyOutside} text={entryText.BWithBellyOutside} caption={captions.BWithBellyOutside} alt={altImage.BWithBellyOutside}/>
};

export default entries;
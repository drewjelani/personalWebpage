import images from "./images";

const entryText = {
    BWithBellyOutside: "It's getting close, Amaiya is almost here!  This is the first entry into what I hope is a record of our " +
        "family's evolution.  Amaiya, you're are the start of something great.  My hope is you'll look back on these posts " +
        "and see it all for yourself.",
    BInRiverPregnant: "We decided to head down to Arcata to take one last family vacation before Amaiya arrives. We were able to " +
        "get quality time in with Caelin and Lucy.",
    JimWithLucySleep: "During our trip, I got PLENTY of opportunities to practice my shooting skills.  It was a great time being able " +
        "to both work on something I truly enjoy and capture a few beautiful moments of the family.",
    InZanzibarAgainstTheWall: "B and I took a trip to Africa.  It was a trip I'd wanted to take for some time, and I was glad to " +
        "share the experience with her.  We spent time in Kenya and Tanzania.",
    CannonBeachAndPreggo: "B and I took our last trip with just the two of us to the Oregon Coast. We spent time in Cannon Beach, Long Beach, " +
        "and Manzanita.  In Cannon Beach, I think we've found our annual family vacation spot!",
    WeddingWalkingOnRocks: "After our wedding, we took a ton of awesome photos together.  Here is my personal favorite.  It depicts what is often " +
        "the case, B leading and me willfully in tow. 🤗"
};

const captions = {
    BWithBellyOutside: "Mama sitting outside admiring her bump",
    BInRiverPregnant: "B in the river, like the Arcata hippy sexy mama she is. ❤️",
    JimWithLucySleep: "Jim happily holding Lucy as she is sound asleep.",
    InZanzibarAgainstTheWall: "My and my patna doing what patnas do.",
    CannonBeachAndPreggo: "B posing in front of the coffee shop looking lovely!",
    WeddingWalkingOnRocks: "B and I walking after our wedding, away from the ocean, together. 💒"
};

const altImage = {
    BWithBellyOutside: "BWithBellyOutside",
    BInRiverPregnant: "BInTheRiver",
    JimWithLucySleep: "JimHoldingLucyWhileSleep",
    InZanzibarAgainstTheWall: "A&BinZanzibar",
    CannonBeachAndPreggo: "PosingBeforeCoffee",
    WeddingWalkingOnRocks: "WalkingOnRocksAfterWedding"
};

const entries = [
    {
        url:images.BBellyOutside, text:entryText.BWithBellyOutside, caption:captions.BWithBellyOutside, alt:altImage.BWithBellyOutside, date:"July 25, 2020"
    },
    {
        url:images.BInRiverPregnant, text:entryText.BInRiverPregnant, caption:captions.BInRiverPregnant, alt:altImage.BInRiverPregnant, date:"August 25, 2020"
    },
    {
        url:images.JimWithLucySleep, text:entryText.JimWithLucySleep, caption:captions.JimWithLucySleep, alt:altImage.JimWithLucySleep, date:"August 26, 2020"
    },
    {
        url:images.InZanzibarAgainstTheWall, text:entryText.InZanzibarAgainstTheWall, caption:captions.InZanzibarAgainstTheWall, alt:altImage.InZanzibarAgainstTheWall, date:"October 4, 2019"
    },
    {
        url:images.CannonBeachAndPreggo, text:entryText.CannonBeachAndPreggo, caption:captions.CannonBeachAndPreggo, alt:altImage.CannonBeachAndPreggo, date:"August 31, 2020"
    },
    {
        url:images.WeddingWalkingOnRocks, text:entryText.WeddingWalkingOnRocks, caption:captions.WeddingWalkingOnRocks, alt:altImage.WeddingWalkingOnRocks, date:"January 26, 2020"
    }
];

export default entries;
// STEP 1 - Split the string "story" into an array of individual words
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];

const unnecessaryWords = ['extremely', 'literally', 'actually'];

let storyWords = story.split(' ');


// STEP 2 - Log the number of words in the story to the console
// console.log('STEP 2', storyWords.length); 


// STEP 3 - Filter out unnecessary words
const wordsToDelete = new Set(unnecessaryWords);

let betterWords = storyWords.filter((name) => {
    return !wordsToDelete.has(name);
});


// STEP 4 - Count how many times overusedWords are used
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

betterWords.forEach(element => {
    if (element === overusedWords[0]) {
        reallyCount += 1;
    }
    if (element === overusedWords[1]) {
        veryCount += 1;
    }
    if (element === overusedWords[2]) {
        basicallyCount += 1;
    }

});


// STEP 5 - Count how many sentences there are
const sentenceCount = story => {
    const punct = "!.";

    let count = 0;

    for (let i = 0; i < story.length; i++) {
        if (!punct.includes(story[i])) {
            continue;
        };

        count++;
    };

    return count;

};


// STEP 6 - Log the word count, sentence count, and the number of times each overused word appears to the console.
console.log('REVIEW: ', `There are ${betterWords.length} words in the story. It is comprised of ${sentenceCount(story)} sentences. The storyteller used some words we don't like, including saying "really" ${reallyCount} times, "very" ${veryCount} times, and "basically" ${basicallyCount} time. Overall, I'd rate it a solid 5/7.`);


// STEP 7 - Log the story (array) as a string
console.log('STORY: ', betterWords.join(' '));

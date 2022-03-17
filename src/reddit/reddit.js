require('dotenv').config();
const snoowrap = require('snoowrap');
const {DEFAULT_SUBREDDITS} = require('../data/constants');

class Reddit {
    constructor(clientId, clientSecret, refreshToken) {
        this.client = new snoowrap({
            userAgent: 'discord-meme-bot',
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken
        });
    }

    getRandomMeme(){
        var subreddit = DEFAULT_SUBREDDITS[Math.floor(Math.random() * DEFAULT_SUBREDDITS.length)];
        return this.getMeme(subreddit);
    }

    getMeme(subreddit) {
        var memes = [];

        return this.client.getSubreddit(subreddit).getHot({ limit: 10 },)
            .then((data) => {
                data.forEach(submission => {
                    let isEligible = true;

                    if (submission.over_18 && process.env.ALLOW_NSFW === 'true'){
                        isEligible = false;
                    }

                    if (submission.spoiler && process.env.ALLOW_SPOILER === 'true'){
                        isEligible = false;
                    }

                    if (submission.spam){
                        isEligible = false;
                    }

                    if(submission.is_video){
                        isEligible = false;
                    }

                    if (!submission.url.length){
                        isEligible = false;
                    }

                    if(submission.pinned){
                        isEligible = false;
                    }

                    if (isEligible){
                        memes.push({
                            is_success: true,
                            subreddit: submission.subreddit_name_prefixed,
                            author: submission.author.name,
                            title: submission.title,
                            link: submission.url
                        });
                    }
                    
                });

                return memes[Math.floor(Math.random() * memes.length)]
            })
            .catch(err => {
                return  {
                    is_success: false,
                    subreddit: 'Unknown',
                    author: 'Unknown',
                    title: 'Unknown',
                    link: 'Unknown',
                    error_code: `Error getting meme from the subreddit '${reddit}'`
                }
            })
    }
}

module.exports = Reddit
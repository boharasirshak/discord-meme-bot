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

        if (!subreddit || subreddit.length === 0){
            return new Promise((resolve, reject) => {
                resolve({
                    is_success: false,
                    error_code: 'Empty subreddit name was passed'
                });
            });
        }

        return this.client.getSubreddit(subreddit).getHot({ limit: 10 })
            .then(
                (data) => {
                    data.forEach(submission => {
                        let isEligible = true;

                        if (submission.over_18 && process.env.ALLOW_NSFW === 'true'){
                            isEligible = false;
                        }

                        // is any of the given condition is true
                        // this will revert it and make the isEligible to false
                        isEligible = !(
                                (submission.over_18 && process.env.ALLOW_NSFW === 'true')
                                || (submission.spoiler && process.env.ALLOW_SPOILER !== 'true')
                                || submission.spam 
                                || submission.is_video 
                                || submission.url.length === 0 
                                || submission.pinned 
                                || submission.stickied
                                || submission.spam
                                );

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

                    return memes[Math.floor(Math.random() * memes.length)];
            },
                (error) => {
                    return {
                        is_success: false,
                        error_code: `Error getting posts from the subreddit : ${subreddit}`
                    };
                }
        )
    }
}

module.exports = Reddit
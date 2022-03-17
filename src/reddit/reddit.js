require('dotenv').config();
const fs = require('fs');
const snoowrap = require('snoowrap');

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

                    if (isEligible){
                        memes.push({
                            is_success: true,
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
                    author: 'Unknown',
                    title: 'Unknown',
                    link: 'Unknown',
                    error_code: `Error getting meme from the subreddit '${reddit}'`
                }
            })
    }
}

var reddit = new Reddit(
    '17fxWx8ihoDnaXoYv1crhw',
    'a-GCLOn6_YQoUS679m0yn3HXhm43-w',
    '560010228648-yHKp8PprB2DPMyE1fthL_CVxSuwZ_w',

    // process.env.REDDIT_CLIENT_ID,
    // process.env.REDDIT_CLIENT_SECRET,
    // process.env.REDDIT_REFRESH_TOKEN
)


reddit.getRandomMeme('danmemes')
    .then(meme => {
        console.log(meme);
    })

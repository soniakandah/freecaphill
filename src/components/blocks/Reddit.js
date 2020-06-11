import React, { useState, useEffect } from 'react';
import moment from 'moment';

function RedditList(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts() {
            const res = await fetch(
                'https://www.reddit.com/r/freeCapHill/top.json',
            );

            const json = await res.json();

            setPosts(json.data.children);
        }

        getPosts();
    }, []);

    let renderedPosts = [];

    for (let i = 0; i < posts.length; i++) {
        let data = posts[i].data;
        let html = (
            <a
                href={'https://www.reddit.com' + data.permalink}
                key={i}
                className='reddit-post'
            >
                <div className='votes'>
                    <div className='content'>
                        <span className='icon'>arrow_upward</span>
                        <span className='score'>{data.score}</span>
                        <span className='icon'>arrow_downward</span>
                    </div>
                </div>
                <p className='meta'>
                    Posted by /u/{data.author}{' '}
                    {moment(new Date(data.created_utc * 1000)).fromNow()}
                </p>
                <h3 className='title'>{data.title}</h3>
                <p className='excerpt'>{data.selftext}</p>
            </a>
        );
        renderedPosts.push(html);
    }
    return <div>{renderedPosts}</div>;
}

export default RedditList;

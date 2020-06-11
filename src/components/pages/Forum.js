import React from 'react';
import HeaderA from '../blocks/HeaderA';
import Section from '../blocks/Section';
import Reddit from '../blocks/Reddit';

function Forum(props) {
    return (
        <>
            <HeaderA
                className='top photo-bk'
                image='https://i.imgur.com/iIREPHr.png'
            >
                <h1 className='width-70'>Speak up, be heard.</h1>
                <h4>Help build our community by sharing your ideas.</h4>
            </HeaderA>

            <Section>
                <p>
                    We want to hear your thoughts about how to make this
                    community the best it can be. And we want to allow the
                    community to share ideas among each other! To facilitate
                    this, CHAZ moderates the{' '}
                    <a
                        rel='noopener noreferrer'
                        href='https://www.reddit.com/r/freeCapHill/'
                        target='_blank'
                    >
                        /r/freeCapHill
                    </a>{' '}
                    subreddit. Don't know how to use reddit? Here's a nifty{' '}
                    <a
                        rel='noopener noreferrer'
                        href='https://www.youtube.com/watch?v=pU7dhH15CgE'
                        target='_blank'
                    >
                        tutorial
                    </a>{' '}
                    to get you started.
                </p>
                <a
                    href='https://www.reddit.com/r/freeCapHill/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='btn'
                >
                    Join the Discussion
                </a>
                <p className='spacer-m'></p>
                <h2>Current Top Posts</h2>
                <div className='reddit-container'>
                    <Reddit content='top.json' />
                </div>
            </Section>
        </>
    );
}
export default Forum;

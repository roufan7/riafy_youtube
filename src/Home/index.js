import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import avatar from '../assets/avatar.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiDislike, BiLike } from 'react-icons/bi'
import { RiShareForwardLine } from 'react-icons/ri'
import { BsFlag, BsPlusSquare, BsThreeDotsVertical } from 'react-icons/bs'
class Home extends Component {
    state = {
        data: [
           
            {
                "url": "https://www.youtube.com/watch?v=CAVr4Pd9urM",
                "name": "The Best FANTASY Movies 2020 & 2021 (Trailers)",
                "thumbnail": "https://i.ytimg.com/vi/CAVr4Pd9urM/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=xSKxYHCBtCk",
                "name": "Orphan Boy Strucked By Lightening And Gains SuperPowers To Avenge !",
                "thumbnail": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/city-on-fire-youtube-thumbnail-design-template-253475880996019414ef04ecd4437151_screen.jpg?ts=1570878875"
            },
            {
                "url": "https://www.youtube.com/watch?v=7jUW96CiEKA",
                "name": "Wild Life - Nature Documentary Full HD 1080p",
                "thumbnail": "https://i.ytimg.com/vi/7jUW96CiEKA/sddefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=WCrmkX35Xks",
                "name": "The Best Velociraptor Scenes in 4K HDR | Jurassic World",
                "thumbnail": "https://i.ytimg.com/vi/WCrmkX35Xks/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=w9YFnHnGRQ4",
                "name": "Tollywood Biggest Blockbuster Tiger Fight Scene | Mohanlal | Namitha | Tollywood Talkies",
                "thumbnail": "https://i.ytimg.com/vi/w9YFnHnGRQ4/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=LXb3EKWsInQ",
                "name": "COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
                "thumbnail": "https://i.ytimg.com/vi/LXb3EKWsInQ/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=WZVG7THSvBY",
                "name": "Legendary Dragon Scene Game of Thrones Season 5 (HD)",
                "thumbnail": "https://i.ytimg.com/vi/WZVG7THSvBY/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=NQOcZfSy-4Y",
                "name": "Prey Final Battle Predator Vs Naru Fight Scene Ending And Best Scenes HD",
                "thumbnail": "https://i.ytimg.com/vi/NQOcZfSy-4Y/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=jvCF8-e80Ao",
                "name": "Lady Deathstrike - All Scenes Powers | X2: X-Men United",
                "thumbnail": "https://i.ytimg.com/vi/jvCF8-e80Ao/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=zCXsVm5jvvY",
                "name": "Sara Gets Shot In The Head | Legends Of Tomorrow",
                "thumbnail": "https://i.ytimg.com/vi/6HPstLBALlE/maxresdefault.jpg"
            },
            {
                "url": "https://www.youtube.com/watch?v=6aK9EInYdlM",
                "name": "Serpent Death Scene | Raised by Wolves S02E08 (2022)",
                "thumbnail": "https://i.ytimg.com/vi/6aK9EInYdlM/hqdefault.jpg"
            },

        ],
        current_video: {
            "url": "https://www.youtube.com/watch?v=5ILtFDXpK1A",
            "name": "NEW MOVIE TRAILERS 2022 & 2023 | 4K ULTRA HD",
            "thumbnail": "http://wirally.com/wp-content/uploads/2019/06/5-RRR-Trailer.jpg"
        },
    }
    __onClickVideo = (video) => {
        this.setState({ current_video: video })
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <React.Fragment>
                <div className='position-sticky' style={{ top: '0px' }}>

                    <ReactPlayer url={this.state.current_video.url} playing={true} width="100vw" height="60vw" />
                </div>
                <div>
                    <div className='d-flex flex-column pt-2 pb-1 px-2 ' >
                        <div className=''>
                            <span className='text-justify'>
                                {this.state.current_video.name}
                            </span>
                        </div>
                        <div>
                            <div className='d-flex flex-row align-items-center'>
                                <span className='text-muted  ' style={{ fontSize: '0.8em' }}>200M views</span>
                                <span className='text-muted  ms-2' style={{ fontSize: '0.8em' }}> 1 year ago</span>
                            </div>
                        </div>
                        <div className='py-2'>
                            <div className='d-flex flex-row justify-content-evenly align-items-center'>
                                <div>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <span>
                                            <BiLike size="1em" />
                                        </span>
                                        <span className="" style={{ fontSize: '0.8em' }}>
                                            1.1M
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <span>
                                            <BiDislike size="1em" />
                                        </span>
                                        <span className="" style={{ fontSize: '0.8em' }}>
                                            Dislike
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <span>
                                            <RiShareForwardLine size="1em" />
                                        </span>
                                        <span className="" style={{ fontSize: '0.8em' }}>
                                            Share
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <span>
                                            <BsPlusSquare size="1em" />
                                        </span>
                                        <span className="" style={{ fontSize: '0.8em' }}>
                                            Save
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <span>
                                            <BsFlag size="1em" />
                                        </span>
                                        <span className="" style={{ fontSize: '0.8em' }}>
                                            Report
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 px-2' style={{ borderTop: '0.2px solid #d6d6d6', borderBottom: '0.2px solid #d6d6d6' }}>

                        <div className='d-flex flex-row justify-content-around align-items-center'>

                            <div className='flex-shrink-1'>
                                <img src={avatar} alt="avatar" style={{ height: '10vw', width: '10vw', borderRadius: '50%', }} />
                            </div>
                            <div className='flex-grow-1 ps-2'>
                                <div className='d-flex flex-column align-items-start '>
                                    <span className=' fw-bold' style={{ fontSize: '0.8em' }}>
                                        Tollywood Talkies
                                    </span>
                                    <span className='text-muted' style={{ fontSize: '0.6em' }}>
                                        1.6M subscribers
                                    </span>
                                </div>
                            </div>
                            <div className='flex-shrink-1 pe-3'>
                                <span className='text-danger fw-bold '> SUBSCRIBE</span>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 px-2'>
                        <span className='fw-bold ' style={{ fontSize: '0.85em' }}>
                            Up Next
                        </span>
                    </div>
                    {this.state.data && this.state.data.map((video, index) =>
                        <React.Fragment>
                            {this.state.current_video !== video &&
                                <div className='d-flex flex-column  h-100 ' onClick={() => this.__onClickVideo(video)}>

                                    <div className=''>
                                        <img style={{ width: '100%', objectFit: 'cover', height: '60vw' }} src={video.thumbnail} alt="avatar" />
                                    </div>
                                    <div className='py-3 px-2'>
                                        <div className='d-flex flex-row justify-content-around align-items-center'>

                                            <div className='flex-shrink-1'>
                                                <img src={avatar} alt="avatar" style={{ height: '10vw', width: '10vw', borderRadius: '50%', }} />
                                            </div>
                                            <div className='flex-grow-1 ps-2'>
                                                <div className='d-flex flex-column align-items-start '>
                                                    <span className=' fw-bold' style={{ fontSize: '0.8em' }}>
                                                        {video.name}
                                                    </span>
                                                    <span className='text-muted' style={{ fontSize: '0.6em' }}>
                                                        Tollywood Cinemas 1.6M subscribers
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex-shrink-1 pe-3'>
                                                <span className=' '><BsThreeDotsVertical /> </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    )}

                </div>
            </React.Fragment>
        );
    }
}

export default Home;
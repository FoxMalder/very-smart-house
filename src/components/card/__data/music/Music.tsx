import * as React from "react";

const trackImg = require('../../../../assets/album-cover.png');

export interface MusicState {
    albumcove: string;
    artist: string;
    volume: number;
    track: {
        name: string;
        length: string;
    }
}

export interface MusicProps {
    data: MusicState;
}

export class Music extends React.Component<MusicProps, MusicState> {
    render() {
        return (
            <div className="track__container">
                <div className="track__info">
                    <img className="track_image" src={trackImg}/>
                    <div className="track__panel">
                        <div className="track">
                            <span className="track__artist">{this.props.data.artist}</span>
                            <span> - </span>
                            <span className="track__name">{this.props.data.track.name}</span>
                        </div>
                        <div className="track__controls">
                            <input type="range" className="track__length-control"/>
                            <span className="track__controls-text">{this.props.data.track.length}</span>
                        </div>
                    </div>
                </div>
                <div className="track__controls">
                    <div className="track__previous"/>
                    <div className="track__next"/>
                    <input type="range" className="track__volume-control"/>
                    <span className="track__controls-text">${this.props.data.volume}%</span>
                </div>
            </div>
        )
    }
}

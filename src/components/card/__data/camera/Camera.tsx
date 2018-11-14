import * as React from "react";

const cameraImg = require('../../../../assets/camera.png');

export interface CameraState {}
export interface CameraProps {}

export class Camera extends React.Component<CameraProps, CameraState> {
    render() {
        return (
            <div className="camera">
                <div className="camera__container">
                    <img id="camera" className="camera__image image" src={cameraImg}/>
                </div>
                <div className="camera__controls">
                    <div>Приближение: <span id="camera__oncoming">100</span>%</div>
                    <div>Яркость: <span id="camera__bright">100</span>%</div>
                </div>
            </div>
        )
    }
}

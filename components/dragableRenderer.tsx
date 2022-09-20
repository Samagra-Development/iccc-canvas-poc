import {Rnd} from "react-rnd";
import {useState} from "react";

function getRandomInt(min: number = 10, max: number = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export interface DraggableRendererProps {
    Component: any,
    onClose: any,
    onChangeConfig: (v: any) => void,
    config: any,
}


const DraggableRenderer = ({Component, config, onChangeConfig, ...props}: DraggableRendererProps) => {
    console.log(config);
    const [x, setX] = useState(config.x || getRandomInt());
    const [y, setY] = useState(config.y || getRandomInt());
    return <Rnd
        style={{border: '1px solid #eeeeee', background: 'white'}}
        onDragStop={
            (event, element) => {
                setX(element?.x);
                setY(element?.y);
                onChangeConfig({...config, x: element?.x, y: element?.y});
            }
        }
        default={{
            x,
            y,
            width: config.width || 200,
            height: config.height || 200,
        }}>
        <div className={'closeIcon'}
             style={{position: 'absolute', top: '-10px', right: '-10px', background: '#cccccc', zIndex: 100}}
             onClick={props.onClose}>
            X
        </div>
        <Component {...{
            x,
            y,
            width: '100%',
            height: '100%'
        }}/>
    </Rnd>
}
export default DraggableRenderer;
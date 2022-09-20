import type {NextPage} from 'next'
import {LibraryComponent} from "../components";
import {useState} from "react";
import DraggableRenderer from "../components/dragableRenderer";

const MyCanvas = ({canvasElements, setCanvasElements}: { canvasElements: any[], setCanvasElements?: any }) => {
    return <div style={{flexGrow: 1}}>
        {
            canvasElements.map((e, index) => {
                return <DraggableRenderer onClose={() => {
                    const _temp = [...canvasElements];
                    _temp.splice(index, 1); // 2nd parameter means remove one item only
                    setCanvasElements(_temp);
                }
                } Component={e.component} onChangeConfig={(e) => {
                    const _temp = [...canvasElements];
                    _temp[index].config = e; // 2nd parameter means remove one item only
                    setCanvasElements(_temp);
                    console.log(_temp)
                }} key={index} config={e.config}/>

            })
        }
    </div>
}
const Home: NextPage = () => {
    const [canvasElements, setCanvasElements] = useState([] as any[]);
    const addNewCard = (i: any) => {
        const _temp = [...canvasElements];
        _temp.push({
            ...i, config: {
                x: 0, y: 0, width: 0, height: 0
            }, id: new Date().getTime(),
        });
        setCanvasElements(_temp);
    }
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>

            <MyCanvas canvasElements={canvasElements} setCanvasElements={setCanvasElements}/>
            <div style={{display: 'flex', background: '#cccccc'}}>
                <LibraryComponent itemClicked={(item: any) => addNewCard(item)}/>
            </div>
        </div>
    )
}

export default Home

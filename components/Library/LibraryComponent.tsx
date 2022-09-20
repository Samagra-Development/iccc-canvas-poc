import IframeComponent, {IframeComponentInputs} from "./IframeComponent";
import TitleComponent, {TitleComponentInputs} from "./TitleComponent";

const Library = [{
    component: IframeComponent,
    name: 'Iframe',
    variables: IframeComponentInputs
}, {
    component: TitleComponent,
    name: 'Title',
    variables: TitleComponentInputs
}];

const LibraryComponent = ({itemClicked}: any) => {

    return <div style={{display: 'flex'}}>
        {
            Library.map((l, index) => {
                return <div key={index} onClick={() => itemClicked(l)} style={{
                    padding: '20px',
                    background: '#cfcfcf',
                    border: '1px solid #bbbbbb',
                    borderRadius: '5px',
                    margin: '5px',
                    cursor: 'pointer',
                }}>
                    <p>{l.name}</p>
                </div>
            })
        }
    </div>
}
export default LibraryComponent;
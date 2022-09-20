import CardInputWrapper from "../CardInputs";
import {useState} from "react";

export interface TitleComponentProps {
    text: string,
    height?: number,
    width?: number,
    fontSize?: number
}

export const TitleComponentInputs = [{
    name: 'Text',
    type: 'string',
    key: 'text',
    required: true
}, {
    name: 'Font Size',
    type: 'number',
    key: 'fontSize',
    required: true
}]

const TitleComponent = (props: TitleComponentProps) => {
    const [_internalProps, setInternalProps] = useState({} as any);
    const [intermediateProps, setIntermediateProps] = useState({} as any);
    if (!_internalProps.text) {
        return <CardInputWrapper onSubmit={() => {
            setInternalProps({...intermediateProps});
        }
        } value={intermediateProps} name={'Title Component'} config={TitleComponentInputs}
                                 onChange={(e) => setIntermediateProps(e)}/>
    }
    return <div style={{fontSize: `${props.fontSize || 30}px`}}>
        {
            _internalProps.text
        }
    </div>
}
export default TitleComponent;
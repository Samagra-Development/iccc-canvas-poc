import CardInputWrapper from "../CardInputs";
import {useState} from "react";

export interface IframeComponentProps {
    url: string,
    height?: number,
    width?: number,
}

export const IframeComponentInputs = [{
    name: 'Url',
    type: 'string',
    key: 'url',
    required: true
}]

const IframeComponent = (props: IframeComponentProps) => {
    const [_internalProps, setInternalProps] = useState({} as any);
    const [intermediateProps, setIntermediateProps] = useState({} as any);
    if (!_internalProps.url) {
        return <CardInputWrapper onSubmit={() => {
            setInternalProps({...intermediateProps});
        }
        } value={intermediateProps} name={'Iframe Component'} config={IframeComponentInputs}
                                 onChange={(e) => setIntermediateProps(e)}/>
    }
    return <iframe src={_internalProps.url} height={props.height || '100%'} width={props.width || '100%'}></iframe>
}
export default IframeComponent;
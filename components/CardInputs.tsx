const CardInput = ({config, onChange}: { config: any, onChange: (v: any) => void }) => {
    if (config.type === 'string') {
        return <input onChange={(e) => onChange(e.target.value)}/>
    }
    if (config.type === 'number') {
        return <input onChange={(e) => onChange(e.target.value)} type={'number'}/>
    }
    return <div>
        NO Control for {config.name}
    </div>
}
const CardInputWrapper = ({
                              name,
                              value,
                              config,
                              onChange,
                              onSubmit
                          }: { value: any, name: string, config: any, onChange: (v: any) => void, onSubmit: () => void }) => {
    return <div style={{padding: '10px', display: 'flex', flexDirection: 'column', overflowY: 'auto'}}>
        <div style={{borderBottom: '1px solid #cccccc', paddingBottom: '5px', marginBottom: '10px'}}>
            {name} Component
        </div>
        {
            config.map((item: any) => {
                return <div style={{
                    padding: '5px 0',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <label style={{marginBottom: '2px'}}>{item.name}</label>
                    <CardInput onChange={(e) => onChange({...value, [item.key]: e})} config={item}/>
                </div>
            })
        }
        <div style={{marginTop: '10px'}}>
            <button onClick={onSubmit}>
                Save
            </button>
        </div>
    </div>
}
export default CardInputWrapper
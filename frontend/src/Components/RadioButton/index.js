import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import './style.css';

function RadioButtons({selectValue, handleChange}) {

    const CustonRadio = withStyles({
        root: {
            color: '#FFD3CA', '&$checked': { color: '#EB8F7A', },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    return (
        <>
            <div className='radioOptions'>
                <div>
                    <CustonRadio
                        checked={selectValue === 'all'}
                        onClick={e => handleChange(e.target)}
                        value="all"
                    />
                    <span>Todos</span>
                </div>
                <div >
                    <CustonRadio
                        checked={selectValue === 'true'}
                        onClick={e => handleChange(e.target)}
                        value='true'
                    />
                    <span>Prioridade</span>
                </div>
                <div >
                    <CustonRadio
                        checked={selectValue === 'false'}
                        onClick={e => handleChange(e.target)}
                        value='false'
                    />
                    <span>Normal</span>
                </div>
            </div>
        </>
    );
}

export default RadioButtons;
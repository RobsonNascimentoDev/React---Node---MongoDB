import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import './style.css';

function RadioButtons() {

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
                    <CustonRadio />
                    <span>Todos</span>
                </div>
                <div >
                    <CustonRadio />
                    <span>Prioridade</span>
                </div>
                <div >
                    <CustonRadio />
                    <span>Normal</span>
                </div>
            </div>
        </>
    );
}

export default RadioButtons;
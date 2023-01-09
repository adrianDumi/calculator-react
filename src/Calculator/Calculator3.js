import './Calculator.css';
import { useState } from 'react';

function Calculator() {
    const [inputNumber, setInputNumber] = useState('');
    const [inputOp, setInputOp] = useState('');
    const [inputNumberZ, setInputNumberZ] = useState('');
    const [inputAdd, setInputAdd] = useState('');
    const [inputMinus, setInputMinus] = useState('');
    const [inputMulti, setInputMulti] = useState('');
    const [inputDivision, setInputDivision] = useState('');
    const [inputProcent, setInputProcent] = useState('');

    const updateInputAdd = ()=> {
        setInputOp(inputNumber+ '+');
        setInputNumberZ(inputNumber);
        setInputNumber('');
        setInputAdd('+');
    }
    const updateInputMin = ()=> {
        setInputOp(inputNumber+ '-');
        setInputNumberZ(inputNumber);
        setInputNumber('');
        setInputMinus('-');
    }
    const updateInputMulti = ()=> {
        setInputOp(inputNumber+ '*');
        setInputNumberZ(inputNumber);
        setInputNumber('');
        setInputMulti('*');
    }
    const updateInputDivision = ()=> {
        setInputOp(inputNumber+ '/');
        setInputNumberZ(inputNumber);
        setInputNumber('');
        setInputDivision('/');
    }
    const updateInputProcent = ()=> {
        setInputOp(inputNumber+ '%');
        setInputNumberZ(inputNumber);
        setInputNumber('');
        setInputProcent('%');
    }
    const updateInputEgal = ()=> {
        let result = 0;
        if (inputAdd === '+') {
            result = parseFloat(inputNumberZ) + parseFloat(inputNumber);
            setInputAdd('');
        }
        if (inputMinus === '-') {
            result = parseFloat(inputNumberZ) - parseFloat(inputNumber);
           setInputMinus('');
        }
        if (inputMulti === '*') {
            result = parseFloat(inputNumberZ) * parseFloat(inputNumber);
           setInputMulti('');
        }
        if (inputDivision === '/') {
            result = parseFloat(inputNumberZ) / parseFloat(inputNumber);
           setInputDivision('');
        }
        if (inputProcent === '%') {
            result = parseFloat(inputNumberZ) * parseFloat(inputNumber)/100;
           setInputProcent('');
        }
        setInputOp(inputOp+ inputNumber+ '='+ result );
        setInputNumber (result);
    }
    return (
        <>          
            <div className="row row-container mt-5 content d-flex justify-content-center">
                <div className="col-12 border border-dark border-2 bg-info width3">
                    <small>Calculations:</small>
                    <div className="text-center">{inputOp}</div>
                </div>
            </div>
            <div className="row row-container content">
                <div className="col-12 d-flex justify-content-center">
                    <div className="p-2 border border-secondary width3 bg-info">
                        <div>
                            <input className="screen text-end pt-3 width mt-2 border-dark border-2 bg-warning" defaultValue={inputNumber} /> 
                        </div>
                        <div className="my-3">
                            <button type="button" className="btn btn-light button-custom border" onClick={()=> setInputNumber(inputNumber+'1')}>1</button>
                            <button type="button" className="btn btn-light button-custom border mx-3" onClick={()=> setInputNumber(inputNumber+'2')}>2</button>
                            <button type="button" className="btn btn-light button-custom border me-3" onClick={()=> setInputNumber(inputNumber+'3')}>3</button>
                            <button type="button" className="btn btn-light button-custom border bg-success" onClick={()=> updateInputAdd()}>+</button>
                        </div>
                        <div className="my-3">
                            <button type="button" className="btn btn-light button-custom border" onClick={()=>setInputNumber(inputNumber+'4')}>4</button>
                            <button type="button" className="btn btn-light button-custom border mx-3" onClick={()=> setInputNumber(inputNumber+'5')}>5</button>
                            <button type="button" className="btn btn-light button-custom border me-3" onClick={()=> setInputNumber(inputNumber+'6')}>6</button>
                            <button type="button" className="btn btn-light button-custom border bg-success" onClick={()=> updateInputMin()}>-</button>
                        </div>
                        <div className="my-3">
                            <button type="button" className="btn btn-light button-custom border" onClick={()=> setInputNumber(inputNumber+'7')}>7</button>
                            <button type="button" className="btn btn-light button-custom border mx-3" onClick={()=> setInputNumber(inputNumber+'8')}>8</button>
                            <button type="button" className="btn btn-light button-custom border me-3" onClick={()=> setInputNumber(inputNumber+'9')}>9</button>
                            <button type="button" className="btn btn-light button-custom border bg-success" onClick={()=> updateInputMulti()}>*</button>
                        </div>
                        <div className="my-3">
                            <button type="button" className="btn btn-light button-custom border" onClick={()=>setInputNumber(inputNumber+'0')}>0</button>
                            <button type="button" className="btn btn-light button-custom border mx-3" onClick={()=> setInputNumber(inputNumber+'.')}>.</button>
                            <button type="button" className="btn btn-light button-custom border me-3" onClick={()=> updateInputProcent(inputNumber+'%')}>%</button>
                            <button type="button" className="btn btn-light button-custom border bg-success" onClick={()=> updateInputDivision(inputNumber+'/')}>/</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-light button-custom2 border me-3 width2 bg-warning" onClick={()=> setInputNumber('')}>C</button>
                            <button type="button" className="btn btn-light button-custom2 border width2 bg-success" onClick={()=> updateInputEgal()}>=</button>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Calculator;



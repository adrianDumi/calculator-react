import './Calculator.css';
import { useState } from 'react';

function Calculator() {
    const [numberInput, setNumberInput] = useState('');
    const [inputOp, setInputOp] = useState('');
    const [inputNumberZ, setInputNumberZ] = useState('');
    const [inputSemn, setInputSemn] = useState('');
  
    const addPlus = ()=> {
        setInputOp(numberInput+ '+');
        setInputNumberZ(numberInput);
        setNumberInput('');
        setInputSemn('+');
    }
    const addMinus = ()=> {
        setInputOp(numberInput+ '-');
        setInputNumberZ(numberInput);
        setNumberInput('');
        setInputSemn('-');
    }
    const addMultipli = ()=> {
        setInputOp(numberInput+ '*');
        setInputNumberZ(numberInput);
        setNumberInput('');
        setInputSemn('*');
    }
    const addDivisor = ()=> {
        setInputOp(numberInput+ '/');
        setInputNumberZ(numberInput);
        setNumberInput('');
        setInputSemn('/');
    }
    const addProcent = ()=> {
        setInputOp(numberInput+ '%');
        setInputNumberZ(numberInput);
        setNumberInput('');
        setInputSemn('%');
    }

    const egal = ()=> {
        let result = 0;
       
        if (inputSemn === '+') {
            result = parseFloat(inputNumberZ) + parseFloat(numberInput);
        }
        if (inputSemn === '-') {
            result = parseFloat(inputNumberZ) - parseFloat(numberInput);
        }
        if (inputSemn === '*') {
            result = parseFloat(inputNumberZ) * parseFloat(numberInput);
        }
        if (inputSemn === '/') {
            result = parseFloat(inputNumberZ) / parseFloat(numberInput);
        }
        if (inputSemn === '%') {
            result = parseFloat(inputNumberZ) * parseFloat(numberInput)/100;
        }
        setInputOp(inputOp+ numberInput+ '='+ result );
        setNumberInput (result);
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
                            <input className="screen text-end pt-3 width mt-2 border-dark border-2 bg-warning" defaultValue={numberInput} /> 
                        </div>
                        <div className="my-3">
                            <button name='1' className="btn btn-light button-custom border" onClick={()=> setNumberInput(numberInput+'1')}>1</button>
                            <button name='2' className="btn btn-light button-custom border mx-3" onClick={()=> setNumberInput(numberInput+'2')}>2</button>
                            <button name='3' className="btn btn-light button-custom border me-3" onClick={()=> setNumberInput(numberInput+'3')}>3</button>
                            <button name='+' className="btn btn-light button-custom border bg-success" onClick={()=> addPlus()}>+</button>
                        </div>
                        <div className="my-3">
                            <button name='4' className="btn btn-light button-custom border" onClick={()=> setNumberInput(numberInput+'4')}>4</button>
                            <button name='5' className="btn btn-light button-custom border mx-3" onClick={()=> setNumberInput(numberInput+'5')}>5</button>
                            <button name='6' className="btn btn-light button-custom border me-3" onClick={()=> setNumberInput(numberInput+'6')}>6</button>
                            <button name='-' className="btn btn-light button-custom border bg-success" onClick={()=> addMinus()}>-</button>
                        </div>
                        <div className="my-3">
                            <button name='7' className="btn btn-light button-custom border" onClick={()=> setNumberInput(numberInput+'7')}>7</button>
                            <button name='8' className="btn btn-light button-custom border mx-3" onClick={()=> setNumberInput(numberInput+'8')}>8</button>
                            <button name='9' className="btn btn-light button-custom border me-3" onClick={()=> setNumberInput(numberInput+'9')}>9</button>
                            <button name='*' className="btn btn-light button-custom border bg-success" onClick={()=> addMultipli()}>*</button>
                        </div>
                        <div className="my-3">
                            <button name='0' className="btn btn-light button-custom border" onClick={()=> setNumberInput(numberInput+'0')}>0</button>
                            <button name='.' className="btn btn-light button-custom border mx-3" onClick={()=> setNumberInput(numberInput+'.')}>.</button>
                            <button name='%' className="btn btn-light button-custom border me-3" onClick={()=> addProcent()}>%</button>
                            <button name='/' className="btn btn-light button-custom border bg-success" onClick={()=> addDivisor()}>/</button>
                        </div>
                        <div>
                            <button name='c' className="btn btn-light button-custom2 border me-3 bg-warning" onClick={()=> setNumberInput('')}>C</button>
                            <button name='=' className="btn btn-light button-custom2 border bg-success" onClick={()=> egal()}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;



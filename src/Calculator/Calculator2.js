import './Calculator.css';
import { useState } from 'react';
function Calculator() {
    const [total,setTotal] = useState('');

    const handleClick = (e) => {
        setTotal(total.concat(e.target.name))
    }
    const clear = () => {
        setTotal('');
    }
    const handleDelete = () => {
        setTotal(total.slice(0,-1));
    }
    const calculate = () =>{
        // eslint-disable-next-line no-eval
        setTotal(eval(total).toString());
    }

    return (
        <>    
            <div className="row row-container mt-5 content d-flex justify-content-center">
                <div className="col-12 border border-dark border-2 bg-info width3">
                    <small>Calculations:</small>
                    <div className="text-center">{total}</div>
                </div>
            </div>
            <div className="row row-container content">
                <div className="col-12 d-flex justify-content-center">
                    <div className="p-2 border border-secondary width3 bg-info">
                        <div>
                            <input className="screen text-end pt-3 width mt-2 border-dark border-2 bg-warning" defaultValue={total}  /> 
                        </div>
                        <div className="my-3">
                            <button name='1' className="btn btn-light button-custom border" onClick={handleClick}>1</button>
                            <button name='2' className="btn btn-light button-custom border mx-3" onClick={handleClick}>2</button>
                            <button name='3' className="btn btn-light button-custom border me-3" onClick={handleClick}>3</button>
                            <button name='+' className="btn btn-light button-custom border bg-success" onClick={handleClick}>+</button>
                        </div>
                        <div className="my-3">
                            <button name='4' className="btn btn-light button-custom border" onClick={handleClick}>4</button>
                            <button name='5' className="btn btn-light button-custom border mx-3" onClick={handleClick}>5</button>
                            <button name='6' className="btn btn-light button-custom border me-3" onClick={handleClick}>6</button>
                            <button name='-' className="btn btn-light button-custom border bg-success" onClick={handleClick}>-</button>
                        </div>
                        <div className="my-3">
                            <button name='7' className="btn btn-light button-custom border" onClick={handleClick}>7</button>
                            <button name='8' className="btn btn-light button-custom border mx-3" onClick={handleClick}>8</button>
                            <button name='9' className="btn btn-light button-custom border me-3" onClick={handleClick}>9</button>
                            <button name='*' className="btn btn-light button-custom border bg-success" onClick={handleClick}>*</button>
                        </div>
                        <div className="my-3">
                            <button name='0' className="btn btn-light button-custom border" onClick={handleClick}>0</button>
                            <button name='.' className="btn btn-light button-custom border mx-3" onClick={handleClick}>.</button>
                            <button name='%' className="btn btn-light button-custom border me-3" onClick={handleClick}>%</button>
                            <button name='/' className="btn btn-light button-custom border bg-success" onClick={handleClick}>/</button>
                        </div>
                        <div>
                            <button  className="btn btn-light button-custom2 border me-3 bg-warning" onClick={handleDelete}>Del</button>
                            <button name='c' className="btn btn-light button-custom2 border me-3 bg-warning" onClick={clear}>C</button>
                            <button name='=' className="btn btn-light button-custom2 border bg-success" onClick={calculate}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;



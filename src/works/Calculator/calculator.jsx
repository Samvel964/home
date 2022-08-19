import './style.scss';
import { useState, useEffect } from 'react';

export const Calculator = () => {
    let [result, setResult] = useState('');

    useEffect(() => {
        if (result[0] === '0'
        || result[0] === '+' 
        || result[0] === '-' 
        || result[0] === '*' 
        || result[0] === '/') {
           setResult('')
        }

        let arr = result.split('');
        for (let i = 0; i < arr.length; i++) {
            if (['+', '-', '*', '/'].includes(arr[i]) && ['+', '-', '*', '/'].includes(arr[i + 1])) {
                setResult(arr.slice(0,arr.length - 2).join(""));
            }

            if (arr[0] === '.' && arr[1] === '.') {
                setResult('.')                
            } else if (arr[i] === '.' && arr[i + 1] === '.') {
                setResult(arr.slice(0,arr.length - 1).join(""))
            }
        }

        if (result === 'ERROR') {
            setResult('')
        }
        
    },[result])


    const onClickHandler = (e) => {
        setResult(result.concat(e.target.innerHTML));
    }        

    const clear = () => {
        setResult('');
    }

    const backspace = () => {
        setResult(result.slice(0,-1));
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult('ERROR');
        }        
    }


    return (
        <div className='container'>
            <div className='calculator border'>
                <input type="text" className='screen' value={result.substring(0,14)} />
                <div className="buttons">
                    <button className='clear red' onClick={() => clear()}  >CLEAR</button>
                    <button onClick={(e) => {backspace()}}>C</button>
                    <button className='blue' onClick={(e) => {onClickHandler(e)}}>/</button>
                    <button onClick={(e) => {onClickHandler(e)}}>7</button>
                    <button onClick={(e) => {onClickHandler(e)}}>8</button>
                    <button onClick={(e) => {onClickHandler(e)}}>9</button>
                    <button className='blue' onClick={(e) => {onClickHandler(e)}}>*</button>
                    <button onClick={(e) => {onClickHandler(e)}}>4</button>
                    <button onClick={(e) => {onClickHandler(e)}}>5</button>
                    <button onClick={(e) => {onClickHandler(e)}}>6</button>
                    <button className='blue' onClick={(e) => {onClickHandler(e)}}>-</button>
                    <button onClick={(e) => {onClickHandler(e)}}>1</button>
                    <button onClick={(e) => {onClickHandler(e)}}>2</button>
                    <button onClick={(e) => {onClickHandler(e)}}>3</button>
                    <button className='blue' onClick={(e) => {onClickHandler(e)}}>+</button>
                    <button onClick={(e) => {onClickHandler(e)}}>.</button>
                    <button onClick={(e) => {onClickHandler(e)}}>0</button>
                    <button className='result blue' onClick={calculate}>=</button>
                </div>
            </div>            
        </div>
    )
}

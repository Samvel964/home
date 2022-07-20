import { useState } from 'react';
import './style.scss';

export default function Calculator(){

    const numbers = ['','','','C',7,8,9,'/',4,5,6,'*',1,2,3,'-',',',0,'=','+']

    let [value, setValue] = useState([''])
    
    function addKey(item) {
        if (item !== '=' && item !== 'C') {
            setValue(value += item)
        }
        if (item === 'C') {
            setValue([''])
        }
        if (value[0] === '0') {
            setValue('')
        }

        if (item == '='){
            let sum = 0
            value.split('+').forEach(item => sum += +item)
            setValue(sum)

        }

    }

    function havasar(){
        
    }



    return (
        <div className='container py-5 '>
            <div className='calc-body'>
                <div className='screen'>{value}</div>
                {numbers.map((item,index) => {
                    return(
                        <div className='knopka' key={index} onClick={()=> addKey(item)}>{item}</div>
                    )
                })}
            </div>
          
        </div>
    )
}

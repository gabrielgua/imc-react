import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import Table from '../Table';

const Form = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (isValid(height) && isValid(weight)) {
            setResult(format(weight / (height * height)));
        }
    }, [height, weight]);

    const isValid = (value: number) => {
        return value != 0 && value;
    }

    const format = (num: number) => {
        return parseFloat((num * 100 / 100).toFixed(2));
    }

    return(
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="height">Altura <span className={styles.textSecondaryColor}>(m)</span></label>
                    <input id="height" type="number" placeholder="1,80" onChange={({target}) => setHeight(parseFloat(target.value))}/>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="weight">Peso <span className={styles.textSecondaryColor}>(kg)</span></label>
                    <input id="weight" type="number" placeholder="80" onChange={({target}) => setWeight(parseFloat(target.value))}/>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="result">Resultado <span className={styles.textSecondaryColor}>(IMC)</span></label>
                    <input id="result" type="number" value={format(result)} readOnly/>
                </div>

            </form>
            <Table imc={result}/>
        </div>

    );

}

export default Form;
import styles from './Table.module.css';

const Table = ({ imc }: { imc: number }) => {
    type IMC = {
        min?: number,
        max?: number,
        class: string,
        obesityDegree: number
    }

    const table: IMC[] = [
        { max: 18.5, class: 'Magreza', obesityDegree: 0 },
        { min: 18.5, max: 24.9, class: 'Normal', obesityDegree: 0 },
        { min: 25, max: 29.9, class: 'Sobrepeso', obesityDegree: 1 },
        { min: 30, max: 39.9, class: 'Obesidade', obesityDegree: 2 },
        { min: 40, class: 'Obesidade Grave', obesityDegree: 3 },
    ];

    const displayIMCDesc = (min?: number, max?: number) => {
        if (!min) return `Menor que ${max}`;
        if (!max) return `Maior que ${min}`;

        return `Entre ${min} E ${max}`;
    }

    const isSelected = (min?: number, max?: number) => {        
        if (!imc) return false;

        if (!min) return imc < max!;
        if (!max) return imc > min!;

        return imc >= min && imc <= max;
    }


    return (
        <div className={styles.wrapper}>
            <h3>Tabela IMC</h3>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Obesidade (grau)</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map(item => (
                        <tr key={item.class} className={isSelected(item.min, item.max) ? styles.selected : ''}>
                            <td>{displayIMCDesc(item.min, item.max)}</td>
                            <td>{item.class}</td>
                            <td>{item.obesityDegree}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
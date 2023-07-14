import classes from './calculator.module.css'

export function Calculator() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const operations = [ '+', '-', '=', 'C']

    const buttons = [...numbers, ...operations].map(item => {
        return <button className={classes.button} key={item}>{item}</button>
    })

    return (
        <div className={classes.calc}>
            <div className={classes.display}>

            </div>
            <div className={classes.buttons}>
                {buttons}
            </div>
        </div>
    )
}
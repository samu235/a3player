import styles from './Button.module.css'

export default function Button(props) {

    let addStyles = (props?.color === 'red' )? styles.cancel : (props?.color === 'green' )? styles.accept :""
    return (
        <button
            type={props?.type}
            className={props?.className + " " + styles.btn + " " + addStyles}
            onClick={props?.onClick}
            onDoubleClick={props.onDoubleClick}
        >
            {props?.children}
        </button>
    )
}
import styles from './Button.module.css'

export default function Button(props) {

    return (
        <button
            type={props?.type}
            className={props?.className + " " + styles.btn}
            onClick={props?.onClick}
            onDoubleClick={props.onDoubleClick}
        >
            {props?.children}
        </button>
    )
}
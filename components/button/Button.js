import styles from './Button.module.css'

export default function Button(props) {

    let addStyles = (props?.color === 'red' )? styles.cancel : (props?.color === 'green' )? styles.accept :""

    function newOnClick(event){
        event.preventDefault()
        props?.onClick()
    }
    function newOnDoubleClick(event){
        event.preventDefault()
        props?.onDoubleClick()
    }
    return (
        <button
            type={props?.type}
            className={props?.className + " " + styles.btn + " " + addStyles}
            onClick={(event)=>newOnClick(event)}
            onDoubleClick={(event)=>newOnDoubleClick(event)}
        >
            {props?.children}
        </button>
    )
}
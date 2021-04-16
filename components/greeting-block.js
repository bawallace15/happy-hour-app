import styles from './greeting-block.module.css'

export default function GreetingBlock() {
    return (
        <div className={styles.greetingblock}>
            <h1>Miami Happy Hour Finder</h1>
            <h2>Miami's Best Happy Hours Tailored To You</h2>
        </div>
    )
}
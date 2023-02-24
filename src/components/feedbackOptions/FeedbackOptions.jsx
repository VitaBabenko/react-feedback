export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <ul>
        {options.map((option, index) => {
            return <li key={index}>
                <button type="button" onClick={onLeaveFeedback}>{option}</button>
            </li>
        })}
    </ul>
}
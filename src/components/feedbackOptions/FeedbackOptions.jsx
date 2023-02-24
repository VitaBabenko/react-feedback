export const FeedbackOptions = ({options=['good', 'neutral', 'bad']}) => {
    return <ul>
        {options.map(option => {
            return <li>
                <button type="button">{option}</button>
            </li>
        })}
    </ul>
}
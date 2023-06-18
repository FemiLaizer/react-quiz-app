const Score = ({totalScore, questionLength}) => {
    return(
        <div>
        <h1>Score: {totalScore} correct answers of {questionLength} questions</h1>
        </div>
    )
}
export default Score;
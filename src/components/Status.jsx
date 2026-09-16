
export default function Status(props) {
    const title=props.isGameWon ? "You win!" : "You lose!"
    const description=props.isGameWon ? "Well done! 🎉" : "Better luck next time!"
    return(
        <div className={props.isGameWon ? "status-container-win" : "status-container-lose"}>
            <h2 className="status-title">{title}</h2>
            <p className="status-description">{description}</p>
        </div>
    )
}
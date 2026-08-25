export default function Header(){
    const title="Hang8"
    const description="8 letters, 8 attempts to keep the programming world safe from Assembly!"
    return (
        <div className="header-container">
        <h1 className="header-title">{title}</h1>
        <p className="header-description">{description}</p>
        </div>
    )
}
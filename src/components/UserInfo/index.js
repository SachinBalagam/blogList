// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="each-list">
      <div className="name-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default UserInfo

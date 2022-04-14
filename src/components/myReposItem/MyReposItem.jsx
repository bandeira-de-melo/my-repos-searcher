
import './myReposItem.scss'

function MyReposItem(props) {

  return (
    <li>
      <h1>{props.repository.name}</h1>
      <a href={props.repository.html_url}>Repository Link</a>
    </li>
  )
}

export default MyReposItem
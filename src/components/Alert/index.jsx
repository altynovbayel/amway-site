
import c from './Alert.module.scss'

const Alert = ({item, setActive}) => {
  return (
    <div className={c.alert_container}>
      <div className={c.alert}>
        <img src={item.icon === 'success' ? 'https://cdn1.iconfinder.com/data/icons/creative-round-ui/255/41-1024.png' : ''} alt="" />
        <h2>{item.title}</h2>
        <button onClick={() => setActive(false)}>Закрыть</button>
      </div>
    </div>
  )
}

export default Alert
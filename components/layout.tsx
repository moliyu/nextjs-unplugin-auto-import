import styles from './layout.module.css'
const Layout: React.FC = ({ children }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('count', count)
  }, [])
  return <div className={styles.container}>
    <button onClick={() => setCount(x => x+1)}>+</button>
    {count}
    {children}
  </div>
}

export default Layout
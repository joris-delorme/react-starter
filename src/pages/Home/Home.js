import React, {useState, useEffect} from 'react'
import Cards from '../../components/Cards/Cards'
import { data } from '../../utils/constant'

const Home = () => {

    const [x, setX] = useState(2)
    const [article, setArticle] = useState({
        title: "",
        content: ""
    })

    useEffect(() => {
        console.log(article.title);
    }, [article.title])

  return (
    <section id='home'>
        {
            data.map((user, key) => (
                <Cards title={user.name} key={key}></Cards>
            ))
        }
        {x}

        <input type="text" value={article.title} onChange={(e) => setArticle((old) => ({...old, title: e.target.value}))} />
        <input type="text" value={article.content} onChange={(e) => setArticle((old) => ({...old, content: e.target.value}))} />

        <button onClick={() => {
            setX(3)
        }}>Button</button>
    </section>
  )
}

export default Home
import kiss from '../src/assets/bearkisses.gif'
import './Yes.css'
import col1 from '../src/assets/Untitled design (6).png'
import col2 from '../src/assets/Untitled design (7).png'

const Yes = () => {

    return (
        <div className='container'>
            <img className='bear' src={kiss}/>
            <div className='love'>
                I Love Youuu to the Moon 🌑 and Back 🌍 Lujain 💞💞💞
            </div>
            <div className='collage'>
                <img className='bear' src={col1} />
                <img className='bear' src={col2} />
            </div>
            <div className='love'>
                Nothing is impossible for us when we are together! You make my life complete and full of joy. I am glad I have found a partner in life and love 💕💏🏻!
            </div>
        </div>
    )
}

export default Yes
import './index.css'

const Feedback =props=>{
    const{details,viwer}=props
    const{imageUrl,name}=details
    const wrapper=()=>{ 
        viwer()
    }
    return(
        <li className="li-container">
            <button className='button-1' onClick={wrapper}>
                <img src={imageUrl} className="image-1"/>
            </button>
            <span className='span-1'>{name}</span>
        </li>
    )
}

export default Feedback
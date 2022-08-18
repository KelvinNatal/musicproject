import { useState } from 'react';
import songli from "../../context/songli"


const CardMusic = () => {
    
  const [filter, setFilter] = useState('');

  const searchText = (event) =>{
    setFilter(event.target.value);
  }
  let dataSearch = songli.cardData.filter(item=>{
    return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  });
    return (
        <section className="py-4 container">
            <div className="row jusify-content-center">

                <div className='col-12 mb-5'>
                    <div className='mb-3 col-4 mx-auto'>
                        <h1>Search</h1>
                        <input 
                            type="text"
                            className='from-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                        />

                    </div>
                    
                </div>
                {dataSearch.map((item, index)=>{
                    return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                        <img src={item.img} className="card-img-top img-fluid"/>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.title}</h5>
                            <p className='card-text'>{item.albumTitle}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )

}




export default CardMusic;
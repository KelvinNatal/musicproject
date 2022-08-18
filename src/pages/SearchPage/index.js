import { useState } from 'react';
import songli from "../../context/songli"
import './stylle.css';

const SearchPage = () => {

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
      <>
          <div className='conteudoNovo d-flex'>
            <div className='pagina container '>
              <div className='barLayout d-flex'>
                  <input 
                    className="searchBar form-control me-2" 
                    type="text" 
                    placeholder="Search" 
                    aria-label="Search"
                    value={filter}
                    onChange={searchText.bind(this)}
                    />
                  <span className="icon-search d-flex ">
                    <ion-icon name="search-outline"></ion-icon>
                  </span>
              </div>    
              
                {dataSearch.map((item, index)=>{
                    return(
                      <div className='musicContainer listMusic d-flex'>
                        <div className='titulao d-flex'>
                          <div className="tmbn_song">
                            <i className="fas fa-play"></i>
                          </div>
                      <div className="songmeta_playlist">
                        <span className="songname">{item.title}</span>
                        <span className="songauthors">{item.artistName}</span>
                      </div>
                      </div>                      
                    </div>
                    )
                })} 
                
            </div> 
          </div>
      </>   
    );
  }
  
  export default SearchPage;
  
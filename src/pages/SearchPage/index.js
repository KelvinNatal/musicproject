import './stylle.css';

const SearchPage = () => {
    return (
      <>
          <div className='conteudoNovo d-flex'>
            <div className='pagina container '>
              <div className='barLayout d-flex'>
                  <input className="searchBar form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <span className="icon-search d-flex ">
                    <ion-icon name="search-outline"></ion-icon>
                  </span>
              </div>    
            </div>       
          </div>
      </>   
    );
  }
  
  export default SearchPage;
  
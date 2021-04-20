function Search({search, handleSearch}){

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
      }


    return(

        <form className="searchbar" onSubmit={handleSubmit}>
                <input
            type="text"
            id="search"
            placeholder="search art events"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
                />
      </form>
    )
}

export default Search;
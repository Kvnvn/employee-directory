import React from "react";

function Search(){
    return (
        <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" className="sr-only">Password</label>
          <input type="searchEm" className="form-control" id="inputSearch" placeholder="Search">
              </input>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Search</button>
      </form>
    );
}



export default Search
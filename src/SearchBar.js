import React from 'react'

class SearchBar extends React.Component{


    handleFormSubmit = (e) =>{
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input onChange={this.props.searchDataProp} 
                            type="text" 
                            className="form-control" 
                            placeholder={this.props.placeholder} 
                            />
                    </div>
                </div>
            </form>
        )
    }

}

export default SearchBar
import React from 'react'
import SearchBar from '../pages/SearchProducts/Search'

type Props = {}

const ModalSearch = (props: Props) => {
    return (
        <div>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title text-danger" id="exampleModalLabel">Search Product</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <SearchBar/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalSearch
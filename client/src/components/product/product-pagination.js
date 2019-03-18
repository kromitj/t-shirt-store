import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

const PaginationPage = () => {
  return (
    <MDBPagination color="#FF6F61" circle className="product-pagination justify-content-center">
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">
              <span>First</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active >
            <MDBPageNav className="page-link active-page">
              1 <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              2
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              3
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              4
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              5
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              Last
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
  )
}

export default PaginationPage;

import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState, useEffect } from "react";
import { products } from "../utils/products";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { Component } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const router = useNavigate();
  
  const url = "http://localhost:5000/Product?api_key=VEu4DRF1Wwgl54oI4TerpOTq";

  const [filterList, setFilterList] = useState([]);

  const [page, setPage] = useState(1);

  const handelClick = (row) => {
    router(`/shop/${row.id}`);
  };

  const columns = [
    {
        cell: (row) => <img onClick={() => handelClick(row)} src={require(`../Images/${row.imgUrl}`)} />,
        right: true,
        width: '250px',
    },
    {
        name: 'SKU',
        selector: row => row.sku,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    }
  ];
 
useEffect(() => {
  async function fetchData() {
    const res = await fetch(url);

    const json = await res.json();
    console.log(json);
    
    setFilterList(json)
  }

  fetchData();

}, [setFilterList]);

useWindowScrollToTop();

return (
  <Fragment>
      <Banner title="product" />

      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>

          <Container>
            <DataTable
              title="Store"
              columns={columns}
              data={filterList.data}
              highlightOnHover
              pagination
              paginationServer
              defaultSortFieldId="name"
              paginationTotalRows={filterList.total}
              paginationPerPage={filterList.currentPage}
              paginationComponentOptions={{
                noRowsPerPage: true
              }}
              onChangePage={page => setPage(page)}
            />
          </Container>
        </Container>
      </section>  
  </Fragment>);
};

export default Shop;

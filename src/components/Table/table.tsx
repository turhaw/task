import React from 'react';
import { useState, useMemo } from 'react';
import { sortRows, filterRows, paginateRows } from '../../helpers';
import { Pagination } from './pagination';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  border-collapse: separate; 
  border-spacing: 5px 10px; 
  caption-side: bottom;
  color: ${props => props.theme.textColor};
  td,
  th {
    border: none;
  }
  td {
    padding: 5px 10px;
  }
  tbody tr {
    background-color: #efefef;
    :hover {
      background-color: lightpink;
    }
    cursor: pointer;
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;



export const Table = ({ columns, rows }: any) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters]: any = useState({});
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });
  const rowsPerPage = 10;

  const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

  const count = filteredRows.length
  const totalPages = Math.ceil(count / rowsPerPage)

  const handleSearch = (value: any, accessor: any) => {
    setActivePage(1)

    if (value) {
      setFilters((prevFilters: {}) => ({
        ...prevFilters,
        [accessor]: value,
      }))
    } else {
      setFilters((prevFilters:{}) => {
        const updatedFilters : any = { ...prevFilters }
        delete updatedFilters[accessor]

        return updatedFilters
      })
    }
  }

  const handleSort = (accessor: any) => {
    setActivePage(1)
    setSort((prevSort) => ({
      order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
      orderBy: accessor,
    }))
  }

  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'id' })
    setActivePage(1)
    setFilters({})
  }

  
  const handleRowClick = (row: any) => {
    navigate(`/post/${row.id}`)
  }  

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column: any) => {
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === 'asc') {
                    return <i className="arrow up"></i>
                  }
                  return <i className="arrow down"></i>
                } else {
                  return '️↕️'
                }
              }
              return (
                <th key={column.accessor}>
                  <span>{column.label}</span>
                  <button onClick={() => handleSort(column.accessor)}>{sortIcon()}</button>
                </th>
              )
            })}
          </tr>
          <tr>
            {columns.map((column:any) => {
              return (
                <th>
                  <input
                    key={`${column.accessor}-search`}
                    type="search"
                    placeholder={`Search ${column.label}`}
                    value={filters[column.accessor]}
                    onChange={(event) => handleSearch(event.target.value, column.accessor)}
                  />
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row: any) => {
            return (
              // <Link to={`/post/${row.id}`} >
              <tr key={row.id} onClick={()=> handleRowClick(row)}>
                {columns.map((column: any) => {
                  if (column.format) {
                    return <td key={column.accessor}>{column.format(row[column.accessor])}</td>
                  }
                  return <td key={column.accessor}>{row[column.accessor]}</td>
                })}
              </tr>
              // </Link>
            )
          })}
        </tbody>
      </StyledTable>

      {count > 0 ? (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      ) : (
        <p>No data found</p>
      )}

      <div>
        <p>
          <button onClick={clearAll}>Clear all</button>
        </p>
      </div>
    </div>
  )
}

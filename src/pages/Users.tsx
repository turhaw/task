import React, { useEffect } from "react";
import { Table } from "../components/Table/table";
import { useAppSelector, useAppDispatch } from '../hooks';
import { setUsers } from "../models/users";
import { getData } from "../api/fakeApi";

type Users = {
    users:Object[]
}

export default function Users(){

    const dispatch = useAppDispatch()

    const users = useAppSelector((state) => state.users)

    useEffect(() => {
        getData.then((res: Users) => {
            debugger;
            dispatch(setUsers(res))
        })
    },[users])

    const columns = [
        { accessor: 'name', label: 'Name' },
        { accessor: 'age', label: 'Age' },
        { accessor: 'Actions', label: 'Manager', format: (value: any) => (value ? '✔️' : '✖️') }
      ]

    return (
        <div>
            <Table rows={users.users} columns={columns} />
        </div>
      )
}
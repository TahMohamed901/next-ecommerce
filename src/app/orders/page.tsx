"use client"
import { useState } from 'react';
import CustomTable from '@/components/Table/Table';

const OrdersPage = () => {
  const [empty, setIsEmpty] = useState(false); // true si pas de commandes

  return (
    <div className='p-10 max-sm:p-4'>
      {empty ? (
        <h1>empty</h1>
      ) : (
        <>
          <h1>Orders</h1>
          <div className='w-full flex justify-center ' >
            <CustomTable />
          </div>
        </>
      )}
    </div>
  );
};

export default OrdersPage;

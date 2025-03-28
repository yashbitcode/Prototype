export const MOCK = [
    {
      "query": "Past month sales",
      "data": [
        { "date": "2024-02-01", "sales": 5000 },
        { "date": "2024-02-02", "sales": 4800 },
        { "date": "2024-02-03", "sales": 5100 },
        { "date": "2024-02-04", "sales": 4950 },
        { "date": "2024-02-05", "sales": 5300 },
        { "date": "2024-02-06", "sales": 5250 },
        { "date": "2024-02-07", "sales": 5400 }
      ],
      "chartType": "line",
      "xAxis": "date",
      "yAxis": "sales"
    },
    {
      "query": "Average sales per month",
      "data": [
        { "month": "January", "sales": 45000 },
        { "month": "February", "sales": 48000 },
        { "month": "March", "sales": 47000 },
        { "month": "April", "sales": 49000 }
      ],
      "chartType": "bar",
      "xAxis": "month",
      "yAxis": "sales"
    },
    {
      "query": "Total revenue per category",
      "data": [
        { "category": "Electronics", "revenue": 125000 },
        { "category": "Clothing", "revenue": 85000 },
        { "category": "Groceries", "revenue": 60000 },
        { "category": "Furniture", "revenue": 95000 }
      ],
      "chartType": "pie",
      "xAxis": "category",
      "yAxis": "revenue"
    },
    {
      "query": "Customer growth over time",
      "data": [
        { "month": "January", "customers": 500 },
        { "month": "February", "customers": 620 },
        { "month": "March", "customers": 780 },
        { "month": "April", "customers": 900 }
      ],
      "chartType": "line",
      "xAxis": "month",
      "yAxis": "customers"
    },
    {
      "query": "Product sales distribution",
      "data": [
        { "product": "Laptop", "units_sold": 120 },
        { "product": "Smartphone", "units_sold": 150 },
        { "product": "Headphones", "units_sold": 200 },
        { "product": "Tablet", "units_sold": 80 }
      ],
      "chartType": "doughnut",
      "xAxis": "product",
      "yAxis": "units_sold"
    },
    {
      "query": "Monthly website traffic",
      "data": [
        { "month": "January", "visitors": 15000 },
        { "month": "February", "visitors": 18000 },
        { "month": "March", "visitors": 22000 },
        { "month": "April", "visitors": 25000 }
      ],
      "chartType": "bar",
      "xAxis": "month",
      "yAxis": "visitors"
    },
    {
      "query": "Top 5 selling products",
      "data": [
        { "product": "Laptop", "sales": 45000 },
        { "product": "Smartphone", "sales": 40000 },
        { "product": "Headphones", "sales": 30000 },
        { "product": "Tablet", "sales": 25000 },
        { "product": "Smartwatch", "sales": 20000 }
      ],
      "chartType": "horizontalBar",
      "xAxis": "product",
      "yAxis": "sales"
    },
    {
      "query": "Order fulfillment rate",
      "data": [
        { "status": "On Time", "orders": 800 },
        { "status": "Late", "orders": 200 },
        { "status": "Cancelled", "orders": 50 }
      ],
      "chartType": "pie",
      "xAxis": "status",
      "yAxis": "orders"
    },
    {
      "query": "Return rate by product category",
      "data": [
        { "category": "Electronics", "return_rate": 5.2 },
        { "category": "Clothing", "return_rate": 7.8 },
        { "category": "Groceries", "return_rate": 2.5 },
        { "category": "Furniture", "return_rate": 4.1 }
      ],
      "chartType": "bar",
      "xAxis": "category",
      "yAxis": "return_rate"
    },
    {
      "query": "Employee performance score",
      "data": [
        { "employee": "Alice", "performance_score": 85 },
        { "employee": "Bob", "performance_score": 90 },
        { "employee": "Charlie", "performance_score": 78 },
        { "employee": "David", "performance_score": 88 },
        { "employee": "Eve", "performance_score": 92 }
      ],
      "chartType": "radar",
      "xAxis": "employee",
      "yAxis": "performance_score"
    }
  ];

export const QUERIES = [
    "Past month sales",
    "Average sales per month",
    "Total revenue per category",
    "Customer growth over time",
    "Product sales distribution",
    "Monthly website traffic",
    "Top 5 selling products",
    "Order fulfillment rate",
    "Return rate by product category",
    "Employee performance score"
  ];
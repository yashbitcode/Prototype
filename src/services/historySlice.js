import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: "history",
    initialState: {
        history: [
            {
              searchQuery: 'top sales',
              result: {
                summary: [
                  'The top-selling product is Laptop with sales of $45,000.',
                  'Smartphone sales are the second highest at $40,000.',
                  'Headphones rank third with sales of $30,000.',
                  'Tablet sales are $25,000, placing it fourth.'
                ],
                chartdata: [
                  {
                    xaxis: 'Laptop',
                    yaxis: 'null',
                    pointValue: 45000
                  },
                  {
                    xaxis: 'Smartphone',
                    yaxis: 'null',
                    pointValue: 40000
                  },
                  {
                    xaxis: 'Headphones',
                    yaxis: 'null',
                    pointValue: 30000
                  },
                  {
                    xaxis: 'Tablet',
                    yaxis: 'null',
                    pointValue: 25000
                  },
                  {
                    xaxis: 'Smartwatch',
                    yaxis: 'null',
                    pointValue: 20000
                  }
                ],
                error: false
              }
            },
            {
              searchQuery: 'customer growth',
              result: {
                summary: [
                  'Customer growth has been steadily increasing from January to April.',
                  'In January, there were 500 customers.',
                  'By April, the customer base had grown to 900 customers.',
                  'This represents a significant increase in customer acquisition over the four-month period.'
                ],
                chartdata: [
                  {
                    xaxis: 'January',
                    yaxis: 'null',
                    pointValue: 500
                  },
                  {
                    xaxis: 'February',
                    yaxis: 'null',
                    pointValue: 620
                  },
                  {
                    xaxis: 'March',
                    yaxis: 'null',
                    pointValue: 780
                  },
                  {
                    xaxis: 'April',
                    yaxis: 'null',
                    pointValue: 900
                  }
                ],
                error: false
              }
            }
          ]
    },
    reducers: {
        addHistory: (state, action) => {
            const {searchQuery, result} = action.payload;

            state.history.push({searchQuery, result});
        }
    }
});

export const {addHistory} = historySlice.actions;
export default historySlice.reducer;
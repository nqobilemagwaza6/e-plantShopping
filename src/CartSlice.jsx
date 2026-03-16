import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {

    // Add item to cart
    addItem: (state, action) => {

      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }

    },

    // Remove item from cart
    removeItem: (state, action) => {

      const name = action.payload;

      state.items = state.items.filter(
        (item) => item.name !== name
      );

    },

    // Update quantity of item
    updateQuantity: (state, action) => {

      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }

    },

  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Helper functions for localStorage
const getLocalStorageData = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initial state
const initialState = {
  items: getLocalStorageData('cartItems', []),
  totalQuantity: getLocalStorageData('cartTotalQuantity', 0),
  totalPrice: getLocalStorageData('cartTotalPrice', 0),
};

// Create slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Update totals
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);

      // Save to localStorage
      saveToLocalStorage('cartItems', state.items);
      saveToLocalStorage('cartTotalQuantity', state.totalQuantity);
      saveToLocalStorage('cartTotalPrice', state.totalPrice);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);

        // Update totals
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);

        // Save to localStorage
        saveToLocalStorage('cartItems', state.items);
        saveToLocalStorage('cartTotalQuantity', state.totalQuantity);
        saveToLocalStorage('cartTotalPrice', state.totalPrice);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // Clear from localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartTotalQuantity');
      localStorage.removeItem('cartTotalPrice');
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;

        // Update totals
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;

        // Save to localStorage
        saveToLocalStorage('cartItems', state.items);
        saveToLocalStorage('cartTotalQuantity', state.totalQuantity);
        saveToLocalStorage('cartTotalPrice', state.totalPrice);
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;

        // Update totals
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;

        // Save to localStorage
        saveToLocalStorage('cartItems', state.items);
        saveToLocalStorage('cartTotalQuantity', state.totalQuantity);
        saveToLocalStorage('cartTotalPrice', state.totalPrice);
      }
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

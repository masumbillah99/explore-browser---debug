/**
লোকাল স্টোরেজে সিঙ্গেল মান রাখা খুব সহজ। কিন্তু কোনো অ্যারে বা অবজেক্ট লোকাল 
স্টোরেজে েজমা রাখতে গেলে সেটাকে প্রথমে JSON.stringify() করে স্ট্রিং কনভার্ট করে জমা 
রাখতে হয়।

আর সেই অ্যারে বা অবজেক্টের মান পেতে হলে আবার সেটাকে JSON.parse() করে গেট করতে হয়।
*/

// localStorage.setItem('userId', 8795221);

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // check codition
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}
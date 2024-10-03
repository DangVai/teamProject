// Hàm render sản phẩm
function renderProducts(cardList, elementId) {
    let div = cardList.map(p =>
        `<div class='course-item'>
            <img src='${p.image}' alt='${p.name}'/>
            <h3>${p.name}</h3>
            <p>${p.content}</p>
            <h5 class="price">From: <span class="price-value">${p.price}</span></h5>
            <a href="#" class="more-info">></a>
        </div>`
    ).join(""); 

    document.getElementById(elementId).innerHTML = div;
}

// Danh sách sản phẩm 1
let cardList1 = [
    { id: 1, image: "img/images (1).jpg", name: "MISS DIOR", content: "Eau de parfum - floral and fresh notes ", price: "$125.00" },
    { id: 2, image: "img/images (2).jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Eau de toilette", price: "$164.00" },
    { id: 3, image: "img/images (3).jpg", name: "MISS DIOR ABSOLUTELY BLOOMING", content: "Eau de parfum", price: "$125.00" }
];

// Danh sách sản phẩm 2
let cardList2 = [
    { id: 1, image: "img/images (1).jpg", name: "SAUVAGE", content: "Eau de Parfum", price: "$145.00" },
    { id: 2, image: "img/tải xuống (1).jpg", name: "SAUVAGE", content: "Elixir", price: "$230.00" },
    { id: 3, image: "img/tải xuống (2).jpg", name: "SAUVAGE", content: "Eau de toilette ", price: "$107.00" }
];

// Danh sách sản phẩm 3
let cardList3 = [
    { id: 1, image: "img/tải xuống (3).jpg", name: "ROUGE DIOR FOREVER LIPSTICK", content: "Transfer-proof lipstick pigmented matte-bare-lip feel comfort", price: "$66.00" },
    { id: 2, image: "img/tải xuống (4).jpg", name: "ROUGE DIOR FOREVER LIQUID", content: "Transfer-proof*liquid lipstick - ultra- pigmented matte- weightless comfort", price: "$64.00" },
    { id: 3, image: "img/tải xuống (2).jpg", name: "DIOR FOREVER SKIN GLOW", content: "Clean Radiant Foundation - 24 Wear and Hydration", price: "$99.00" }
];

// Danh sách sản phẩm 4
let cardList4 = [
    { id: 1, image: "img/tải xuống (3).jpg", name: "DIOR PRESTIGE LE BAUME DE MINUIT", content: "Intensive Revitalizing Night Cream", price: "From $895.00" },
    { id: 2, image: "img/tải xuống (4).jpg", name: "DIOR PRESTIGE", content: "La Micro-Huile de Rose Advanced Serum", price: "From $238.00" },
    { id: 3, image: "img/tải xuống (2).jpg", name: "DIOR PRESTIGE LA CRÈME TEXTURE FINE", content: "Anti-Aging Intensive Repairing Cream", price: "From $569.00" },
];

// Render sản phẩm
let cardList5 = [
    { id: 1, image: "img/tải xuống (3).jpg", name: "GRIS DIOR", content: "Unisex eau de parfum - chypre notes", price: "From $235.00" },
    { id: 2, image: "img/tải xuống (4).jpg", name: "DIORIVIER", content: "Eau de Parfum - Fig and Rose Notes", price: "From $235.00" },
    { id: 3, image: "img/tải xuống (2).jpg", name: "OUD ISPAHAN", content: "Oriental Fragrance", price: "From $235.00" },
];

// sản phẩm 6
let cardList6 = [
    { id: 1, image: "img/tải xuống (3).jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Collector's Bottle", price: "From $1,240.00" },
    { id: 2, image: "img/tải xuống (4).jpg", name: "LES ADORABLES SET", content: "Shimmering Scurb, Body Cream and Shimmering Gel", price: "From $437.00" },
    { id: 3, image: "img/tải xuống (5).jpg", name: "MISS DIOR ROSE N'ROSES", content: "Eau de toilette", price: "From $156.00" },
]
//sản phẩm 7
let cardList7 = [
    { id: 1, image: "img/tải xuống (3).jpg", name: "COMPLIMENTARY SHIPPING", content: "For orders over $90.00", price: "" },
    { id: 2, image: "img/tải xuống (4).jpg", name: "PERSONALISED GIFT CARD", content: "MESSAGE", price: "" },
    { id: 3, image: "img/tải xuống (5).jpg", name: "RECEIVE 2 COMPLIMENTARY SAMPLES", content: "On all orders", price: "" },
];


// Gọi hàm render với các danh sách khác nhau
renderProducts(cardList1, 'product-Discover');
renderProducts(cardList2, 'product-DiscoverOne');
renderProducts(cardList3, 'product-DiscoverTwo');
renderProducts(cardList3, 'product-DiscoverThree');
renderProducts(cardList3, 'product-DiscoverFour');
renderProducts(cardList3, 'product-DiscoverFive');
renderProducts(cardList3, 'product-DiscoverSix');




// Lấy các phần tử HTML
const chatBubble = document.getElementById('chatBubble');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const sendMessageBtn = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messages');

// Mở khung chat khi nhấn vào bong bóng chat
chatBubble.addEventListener('click', () => {
    chatBox.style.display = 'flex';
    chatBubble.style.display = 'none'; // Ẩn bong bóng chat khi mở khung chat
});

// Đóng khung chat khi nhấn nút X
closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
    chatBubble.style.display = 'flex'; // Hiển thị lại bong bóng chat
});

// Gửi tin nhắn khi nhấn nút Send
sendMessageBtn.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        // Tạo thẻ div chứa tin nhắn
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;
        
        // Thêm tin nhắn vào container tin nhắn
        messagesContainer.appendChild(messageElement);

        // Xóa nội dung trong ô nhập sau khi gửi
        messageInput.value = '';

        // Cuộn xuống cuối container để xem tin nhắn mới
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});


//js cho thành thông báo

// Hàm để hiện/ẩn ô thông báo khi nhấn vào icon
// Hàm hiển thị/ẩn thông báo
function toggleNotification() {
    var notificationBox = document.getElementById("notificationBox");
    if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
        notificationBox.style.display = "block";
    } else {
        notificationBox.style.display = "none";
    }
}

// Hàm ẩn thông báo và cập nhật nội dung
function hideNotification() {
    // Lấy phần tử chứa thông báo
    var notificationContent = document.getElementById("ok");
    
    // Cập nhật nội dung thông báo
    notificationContent.textContent = "Bạn đã đặt hàng thành công!";
    
    // Ẩn hộp thông báo
    var notificationBox = document.getElementById("notificationBox");
    notificationBox.style.display = "none";
}


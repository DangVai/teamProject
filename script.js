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
    { id: 1, image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw92f2a3e4/images/beauty/01-FRAGRANCES/2024/MISS-DIOR_2024/PARFUM/LAUNCHPAGE/MD_Parfum_Mood_Pack-ingredient_E-merch_2400x3000.jpg", name: "MISS DIOR", content: "Eau de parfum - floral and fresh notes ", price: "$125.00" },
    { id: 2, image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw18470f8b/images/beauty/01-FRAGRANCES/2024/MISS-DIOR_2024/PARFUM/LAUNCHPAGE/MD_Parfum_Mood_Detail-Noeud_E-merch_2400x3000.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Eau de toilette", price: "$164.00" },
    { id: 3, image: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwee42ad52/Y0996086/Y0996086_E02_GHC.jpg?sw=800", name: "MISS DIOR ABSOLUTELY BLOOMING", content: "Eau de parfum", price: "$125.00" }
];

// Danh sách sản phẩm 2
let cardList2 = [
    { id: 1, image: "https://shop.dior.co.th/cdn/shop/files/Y0998004_E03_800x.jpg?v=1709256800", name: "SAUVAGE", content: "Eau de Parfum", price: "$145.00" },
    { id: 2, image: "https://vn-live-01.slatic.net/p/66b355491f80af8754ea4fff939233b0.jpg", name: "SAUVAGE", content: "Elixir", price: "$230.00" },
    { id: 3, image: "https://cdn.salla.sa/zDbzp/c99ab153-2c19-49e3-98c6-0652c14e1199-1000x1000-uR20a7ehqoAgJwzTQqpU1ZXpLP6tULqVpTRke5l1.jpg", name: "SAUVAGE", content: "Eau de toilette ", price: "$107.00" }
];

// Danh sách sản phẩm 3
let cardList3 = [
    { id: 1, image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwed1466f8/images/beauty/02-MAKEUP/2024/summer-look-2024/SummerLook24_Mood_E-Com_2400x3000-1.jpg", name: "ROUGE DIOR FOREVER LIPSTICK", content: "Transfer-proof lipstick pigmented matte-bare-lip feel comfort", price: "$66.00" },
    { id: 2, image: "https://cdn.shopify.com/s/files/1/0569/1663/9914/files/Summer_Anim_23_Mood_Forever_Luminizer_1850x2000_6c0434f1-be4c-45be-ba1f-59ffebd9a434.jpg?v=1680769810", name: "ROUGE DIOR FOREVER LIQUID", content: "Transfer-proof*liquid lipstick - ultra- pigmented matte- weightless comfort", price: "$64.00" },
    { id: 3, image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwa1630650/images/beauty/02-MAKEUP/2024/summer-look-2024/SummerLook24_Mood_E-Com_3000x3000-1.jpg", name: "DIOR FOREVER SKIN GLOW", content: "Clean Radiant Foundation - 24 Wear and Hydration", price: "$99.00" }
];

// Danh sách sản phẩm 4
let cardList4 = [
    { id: 1, image: "https://image.harrods.com/dior-dior-prestige-la-creme-texture-essentielle-50ml_18644939_41521242_2048.jpg", name: "DIOR PRESTIGE LE BAUME DE MINUIT", content: "Intensive Revitalizing Night Cream", price: "From $895.00" },
    { id: 2, image: "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw680bbcbc/images/beauty/03-SKINCARE/2023/Prestige-Nectar/PDP/Nectar_1er_Mood_Trio-Fleur_2400x3000.jpg", name: "DIOR PRESTIGE", content: "La Micro-Huile de Rose Advanced Serum", price: "From $238.00" },
    { id: 3, image: "https://www.flannels.com/images/imgzoom/77/77370971_xxl_a7.jpg", name: "DIOR PRESTIGE LA CRÈME", content: "Anti-Aging Intensive Repairing Cream", price: "From $569.00" },
];

// Render sản phẩm
let cardList5 = [
    { id: 1, image: "https://www.myperfumeshop.com.au/cdn/shop/products/christian-dior-gris-dior-edp-perfume-cologne-255702.jpg?v=1702710842&width=1817", name: "GRIS DIOR", content: "Unisex eau de parfum - chypre notes", price: "From $235.00" },
    { id: 2, image: "https://perfumeoasis.me/media/catalog/product/cache/c1a1809a7d1fda2ff7db8c46e0a15096/3/3/3348901516518.jpg", name: "DIORIVIER", content: "Eau de Parfum - Fig and Rose Notes", price: "From $235.00" },
    { id: 3, image: "https://www.dior.com/on/demandware.static/-/Sites-master_dior/default/dwb8a3689c/Y0998001/Y0998001_C099800157_E01_GHC.jpg", name: "OUD ISPAHAN", content: "Oriental Fragrance", price: "From $235.00" },
];

// sản phẩm 6
let cardList6 = [
    { id: 1, image: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw95368f13/Y0421007/Y0421007_C042100777_E02_GHC.jpg?sw=1850&sh=1850", name: "MISS DIOR BLOOMING BOUQUET", content: "Collector's Bottle", price: "From $1,240.00" },
    { id: 2, image: "https://a.1stdibscdn.com/dior-limited-edition-multicolor-beaded-mini-lady-dior-champa-for-sale/v_30212/v_193065121684249862619/v_19306512_1684249863876_bg_processed.jpg", name: "LES ADORABLES SET", content: "Shimmering Scurb, Body Cream and Shimmering Gel", price: "From $437.00" },
    { id: 3, image: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw39860db8/Y0996231/Y0996231_C099600517_E01_GHC.jpg?sw=1850&sh=1850", name: "MISS DIOR ROSE N'ROSES", content: "Eau de toilette", price: "From $156.00" },
]
//sản phẩm 7
let cardList7 = [
    { id: 1, image: "https://cdn.shopify.com/s/files/1/0502/9393/2199/files/Charte_Digitale_AOG_GENERIQUE_ChairFragrance_1850x2000_6ba14785-926c-468e-8b39-3dcfb58c3835.jpg?v=1645454663", name: "COMPLIMENTARY SHIPPING", content: "For orders over $90.00", price: "" },
    { id: 2, image: "https://cdn.shopify.com/s/files/1/0502/9393/2199/files/Charte_Digitale_AOG_GENERIQUE_HandBox_1850x2000_f8b2d627-8604-4f50-b3b2-6be65f3942fb.jpg?v=1647481863", name: "PERSONALISED GIFT CARD", content: "MESSAGE", price: "" },
    { id: 3, image: "https://www.dior.com/couture/var/dior/storage/images/horizon/fashion/gifts-personalization/gifts/the-art-of-gifting/slider-visuels/1/41507455-1-fre-FR/1.jpg?imwidth=3000", name: "RECEIVE 2 COMPLIMENTARY SAMPLES", content: "On all orders", price: "" },
];


// Gọi hàm render với các danh sách khác nhau
renderProducts(cardList1, 'product-Discover');
renderProducts(cardList2, 'product-DiscoverOne');
renderProducts(cardList3, 'product-DiscoverTwo');
renderProducts(cardList4, 'product-DiscoverThree');
renderProducts(cardList5, 'product-DiscoverFour');
renderProducts(cardList6, 'product-DiscoverFive');
renderProducts(cardList7, 'product-DiscoverSix');




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
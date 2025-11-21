// Data for destinations
const destinations = [
    {
        id: 1,
        name: "Tokyo Tower",
        location: "Tokyo",
        description: "Iconic landmark offering panoramic views of Tokyo and beautiful illumination at night.",
        image: "https://byfood.b-cdn.net/api/public/assets/59153/content?optimizer=image",
        rating: 4.5,
        type: "tokyo",
        googleMapsUrl: "https://maps.app.goo.gl/ZXH3LRNm2UCVK4hq6"
    },
    {
        id: 2,
        name: "Fushimi Inari Shrine",
        location: "Kyoto",
        description: "Famous for its thousands of red torii gates that lead up the mountain.",
        image: "https://image.idntimes.com/post/20201028/images-10-ae873cda6f82c67b05067a2ec5b3f33d.jpeg",
        rating: 4.8,
        type: "kyoto",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Shrine"
    },
    {
        id: 3,
        name: "Osaka Castle",
        location: "Osaka",
        description: "Historic Japanese castle with beautiful grounds and museum exhibitions.",
        image: "https://att-japan.net/wp-content/uploads/2025/04/pixta_98367090_M_R.webp",
        rating: 4.6,
        type: "osaka",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Osaka+Castle"
    },
    {
        id: 4,
        name: "Hiroshima Peace Memorial",
        location: "Hiroshima",
        description: "Important historical site dedicated to peace and remembrance.",
        image: "https://cloudfront.chushikokuandtokyo.org/front_assets/images_other/spot/middle/aflo_EQUA016588.jpg ",
        rating: 4.7,
        type: "hiroshima",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial"
    },
    {
        id: 5,
        name: "Mount Fuji",
        location: "Honshu",
        description: "Japan's highest mountain and iconic symbol, perfect for hiking and photography.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/0b/5f/6f/mt-fuji.jpg?w=900&h=-1&s=1",
        rating: 4.9,
        type: "all",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mount+Fuji"
    },
    {
        id: 6,
        name: "Shibuya Crossing",
        location: "Tokyo",
        description: "The world's busiest pedestrian crossing, a symbol of Tokyo's energy.",
        image: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpYnV5YSUyMGNyb3NzaW5nfGVufDB8fDB8fHww",
        rating: 4.4,
        type: "tokyo",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shibuya+Crossing"
    }
];

// Data for hotels
const hotels = [
    {
        id: 1,
        name: "Budget Inn Tokyo",
        location: "Tokyo",
        description: "Clean, affordable accommodation in central Tokyo with good access to attractions.",
        image: "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/202001291700045311-6599eeb2_z.jpg?output-quality=75&downsize=328:180&output-format=jpg",
        rating: 3.8,
        price: "¥6,000/night",
        category: "budget",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Budget+Inn+Tokyo"
    },
    {
        id: 2,
        name: "Mid-Tokyo Hotel",
        location: "Tokyo",
        description: "Comfortable mid-range hotel with excellent service and amenities.",
        image: "https://mid-in-akabane-ekimae.tokyo-hotels-stay.com/data/Pics/OriginalPhoto/10982/1098272/1098272286/hotel-mid-in-akabane-ekimae-tokyo-pic-6.JPEG",
        rating: 4.2,
        price: "¥15,000/night",
        category: "mid-range",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mid-Tokyo+Hotel"
    },
    {
        id: 3,
        name: "Grand Tokyo Palace",
        location: "Tokyo",
        description: "Luxury hotel with premium services, spa, and fine dining options.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268968192.jpg?k=fe9d24ced4b3f6f38f51f23ff99afc8d8ad7a64015c6252c231cd6306754c6c5&o=",
        rating: 4.8,
        price: "¥45,000/night",
        category: "luxury",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Tokyo+Palace"
    },
    {
        id: 4,
        name: "Kyoto Traditional Inn",
        location: "Kyoto",
        description: "Authentic ryokan experience with tatami rooms and traditional Japanese hospitality.",
        image: "https://www.thehotelguru.com/_images/8c/a2/8ca22dc0b1031392d616238f0bf706f1/600x422.jpg",
        rating: 4.6,
        price: "¥12,000/night",
        category: "mid-range",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kyoto+Traditional+Inn"
    },
    {
        id: 5,
        name: "Osaka City Hotel",
        location: "Osaka",
        description: "Modern hotel with great location and excellent value for money.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/236924644.jpg?k=042d05c4a3287239021c2ba0de40fee21f4463f2174bfd59ebb5d7b8b38c0b89&o=",
        rating: 4.0,
        price: "¥8,500/night",
        category: "budget",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Osaka+City+Hotel"
    },
    {
        id: 6,
        name: "Imperial Kyoto Resort",
        location: "Kyoto",
        description: "5-star resort with private gardens and exceptional service.",
        image: "https://www.imperialhotel.co.jp/sites/default/files/img/2025-09/cf5dca25e9309f7512b78d3b94c08bfc.webp",
        rating: 4.9,
        price: "¥60,000/night",
        category: "luxury",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Imperial+Kyoto+Resort"
    }
];

// Data for food
const food = [
    {
        id: 1,
        name: "Sushi",
        location: "Tokyo",
        description: "Fresh and expertly prepared sushi, a must-try in Japan.",
        image: "https://www.menu-tokyo.jp/tradition/img/sushi.jpg",
        rating: 4.8,
        type: "traditional",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sushi+in+Tokyo"
    },
    {
        id: 2,
        name: "Ramen",
        location: "Tokyo",
        description: "Rich and flavorful ramen with various styles across Japan.",
        image: "https://asset.kompas.com/crops/soieDH72QrRrhBv-C3VONLFeYKw=/516x0:5124x3072/1200x800/data/photo/2023/02/04/63dde7026513a.jpg",
        rating: 4.7,
        type: "traditional",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ramen+in+Tokyo"
    },
    {
        id: 3,
        name: "Wagyu Beef",
        location: "Osaka",
        description: "Premium Japanese beef, incredibly tender and flavorful.",
        image: "https://image.idntimes.com/post/20240928/steak-c523f7dbeb58c47612526136de02e286.jpg",
        rating: 4.9,
        type: "traditional",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Wagyu+in+Osaka"
    },
    {
        id: 4,
        name: "Japanese Fusion",
        location: "Tokyo",
        description: "Modern fusion cuisine combining Japanese and international flavors.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlQIQUjEKM9oW1489oBWc_NG6oMTHdVALKQ&s",
        rating: 4.5,
        type: "modern",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Japanese+Fusion+in+Tokyo"
    },
    {
        id: 5,
        name: "Modern Sushi",
        location: "Osaka",
        description: "Innovative sushi with creative presentations and unique ingredients.",
        image: "https://japanesetaste.in/cdn/shop/articles/types-of-sushi-from-traditional-japanese-nigiri-to-modern-sushi-rolls-japanese-taste_fdba46ad-c11e-4995-9067-10cadbe69743.jpg?v=1759807926&width=5760",
        rating: 4.6,
        type: "modern",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Modern+Sushi+in+Osaka"
    },
    {
        id: 6,
        name: "Kaiseki",
        location: "Kyoto",
        description: "Traditional multi-course Japanese dinner showcasing seasonal ingredients.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Jisaku_Kaiseki_Ryori_01.jpg",
        rating: 4.8,
        type: "traditional",
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaiseki+in+Kyoto"
    }
];

// Function to render cards
function renderCards(containerId, items, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => window.open(item.googleMapsUrl, '_blank');
        
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${item.image}')"></div>
            <div class="card-content">
                <h3>${item.name}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
                <p>${item.description}</p>
                <div class="rating">
                    ${generateStars(item.rating)}
                    <span>${item.rating}/5.0</span>
                </div>
                ${item.price ? `<div class="price">${item.price}</div>` : ''}
                <div class="tags">
                    <span class="tag">${type}</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Function to generate star ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Filter functions
function filterDestinations(type) {
    const filtered = type === 'all' ? destinations : destinations.filter(dest => dest.type === type || type === 'all');
    renderCards('destinations-cards', filtered, 'Destination');
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function filterHotels(category) {
    const filtered = category === 'all' ? hotels : hotels.filter(hotel => hotel.category === category || category === 'all');
    renderCards('hotels-cards', filtered, 'Hotel');
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function filterFood(type) {
    const filtered = type === 'all' ? food : food.filter(item => item.type === type || type === 'all');
    renderCards('food-cards', filtered, 'Food');
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Function to scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCards('destinations-cards', destinations, 'Destination');
    renderCards('hotels-cards', hotels, 'Hotel');
    renderCards('food-cards', food, 'Food');

});

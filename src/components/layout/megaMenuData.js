const CDN =
  'https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/misc/pictures/free-icon/original/';

export const megaMenuData = [
  {
    title: 'New Arrivals',
    url: '/page/explore-oasis-collection',
    sections: [
      {
        heading: 'Atmos Collection',
        url: '/collection/atmos',
        items: [
          { label: 'Discover Atmos', url: '/collection/atmos' },
          { label: 'Explore Full Collection', url: '/collection/atmos' },
          { label: 'Living Room', url: '/collection/atmos-living-room-collection' },
          { label: 'Bedroom', url: '/collection/atmos-bedroom-collection' },
          { label: 'Dining Room', url: '/collection/atmos-dining-room-collection' },
        ],
      },
      {
        heading: 'Dawn Collection',
        url: '/sections/dawn',
        items: [
          { label: 'Discover Dawn', url: '/sections/dawn' },
          { label: 'Explore Full Collection', url: '/collection/dawn-collection' },
          { label: 'Living Room', url: '/collection/dawn-living-room-collection' },
          { label: 'Bedroom', url: '/collection/dawn-bedroom-collection' },
          { label: 'Dining Room', url: '/collection/dawn-dining-room-collection' },
        ],
      },
      {
        heading: 'Astra Collection',
        url: '/sections/astra',
        items: [
          { label: 'Discover Astra', url: '/sections/astra' },
          { label: 'Explore Full Collection', url: '/collection/astra-collection' },
          { label: 'Living Room', url: '/collection/astra-living-room-collection' },
          { label: 'Bedroom', url: '/collection/astra-bedroom-collection' },
          { label: 'Dining Room', url: '/collection/astra-dining-room-collection' },
        ],
      },
      {
        heading: 'Terra Collection',
        url: '/page/new-terra-collection',
        items: [
          { label: 'Discover Terra', url: '/page/new-terra-collection' },
          { label: 'Explore Full Collection', url: '/collection/terra-collection' },
          { label: 'Living Room', url: '/collection/terra-living-room-collection' },
          { label: 'Bedroom', url: '/collection/terra-bedroom-collection' },
          { label: 'Dining Room', url: '/collection/terra-dining-room-collection' },
        ],
      },
      {
        heading: 'Explore All Collections',
        url: '/collection/explore-all-collection',
        items: [
          { label: 'Living Room', url: '/collection/living-room' },
          { label: 'Bedroom', url: '/collection/bedroom-collection' },
          { label: 'Dining Room', url: '/collection/dining-room' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'Jh21roUaH-Image.png', url: '/collection/atmos', alt: 'New Arrivals' },
    ],
  },
  {
    title: 'Deal Zone',
    url: '',
    sections: [
      {
        heading: 'Top Deals',
        url: '/products/?brand=urban-ladder&sortOn=discount_dsc',
        items: [
          { label: 'Deals of the day', url: '/collection/deals-of-the-day' },
          { label: 'Clearance Sale', url: '/collection/clearance-sale' },
          { label: 'Gifting Under 3K', url: '/collection/gifting' },
          { label: 'All Decor On Sale', url: '/collection/all-decor-on-sale' },
          { label: 'Best Buys under 10k', url: '/collection/best-buys-under-10000' },
        ],
      },
      {
        heading: 'Furniture',
        url: '/products/?',
        items: [
          { label: 'Bestsellers', url: '/collection/urban-ladder-bestsellers' },
          { label: 'Living Room', url: '/collection/living-room-furnitures' },
          { label: 'Bedroom', url: '/collection/bedroom-furniture' },
          { label: 'Dining Room', url: '/collection/dining-room-furnitures' },
          { label: 'Study Room', url: '/collection/study-room-furniture' },
          { label: 'Outdoor', url: '/collection/outdoor-furniture' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'o2pXEjcXM-Image.png', url: '/collection/urban-ladder-bestsellers', alt: 'Deal Zone' },
      { src: CDN + 'wPfbHvhpI-Image.png', url: '/collection/gifting', alt: 'Deal Zone' },
      { src: CDN + 'bS93r-ygs-Image.png', url: '/collection/all-decor-on-sale', alt: 'Deal Zone' },
    ],
  },
  {
    title: 'Sofas & Recliners',
    url: '/products/?l1_category=sofas-recliners',
    sections: [
      {
        heading: 'Sofa Sets',
        url: '/collection/sofa-sets',
        items: [
          { label: 'Sofas', url: '/collection/sofas' },
          { label: 'Fabric Sofas', url: '/collection/fabric-sofas' },
          { label: 'Customizable Sofas', url: '/page/customizable-sofa' },
          { label: 'Wooden Sofas', url: '/collection/wooden-sofas' },
          { label: 'Leatherette Sofas', url: '/collection/leatherette-sofas' },
          { label: 'Leather Sofas', url: '/collection/leather-sofas' },
          { label: 'L Shaped Sofas', url: '/collection/l-shape-sofas' },
          { label: '3 Seater Sofas', url: '/collection/3-seater-sofas' },
          { label: '2 Seater Sofas', url: '/collection/2-seater-sofas' },
          { label: '1 Seater Sofas', url: '/collection/1-seater-sofas' },
        ],
      },
      {
        heading: 'Recliner Sofas',
        url: '/collection/recliners',
        items: [
          { label: '1 Seater Recliners', url: '/collection/1-seater-recliners' },
          { label: '2 Seater Recliners', url: '/collection/2-seater-recliners' },
          { label: '3 Seater Recliners', url: '/collection/3-seater-recliners' },
          { label: 'Motorized Recliners', url: '/collection/motorized-recliners' },
        ],
      },
      {
        heading: 'Sofa Beds',
        url: '/collection/sofa-bed',
        items: [
          { label: 'Sofa Cum Beds', url: '/collection/sofa-cum-beds' },
          { label: 'Diwans', url: '/collection/diwans' },
        ],
      },
      {
        heading: 'New Collection',
        url: '',
        items: [
          { label: 'Oasis Collection', url: '/collection/oasis-sofa-collection' },
          { label: 'Terra Collection', url: '/collection/terra-sofa-collection' },
          { label: 'Astra Collection', url: '/collection/astra-sofa-collection' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'priEKZosd-Image.png', url: '/collection/recliners', alt: 'Sofas & Recliners' },
      { src: CDN + 'Vfb07Vydo-Image.png', url: '/collection/sofa', alt: 'Sofas & Recliners' },
    ],
  },
  {
    title: 'Living',
    url: '/products/?l1_category=living',
    sections: [
      {
        heading: 'Seating & Chairs',
        url: '/collection/seating-and-chairs',
        items: [
          { label: 'Chairs', url: '/collection/chairs' },
          { label: 'Lounge Chairs', url: '/collection/lounge-chairs' },
          { label: 'Accent Chairs', url: '/collection/accent-chairs' },
          { label: 'Arm Chairs', url: '/collection/arm-chairs' },
          { label: 'Wooden Chairs', url: '/collection/wooden-chairs' },
          { label: 'Rocking Chairs', url: '/collection/rocking-chairs' },
          { label: 'Gaming Chairs', url: '/collection/gaming-chairs' },
          { label: 'Benches', url: '/collection/benches' },
          { label: 'Ottomans', url: '/collection/ottomans' },
          { label: 'Loveseats', url: '/collection/loveseats' },
        ],
      },
      {
        heading: 'Tables',
        url: '/collection/tables',
        items: [
          { label: 'Coffee Tables', url: '/collection/coffee-table' },
          { label: 'Side Tables', url: '/collection/side-tables' },
          { label: 'Console table', url: '/collection/console-tables' },
          { label: 'Breakfast Tables', url: '/collection/breakfast-tables' },
          { label: 'C Tables', url: '/collection/c-tables' },
          { label: 'Drink Tables', url: '/collection/drink-tables' },
        ],
      },
      {
        heading: 'Living Storage',
        url: '/collection/living-storage',
        items: [
          { label: 'Shoe Racks', url: '/collection/shoe-racks' },
          { label: 'TV Units', url: '/collection/tv-units' },
          { label: 'Bookshelves', url: '/collection/bookshelves' },
          { label: 'Chest of Drawers', url: '/collection/chest-of-drawers' },
          { label: 'Cabinet & Sideboards', url: '/collection/cabinets-and-sideboards' },
          { label: 'Showcases', url: '/collection/showcases' },
          { label: 'Wall Shelves', url: '/collection/wall-shelves' },
          { label: 'Prayer Units', url: '/collection/prayer-units' },
          { label: 'Room Divider', url: '/collection/room-dividers' },
        ],
      },
      {
        heading: 'Balcony And Outdoor',
        url: '/collection/balcony-and-outdoor',
        items: [
          { label: 'Balcony Sets', url: '/collection/balcony-sets' },
          { label: 'Balcony Chairs', url: '/collection/balcony-chairs' },
          { label: 'Outdoor Tables', url: '/collection/outdoor-tables' },
          { label: 'Swings', url: '/collection/swings' },
        ],
      },
      {
        heading: 'New Arrivals',
        url: '',
        items: [
          { label: 'Oasis Collection', url: '/collection/oasis-living-room-collection' },
          { label: 'Terra Collection', url: '/collection/terra-living-room-collection' },
          { label: 'Astra Collection', url: '/collection/astra-living-room-collection' },
          { label: 'Dawn Collection', url: '/collection/dawn-living-room-collection' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'RQYYO7vVo-Image.png', url: '/collection/shoe-racks', alt: 'Living' },
      { src: CDN + 'FSqq4xY8T-Image.png', url: '/collection/accent-chairs', alt: 'Living' },
      { src: CDN + 'EluH2G97Y-Image.png', url: '/collection/coffee-table', alt: 'Living' },
    ],
  },
  {
    title: 'Bedroom',
    url: '/products/?l1_category=bedroom-mattresses',
    sections: [
      {
        heading: 'Beds',
        url: '/collection/beds',
        items: [
          { label: 'King Size Beds', url: '/collection/king-size-beds' },
          { label: 'Queen Size Beds', url: '/collection/queen-size-beds' },
          { label: 'Single Beds', url: '/collection/single-beds' },
          { label: 'Beds With Storage', url: '/collection/beds-with-storage' },
          { label: 'Beds Without Storage', url: '/collection/beds-without-storage' },
          { label: 'Hydraulic Beds', url: '/collection/hydraulic-beds-with-storage' },
          { label: 'Upholstered Beds', url: '/collection/upholstered-beds' },
          { label: 'Metal Beds', url: '/collection/metal-beds' },
        ],
      },
      {
        heading: 'Mattresses',
        url: '/collection/mattresses',
        items: [
          { label: 'King Size Mattress', url: '/collection/king-size-mattress' },
          { label: 'Queen Size Mattress', url: '/collection/queen-size-mattress' },
          { label: 'Single Bed Mattress', url: '/collection/single-bed-mattress' },
          { label: 'Memory Foam Mattress', url: '/collection/memory-foam-mattress' },
          { label: 'Latex Mattress', url: '/collection/latex-mattress' },
          { label: 'Orthopaedic Mattress', url: '/collection/orthopedic-mattresss' },
          { label: 'Spring Mattress', url: '/collection/spring-mattresss' },
          { label: 'Coir Mattress', url: '/collection/coir-mattress' },
          { label: 'Mattress Protectors', url: '/collection/mattress-protectors' },
        ],
      },
      {
        heading: 'Wardrobes',
        url: '/collection/wardrobes',
        items: [
          { label: '1 Door Wardrobes', url: '/collection/1-door-wardrobes' },
          { label: '2 Door Wardrobes', url: '/collection/2-door-wardrobes' },
          { label: '3 Door Wardrobes', url: '/collection/3-door-wardrobes' },
          { label: '4 Door Wardrobes', url: '/collection/4-door-wardrobes' },
          { label: 'Sliding Wardrobes', url: '/collection/sliding-wardrobes' },
        ],
      },
      {
        heading: 'Bedroom Storage',
        url: '/collection/bedroom-storage',
        items: [
          { label: 'Dressing Tables', url: '/collection/dressing-tables' },
          { label: 'Bedside Tables', url: '/collection/bedside-tables' },
          { label: 'Chest Of Drawers', url: '/collection/chest-of-drawers' },
          { label: 'Benches', url: '/collection/benches' },
          { label: 'Storage Chests', url: '/collection/storage-chests' },
        ],
      },
      {
        heading: 'Kids Room',
        url: '/collection/kids-room',
        items: [
          { label: 'Kids Beds', url: '/collection/kids-beds' },
          { label: 'Bunk Beds', url: '/collection/bunk-beds' },
          { label: 'Kids Tables', url: '/collection/kids-tables' },
          { label: 'Kids Chairs', url: '/collection/kids-chair' },
        ],
      },
      {
        heading: 'Pet Furniture',
        url: '/collection/petbeds',
        items: [
          { label: 'Pet Beds', url: '/collection/petbeds' },
        ],
      },
      {
        heading: 'New Arrival',
        url: '',
        items: [
          { label: 'Oasis Collection', url: '/collection/oasis-bedroom-collection' },
          { label: 'Terra Collection', url: '/collection/terra-bedroom-collection' },
          { label: 'Astra Collection', url: '/collection/astra-bedroom-collection' },
          { label: 'Dawn Collection', url: '/collection/dawn-bedroom-collection' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'jCC4lhuIV-Image.png', url: '/collection/beds', alt: 'Bedroom' },
    ],
  },
  {
    title: 'Dining & Kitchen',
    url: '/products/?l1_category=dining-room',
    sections: [
      {
        heading: 'Dining Table Sets',
        url: '/collection/dining-table-sets',
        items: [
          { label: '2 Seater Dining Sets', url: '/collection/2-seater-dining-sets' },
          { label: '4 Seater Dining Sets', url: '/collection/4-seater-dining-sets' },
          { label: '6 Seater Dining Sets', url: '/collection/6-seater-dining-sets' },
          { label: '8 Seater Dining Sets', url: '/collection/8-seater-dining-sets' },
          { label: 'Extendable Dining Sets', url: '/collection/extendable-dining-sets' },
          { label: 'Dining Tables', url: '/collection/dining-tables' },
          { label: 'Dining Chairs', url: '/collection/dining-chairs' },
          { label: 'Dining Benches', url: '/collection/dining-benches' },
        ],
      },
      {
        heading: 'Kitchen Furniture',
        url: '/collection/kitchen-furniture',
        items: [
          { label: 'Crockery Units & Sideboards', url: '/collection/crockery-units' },
          { label: 'Kitchen Cabinets', url: '/collection/kitchen-cabinets' },
        ],
      },
      {
        heading: 'Bar Furniture',
        url: '/collection/bar-furniture',
        items: [
          { label: 'Bar Stools', url: '/collection/bar-stools' },
          { label: 'Bar Cabinets', url: '/collection/bar-cabinets' },
        ],
      },
      {
        heading: 'New Arrival',
        url: '',
        items: [
          { label: 'Oasis Collection', url: '/collection/oasis-dining-room-collection' },
          { label: 'Terra Collection', url: '/collection/terra-dining-room-collection' },
          { label: 'Astra Collection', url: '/collection/astra-dining-room-collection' },
          { label: 'Dawn Collection', url: '/collection/dawn-dining-room-collection' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'W8QSvd0oj-Image.png', url: '/collection/crockery-units', alt: 'Dining & Kitchen' },
      { src: CDN + 'qypAtAWdQ-Image.png', url: '/collection/dining-table-sets', alt: 'Dining & Kitchen' },
    ],
  },
  {
    title: 'Mattresses',
    url: '/products/?l2_category=mattresses',
    sections: [
      {
        heading: 'Mattresses',
        url: '/collection/mattresses',
        items: [
          { label: 'King Size Mattress', url: '/collection/king-size-mattress' },
          { label: 'Queen Size Mattress', url: '/collection/queen-size-mattress' },
          { label: 'Single Bed Mattress', url: '/collection/single-bed-mattress' },
          { label: 'Double Bed Mattress', url: '/collection/double-beds-mattress' },
          { label: 'Orthopedic Mattress', url: '/collection/orthopedic-mattress' },
          { label: 'Mattress Protector', url: '/collection/mattress-protectors' },
          { label: 'Pillows', url: '/collection/pillows' },
        ],
      },
      {
        heading: 'By Material',
        url: '/collection/mattress-by-material',
        items: [
          { label: 'Memory Foam Mattress', url: '/collection/memory-foam-mattress' },
          { label: 'Foam Mattress', url: '/collection/foam-mattress' },
          { label: 'Spring Mattress', url: '/collection/spring-mattress' },
          { label: 'Latex Mattress', url: '/collection/latex-mattress' },
          { label: 'Coir Mattress', url: '/collection/coir-mattress' },
          { label: 'Bonnel Spring Mattress', url: '/collection/bonnell-spring-mattress' },
          { label: 'Pocket Spring Mattress', url: '/collection/pocket-spring-mattress' },
          { label: 'Coir & Foam Mattress', url: '/collection/cozy-coir-mattress' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'VDVZUM2BQ-Image.png', url: '/collection/mattresses', alt: 'Mattresses' },
    ],
  },
  {
    title: 'Study',
    url: '/products/?l1_category=study',
    sections: [
      {
        heading: 'Study Tables',
        url: '/collection/study-tables',
        items: [
          { label: 'Computer Tables', url: '/collection/computer-tables' },
          { label: 'Laptop Tables', url: '/collection/laptop-tables' },
          { label: 'Desktop table', url: '/collection/desktop-tables' },
        ],
      },
      {
        heading: 'Study Chairs',
        url: '/collection/study-chairs',
        items: [
          { label: 'Ergonomic Chairs', url: '/collection/ergonomic-chairs' },
          { label: 'Computer Chairs', url: '/collection/computer-chairs' },
          { label: 'Revolving Chairs', url: '/collection/revolving-chairs' },
          { label: 'Gaming Chairs', url: '/collection/gaming-chairs' },
          { label: 'Rolling Chairs', url: '/collection/rolling-chairs' },
        ],
      },
      {
        heading: 'Office Furnitures',
        url: '/collection/office-furnitures',
        items: [
          { label: 'Office Chairs', url: '/collection/office-chairs' },
          { label: 'Office Tables', url: '/collection/office-tables' },
        ],
      },
    ],
    promos: [
      { src: CDN + '7JAadUL3t-Image.png', url: '/collection/study-tables', alt: 'Study' },
    ],
  },
  {
    title: 'Storage Furniture',
    url: '/products/?l1_category=storage-furniture',
    sections: [
      {
        heading: 'Living Storage',
        url: '/collection/living-storage',
        items: [
          { label: 'Shoe Racks', url: '/collection/shoe-rack' },
          { label: 'TV Units', url: '/collection/tv-units' },
          { label: 'Bookshelves', url: '/collection/bookshelves' },
          { label: 'Showcases', url: '/collection/showcases' },
          { label: 'Wall Shelves', url: '/collection/wall-shelves' },
          { label: 'Prayer Units', url: '/collection/prayer-units' },
          { label: 'Room Dividers', url: '/collection/room-dividers' },
        ],
      },
      {
        heading: 'Bedroom Storage',
        url: '/collection/storage-and-accessories',
        items: [
          { label: 'Cupboards', url: '/collection/wardrobes' },
          { label: 'Dressing Tables', url: '/collection/dressing-tables' },
          { label: 'Bedside Tables', url: '/collection/bedside-tables' },
          { label: 'Chest Of Drawers', url: '/collection/chest-of-drawers' },
          { label: 'Benches', url: '/collection/benches' },
          { label: 'Storage Chests', url: '/collection/storage-chests' },
        ],
      },
      {
        heading: 'Kitchen Storage',
        url: '',
        items: [
          { label: 'Crockery Units & Sideboards', url: '/collection/crockery-unit' },
          { label: 'Bar Cabinets', url: '/collection/bar-cabinets' },
          { label: 'Kitchen Cabinets', url: '/collection/kitchen-cabinets' },
        ],
      },
      {
        heading: 'Kids Storage',
        url: '/collection/kids-storage',
        items: [
          { label: 'Kids Wardrobes', url: '/collection/kids-wardrobes' },
          { label: 'Kids Bedside Tables', url: '/collection/kids-bedside-tables' },
          { label: 'Kids Storage Cabinets', url: '/collection/kids-storage-cabinets' },
          { label: 'Kids Bookshelves', url: '/collection/kids-bookshelves' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'cZ6WUEF89-Image.png', url: '/collection/chest-of-drawers', alt: 'Storage Furniture' },
    ],
  },
  {
    title: 'Lighting & Decor',
    url: '/products/?l1_category=lighting--decor',
    sections: [
      {
        heading: 'Lamps',
        url: '/collection/lamps',
        items: [
          { label: 'Study Lamps', url: '/collection/study-lamps' },
          { label: 'Table Lamps', url: '/collection/table-lamps' },
          { label: 'Floor Lamps', url: '/collection/floor-lamps' },
          { label: 'Lamp Shades', url: '/collection/lamp-shades' },
        ],
      },
      {
        heading: 'Lightings',
        url: '/collection/lighting',
        items: [
          { label: 'Wall Lights', url: '/collection/wall-lights' },
          { label: 'Chandeliers', url: '/collection/chandeliers' },
          { label: 'Ceiling Lights', url: '/collection/ceiling-lights' },
          { label: 'Hanging Lights', url: '/collection/hanging-lights' },
        ],
      },
      {
        heading: 'Home Decor',
        url: '/collection/home-decor',
        items: [
          { label: 'Showpieces', url: '/collection/showpieces' },
          { label: 'Vases', url: '/collection/vases' },
          { label: 'Artificial Plants', url: '/collection/artificial-plants' },
          { label: 'Artificial Flowers', url: '/collection/artificial-flowers' },
          { label: 'Planters', url: '/collection/planters' },
        ],
      },
      {
        heading: 'Wall Decor',
        url: '/collection/wall-decor',
        items: [
          { label: 'Wall Shelves', url: '/collection/wall-shelves' },
          { label: 'Wall Arts', url: '/collection/wall-art' },
          { label: 'Mirrors', url: '/collection/mirrors' },
          { label: 'Wall Clocks', url: '/collection/wall-clocks' },
          { label: 'Photo Frames', url: '/collection/photo-frames' },
        ],
      },
      {
        heading: 'Bathroom Essentials',
        url: '/collection/bathroom-accessories',
        items: [
          { label: 'Bath Mats', url: '/collection/bath-mats' },
        ],
      },
      {
        heading: 'Tablewares',
        url: '/collection/tableware',
        items: [
          { label: 'Table Furnishings', url: '/collection/table-furnishing' },
          { label: 'Serveware', url: '/collection/serveware' },
        ],
      },
    ],
    promos: [
      { src: CDN + 'MYlA_KZTs-Image.png', url: '/collection/lighting', alt: 'Lighting & Decor' },
    ],
  },
  {
    title: 'Furnishing',
    url: '/products/?category=bedsheets&category=door-curtains&category=window-curtains',
    sections: [
      {
        heading: 'Home Linen',
        url: '/collection/home-linen',
        items: [
          { label: 'Bedsheets', url: '/collection/bedsheets' },
          { label: 'Sofa Covers', url: '/collection/sofa-covers' },
          { label: 'Curtains', url: '/collection/curtains' },
          { label: 'Comforters', url: '/collection/comforters' },
          { label: 'Cushion Covers', url: '/collection/cushion-covers' },
          { label: 'Pillows', url: '/collection/pillows' },
        ],
      },
      {
        heading: 'Carpets & Rugs',
        url: '/collection/carpets-and-rugs',
        items: [
          { label: 'Carpets', url: '/collection/carpets' },
          { label: 'Dhurries', url: '/collection/dhurries' },
          { label: 'Runners', url: '/collection/runners' },
        ],
      },
    ],
    promos: [
      { src: CDN + '_YCrQGGVs-Image.png', url: '/collection/bedsheets', alt: 'Furnishing' },
      { src: CDN + 'LmCtUQ3rE-Image.png', url: '/collection/carpets', alt: 'Furnishing' },
      { src: CDN + 'Y4VotXjmY-Image.png', url: '/collection/cushion-covers', alt: 'Furnishing' },
    ],
  },
];

